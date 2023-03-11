import { Model, DataType, Table, Column, BelongsTo, ForeignKey } from "sequelize-typescript";
import { SequelizeModule, SequelizeOptionsFactory } from '@nestjs/sequelize'
import { Category } from "src/categories/categories.model";
import { ApiProperty } from "@nestjs/swagger";




interface ProductCreationAttrs {
	title: string
	slug: string
	alt: string
	price: number
	sizes: string
	colors: string
	description: string
	images: string[]

}

@Table({ tableName: 'product' })
export class Product extends Model<Product, ProductCreationAttrs> {

	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, })
	id: number

	@ApiProperty({ example: 'Худи', description: 'Название товара' })
	@Column({ type: DataType.STRING, allowNull: true })
	title: string

	@ApiProperty({ example: 'hudi', description: 'Слаг. Используется для пути товара и названия папки с картинками' })
	@Column({ type: DataType.STRING, unique: true, allowNull: true })
	slug: string

	@ApiProperty({ example: 'Худи', description: 'Тэг альт для картинок' })
	@Column({ type: DataType.STRING, allowNull: true })
	alt: string

	@ApiProperty({ example: '2 000', description: 'Цена товара' })
	@Column({ type: DataType.INTEGER, allowNull: true })
	price: number

	@ApiProperty({ example: 'Х, XL', description: 'Массив размеров' })
	@Column({
		type: DataType.TEXT,
		allowNull: true,
		get: function () {
			return JSON.parse(this.getDataValue('sizes'));
		},
		set: function (val) {
			return this.setDataValue('sizes', JSON.stringify(val));
		}
	})
	sizes: string

	@ApiProperty({ example: 'hudi.jpg', description: 'Массив изображений' })
	@Column({
		type: DataType.TEXT,
		allowNull: true,
		get: function () {
			return JSON.parse(this.getDataValue('images'));
		},
		set: function (val) {
			return this.setDataValue('images', JSON.stringify(val));
		}

	})
	images: string

	@ApiProperty({ example: 'true', description: 'Новый товар или нет' })
	@Column({ type: DataType.BOOLEAN, defaultValue: false, allowNull: true })
	isNew: boolean

	@ApiProperty({ example: 'title:black; value:Черный', description: 'Название и значение цвета' })
	@Column({
		allowNull: true,
		type: DataType.TEXT,
		get: function () {
			return JSON.parse(this.getDataValue('colors'));
		},
		set: function (val) {
			return this.setDataValue('colors', JSON.stringify(val));
		}
	})
	colors: string

	@ApiProperty({ example: 'title:Стирка; value:Стирать нельзя', description: 'Описание для акордеонов на странице товара' })
	@Column({
		allowNull: true,

		type: DataType.TEXT,
		get: function () {
			return JSON.parse(this.getDataValue('description'));
		},
		set: function (val) {
			return this.setDataValue('description', JSON.stringify(val));
		}
	})
	description: string

	@ApiProperty({ example: '1', description: 'Идентификатор категории' })
	@ForeignKey(() => Category)
	@Column({ type: DataType.INTEGER })
	categoryId: number

	@BelongsTo(() => Category)
	category: Category
}
