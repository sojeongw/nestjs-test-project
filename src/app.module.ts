import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
  ValidationPipe,
} from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [CatsModule],
  // the approach to perform dependency injection for the pipe
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule implements NestModule {
  // LoggerMiddleware for the /cats route handlers
  // that were previously defined inside the CatsController
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // LoggerMiddleware will be bound to all routes defined inside CatsController
      // except the two passed to the exclude() method
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
      )
      // In most cases you'll probably just pass a list of controllers separated by commas
      .forRoutes(CatsController);
    // .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
