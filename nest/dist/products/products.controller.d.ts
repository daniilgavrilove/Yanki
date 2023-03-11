/// <reference types="multer" />
import { CreateOneProductDto } from './dto/CreateOneProduct.dto';
import { Product } from './products.model';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    create(productDto: CreateOneProductDto, images: Array<Express.Multer.File>): Promise<Product>;
    getAll(query: any): Promise<Product[]>;
    getOne(slug: any): Promise<Product>;
}
