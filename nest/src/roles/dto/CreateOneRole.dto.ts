import { ApiProperty } from "@nestjs/swagger";


export class CreateOneRoleDto {

	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	readonly id: number

	@ApiProperty({ example: 'ADMIN', description: 'Роль' })
	readonly value: string

	@ApiProperty({ example: 'Самый мощный, жи есть да', description: 'Описание роли' })
	readonly description: string

}