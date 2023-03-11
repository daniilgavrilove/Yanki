import { FilesService } from 'src/files/files.service';
import { Category } from './categories.model';
import { CreateOneCategoryDto } from './dto/CreateOneCategory.dto';
export declare class CategoriesService {
    private CategoryRepository;
    private fileService;
    constructor(CategoryRepository: typeof Category, fileService: FilesService);
    createOneCategory(dto: CreateOneCategoryDto, image: any): Promise<Category>;
    getAllCategories(): Promise<Category[]>;
}
