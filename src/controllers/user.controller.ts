
// Uncomment these imports to begin using these cool features!
import {authenticate} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {
  get, getJsonSchemaRef,
  post,
  requestBody
} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import * as _ from 'lodash';
import {
  PasswordHasherBindings,
  TokenServiceBindings,
  UserServiceBindings
} from '../keys';
import {User} from '../models';
import {Credentials, UserRepository} from '../repositories';
import {BcryptHasher} from '../services/hash.password.bcrypt';
import {JWTService} from '../services/jwt-service';
import {MyUserService} from '../services/user-service';
import {validateCredentials} from '../services/validator';
import {CredentialsRequestBody} from './specs/user.controller.spec';
export class UserController {
  savedUser: any;
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public hasher: BcryptHasher,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: MyUserService,
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: JWTService

  ) {
    // not a good practice
    // this.credentialsRequestBody = CredentialsRequestBody
    // bcryptHasher = new BcryptHasher()

  }

  @post('/users/signup', {
    responses: {
      '200': {
        description: 'User create successfully',
        content: {
          schema: getJsonSchemaRef(User)
        }
      }
    }

  })

  async signup(@requestBody() userData: User) {
    validateCredentials(_.pick(userData, ['email', 'password']));
    userData.password = await this.hasher.hashPassword(userData.password)
    this.savedUser = await this.userRepository.create(userData);
    // this.savedUser = this.savedUser
    delete this.savedUser.password;
    ////I want Delete password when gave response then this type error in below line code i try but bot working
    // if we will do optional password in user model then this error resoleved but line no 39 gave error
    return this.savedUser;
  }
  @post('/users/login', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
              },
            },
          },
        },
      }
    },
  })
  async login(@requestBody() credentials: Credentials,
  ): Promise<{token: string}> {
    // make sure user exist, password should be valid
    const user = await this.userService.verifyCredentials(credentials);
    // console.log(user)
    const userProfile = await this.userService.convertToUserProfile(user);
    // console.log(userProfile)
    // generate a json web token
    const token = await this.jwtService.generateToken(userProfile)
    return Promise.resolve({token});
  }
  @get('/users/me')
  @authenticate('jwt')
  async me(): Promise<UserProfile> {
    return Promise.resolve({id: 1, name: "pushpendra"})
  }
}

