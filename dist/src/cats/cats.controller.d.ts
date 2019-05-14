import { CreateCatDto } from './dto';
import { CatsService } from './cats.service';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<void>;
    findOne(id: any): Promise<void>;
    findAll(): Promise<void>;
}
