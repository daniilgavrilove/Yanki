import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { FilesModule } from 'src/files/files.module';
import { Category } from 'src/categories/categories.model';

@Module({
	controllers: [ProductsController],
	providers: [ProductsService],
	imports: [
		SequelizeModule.forFeature([Product, Category]),
		FilesModule,

	]
})
export class ProductsModule { }
