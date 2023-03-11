import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { CreateOneRoleDto } from './dto/CreateOneRole.dto';
import { Role } from './roles.model';


@Injectable()
export class RolesService {
	constructor(@InjectModel(Role) private RoleRepository: typeof Role) { }

	async createOneRole(dto: CreateOneRoleDto) {
		const role = await this.RoleRepository.create(dto)
		return role
	}

	async getOneRole(value: string) {
		const roles = await this.RoleRepository.findOne({ where: { value } })
		return roles
	}

	async getAllRoles() {
		const roles = await this.RoleRepository.findAll()
		return roles
	}
}
