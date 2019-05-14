import { CreateCatDto } from './dto';
import { CatsService } from './cats.service';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(CreateCatDto: CreateCatDto): Promise<void>;
    findAll(): Promise<void>;
}
