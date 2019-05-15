import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  // Every guard must implement a canActivate() function.
  canActivate(
    context: ExecutionContext,
    // return a boolean, indicating whether the current request is allowed or not.
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // return validateRequest(request);
    return true;
  }
}
