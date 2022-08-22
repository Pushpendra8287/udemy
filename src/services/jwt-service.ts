import {inject} from '@loopback/context';
import {HttpErrors} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import {promisify} from 'util';
import {TokenServiceBindings} from '../keys';



const jwt = require('jsonwebtoken');
const signAsync = promisify(jwt.sign)




export class JWTService {
  @inject(TokenServiceBindings.TOKEN_SECRET)
  public readonly jwtSecret: string
  @inject(TokenServiceBindings.TOKEN_EXPIRES_IN)
  public readonly expiresIn: string
  async generateToken(UserProfile: UserProfile): Promise<string> {
    if (!UserProfile) {
      throw new HttpErrors.Unauthorized('Error while generating token : userprofile null',
      );
    }
    let token = '';
    try {
      token = await signAsync(UserProfile, this.jwtSecret, {
        expiresIn: this.expiresIn
      })
    }
    catch (err) {
      throw new HttpErrors.Unauthorized(`error generating token ${err}`)
    }
    return token
  }
  async verifyToken(token: string): Promise<UserProfile> {
    return Promise.resolve({name: "pushpendra", id: 1})
  }
}
