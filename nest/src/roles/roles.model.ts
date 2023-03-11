import { Model, DataType, Table, Column, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/users.model";
import { UserRoles } from "./users-roles.model";

interface RoleCreationAttrs {
	id: number
	value: string
	description: string
}

@Table({ tableName: 'role' })
export class Role extends Model<Role, RoleCreationAttrs> {

	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, })
	id: number

	@ApiProperty({ example: 'ADMIN', description: 'Роль' })
	@Column({ type: DataType.STRING, defaultValue: '', allowNull: true })
	value: string

	@ApiProperty({ example: 'Самый мощный, жи есть да', description: 'Описание роли' })
	@Column({ type: DataType.STRING, allowNull: false })
	description: string

	@BelongsToMany(() => User, () => UserRoles)
	users: User[]
}