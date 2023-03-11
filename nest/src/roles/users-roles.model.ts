import { Model, DataType, Table, Column, ForeignKey } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";


@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {

	@Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, })
	id: number

	@ForeignKey(() => Role)
	@Column({ type: DataType.INTEGER })
	roleId: number

	@ForeignKey(() => User)
	@Column({ type: DataType.INTEGER })
	userId: number

}