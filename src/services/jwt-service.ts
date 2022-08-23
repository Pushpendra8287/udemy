import {inject} from '@loopback/context';
import {HttpErrors} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import {promisify} from 'util';
import {TokenServiceBindings} from '../keys';



const jwt = require('jsonwebtoken');
const signAsync = promisify(jwt.sign);
const verifyAsync = promisify(jwt.verify)




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
    // return Promise.resolve({name: "pushpendra", id: 1})
    if(!token){
      throw new HttpErrors.Unauthorized(
        `Error verying token : 'token' is null`,
      );
    }
    let userProfile : UserProfile;
    try{
      // decode user profile from token
      const decryptedToken = await verifyAsync(token, this.jwtSecret);
      // donnt copy over token field 'iat' and 'exp' nor 'email' o user profile
      userProfile = Object.assign(
        {id: "", name: ""},
        {id: decryptedToken.id, name: decryptedToken.name},
      );

    }
    catch(error){
      throw new HttpErrors.Unauthorized(
        `Error veryfing token : ${error.message}`,
      );

    }
    return userProfile;
  }


}
