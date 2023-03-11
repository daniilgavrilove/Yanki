import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FileInterceptor } from '@nestjs/platform-express';
import { CategoriesService } from './categories.service';
import { CreateOneCategoryDto } from './dto/CreateOneCategory.dto';
import { Category } from './categories.model';

@ApiTags('Категории')
@Controller('api/categories')
export class CategoriesController {
	constructor(private categoriesService: CategoriesService) { }

	@ApiOperation({ summary: 'Создание категории' })
	@ApiResponse({ status: 200, type: Category })
	@Post()
	@UseInterceptors(FileInterceptor('image'))
	create(
		@Body() categoryDto: CreateOneCategoryDto,
		@UploadedFile() image: Express.Multer.File
	) {
		return this.categoriesService.createOneCategory(categoryDto, image)
	}

	@ApiOperation({ summary: 'Получение категорий' })
	@ApiResponse({ status: 200, type: [Category] })
	@Get()
	getAll() {
		return this.categoriesService.getAllCategories()
	}
}
