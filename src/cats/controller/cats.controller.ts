import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from '../dto';
import { CatsService } from '../service/cats.service';
import { Cat } from '../interfaces/cat.interface';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('cats')
export class CatsController {
  // 생성자로 catsService를 주입시킨다.
  // The private readonly syntax는 catsService에 있는 멤버 변수를
  // 즉시 같은 위치에서 선언하고 초기화 하도록 해준다.
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
