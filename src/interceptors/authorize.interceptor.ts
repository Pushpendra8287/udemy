import {AuthenticationBindings, AuthenticationMetadata} from '@loopback/authentication';
import {
  Getter,
  /* inject, */
  globalInterceptor,
  inject,
  Interceptor,
  InvocationContext,
  InvocationResult,
  Provider,
  ValueOrPromise,
} from '@loopback/core';
import {MyUserProfile, RequirdPermissions} from '../types';
import {intersection} from 'lodash'
import {HttpErrors} from '@loopback/rest';

/**
 * This class will be bound to the application as an `Interceptor` during
 * `boot`
 */
@globalInterceptor('', {tags: {name: 'authorize'}})
export class AuthorizeInterceptor implements Provider<Interceptor> {
  constructor(
    @inject(AuthenticationBindings.METADATA)
    public metadata: AuthenticationMetadata,
    @inject.getter(AuthenticationBindings.CURRENT_USER)
    public getCurentUser: Getter<MyUserProfile>
  ) {}


  /**
   * This method is used by LoopBack context to produce an interceptor function
   * for the binding.
   *
   * @returns An interceptor function
   */
  value() {
    return this.intercept.bind(this);
  }

  /**
   * The logic to intercept an invocation
   * @param invocationCtx - Invocation context
   * @param next - A function to invoke next interceptor or the target method
   */
  async intercept(
    invocationCtx: InvocationContext,
    next: () => ValueOrPromise<InvocationResult>,
  ) {
    try {
      // Add pre-invocation logic here
      console.log('Log from authorize globalinterceptor')
      console.log(this.metadata)
      //if you will not provide option in your @authenticate decorator
      //this line executed
      if(!this.metadata) return await next();
      // if user provide metadata
      const result = await next();
      const requirdPermissions = this.metadata.options as RequirdPermissions;
      console.log(requirdPermissions)
      const user = await this.getCurentUser()
      console.log('User permoissions:', user.permissions)
      const results = intersection(user.permissions,requirdPermissions.voters).length
      if(results != requirdPermissions.voters.length){
        throw new HttpErrors.Forbidden('INVALID ACCESS PERMISSIONS')
      }
      // check the user perissions
      // Add post-invocation logic here
      return result;
    } catch (err) {
      // Add error handling logic here
      throw err;
    }
  }
}
