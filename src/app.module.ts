import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/controller/cats.controller';
import { CatsService } from './cats/service/cats.service';

@Module({
  imports: [],
  // 만들어놓고 실제로 사용하려면 여기에 추가해야 한다.
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
