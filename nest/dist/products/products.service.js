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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const uuid = require("uuid");
const functions_1 = require("./functions");
const products_model_1 = require("./products.model");
const files_service_1 = require("../files/files.service");
let ProductsService = class ProductsService {
    constructor(ProductRepository, fileService) {
        this.ProductRepository = ProductRepository;
        this.fileService = fileService;
    }
    async createOneProduct(dto, images) {
        let { title, sizes, colors, description, isNew } = dto;
        colors = JSON.parse(colors);
        description = JSON.parse(description);
        sizes = JSON.parse(sizes);
        const slug = (0, functions_1.generateSlug)(title) + uuid.v4();
        const fileNames = await this.fileService.createManyFiles(images, slug);
        const product = await this.ProductRepository.create(Object.assign(Object.assign({}, dto), { slug, colors, description, sizes, images: fileNames }));
        return product;
    }
    async getAllProducts(query) {
        try {
            let { page, limit, categoryId } = query;
            page = page || 1;
            limit = limit || 18;
            let offset = page * limit - limit;
            let products;
            if (!categoryId) {
                products = await this.ProductRepository.findAndCountAll({ limit, offset });
            }
            if (categoryId) {
                products = await this.ProductRepository.findAndCountAll({ where: { categoryId }, limit, offset });
            }
            return products;
        }
        catch (e) {
        }
    }
    async getOneProduct(slug) {
        const product = await this.ProductRepository.findOne({ where: { slug } });
        return product;
    }
};
__decorate([
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsService.prototype, "getAllProducts", null);
__decorate([
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsService.prototype, "getOneProduct", null);
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(products_model_1.Product)),
    __metadata("design:paramtypes", [Object, files_service_1.FilesService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map