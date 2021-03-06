exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst logger_middleware_1 = __webpack_require__(/*! ./common/middleware/logger.middleware */ \"./src/common/middleware/logger.middleware.ts\");\nconst cats_module_1 = __webpack_require__(/*! ./cats/cats.module */ \"./src/cats/cats.module.ts\");\nconst cats_controller_1 = __webpack_require__(/*! ./cats/cats.controller */ \"./src/cats/cats.controller.ts\");\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nlet AppModule = class AppModule {\n    configure(consumer) {\n        consumer\n            .apply(logger_middleware_1.LoggerMiddleware)\n            .exclude({ path: 'cats', method: common_1.RequestMethod.GET }, { path: 'cats', method: common_1.RequestMethod.POST })\n            .forRoutes(cats_controller_1.CatsController);\n    }\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [cats_module_1.CatsModule],\n        providers: [\n            {\n                provide: core_1.APP_PIPE,\n                useClass: common_1.ValidationPipe,\n            },\n        ],\n    })\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/cats/cats.controller.ts":
/*!*************************************!*\
  !*** ./src/cats/cats.controller.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst dto_1 = __webpack_require__(/*! ./dto */ \"./src/cats/dto/index.ts\");\nconst cats_service_1 = __webpack_require__(/*! ./cats.service */ \"./src/cats/cats.service.ts\");\nconst parse_int_pipe_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/parse-int.pipe'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst roles_decorator_1 = __webpack_require__(/*! ../roles.decorator */ \"./src/roles.decorator.ts\");\nlet CatsController = class CatsController {\n    constructor(catsService) {\n        this.catsService = catsService;\n    }\n    create_pipe(createCatDto) {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.catsService.create(createCatDto);\n        });\n    }\n    create_guard(CreateCatDto) {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.catsService.create(CreateCatDto);\n        });\n    }\n    create_guard_reflection(CreateCatDto) {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.catsService.create(CreateCatDto);\n        });\n    }\n    findOne(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.catsService.findOne(id);\n        });\n    }\n    findAll() {\n        return __awaiter(this, void 0, void 0, function* () {\n            throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);\n            throw new common_1.HttpException({ status: common_1.HttpStatus.FORBIDDEN, error: 'this is a custom message' }, 403);\n        });\n    }\n};\n__decorate([\n    common_1.Post(),\n    common_1.UsePipes(new common_1.ValidationPipe({ transform: true })),\n    __param(0, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [dto_1.CreateCatDto]),\n    __metadata(\"design:returntype\", Promise)\n], CatsController.prototype, \"create_pipe\", null);\n__decorate([\n    common_1.Post(),\n    common_1.SetMetadata('roles', ['admin']),\n    __param(0, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [dto_1.CreateCatDto]),\n    __metadata(\"design:returntype\", Promise)\n], CatsController.prototype, \"create_guard\", null);\n__decorate([\n    common_1.Post(),\n    roles_decorator_1.Roles('admin'),\n    __param(0, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [dto_1.CreateCatDto]),\n    __metadata(\"design:returntype\", Promise)\n], CatsController.prototype, \"create_guard_reflection\", null);\n__decorate([\n    common_1.Get(':id'),\n    __param(0, common_1.Param('id', new parse_int_pipe_1.ParseIntPipe())),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Promise)\n], CatsController.prototype, \"findOne\", null);\n__decorate([\n    common_1.Get(),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", Promise)\n], CatsController.prototype, \"findAll\", null);\nCatsController = __decorate([\n    common_1.Controller('cats'),\n    __metadata(\"design:paramtypes\", [cats_service_1.CatsService])\n], CatsController);\nexports.CatsController = CatsController;\n\n\n//# sourceURL=webpack:///./src/cats/cats.controller.ts?");

/***/ }),

/***/ "./src/cats/cats.module.ts":
/*!*********************************!*\
  !*** ./src/cats/cats.module.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst cats_controller_1 = __webpack_require__(/*! ./cats.controller */ \"./src/cats/cats.controller.ts\");\nconst cats_service_1 = __webpack_require__(/*! ./cats.service */ \"./src/cats/cats.service.ts\");\nlet CatsModule = class CatsModule {\n    constructor(catsService) {\n        this.catsService = catsService;\n    }\n};\nCatsModule = __decorate([\n    common_1.Module({\n        controllers: [cats_controller_1.CatsController],\n        providers: [cats_service_1.CatsService],\n        exports: [cats_service_1.CatsService],\n    }),\n    __metadata(\"design:paramtypes\", [cats_service_1.CatsService])\n], CatsModule);\nexports.CatsModule = CatsModule;\n\n\n//# sourceURL=webpack:///./src/cats/cats.module.ts?");

/***/ }),

/***/ "./src/cats/cats.service.ts":
/*!**********************************!*\
  !*** ./src/cats/cats.service.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet CatsService = class CatsService {\n    constructor() {\n        this.cats = [];\n    }\n    create(cat) {\n        this.cats.push(cat);\n    }\n    findAll() {\n        return this.cats;\n    }\n    findOne(id) {\n        throw new Error('Method not implemented.');\n    }\n};\nCatsService = __decorate([\n    common_1.Injectable()\n], CatsService);\nexports.CatsService = CatsService;\n\n\n//# sourceURL=webpack:///./src/cats/cats.service.ts?");

/***/ }),

/***/ "./src/cats/dto/create-cat.dto.ts":
/*!****************************************!*\
  !*** ./src/cats/dto/create-cat.dto.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\nclass CreateCatDto {\n}\n__decorate([\n    class_validator_1.IsString(),\n    __metadata(\"design:type\", String)\n], CreateCatDto.prototype, \"name\", void 0);\n__decorate([\n    class_validator_1.IsInt(),\n    __metadata(\"design:type\", Number)\n], CreateCatDto.prototype, \"age\", void 0);\n__decorate([\n    class_validator_1.IsString(),\n    __metadata(\"design:type\", String)\n], CreateCatDto.prototype, \"breed\", void 0);\nexports.CreateCatDto = CreateCatDto;\n\n\n//# sourceURL=webpack:///./src/cats/dto/create-cat.dto.ts?");

/***/ }),

/***/ "./src/cats/dto/index.ts":
/*!*******************************!*\
  !*** ./src/cats/dto/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./create-cat.dto */ \"./src/cats/dto/create-cat.dto.ts\"));\n__export(__webpack_require__(/*! ./update-cat.dto */ \"./src/cats/dto/update-cat.dto.ts\"));\n__export(__webpack_require__(/*! ./list-all-entities.dto */ \"./src/cats/dto/list-all-entities.dto.ts\"));\n\n\n//# sourceURL=webpack:///./src/cats/dto/index.ts?");

/***/ }),

/***/ "./src/cats/dto/list-all-entities.dto.ts":
/*!***********************************************!*\
  !*** ./src/cats/dto/list-all-entities.dto.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass ListAllEntities {\n}\nexports.ListAllEntities = ListAllEntities;\n\n\n//# sourceURL=webpack:///./src/cats/dto/list-all-entities.dto.ts?");

/***/ }),

/***/ "./src/cats/dto/update-cat.dto.ts":
/*!****************************************!*\
  !*** ./src/cats/dto/update-cat.dto.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass UpdateCatDto {\n}\nexports.UpdateCatDto = UpdateCatDto;\n\n\n//# sourceURL=webpack:///./src/cats/dto/update-cat.dto.ts?");

/***/ }),

/***/ "./src/common/middleware/logger.middleware.ts":
/*!****************************************************!*\
  !*** ./src/common/middleware/logger.middleware.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet LoggerMiddleware = class LoggerMiddleware {\n    use(req, res, next) {\n        console.log('Request...');\n        next();\n    }\n};\nLoggerMiddleware = __decorate([\n    common_1.Injectable()\n], LoggerMiddleware);\nexports.LoggerMiddleware = LoggerMiddleware;\n\n\n//# sourceURL=webpack:///./src/common/middleware/logger.middleware.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nfunction bootstrap() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const app = yield core_1.NestFactory.create(app_module_1.AppModule);\n        app.useGlobalPipes(new common_1.ValidationPipe());\n        yield app.listen(3000);\n        if (true) {\n            module.hot.accept();\n            module.hot.dispose(() => app.close());\n        }\n    });\n}\nbootstrap();\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/roles.decorator.ts":
/*!********************************!*\
  !*** ./src/roles.decorator.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nexports.Roles = (...args) => common_1.SetMetadata('roles', args);\n\n\n//# sourceURL=webpack:///./src/roles.decorator.ts?");

/***/ })

};