import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { FilesService } from 'src/files/files.service';

import { Category } from './categories.model';
import { CreateOneCategoryDto } from './dto/CreateOneCategory.dto';


@Injectable()
export class CategoriesService {
	constructor(@InjectModel(Category) private CategoryRepository: typeof Category,
		private fileService: FilesService) { }

	async createOneCategory(dto: CreateOneCategoryDto, image: any) {
		const fileName = await this.fileService.createOneFile(image, 'category')
		const category = await this.CategoryRepository.create({ ...dto, image: fileName })

		return category
	}

	async getAllCategories() {
		const categories = await this.CategoryRepository.findAll()
		return categories
	}
}
