import { ApiProperty } from "@nestjs/swagger"

export class CreateOneProductDto {

	@ApiProperty({ example: 'Худи', description: 'Название товара' })
	readonly title: string

	@ApiProperty({ example: 'Худи', description: 'Тэг альт для картинок' })
	readonly alt: string

	@ApiProperty({ example: 'true', description: 'NEW' })
	readonly isNew: boolean

	@ApiProperty({ example: '2 000', description: 'Цена товара' })
	readonly price: number

	@ApiProperty({ example: 'Х, XL', description: 'Массив размеров' })
	readonly sizes: string

	@ApiProperty({ example: 'hudi.jpg', description: 'Массив изображений' })
	readonly images: string

	@ApiProperty({ example: 'title:black; value:Черный', description: 'Название и значение цвета' })
	readonly colors: string

	@ApiProperty({ example: 'title:Стирка; value:Стирать нельзя', description: 'Описание для акордеонов на странице товара' })
	readonly description: string

	@ApiProperty({ example: '1', description: 'Идентификатор категории' })
	readonly categoryId: string
}