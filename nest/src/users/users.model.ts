import { Model, DataType, Table, Column, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/users-roles.model";

interface UserCreationAttrs {
	id: number
	name: string
	email: string
	password: string

}

@Table({ tableName: 'user' })
export class User extends Model<User, UserCreationAttrs> {

	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, })
	id: number

	@ApiProperty({ example: 'Иванов Иван', description: 'Фамилия и имя пользователя' })
	@Column({ type: DataType.STRING, defaultValue: '', allowNull: true })
	name: string

	@ApiProperty({ example: 'email@mail.com', description: 'Email пользователя' })
	@Column({ type: DataType.STRING, allowNull: false })
	email: string

	@ApiProperty({ example: 'jJ4Hd*dj_3', description: 'Пароль пользователя' })
	@Column({ type: DataType.STRING, allowNull: false })
	password: string

	@BelongsToMany(() => Role, () => UserRoles)
	roles: Role[]
}