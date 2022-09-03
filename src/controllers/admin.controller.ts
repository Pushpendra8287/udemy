// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {getJsonSchemaRef, post, requestBody} from '@loopback/rest';
import _ from 'lodash';
import {PermissionKeys} from '../authorization/permission-key';
import {PasswordHasherBindings} from '../keys';
import {User} from '../models/user.model';
import {UserRepository} from '../repositories/user.repository';
import {BcryptHasher} from '../services/hash.password.bcrypt';
import {validateCredentials} from '../services/validator';

// import {inject} from '@loopback/core';


export class AdminController {
savedAdmin:any
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public hasher: BcryptHasher,
  ) {}
  @post('/admin', {
    responses: {
      '200': {
        description: 'Admin',
        content: {
          schema: getJsonSchemaRef(User)
        }
      }
    }
  })
  async create(@requestBody() admin: User) {
    validateCredentials(_.pick(admin, ['email', 'password']));
    admin.permissions = [
      PermissionKeys.CreateJob,
      PermissionKeys.UpdateJob,
      PermissionKeys.DeleteJob,
    ];
    admin.password = await this.hasher.hashPassword(admin.password);
    // const admin = await this.userRepository.create(userData);
    this.savedAdmin = await this.userRepository.create(admin);
    delete this.savedAdmin.password;
    return this.savedAdmin;
  }
}
