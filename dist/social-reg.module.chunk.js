webpackJsonp(["social-reg.module"],{

/***/ "./src/app/theme/auth/registration/social-reg/social-reg-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialRegRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_reg_component__ = __webpack_require__("./src/app/theme/auth/registration/social-reg/social-reg.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__social_reg_component__["a" /* SocialRegComponent */],
        data: {
            title: 'Social Registration'
        }
    }
];
var SocialRegRoutingModule = /** @class */ (function () {
    function SocialRegRoutingModule() {
    }
    SocialRegRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], SocialRegRoutingModule);
    return SocialRegRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\n  <!-- Container-fluid starts -->\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <!-- Authentication card start -->\n        <div class=\"signup-card card-block auth-body mr-auto ml-auto\">\n          <form class=\"md-float-material\">\n            <div class=\"text-center\">\n              <img src=\"assets/images/logo.png\" alt=\"Gradient Able\">\n            </div>\n            <div class=\"auth-box\">\n              <div class=\"row m-b-20\">\n                <div class=\"col-md-12\">\n                  <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\n                </div>\n              </div>\n              <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in easily with your social account:</p>\n              <div class=\"row m-b-20\">\n                <div class=\"col-md-6\">\n                  <button type=\"button\" class=\"btn btn-facebook m-b-20\"><i class=\"fa fa-facebook\"></i>Sign in with facebook</button>\n                </div>\n                <div class=\"col-md-6\">\n                  <button type=\"button\" class=\"btn btn-twitter m-b-0\"><i class=\"fa fa-twitter\"></i>Sign in with twitter</button>\n                </div>\n              </div>\n              <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in with your regular account</p>\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Choose Username\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Choose Password\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"row m-t-25 text-left\">\n                <div class=\"col-md-12\">\n                  <div class=\"checkbox-fade fade-in-primary\">\n                    <label>\n                      <input type=\"checkbox\" value=\"\">\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\n                      <span class=\"text-inverse\">I read and accept <a href=\"javascript:\">Terms &amp; Conditions.</a></span>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"checkbox-fade fade-in-primary\">\n                    <label>\n                      <input type=\"checkbox\" value=\"\">\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\n                      <span class=\"text-inverse\">Send me the <a href=\"javascript:\">Newsletter</a> weekly.</span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row m-t-30\">\n                <div class=\"col-md-12\">\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign up now</button>\n                </div>\n              </div>\n              <hr/>\n              <div class=\"row\">\n                <div class=\"col-md-10\">\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\n                  <p class=\"text-inverse text-left\"><b>Your Authentication Team</b></p>\n                </div>\n                <div class=\"col-md-2\">\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"Gradient Able\">\n                </div>\n              </div>\n            </div>\n          </form>\n          <!-- end of form -->\n        </div>\n        <!-- Authentication card end -->\n      </div>\n      <!-- end of col-sm-12 -->\n    </div>\n    <!-- end of row -->\n  </div>\n  <!-- end of container-fluid -->\n</section>\n"

/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialRegComponent; });
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

var SocialRegComponent = /** @class */ (function () {
    function SocialRegComponent() {
    }
    SocialRegComponent.prototype.ngOnInit = function () {
    };
    SocialRegComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-social-reg',
            template: __webpack_require__("./src/app/theme/auth/registration/social-reg/social-reg.component.html"),
            styles: [__webpack_require__("./src/app/theme/auth/registration/social-reg/social-reg.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialRegComponent);
    return SocialRegComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/social-reg/social-reg.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRegModule", function() { return SocialRegModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_reg_component__ = __webpack_require__("./src/app/theme/auth/registration/social-reg/social-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__social_reg_routing_module__ = __webpack_require__("./src/app/theme/auth/registration/social-reg/social-reg-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SocialRegModule = /** @class */ (function () {
    function SocialRegModule() {
    }
    SocialRegModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__social_reg_routing_module__["a" /* SocialRegRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__social_reg_component__["a" /* SocialRegComponent */]]
        })
    ], SocialRegModule);
    return SocialRegModule;
}());



/***/ })

});
//# sourceMappingURL=social-reg.module.chunk.js.map