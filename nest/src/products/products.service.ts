import { Injectable, Param, Query, Req, Res } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import * as uuid from 'uuid';
import { generateSlug } from './functions';
import { CreateOneProductDto } from './dto/CreateOneProduct.dto';
import { Product } from './products.model';
import { FilesService } from 'src/files/files.service';





@Injectable()
export class ProductsService {
	constructor(@InjectModel(Product) private ProductRepository: typeof Product,
		private fileService: FilesService) { }
	async createOneProduct(dto: CreateOneProductDto, images: any) {


		let { title, sizes, colors, description, isNew } = dto

		colors = JSON.parse(colors);
		description = JSON.parse(description);
		sizes = JSON.parse(sizes);

		const slug = generateSlug(title) + uuid.v4()
		const fileNames = await this.fileService.createManyFiles(images, slug)

		const product = await this.ProductRepository.create({ ...dto, slug, colors, description, sizes, images: fileNames })
		return product

	}
	async getAllProducts(@Query() query): Promise<Product[]> {
		try {

			let { page, limit, categoryId } = query
			page = page || 1
			limit = limit || 18
			let offset = page * limit - limit
			let products
			if (!categoryId) {
				products = await this.ProductRepository.findAndCountAll({ limit, offset })
			}

			if (categoryId) {
				products = await this.ProductRepository.findAndCountAll({ where: { categoryId }, limit, offset })
			}

			return products
		} catch (e) {
		}
	}
	async getOneProduct(@Param() slug) {
		const product = await this.ProductRepository.findOne({ where: { slug } })
		return product
	}
}
