webpackJsonp(["sizing.module"],{

/***/ "./src/app/theme/table/bootstrap-table/sizing/sizing-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sizing_component__ = __webpack_require__("./src/app/theme/table/bootstrap-table/sizing/sizing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__sizing_component__["a" /* SizingComponent */],
        data: {
            title: 'Bootstrap Table Sizes',
            icon: 'ti-receipt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sizing table',
            status: true
        }
    }
];
var SizingRoutingModule = /** @class */ (function () {
    function SizingRoutingModule() {
    }
    SizingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], SizingRoutingModule);
    return SizingRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/table/bootstrap-table/sizing/sizing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Extra Large table start -->\n    <app-card [title]=\"'Extra Large table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">Example of Extra large table, Add <code>.table-xl</code> class to the <code>.table</code> to create a table with extra large spacing. Extra larger table all rows have <code>1.25rem</code> height.</span>\n      <div class=\"table-responsive\">\n        <table class=\"table table-xl\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Extra Large table end -->\n    <!-- Large table start -->\n    <app-card [title]=\"'Large table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">Example of large table, Add <code>.table-lg</code> class to the <code>.table</code> to create a table with  large spacing. larger table all rows have <code>0.9rem</code> height.</span>\n      <div class=\"table-responsive\">\n        <table class=\"table table-lg\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Large table end -->\n    <!-- Default table start-->\n    <app-card [title]=\"'Default table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">Example of default table, Add <code>.table-de</code> class to the <code>.table</code> to create a table with default spacing. Default table all rows have <code>0.75rem</code> height.</span>\n      <div class=\"table-responsive\">\n        <table class=\"table table-de\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Default table end-->\n    <!-- Small table start-->\n    <app-card [title]=\"'small table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">Example of small table, Add <code>.table-sm</code> class to the <code>.table</code> to create a table with small spacing. Small table all rows have <code>0.6rem</code> height.</span>\n      <div class=\"table-responsive\">\n        <table class=\"table table-sm\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Small table start-->\n    <!-- Extra small table start-->\n    <app-card [title]=\"'Extra small table'\" [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\n      <span class=\"code-header\">Example of extra small table, Add <code>.table-xs</code> class to the <code>.table</code> to create a table with extra small spacing. Extra small table all rows have <code>0.4rem</code> height.</span>\n      <div class=\"table-responsive\">\n        <table class=\"table table-xs\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Extra small table start-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/table/bootstrap-table/sizing/sizing.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/bootstrap-table/sizing/sizing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizingComponent; });
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

var SizingComponent = /** @class */ (function () {
    function SizingComponent() {
    }
    SizingComponent.prototype.ngOnInit = function () {
    };
    SizingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sizing',
            template: __webpack_require__("./src/app/theme/table/bootstrap-table/sizing/sizing.component.html"),
            styles: [__webpack_require__("./src/app/theme/table/bootstrap-table/sizing/sizing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SizingComponent);
    return SizingComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/bootstrap-table/sizing/sizing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizingModule", function() { return SizingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sizing_component__ = __webpack_require__("./src/app/theme/table/bootstrap-table/sizing/sizing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sizing_routing_module__ = __webpack_require__("./src/app/theme/table/bootstrap-table/sizing/sizing-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SizingModule = /** @class */ (function () {
    function SizingModule() {
    }
    SizingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__sizing_routing_module__["a" /* SizingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sizing_component__["a" /* SizingComponent */]]
        })
    ], SizingModule);
    return SizingModule;
}());



/***/ })

});
//# sourceMappingURL=sizing.module.chunk.js.map