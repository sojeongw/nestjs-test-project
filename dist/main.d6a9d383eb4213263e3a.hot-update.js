exports.id = "main";
exports.modules = {

/***/ "./src/cats/cats.controller.ts":
/*!*************************************!*\
  !*** ./src/cats/cats.controller.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst dto_1 = __webpack_require__(/*! ./dto */ \"./src/cats/dto/index.ts\");\nconst cats_service_1 = __webpack_require__(/*! ./cats.service */ \"./src/cats/cats.service.ts\");\nlet CatsController = class CatsController {\n    constructor(catsService) {\n        this.catsService = catsService;\n    }\n    create(CreateCatDto) {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.catsService.create(CreateCatDto);\n        });\n    }\n    findAll() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return this.catsService.findAll();\n        });\n    }\n};\n__decorate([\n    common_1.Post(),\n    __param(0, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [dto_1.CreateCatDto]),\n    __metadata(\"design:returntype\", Promise)\n], CatsController.prototype, \"create\", null);\n__decorate([\n    common_1.Get(),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", Promise)\n], CatsController.prototype, \"findAll\", null);\nCatsController = __decorate([\n    common_1.Controller('cats'),\n    __metadata(\"design:paramtypes\", [cats_service_1.CatsService])\n], CatsController);\nexports.CatsController = CatsController;\n\n\n//# sourceURL=webpack:///./src/cats/cats.controller.ts?");

/***/ }),

/***/ "./src/cats/cats.service.ts":
/*!**********************************!*\
  !*** ./src/cats/cats.service.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet CatsService = class CatsService {\n    constructor() {\n        this.cats = [];\n    }\n    create(cat) {\n        this.cats.push(cat);\n    }\n    findAll() {\n        return this.cats;\n    }\n};\nCatsService = __decorate([\n    common_1.Injectable()\n], CatsService);\nexports.CatsService = CatsService;\n\n\n//# sourceURL=webpack:///./src/cats/cats.service.ts?");

/***/ })

};