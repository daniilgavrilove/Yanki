import { ApiProperty } from "@nestjs/swagger";


export class CreateOneCategoryDto {

	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	readonly id: number

	@ApiProperty({ example: 'Верхняя одежда', description: 'Название категории' })
	readonly name: string

	@ApiProperty({ example: 'verhnya-odejda.jpg', description: 'Изображение категории ' })
	readonly image: string

}