/// <reference types="multer" />
import { CategoriesService } from './categories.service';
import { CreateOneCategoryDto } from './dto/CreateOneCategory.dto';
import { Category } from './categories.model';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    create(categoryDto: CreateOneCategoryDto, image: Express.Multer.File): Promise<Category>;
    getAll(): Promise<Category[]>;
}
