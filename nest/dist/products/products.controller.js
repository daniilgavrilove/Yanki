"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const CreateOneProduct_dto_1 = require("./dto/CreateOneProduct.dto");
const products_model_1 = require("./products.model");
const products_service_1 = require("./products.service");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    create(productDto, images) {
        console.log(productDto);
        console.log(images);
        return this.productsService.createOneProduct(productDto, images);
    }
    getAll(query) {
        return this.productsService.getAllProducts(query);
    }
    getOne(slug) {
        return this.productsService.getOneProduct(slug);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание товара' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: products_model_1.Product }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateOneProduct_dto_1.CreateOneProductDto,
        Array]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение товаров' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [products_model_1.Product] }),
    (0, swagger_1.ApiQuery)({ name: 'categoryId', required: false, description: 'Идентификатор категории' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Максимальное число товаров на странице' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'Номер страницы' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение одного товара' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: products_model_1.Product }),
    (0, swagger_1.ApiParam)({ name: 'slug', required: true, description: 'Слаг товара' }),
    (0, common_1.Get)(':slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getOne", null);
ProductsController = __decorate([
    (0, swagger_1.ApiTags)('Товары'),
    (0, common_1.Controller)('api/products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map