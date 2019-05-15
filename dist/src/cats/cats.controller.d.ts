import { CreateCatDto } from './dto';
import { CatsService } from './cats.service';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create_pipe(createCatDto: CreateCatDto): Promise<void>;
    create_guard(CreateCatDto: CreateCatDto): Promise<void>;
    findOne(id: any): Promise<void>;
    findAll(): Promise<void>;
}
