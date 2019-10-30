webpackJsonp(["basic-elements.module"],{

/***/ "./src/app/theme/forms/basic-elements/basic-elements-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicElementsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_elements_component__ = __webpack_require__("./src/app/theme/forms/basic-elements/basic-elements.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__basic_elements_component__["a" /* BasicElementsComponent */],
        data: {
            title: 'Basic Form Inputs',
            icon: 'ti-layers',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - form components',
            status: true
        }
    }
];
var BasicElementsRoutingModule = /** @class */ (function () {
    function BasicElementsRoutingModule() {
    }
    BasicElementsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], BasicElementsRoutingModule);
    return BasicElementsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/forms/basic-elements/basic-elements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Basic Form Inputs card start -->\n    <app-card [title]=\"'Basic Form Inputs'\" [cardOptionBlock]=\"true\">\n      <h4 class=\"sub-title\">Basic Inputs</h4>\n      <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\n      <form>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Simple Input</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Placeholder</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Type your title in Placeholder\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Password</label>\n          <div class=\"col-sm-10\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password input\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Read only</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"You can't change me\" readonly>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Disable Input</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Disabled text\" disabled>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Predefine Input</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" value=\"Enter yout content after me\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Select Box</label>\n          <div class=\"col-sm-10\">\n            <select name=\"select\" class=\"form-control\">\n              <option value=\"opt1\">Select One Value Only</option>\n              <option value=\"opt2\">Type 2</option>\n              <option value=\"opt3\">Type 3</option>\n              <option value=\"opt4\">Type 4</option>\n              <option value=\"opt5\">Type 5</option>\n              <option value=\"opt6\">Type 6</option>\n              <option value=\"opt7\">Type 7</option>\n              <option value=\"opt8\">Type 8</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Round Input</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-round\" placeholder=\".form-control-round\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Maximum Length</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Content must be in 6 characters\" maxlength=\"6\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Disable Autocomplete</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Autocomplete Off\" autocomplete=\"off\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Static Text</label>\n          <div class=\"col-sm-10\">\n            <div class=\"form-control-static\">Hello !... This is static text</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Color</label>\n          <div class=\"col-sm-10\">\n            <input type=\"color\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Upload File</label>\n          <div class=\"col-sm-10\">\n            <input type=\"file\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Textarea</label>\n          <div class=\"col-sm-10\">\n            <textarea rows=\"5\" cols=\"5\" class=\"form-control\" placeholder=\"Default textarea\"></textarea>\n          </div>\n        </div>\n      </form>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h4 class=\"sub-title\">Input Sizes</h4>\n          <form>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\".form-control-lg\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" placeholder=\".form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\".form-control-sm\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-sm-6 mobile-inputs\">\n          <h4 class=\"sub-title\">Color Inputs</h4>\n          <form>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control form-control-primary\" placeholder=\".form-control-primary\">\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-warning\" placeholder=\".form-control-warning\">\n              </div>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-default\" placeholder=\".form-control-default\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-danger\" placeholder=\".form-control-danger\">\n              </div>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-success\" placeholder=\".form-control-success\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-inverse\" placeholder=\".form-control-inverse\">\n              </div>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-control-info\" placeholder=\".form-control-info\">\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6 mobile-inputs m-t-20\">\n          <h4 class=\"sub-title\">Text-color</h4>\n          <form>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control form-txt-primary\" placeholder=\".form-txt-primary\">\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-txt-warning\" placeholder=\".form-txt-warning\">\n              </div>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-txt-default\" placeholder=\".form-txt-default\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-txt-danger\" placeholder=\".form-txt-danger\">\n              </div>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-txt-success\" placeholder=\".form-txt-success\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-txt-inverse\" placeholder=\".form-txt-inverse\">\n              </div>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-txt-info\" placeholder=\".form-txt-info\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-sm-6 mobile-inputs m-t-20\">\n          <h4 class=\"sub-title\">Background-color</h4>\n          <form>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control form-bg-primary\" placeholder=\".form-bg-primary\">\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-bg-warning\" placeholder=\".form-bg-warning\">\n              </div>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-bg-default\" placeholder=\".form-bg-default\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-bg-danger\" placeholder=\".form-bg-danger\">\n              </div>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-bg-success\" placeholder=\".form-bg-success\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-bg-inverse\" placeholder=\".form-bg-inverse\">\n              </div>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control form-bg-info\" placeholder=\".form-bg-info\">\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </app-card>\n    <!-- Basic Form Inputs card end -->\n    <!-- Input Grid card start -->\n    <app-card [title]=\"'Input Grid'\" [cardOptionBlock]=\"true\">\n      <h4 class=\"sub-title\">Basic Inputs</h4>\n      <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\n      <form>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-1\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-1\">\n          </div>\n          <div class=\"col-sm-11\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-11\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-2\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-2\">\n          </div>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-10\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-3\">\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-9\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-4\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-4\">\n          </div>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-8\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-5\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-5\">\n          </div>\n          <div class=\"col-sm-7\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-7\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-6\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-6\">\n          </div>\n          <div class=\"col-sm-6\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-6\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-12\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-12\">\n          </div>\n        </div>\n      </form>\n      <h4 class=\"sub-title\">Flex Inputs</h4>\n      <form>\n        <div class=\"form-group row\">\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\n          </div>\n          <div class=\"col-sm-4\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-4\">\n          </div>\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\n          </div>\n          <div class=\"col-sm-6\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-6\">\n          </div>\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-8\">\n          </div>\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\n          </div>\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\n          </div>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col-sm-10\">\n          </div>\n          <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"col\">\n          </div>\n        </div>\n      </form>\n    </app-card>\n    <!-- Input Grid card end -->\n    <!-- Input Validation card start -->\n    <app-card [title]=\"'Input Validation'\" [cardOptionBlock]=\"true\">\n      <h4 class=\"sub-title\">Input Validation</h4>\n      <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\n      <div class=\"form-group has-success row\">\n        <div class=\"col-sm-2\">\n          <label class=\"col-form-label\" for=\"inputSuccess1\">Input with success</label>\n        </div>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\">\n          <div class=\"col-form-label\">Success! You've done it.</div>\n        </div>\n      </div>\n      <div class=\"form-group has-warning row\">\n        <div class=\"col-sm-2\">\n          <label class=\"col-form-label\" for=\"inputWarning1\">Input with warning</label>\n        </div>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning1\">\n          <div class=\"col-form-label\">Shucks, check the formatting of that and try again.</div>\n        </div>\n      </div>\n      <div class=\"form-group has-danger row\">\n        <div class=\"col-sm-2\">\n          <label class=\"col-form-label\" for=\"inputDanger1\">Input with danger</label>\n        </div>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\">\n          <div class=\"col-form-label\">Sorry, that username's taken. Try another?</div>\n        </div>\n      </div>\n    </app-card>\n    <!-- Input Validation card end -->\n    <!-- Input Alignment card start -->\n    <app-card [title]=\"'Input Alignment'\" [cardOptionBlock]=\"true\">\n      <h4 class=\"sub-title\">Input Alignment</h4>\n      <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\n      <form>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Normal Text</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-normal\" placeholder=\".form-control-normal\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Bold Text</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-bold\" placeholder=\".form-control-bold\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Capitalize Text</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-capitalize\" placeholder=\".form-control-capitalize\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Uppercase Text</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-uppercase\" placeholder=\".form-control-uppercase\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Lowercase Text</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-lowercase\" placeholder=\".form-control-lowercase\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Varient Text</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-variant\" placeholder=\".form-control-variant\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Left-Align Text</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-left\" placeholder=\".form-control-left\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Center-Align Text</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-center\" placeholder=\".form-control-center\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Right-Align Text</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-right\" placeholder=\".form-control-right\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">RTL Text</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control form-control-rtl\" placeholder=\".form-control-rtl\">\n          </div>\n        </div>\n      </form>\n    </app-card>\n    <!-- Input Alignment card end -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/forms/basic-elements/basic-elements.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/forms/basic-elements/basic-elements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicElementsComponent; });
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

var BasicElementsComponent = /** @class */ (function () {
    function BasicElementsComponent() {
    }
    BasicElementsComponent.prototype.ngOnInit = function () {
    };
    BasicElementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basic-elements',
            template: __webpack_require__("./src/app/theme/forms/basic-elements/basic-elements.component.html"),
            styles: [__webpack_require__("./src/app/theme/forms/basic-elements/basic-elements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicElementsComponent);
    return BasicElementsComponent;
}());



/***/ }),

/***/ "./src/app/theme/forms/basic-elements/basic-elements.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicElementsModule", function() { return BasicElementsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_elements_component__ = __webpack_require__("./src/app/theme/forms/basic-elements/basic-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_elements_routing_module__ = __webpack_require__("./src/app/theme/forms/basic-elements/basic-elements-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicElementsModule = /** @class */ (function () {
    function BasicElementsModule() {
    }
    BasicElementsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__basic_elements_routing_module__["a" /* BasicElementsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__basic_elements_component__["a" /* BasicElementsComponent */]]
        })
    ], BasicElementsModule);
    return BasicElementsModule;
}());



/***/ })

});
//# sourceMappingURL=basic-elements.module.chunk.js.map