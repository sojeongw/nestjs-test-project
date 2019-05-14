import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Request...');

    // it must call nest() to pass control to the next middleware function.
    // otherwise, the request will be left hanging.
    next();
  }
}
