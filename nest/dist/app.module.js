"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const serve_static_1 = require("@nestjs/serve-static");
const path = require("path");
const products_model_1 = require("./products/products.model");
const files_module_1 = require("./files/files.module");
const categories_module_1 = require("./categories/categories.module");
const users_module_1 = require("./users/users.module");
const categories_model_1 = require("./categories/categories.model");
const users_model_1 = require("./users/users.model");
const roles_module_1 = require("./roles/roles.module");
const roles_model_1 = require("./roles/roles.model");
const users_roles_model_1 = require("./roles/users-roles.model");
const products_module_1 = require("./products/products.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USERNAME,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [products_model_1.Product, categories_model_1.Category, users_model_1.User, roles_model_1.Role, users_roles_model_1.UserRoles],
                autoLoadModels: true,
                synchronize: true,
            }),
            products_module_1.ProductsModule,
            files_module_1.FilesModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve(__dirname, 'static'),
            }),
            categories_module_1.CategoriesModule,
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map