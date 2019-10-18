webpackJsonp(["styling.module"],{

/***/ "./src/app/theme/table/bootstrap-table/styling/styling-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styling_component__ = __webpack_require__("./src/app/theme/table/bootstrap-table/styling/styling.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__styling_component__["a" /* StylingComponent */],
        data: {
            title: 'Bootstrap Styling Tables',
            icon: 'ti-receipt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - styling table',
            status: true
        }
    }
];
var StylingRoutingModule = /** @class */ (function () {
    function StylingRoutingModule() {
    }
    StylingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], StylingRoutingModule);
    return StylingRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/table/bootstrap-table/styling/styling.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Default Styling table start -->\n    <app-card [title]=\"'Default Styling'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">use class <code>table table-styling</code> inside table element</span>\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Default Styling table start -->\n    <!-- Table header styling table start -->\n    <app-card [title]=\"'Table Header styling'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">use class <code>table-primary, table-*</code> inside thead tr element</span>\n      <div class=\"table-responsive\">\n        <table class=\"table table-styling\">\n          <thead>\n          <tr class=\"table-primary\">\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Table header styling table end -->\n    <!-- Table footer Styling table start -->\n    <app-card [title]=\"'Table footer Styling'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">use class <code>table-info</code> inside tfoot element</span>\n      <div class=\"table-responsive\">\n        <table class=\"table table-styling\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n          <tfoot class=\"table-info\">\n          <tr>\n            <th scope=\"row\">#</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tfoot>\n        </table>\n      </div>\n    </app-card>\n    <!-- Table footer Styling table end -->\n    <!-- Custom table color table start -->\n    <app-card [title]=\"'Custom table color'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">use class <code>table-*</code> inside table element</span>\n      <div class=\"table-responsive\">\n        <table class=\"table table-styling table-info\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Custom table color table end -->\n    <!-- Custom Table color with hover and stripped table start -->\n    <app-card [title]=\"'Custom Table color with hover and stripped'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">use class <code>table-hover, table-striped table-*</code> inside table element</span>\n      <div class=\"table-responsive\">\n        <table class=\"table table-styling table-hover table-striped table-primary\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Custom Table color with hover and stripped table end -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/table/bootstrap-table/styling/styling.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/bootstrap-table/styling/styling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StylingComponent = /** @class */ (function () {
    function StylingComponent() {
    }
    StylingComponent.prototype.ngOnInit = function () {
    };
    StylingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-styling',
            template: __webpack_require__("./src/app/theme/table/bootstrap-table/styling/styling.component.html"),
            styles: [__webpack_require__("./src/app/theme/table/bootstrap-table/styling/styling.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StylingComponent);
    return StylingComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/bootstrap-table/styling/styling.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylingModule", function() { return StylingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styling_component__ = __webpack_require__("./src/app/theme/table/bootstrap-table/styling/styling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styling_routing_module__ = __webpack_require__("./src/app/theme/table/bootstrap-table/styling/styling-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StylingModule = /** @class */ (function () {
    function StylingModule() {
    }
    StylingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__styling_routing_module__["a" /* StylingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__styling_component__["a" /* StylingComponent */]]
        })
    ], StylingModule);
    return StylingModule;
}());



/***/ })

});
//# sourceMappingURL=styling.module.chunk.js.map