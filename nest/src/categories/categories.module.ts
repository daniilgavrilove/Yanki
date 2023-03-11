import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { Product } from 'src/products/products.model';
import { FilesModule } from 'src/files/files.module';


@Module({
	controllers: [CategoriesController],
	providers: [CategoriesService],
	imports: [
		SequelizeModule.forFeature([Category, Product]),
		FilesModule,

	]
})
export class CategoriesModule { }
