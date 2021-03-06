exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\nconst cats_controller_1 = __webpack_require__(/*! ./cats/cats.controller */ \"./src/cats/cats.controller.ts\");\nlet AppModule = class AppModule {\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [],\n        controllers: [app_controller_1.AppController, cats_controller_1.CatsController],\n        providers: [app_service_1.AppService],\n    })\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/cats/cats.controller.ts":
/*!*************************************!*\
  !*** ./src/cats/cats.controller.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar _a, _b, _c;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst dto_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './dto'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nlet CatsController = class CatsController {\n    create(createCatDto) {\n        return 'This action adds a new cat';\n    }\n    findAll(query) {\n        return `This action returns all cats (limit: ${query.limit} items)`;\n    }\n    findOne(id) {\n        return `This action returns a #${id} cat`;\n    }\n    update(id, updateCatDto) {\n        return `This action updates a #${id} cat`;\n    }\n    remove(id) {\n        return `This action removes a #${id} cat`;\n    }\n};\n__decorate([\n    common_1.Post(),\n    __param(0, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [typeof (_a = typeof dto_1.CreateCatDto !== \"undefined\" && dto_1.CreateCatDto) === \"function\" ? _a : Object]),\n    __metadata(\"design:returntype\", void 0)\n], CatsController.prototype, \"create\", null);\n__decorate([\n    common_1.Get(),\n    __param(0, common_1.Query()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [typeof (_b = typeof dto_1.ListAllEntities !== \"undefined\" && dto_1.ListAllEntities) === \"function\" ? _b : Object]),\n    __metadata(\"design:returntype\", void 0)\n], CatsController.prototype, \"findAll\", null);\n__decorate([\n    common_1.Get(':id'),\n    __param(0, common_1.Param('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [String]),\n    __metadata(\"design:returntype\", void 0)\n], CatsController.prototype, \"findOne\", null);\n__decorate([\n    common_1.Put(':id'),\n    __param(0, common_1.Param('id')), __param(1, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [String, typeof (_c = typeof dto_1.UpdateCatDto !== \"undefined\" && dto_1.UpdateCatDto) === \"function\" ? _c : Object]),\n    __metadata(\"design:returntype\", void 0)\n], CatsController.prototype, \"update\", null);\n__decorate([\n    common_1.Delete(':id'),\n    __param(0, common_1.Param('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [String]),\n    __metadata(\"design:returntype\", void 0)\n], CatsController.prototype, \"remove\", null);\nCatsController = __decorate([\n    common_1.Controller('cats')\n], CatsController);\nexports.CatsController = CatsController;\n\n\n//# sourceURL=webpack:///./src/cats/cats.controller.ts?");

/***/ }),

/***/ "./src/dto/create-cat.dto.ts":
false

};