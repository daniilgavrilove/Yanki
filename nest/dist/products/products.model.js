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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const categories_model_1 = require("../categories/categories.model");
const swagger_1 = require("@nestjs/swagger");
let Product = class Product extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, autoIncrement: true, }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Худи', description: 'Название товара' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'hudi', description: 'Слаг. Используется для пути товара и названия папки с картинками' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: true }),
    __metadata("design:type", String)
], Product.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Худи', description: 'Тэг альт для картинок' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Product.prototype, "alt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2 000', description: 'Цена товара' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Х, XL', description: 'Массив размеров' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
        get: function () {
            return JSON.parse(this.getDataValue('sizes'));
        },
        set: function (val) {
            return this.setDataValue('sizes', JSON.stringify(val));
        }
    }),
    __metadata("design:type", String)
], Product.prototype, "sizes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'hudi.jpg', description: 'Массив изображений' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
        get: function () {
            return JSON.parse(this.getDataValue('images'));
        },
        set: function (val) {
            return this.setDataValue('images', JSON.stringify(val));
        }
    }),
    __metadata("design:type", String)
], Product.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Новый товар или нет' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false, allowNull: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "isNew", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'title:black; value:Черный', description: 'Название и значение цвета' }),
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.TEXT,
        get: function () {
            return JSON.parse(this.getDataValue('colors'));
        },
        set: function (val) {
            return this.setDataValue('colors', JSON.stringify(val));
        }
    }),
    __metadata("design:type", String)
], Product.prototype, "colors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'title:Стирка; value:Стирать нельзя', description: 'Описание для акордеонов на странице товара' }),
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.TEXT,
        get: function () {
            return JSON.parse(this.getDataValue('description'));
        },
        set: function (val) {
            return this.setDataValue('description', JSON.stringify(val));
        }
    }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Идентификатор категории' }),
    (0, sequelize_typescript_1.ForeignKey)(() => categories_model_1.Category),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Product.prototype, "categoryId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => categories_model_1.Category),
    __metadata("design:type", categories_model_1.Category)
], Product.prototype, "category", void 0);
Product = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'product' })
], Product);
exports.Product = Product;
//# sourceMappingURL=products.model.js.map