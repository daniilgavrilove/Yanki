import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { ServeStaticModule } from '@nestjs/serve-static'

import * as path from 'path'
import { Product } from "./products/products.model";
import { FilesModule } from './files/files.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { Category } from "./categories/categories.model";
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/users-roles.model";
import { ProductsModule } from "./products/products.module";

@Module({
	imports: [

		ConfigModule.forRoot({
			envFilePath: `.${process.env.NODE_ENV}.env`
		}),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: process.env.POSTGRES_HOST,
			port: Number(process.env.POSTGRES_PORT),
			username: process.env.POSTGRES_USERNAME,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
			models: [Product, Category, User, Role, UserRoles],
			autoLoadModels: true,
			synchronize: true,
		}),
		ProductsModule,
		FilesModule,
		ServeStaticModule.forRoot({
			rootPath: path.resolve(__dirname, 'static'),
		}),
		CategoriesModule,
		UsersModule,
		RolesModule,
	],
}
)
export class AppModule {

}