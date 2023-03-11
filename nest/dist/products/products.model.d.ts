import { Model } from "sequelize-typescript";
import { Category } from "src/categories/categories.model";
interface ProductCreationAttrs {
    title: string;
    slug: string;
    alt: string;
    price: number;
    sizes: string;
    colors: string;
    description: string;
    images: string[];
}
export declare class Product extends Model<Product, ProductCreationAttrs> {
    id: number;
    title: string;
    slug: string;
    alt: string;
    price: number;
    sizes: string;
    images: string;
    isNew: boolean;
    colors: string;
    description: string;
    categoryId: number;
    category: Category;
}
export {};
