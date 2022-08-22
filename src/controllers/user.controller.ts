// Uncomment these imports to begin using these cool features!
import {UserProfile} from '@loopback/security';
import {repository} from '@loopback/repository';
import {get,
  getJsonSchema,
  getJsonSchemaRef,
  post,
  requestBody
} from '@loopback/rest';
import {User} from '../models';
import {Credentials, UserRepository} from '../repositories';
import {validateCredentials} from '../services/validator';
import * as _ from 'lodash'
import {BcryptHasher} from '../services/hash.password.bcrypt';
import {inject} from '@loopback/core';
import {CredentialsRequestBody} from './specs/user.controller.spec';
import {MyUserService} from '../services/user-service';
import {JWTService} from '../services/jwt-service';
import {PasswordHasherBindings,
  TokenServiceBindings,
  UserServiceBindings
} from '../keys';
import {authenticate} from '@loopback/authentication';





export class UserController {
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
    const savedUser = await this.userRepository.create(userData)
    ;
    // delete savedUser.password;
    savedUser.password = "";   ////I want Delete password when gave response then this type error in below line code i try but bot working
    // if we will do optional password in user model then this error resoleved but line no 39 gave error
    return savedUser;
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
  async login(
    @requestBody() credentials: Credentials,
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
  async me(): Promise<UserProfile>{
    return Promise.resolve({id: 1, name: "pushpendra"})

  }
}


