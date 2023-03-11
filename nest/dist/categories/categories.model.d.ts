import { Model } from "sequelize-typescript";
import { Product } from "src/products/products.model";
interface CategoryCreationAttrs {
    id: number;
    name: string;
    image: string;
}
export declare class Category extends Model<Category, CategoryCreationAttrs> {
    id: number;
    name: string;
    image: string;
    products: Product[];
}
export {};
