import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  // route에 따라 request를 처리하기 위해서는 Relector 라는 helper class를 사용한다.
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getClass());

    if (!roles) {
      return true;
    }

    /* 
    In the node.js world, it's common practice to attach the authorized user to the request object. 
    Thus, in our sample code above, we are assuming that request.user contains the user instance and allowed roles. 
    In your app, you will probably make that association in your custom authentication guard (or middleware).
    */
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () => user.roles.some(role => roles.includes(role));

    return user && user.roles && hasRole();
  }
}
