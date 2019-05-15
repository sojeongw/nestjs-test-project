import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UsePipes,
  Param,
  ValidationPipe,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { CreateCatDto } from './dto';
import { CatsService } from './cats.service';
import { ParseIntPipe } from 'src/parse-int.pipe';
import { RolesGuard } from 'src/roles.guard';
import { Roles } from '../roles.decorator';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  // 생성자로 catsService를 주입시킨다.
  // The private readonly syntax는 catsService에 있는 멤버 변수를
  // 즉시 같은 위치에서 선언하고 초기화 하도록 해준다.
  constructor(private readonly catsService: CatsService) {}

  /* a param-scoped pipe
  @Post()
  async create(@Body(new ValidationPipe()) CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }
  */

  // a pipe at a method level: use the @UsePipes() decorator.
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create_pipe(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  // attach the 'roles' metadata.
  // role is a key, while ['admin'] is a particular value.
  @Post()
  @SetMetadata('roles', ['admin'])
  async create_guard(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }

  @Post()
  @Roles('admin')
  async create_guard_reflection(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }

  // ParseIntPipe will be executed before the request reaches the corresponding handler,
  // ensuring that it will always receive an integer for the id parameter.
  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id) {
    return await this.catsService.findOne(id);
  }

  @Get()
  async findAll() {
    // base exceptions
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // custom message
    throw new HttpException(
      { status: HttpStatus.FORBIDDEN, error: 'this is a custom message' },
      403,
    );
  }
}
