// Uncomment these imports to begin using these cool features!

import {repository} from '@loopback/repository';
import {getJsonSchema, getJsonSchemaRef, post, requestBody} from '@loopback/rest';
import {User} from '../models';
import {UserRepository} from '../repositories';

// import {inject} from '@loopback/core';


export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository
  ) {}
  @post('/signup',{
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
    const savedUser = await this.userRepository.create(userData)
    delete savedUser.password
    return savedUser;
  }
}
