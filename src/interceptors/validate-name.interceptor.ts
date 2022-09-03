import {
  /* inject, */
  injectable,
  Interceptor,
  InvocationContext,
  InvocationResult,
  Provider,
  ValueOrPromise,
} from '@loopback/core';
import { RestExplorerComponent } from '@loopback/rest-explorer';
import { EcomController } from '../controllers';
import { Ecom } from '../models';

/**
 * This class will be bound to the application as an `Interceptor` during
 * `boot`
 */
@injectable({tags: {key: ValidateNameInterceptor.BINDING_KEY}})
export class ValidateNameInterceptor implements Provider<Interceptor> {
  static readonly BINDING_KEY = `interceptors.${ValidateNameInterceptor.name}`;

  /*
  constructor() {}
  */

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
      // let ecom : Ecom | undefined;;
      // if(invocationCtx.methodName ==="create")
      // ecom = invocationCtx.args[0]
      // else if (invocationCtx.methodName === "updateById")
      //   ecom  = invocationCtx.args[1]
      // if(ecom && !this.isNameAndMobile(ecom.mobile,ecom.name)){
      //   const err : ValidationError = new ValidationError('not match',);
      //   err.statusCode = 422;
      //   throw err;
      // }

      const result = await next();
      // Add post-invocation logic here
      return result;
    } catch (err) {
      // Add error handling logic here
      throw err;
    }
  }
}

// isNameAndMobile(mobile:number,name:string):Boolean{
//   if((EcomController.name.toLowerCase()=== Ecom.name ))
//   return false ;
//   return true;
// }

