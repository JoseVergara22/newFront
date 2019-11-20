webpackJsonp(["basic-other.module"],{

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicOtherRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_other_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__basic_other_component__["a" /* BasicOtherComponent */],
        data: {
            title: 'Other',
            icon: 'ti-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - other',
            status: true
        }
    }
];
var BasicOtherRoutingModule = /** @class */ (function () {
    function BasicOtherRoutingModule() {
    }
    BasicOtherRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], BasicOtherRoutingModule);
    return BasicOtherRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Panel card start -->\n    <app-card [title]=\"'Panel'\" [blockClass]=\"'panels-wells'\" [cardOptionBlock]=\"true\">\n      <div class=\"row\">\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading bg-default txt-white\">\n              Default Panel\n            </div>\n            <div class=\"panel-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\n            </div>\n            <div class=\"panel-footer\">\n              Panel Footer\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\n          <div class=\"panel panel-success\">\n            <div class=\"panel-heading bg-success\">\n              Success Panel\n            </div>\n            <div class=\"panel-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\n            </div>\n            <div class=\"panel-footer text-success\">\n              Panel Footer\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-heading bg-primary\">\n              Primary Panel\n            </div>\n            <div class=\"panel-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\n            </div>\n            <div class=\"panel-footer text-primary\">\n              Panel Footer\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\n          <div class=\"panel panel-danger\">\n            <div class=\"panel-heading bg-danger\">\n              Danger Panel\n            </div>\n            <div class=\"panel-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\n            </div>\n            <div class=\"panel-footer text-danger\">\n              Panel Footer\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\n          <div class=\"panel panel-warning\">\n            <div class=\"panel-heading bg-warning\">\n              Warning Panel\n            </div>\n            <div class=\"panel-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\n            </div>\n            <div class=\"panel-footer text-warning\">\n              Panel Footer\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\n          <div class=\"panel panel-info\">\n            <div class=\"panel-heading bg-info\">\n              Info Panel\n            </div>\n            <div class=\"panel-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\n            </div>\n            <div class=\"panel-footer text-info\">\n              Panel Footer\n            </div>\n          </div>\n        </div>\n        <!-- end of row -->\n      </div>\n    </app-card>\n    <!-- Panel card end -->\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Wells card start -->\n    <app-card [title]=\"'Wells'\" [blockClass]=\"'panels-wells'\" [cardOptionBlock]=\"true\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"well well-sm\">\n            Small Well\n          </div>\n          <div class=\"well\">\n            Normal Well\n          </div>\n          <div class=\"well well-lg\">\n            Large Well\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <!-- Wells card end -->\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 col-lg-6\">\n    <app-card [title]=\"'Default'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\n      <ngb-pagination [collectionSize]=\"totalItems\" [boundaryLinks]=\"true\"></ngb-pagination>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-lg-6\">\n    <app-card [title]=\"'Disabled'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\n      <ngb-pagination [collectionSize]=\"bigTotalItems\" [disabled]=\"true\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\"></ngb-pagination>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-lg-6\">\n    <app-card [title]=\"'Pagination Size'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardClass]=\"'o-hidden'\" [cardOptionBlock]=\"true\">\n      <div class=\"sub-title m-t-15\">Large</div>\n      <ngb-pagination [collectionSize]=\"bigTotalItemsLarge\" [maxSize]=\"maxSize\" size=\"lg\"></ngb-pagination>\n      <div class=\"sub-title m-t-15\">Medium</div>\n      <ngb-pagination [collectionSize]=\"bigTotalItems\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\"></ngb-pagination>\n      <div class=\"sub-title m-t-15\">Small</div>\n      <ngb-pagination [collectionSize]=\"bigTotalItems\" [maxSize]=\"maxSize\" size=\"sm\" [boundaryLinks]=\"true\"></ngb-pagination>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-lg-6\">\n    <app-card [title]=\"'Pagination Advance'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = false</div>\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = true</div>\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = true, ellipses = false</div>\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicOtherComponent; });
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

var BasicOtherComponent = /** @class */ (function () {
    function BasicOtherComponent() {
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigTotalItemsLarge = 30;
        this.totalItems = 64;
        this.pageAdvance = 1;
    }
    BasicOtherComponent.prototype.ngOnInit = function () {
    };
    BasicOtherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basic-other',
            template: __webpack_require__("./src/app/theme/ui-elements/basic/basic-other/basic-other.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/basic/basic-other/basic-other.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicOtherComponent);
    return BasicOtherComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicOtherModule", function() { return BasicOtherModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_other_component__ = __webpack_require__("./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_other_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/basic/basic-other/basic-other-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicOtherModule = /** @class */ (function () {
    function BasicOtherModule() {
    }
    BasicOtherModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__basic_other_routing_module__["a" /* BasicOtherRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__basic_other_component__["a" /* BasicOtherComponent */]]
        })
    ], BasicOtherModule);
    return BasicOtherModule;
}());



/***/ })

});
//# sourceMappingURL=basic-other.module.chunk.js.map