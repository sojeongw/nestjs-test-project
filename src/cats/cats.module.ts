import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {
  // a module class can inject providers as well(e.g.,or configuration purposes)
  constructor(private readonly catsService: CatsService) {}

  // However, module classes themselves cannot be injected as providers due to circular dependency.
}
