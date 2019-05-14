import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

// DI를 설정하는 곳 = service = provider라고 생각해도 될까?
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
