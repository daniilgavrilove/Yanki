import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateOneUserDto } from './dto/CreateOneUser.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('api/user')
export class UsersController {
	constructor(private usersService: UsersService) { }

	@ApiOperation({ summary: 'Создание пользователя' })
	@ApiResponse({ status: 200, type: User })
	@Post()
	@UseInterceptors(FileInterceptor(''))
	create(@Body() userDto: CreateOneUserDto) {
		return this.usersService.createOneUser(userDto)
	}

	@ApiOperation({ summary: 'Получение пользователей' })
	@ApiResponse({ status: 200, type: [User] })
	@Get()
	getAll() {
		return this.usersService.getAllUsers()
	}
}
