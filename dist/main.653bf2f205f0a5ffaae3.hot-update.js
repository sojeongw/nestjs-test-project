exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst logger_middleware_1 = __webpack_require__(/*! ./common/middleware/logger.middleware */ \"./src/common/middleware/logger.middleware.ts\");\nconst cats_module_1 = __webpack_require__(/*! ./cats/cats.module */ \"./src/cats/cats.module.ts\");\nconst cats_controller_1 = __webpack_require__(/*! ./cats/cats.controller */ \"./src/cats/cats.controller.ts\");\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nlet AppModule = class AppModule {\n    configure(consumer) {\n        consumer\n            .apply(logger_middleware_1.LoggerMiddleware)\n            .exclude({ path: 'cats', method: common_1.RequestMethod.GET }, { path: 'cats', method: common_1.RequestMethod.POST })\n            .forRoutes(cats_controller_1.CatsController);\n    }\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [cats_module_1.CatsModule],\n        provide: core_1.APP_PIPE,\n        useClass: common_1.ValidationPipe,\n    })\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

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

/***/ "./src/logger.middleware.ts":
false

};