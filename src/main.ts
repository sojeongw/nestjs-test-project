import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { RolesGuard } from './roles.guard';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // set up as a global-scoped pipe
  app.useGlobalPipes(new ValidationPipe());

  // set up as a global-scoped guard
  app.useGlobalGuards(new RolesGuard());

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
