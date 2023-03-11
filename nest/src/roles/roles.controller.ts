import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateOneRoleDto } from './dto/CreateOneRole.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';


@ApiTags('Роли')
@Controller('api/roles')
export class RolesController {
	constructor(private rolesService: RolesService) { }

	@ApiOperation({ summary: 'Создание роли' })
	@ApiResponse({ status: 200, type: Role })
	@Post()
	@UseInterceptors(FileInterceptor(''))
	create(@Body() roleDto: CreateOneRoleDto) {
		return this.rolesService.createOneRole(roleDto)
	}

	@ApiOperation({ summary: 'Получение ролей' })
	@ApiResponse({ status: 200, type: [Role] })
	@Get()
	getAll() {
		return this.rolesService.getAllRoles()
	}

	@ApiOperation({ summary: 'Получение роли' })
	@ApiResponse({ status: 200, type: [Role] })
	@Get('/:value')
	getOne(@Param('value') value: string) {
		return this.rolesService.getOneRole(value)
	}
}
