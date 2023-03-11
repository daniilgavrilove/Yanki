import { CreateOneProductDto } from './dto/CreateOneProduct.dto';
import { Product } from './products.model';
import { FilesService } from 'src/files/files.service';
export declare class ProductsService {
    private ProductRepository;
    private fileService;
    constructor(ProductRepository: typeof Product, fileService: FilesService);
    createOneProduct(dto: CreateOneProductDto, images: any): Promise<Product>;
    getAllProducts(query: any): Promise<Product[]>;
    getOneProduct(slug: any): Promise<Product>;
}
