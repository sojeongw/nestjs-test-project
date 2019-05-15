import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
// import { CreateCatDto } from './dto';
import { CatsService } from './cats.service';
import { LoggingInterceptor } from 'src/logging.interceptor';

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  // 생성자로 catsService를 주입시킨다.
  // The private readonly syntax는 catsService에 있는 멤버 변수를
  // 즉시 같은 위치에서 선언하고 초기화 하도록 해준다.
  constructor(private readonly catsService: CatsService) {}

  @Get()
  find(): string {
    return 'This action returns all cats';
  }

  @Get()
  async findAll() {
    // base exceptions
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
