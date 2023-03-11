import { Body, Controller, Get, Param, Post, Query, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOneProductDto } from './dto/CreateOneProduct.dto';
import { Product } from './products.model';
import { ProductsService } from './products.service';

@ApiTags('Товары')
@Controller('api/products')
export class ProductsController {
	constructor(private productsService: ProductsService) { }

	@ApiOperation({ summary: 'Создание товара' })
	@ApiResponse({ status: 200, type: Product })
	@Post()
	@UseInterceptors(FilesInterceptor('images'))
	create(
		@Body() productDto: CreateOneProductDto,
		@UploadedFiles() images: Array<Express.Multer.File>
	) {
		console.log(productDto);
		console.log(images);
		return this.productsService.createOneProduct(productDto, images)
	}

	@ApiOperation({ summary: 'Получение товаров' })
	@ApiResponse({ status: 200, type: [Product] })
	@ApiQuery({ name: 'categoryId', required: false, description: 'Идентификатор категории' })
	@ApiQuery({ name: 'limit', required: false, description: 'Максимальное число товаров на странице' })
	@ApiQuery({ name: 'page', required: false, description: 'Номер страницы' })
	@Get()
	getAll(@Query() query) {
		return this.productsService.getAllProducts(query)
	}

	@ApiOperation({ summary: 'Получение одного товара' })
	@ApiResponse({ status: 200, type: Product })
	@ApiParam({ name: 'slug', required: true, description: 'Слаг товара' })

	@Get(':slug')
	getOne(@Param('slug') slug) {
		return this.productsService.getOneProduct(slug)
	}
}
