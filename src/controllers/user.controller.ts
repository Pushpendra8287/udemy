// Uncomment these imports to begin using these cool features!

import {repository} from '@loopback/repository';
import {getJsonSchema, getJsonSchemaRef, post, requestBody} from '@loopback/rest';
import {User} from '../models';
import {Credentials, UserRepository} from '../repositories';
import {validateCredentials} from '../services/validator';
import * as _ from 'lodash'
import {BcryptHasher} from '../services/hash.password.bcrypt';
import {inject} from '@loopback/core';
import {CredentialsRequestBody} from './specs/user.controller.spec';
// import {}

// import {inject} from '@loopback/core';


export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @inject('service.hasher')
    public hasher: BcryptHasher

  ) {
    // not a good practice
    // bcryptHasher = new BcryptHasher()
  }
  @post('/users/signup',{
    responses: {
      '200':{
        description: 'User create successfully',
        content: {
          schema: getJsonSchemaRef(User)
        }
      }
    }
  })
  async signup(@requestBody() userData: User){
    validateCredentials(_.pick(userData,['email','password']));
    userData.password = await this.hasher.hashPassword(userData.password)
    const savedUser = await this.userRepository.create(userData)
    // delete savedUser.password;//I want Delete password when gave response then this type error in below line code i try but bot working
    // if we will do optional password in user model then this error resoleved but line no 39 gave error

    return savedUser;
  }

@post('/users/login',{
  responses: {
    '200':{
      description: 'Token',
      content: {
        'application/json':{
          schema: {
            type : 'object',
            properties: {
              token :{
                type : 'string'
              }
            }
          }
        }
      }
    }
  }
})
  async login(
    @requestBody() credentials: Credentials): Promise<{token: string}>{
    return Promise.resolve({token:"dtgftrhgw3rhfh4df5tgfcxvfg"});

  }
}
