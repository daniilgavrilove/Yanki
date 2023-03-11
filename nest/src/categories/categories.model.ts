import { Model, DataType, Table, Column, HasMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/products.model";

interface CategoryCreationAttrs {
	id: number
	name: string
	image: string

}

@Table({ tableName: 'category' })
export class Category extends Model<Category, CategoryCreationAttrs> {

	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, })
	id: number

	@ApiProperty({ example: 'Верхняя одежда', description: 'Название категории' })
	@Column({ type: DataType.STRING, defaultValue: '', allowNull: false })
	name: string

	@ApiProperty({ example: 'verhnya-odejda.jpg', description: 'Изображение категории ' })
	@Column({ type: DataType.STRING, defaultValue: '', allowNull: false })
	image: string

	@HasMany(() => Product)
	products: Product[]
}