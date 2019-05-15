import { CatsService } from './cats.service';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    find(): string;
    findAll(): Promise<void>;
}
