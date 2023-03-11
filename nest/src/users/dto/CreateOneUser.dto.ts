import { ApiProperty } from "@nestjs/swagger";


export class CreateOneUserDto {

	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	readonly id: number

	@ApiProperty({ example: 'Иванов Иван', description: 'Фамилия и имя пользователя' })
	readonly name: string

	@ApiProperty({ example: 'email@mail.com', description: 'Email пользователя' })
	readonly email: string

	@ApiProperty({ example: 'jJ4Hd*dj_3', description: 'Пароль пользователя' })
	readonly password: string

}