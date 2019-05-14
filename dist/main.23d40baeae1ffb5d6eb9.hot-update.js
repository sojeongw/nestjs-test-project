exports.id = "main";
exports.modules = {

/***/ "./src/cats/dto/create-cat.dto.ts":
/*!****************************************!*\
  !*** ./src/cats/dto/create-cat.dto.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"./node_modules/class-validator/index.js\");\nclass CreateCatDto {\n}\n__decorate([\n    class_validator_1.IsString(),\n    __metadata(\"design:type\", String)\n], CreateCatDto.prototype, \"name\", void 0);\n__decorate([\n    class_validator_1.IsInt(),\n    __metadata(\"design:type\", Number)\n], CreateCatDto.prototype, \"age\", void 0);\n__decorate([\n    class_validator_1.IsString(),\n    __metadata(\"design:type\", String)\n], CreateCatDto.prototype, \"breed\", void 0);\nexports.CreateCatDto = CreateCatDto;\n\n\n//# sourceURL=webpack:///./src/cats/dto/create-cat.dto.ts?");

/***/ }),

/***/ "./src/cats/dto/index.ts":
/*!*******************************!*\
  !*** ./src/cats/dto/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./create-cat.dto */ \"./src/cats/dto/create-cat.dto.ts\"));\n__export(__webpack_require__(/*! ./update-cat.dto */ \"./src/cats/dto/update-cat.dto.ts\"));\n__export(__webpack_require__(/*! ./list-all-entities.dto */ \"./src/cats/dto/list-all-entities.dto.ts\"));\n\n\n//# sourceURL=webpack:///./src/cats/dto/index.ts?");

/***/ })

};