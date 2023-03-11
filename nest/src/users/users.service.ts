import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { RolesService } from 'src/roles/roles.service';
import { CreateOneUserDto } from './dto/CreateOneUser.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
	constructor(@InjectModel(User) private UsersRepository: typeof User,
		private roleService: RolesService) { }

	async createOneUser(dto: CreateOneUserDto) {
		const user = await this.UsersRepository.create(dto)
		const role = await this.roleService.getOneRole('USER')
		await user.$set('roles', [role.id])
		return user
	}
	async getAllUsers() {

		const users = await this.UsersRepository.findAll({ include: { all: true } })
		return users
	}
}
