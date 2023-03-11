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
exports.CreateOneProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateOneProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Худи', description: 'Название товара' }),
    __metadata("design:type", String)
], CreateOneProductDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Худи', description: 'Тэг альт для картинок' }),
    __metadata("design:type", String)
], CreateOneProductDto.prototype, "alt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'NEW' }),
    __metadata("design:type", Boolean)
], CreateOneProductDto.prototype, "isNew", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2 000', description: 'Цена товара' }),
    __metadata("design:type", Number)
], CreateOneProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Х, XL', description: 'Массив размеров' }),
    __metadata("design:type", String)
], CreateOneProductDto.prototype, "sizes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'hudi.jpg', description: 'Массив изображений' }),
    __metadata("design:type", String)
], CreateOneProductDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'title:black; value:Черный', description: 'Название и значение цвета' }),
    __metadata("design:type", String)
], CreateOneProductDto.prototype, "colors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'title:Стирка; value:Стирать нельзя', description: 'Описание для акордеонов на странице товара' }),
    __metadata("design:type", String)
], CreateOneProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Идентификатор категории' }),
    __metadata("design:type", String)
], CreateOneProductDto.prototype, "categoryId", void 0);
exports.CreateOneProductDto = CreateOneProductDto;
//# sourceMappingURL=CreateOneProduct.dto.js.map