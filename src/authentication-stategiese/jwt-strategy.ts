// import {AuthenticationStrategy} from '@loopback/authentication';
// import {inject} from '@loopback/context';
// import {Request, RedirectRoute, HttpErrors} from '@loopback/rest';
// import {UserProfile} from '@loopback/security';
// import {ParamsDictionary} from 'express-serve-static-core';
// import {ParsedQs} from 'qs';
// import {TokenServiceBindings} from '../keys';
// import {JWTService} from '../services/jwt-service';

// class JWTStrategy implements AuthenticationStrategy{
//   constructor(
//     @inject(TokenServiceBindings.TOKEN_SERVICE)
//     public jwtService : JWTService
//   ){}
//   name: string = 'jwt'
//  async authenticate(request: Request): Promise<UserProfile | RedirectRoute | undefined> {
//     const token : string = this.extractCredentials(request);
//     const userProfile = await this.jwtService.verifyToken(token);
//     return Promise.resolve(userProfile);
//   }
//   extractCredentials(request: Request): string{
//     if(!request.headers.authorization){
//       throw new HttpErrors.Unauthorized("Authorization header is missing")
//     }
//     const authHeaderValue = request.headers.authorization;
//     // authorization : Bearer xxx.yyyy.zzzz
//   }

// }
