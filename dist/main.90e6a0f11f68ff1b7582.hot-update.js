exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\nconst cats_controller_1 = __webpack_require__(/*! ./cats/controller/cats.controller */ \"./src/cats/controller/cats.controller.ts\");\nconst cats_service_1 = __webpack_require__(/*! ./cats/service/cats.service */ \"./src/cats/service/cats.service.ts\");\nconst cats_module_1 = __webpack_require__(/*! ./cats/cats.module */ \"./src/cats/cats.module.ts\");\nlet AppModule = class AppModule {\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [cats_module_1.CatsModule],\n        controllers: [app_controller_1.AppController, cats_controller_1.CatsController],\n        providers: [app_service_1.AppService, cats_service_1.CatsService],\n    })\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/cats/cats.module.ts":
/*!*********************************!*\
  !*** ./src/cats/cats.module.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst cats_controller_1 = __webpack_require__(/*! ./controller/cats.controller */ \"./src/cats/controller/cats.controller.ts\");\nconst cats_service_1 = __webpack_require__(/*! ./service/cats.service */ \"./src/cats/service/cats.service.ts\");\nlet CatsModule = class CatsModule {\n};\nCatsModule = __decorate([\n    common_1.Module({\n        controllers: [cats_controller_1.CatsController],\n        providers: [cats_service_1.CatsService],\n    })\n], CatsModule);\nexports.CatsModule = CatsModule;\n\n\n//# sourceURL=webpack:///./src/cats/cats.module.ts?");

/***/ })

};