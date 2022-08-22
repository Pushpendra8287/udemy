import {inject} from '@loopback/core';
import {genSalt, hash, compare} from 'bcryptjs'
import {PasswordHasherBindings} from '../keys';

export interface PasswordHasher<T = string> {
  hashPassword(password : T) : Promise<T>;
  comparePassword(providedPass: T, storedPass: T):Promise<boolean>
}


export class BcryptHasher implements PasswordHasher<string>{
  async comparePassword(providedPass: string, storedPass: string): Promise<boolean> {
    const passwordMathed = await compare(providedPass,storedPass);
    return passwordMathed
  }
  @inject(PasswordHasherBindings.ROUNDS)
  public readonly round: number
  // round: number = 10;

 async hashPassword(password: string) {
  const salt = await genSalt(this.round);
  return await hash(password, salt)
  }
}
