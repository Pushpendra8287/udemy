import {UserService, } from '@loopback/authentication'
import {Credentials, UserRepository} from '../repositories'
import {User} from '../models'
import {UserProfile} from '@loopback/security'
import {repository} from '@loopback/repository'
import {HttpErrors} from '@loopback/rest'
import {inject} from '@loopback/core'
import {BcryptHasher} from './hash.password.bcrypt'
import {PasswordHasherBindings} from '../keys'



export class MyUserService implements UserService<User, Credentials>{
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public hasher: BcryptHasher
  ) { }

  async verifyCredentials(credentials: Credentials): Promise<User> {
    //  logic user
    const foundUser = await this.userRepository.findOne({
      where: {
        email: credentials.email
      }
    });
    if (!foundUser) {
      throw new HttpErrors.NotFound(
        `user not found with this email ${credentials.email}`)
    }

    const passwordMathed = await this.hasher.comparePassword(
      credentials.password,
      foundUser.password
    );
    if (!passwordMathed) {
      throw new HttpErrors.Unauthorized('password is not valid');
    }
    return foundUser;
  }

  convertToUserProfile(user: User): UserProfile {
    let userName = '';
    if (user.firstName) {
      userName = user.firstName;
    }
    if (user.lastName) {
      userName = user.firstName ? `${user.firstName} ${user.lastName}` : user.lastName;
    }
    return {id: `${user.id}`, name: userName};

  }

}
