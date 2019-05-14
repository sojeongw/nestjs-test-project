exports.id = "main";
exports.modules = {

/***/ "./src/cats/cats.module.ts":
/*!*********************************!*\
  !*** ./src/cats/cats.module.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst cats_controller_1 = __webpack_require__(/*! ./cats.controller */ \"./src/cats/cats.controller.ts\");\nconst cats_service_1 = __webpack_require__(/*! ./service/cats.service */ \"./src/cats/service/cats.service.ts\");\nlet CatsModule = class CatsModule {\n};\nCatsModule = __decorate([\n    common_1.Module({\n        controllers: [cats_controller_1.CatsController],\n        providers: [cats_service_1.CatsService],\n    })\n], CatsModule);\nexports.CatsModule = CatsModule;\n\n\n//# sourceURL=webpack:///./src/cats/cats.module.ts?");

/***/ }),

/***/ "./src/cats/service/cats.service.ts":
/*!******************************************!*\
  !*** ./src/cats/service/cats.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: ENOENT: no such file or directory, open '/Users/sojeong/DE-labtory/test-project/src/cats/service/cats.service.ts'\");\n\n//# sourceURL=webpack:///./src/cats/service/cats.service.ts?");

/***/ })

};