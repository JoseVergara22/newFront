webpackJsonp(["header-footer-login.module"],{

/***/ "./src/app/theme/auth/login/header-footer-login/header-footer-login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderFooterLoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_footer_login_component__ = __webpack_require__("./src/app/theme/auth/login/header-footer-login/header-footer-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__header_footer_login_component__["a" /* HeaderFooterLoginComponent */],
        data: {
            title: 'Header & Footer Login'
        }
    }
];
var HeaderFooterLoginRoutingModule = /** @class */ (function () {
    function HeaderFooterLoginRoutingModule() {
    }
    HeaderFooterLoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], HeaderFooterLoginRoutingModule);
    return HeaderFooterLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/header-footer-login/header-footer-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"pcoded\" class=\"pcoded\"\n     [attr.nav-type]=\"navType\"\n     [attr.theme-layout]=\"themeLayout\"\n     [attr.vertical-placement]=\"verticalPlacement\"\n     [attr.vertical-layout]=\"verticalLayout\"\n     [attr.pcoded-device-type]=\"pcodedDeviceType\"\n     [attr.vertical-nav-type]=\"verticalNavType\"\n     [attr.vertical-effect]=\"verticalEffect\"\n     [attr.vnavigation-view]=\"vnavigationView\"\n     [attr.fream-type]=\"freamType\"\n     [attr.sidebar-img]=\"sidebarImg\"\n     [attr.sidebar-img-type]=\"sidebarImgType\"\n     [attr.layout-type]=\"layoutType\"\n     (window:resize)=\"onResize($event)\"\n>\n  <div class=\"pcoded-overlay-box\"></div>\n  <div class=\"pcoded-container navbar-wrapper\">\n    <nav class=\"navbar header-navbar pcoded-header\" [attr.header-theme]=\"headerTheme\" [attr.pcoded-header-position]=\"pcodedHeaderPosition\">\n      <div class=\"navbar-wrapper\">\n        <div class=\"navbar-logo\">\n          <a [routerLink]=\"['/dashboard/default/']\">\n            <img src=\"assets/images/logo.png\" alt=\"Gradient Able\">\n          </a>\n          <a href=\"javascript:\" class=\"mobile-options\" (click)=\"toggleHeaderNavRight()\">\n            <i class=\"ti-more\"></i>\n          </a>\n        </div>\n        <div class=\"navbar-container container-fluid\">\n          <ul class=\"nav-left\">\n            <li>\n              <div class=\"sidebar_toggle\"><a href=\"javascript:\"><i class=\"ti-menu\"></i></a></div>\n            </li>\n            <li class=\"header-search\">\n              <div id=\"main-search\" class=\"main-search morphsearch-search\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-prepend search-close\" (click)=\"searchOff()\"><i class=\"ti-close input-group-text\"></i></span>\n                  <input class=\"form-control\" [style.width]=\"searchWidthString\">\n                  <span class=\"input-group-append search-btn\" (click)=\"searchOn()\"><i class=\"ti-search input-group-text\"></i></span>\n                </div>\n              </div>\n            </li>\n            <li appToggleFullScreen>\n              <a href=\"javascript:\">\n                <i class=\"ti-fullscreen\"></i>\n              </a>\n            </li>\n          </ul>\n          <ul [@mobileHeaderNavRight]=\"navRight\" [ngClass]=\"navRight\" class=\"nav-right\">\n            <li (clickOutside)=\"notificationOutsideClick('live')\" class=\"header-notification\" [ngClass]=\"liveNotificationClass\" (click)=\"toggleLiveNotification()\">\n              <a href=\"javascript:\">\n                <i class=\"ti-bell\"></i>\n                <span class=\"badge bg-c-pink\"></span>\n              </a>\n              <ul [@notificationBottom]=\"liveNotification\" class=\"show-notification\">\n                <li>\n                  <h6>Notifications</h6>\n                  <label class=\"label label-danger\">New</label>\n                </li>\n                <li>\n                  <div class=\"media\">\n                    <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\n                    <div class=\"media-body\">\n                      <h5 class=\"notification-user\">John Doe</h5>\n                      <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                      <span class=\"notification-time\">30 minutes ago</span>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"media\">\n                    <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-4.jpg\" alt=\"Generic placeholder image\">\n                    <div class=\"media-body\">\n                      <h5 class=\"notification-user\">Joseph William</h5>\n                      <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                      <span class=\"notification-time\">30 minutes ago</span>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"media\">\n                    <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\n                    <div class=\"media-body\">\n                      <h5 class=\"notification-user\">Sara Soudein</h5>\n                      <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                      <span class=\"notification-time\">30 minutes ago</span>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            <li (clickOutside)=\"notificationOutsideClick('profile')\" class=\"user-profile header-notification\" [ngClass]=\"profileNotificationClass\" (click)=\"toggleProfileNotification()\">\n              <a href=\"javascript:\">\n                <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\n                <span>John Doe</span>\n                <i class=\"ti-angle-down\"></i>\n              </a>\n              <ul [@notificationBottom]=\"profileNotification\" class=\"show-notification profile-notification\">\n                <li>\n                  <a href=\"javascript:\">\n                    <i class=\"ti-settings\"></i> Settings\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/user/profile/']\">\n                    <i class=\"ti-user\"></i> Profile\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/email/inbox/']\">\n                    <i class=\"ti-email\"></i> My Messages\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/authentication/lock-screen/']\">\n                    <i class=\"ti-lock\"></i> Lock Screen\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/authentication/login/']\">\n                    <i class=\"ti-layout-sidebar-left\"></i> Logout\n                  </a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n    <section class=\"login header p-fixed d-flex text-center bg-primary common-img-bg\">\n      <!-- Container-fluid starts -->\n\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <!-- Authentication card start -->\n            <div class=\"login-card card-block auth-body mr-auto ml-auto\">\n              <form class=\"md-float-material\">\n                <div class=\"text-center d-none d-lg-block  d-xl-block\">\n                  <img src=\"assets/images/logo.png\" alt=\"Gradient Able\">\n                </div>\n                <div class=\"auth-box\">\n                  <div class=\"row m-b-20\">\n                    <div class=\"col-md-12\">\n                      <h3 class=\"text-left txt-primary\">Sign In</h3>\n                    </div>\n                  </div>\n                  <hr/>\n                  <div class=\"input-group\">\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Your Email Address\">\n                    <span class=\"md-line\"></span>\n                  </div>\n                  <div class=\"input-group\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                    <span class=\"md-line\"></span>\n                  </div>\n                  <div class=\"row m-t-25 text-left\">\n                    <div class=\"col-12\">\n                      <div class=\"checkbox-fade fade-in-primary\">\n                        <label>\n                          <input type=\"checkbox\" value=\"\">\n                          <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\n                          <span class=\"text-inverse\">Remember me</span>\n                        </label>\n                      </div>\n                      <div class=\"forgot-phone text-right f-right\">\n                        <a [routerLink]=\"['/auth/forgot']\" class=\"text-right f-w-600 text-inverse\"> Forgot Password?</a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row m-t-30\">\n                    <div class=\"col-md-12\">\n                      <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign in</button>\n                    </div>\n                  </div>\n                  <hr/>\n                  <div class=\"row\">\n                    <div class=\"col-md-10\">\n                      <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\n                      <p class=\"text-inverse text-left\"><b>Your Authentication Team</b></p>\n                    </div>\n                    <div class=\"col-md-2\">\n                      <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"Gradient Able\">\n                    </div>\n                  </div>\n                </div>\n              </form>\n              <!-- end of form -->\n            </div>\n            <!-- Authentication card end -->\n          </div>\n          <!-- end of col-sm-12 -->\n        </div>\n        <!-- end of row -->\n      </div>\n      <!-- end of container-fluid -->\n\n    </section>\n    <div class=\"footer bg-inverse\">\n      <p class=\"text-center\">Copyright &copy; 2017 GRADIENT ABLE ADMIN , All rights reserved.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/auth/login/header-footer-login/header-footer-login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/auth/login/header-footer-login/header-footer-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderFooterLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderFooterLoginComponent = /** @class */ (function () {
    function HeaderFooterLoginComponent() {
        this.navType = 'st2';
        this.themeLayout = 'vertical';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.pcodedDeviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.vnavigationView = 'view1';
        this.freamType = 'theme1';
        this.sidebarImg = 'false';
        this.sidebarImgType = 'img1';
        this.layoutType = 'light';
        this.headerTheme = 'themelight5';
        this.pcodedHeaderPosition = 'fixed';
        this.liveNotification = 'an-off';
        this.profileNotification = 'an-off';
        this.searchWidth = 0;
        this.navRight = 'nav-on';
        this.windowWidth = window.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
    }
    HeaderFooterLoginComponent.prototype.ngOnInit = function () {
    };
    HeaderFooterLoginComponent.prototype.onResize = function (event) {
        this.windowWidth = event.target.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
    };
    HeaderFooterLoginComponent.prototype.setHeaderAttributes = function (windowWidth) {
        if (windowWidth < 992) {
            this.navRight = 'nav-off';
        }
        else {
            this.navRight = 'nav-on';
        }
    };
    HeaderFooterLoginComponent.prototype.toggleHeaderNavRight = function () {
        this.navRight = this.navRight === 'nav-on' ? 'nav-off' : 'nav-on';
    };
    HeaderFooterLoginComponent.prototype.toggleLiveNotification = function () {
        this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'active' : '';
    };
    HeaderFooterLoginComponent.prototype.toggleProfileNotification = function () {
        this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'active' : '';
    };
    HeaderFooterLoginComponent.prototype.notificationOutsideClick = function (ele) {
        if (ele === 'live' && this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        else if (ele === 'profile' && this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
    };
    HeaderFooterLoginComponent.prototype.searchOn = function () {
        var _this = this;
        document.querySelector('#main-search').classList.add('open');
        var searchInterval = setInterval(function () {
            if (_this.searchWidth >= 200) {
                clearInterval(searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth + 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    HeaderFooterLoginComponent.prototype.searchOff = function () {
        var _this = this;
        var searchInterval = setInterval(function () {
            if (_this.searchWidth <= 0) {
                document.querySelector('#main-search').classList.remove('open');
                clearInterval(searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth - 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    HeaderFooterLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-footer-login',
            template: __webpack_require__("./src/app/theme/auth/login/header-footer-login/header-footer-login.component.html"),
            styles: [__webpack_require__("./src/app/theme/auth/login/header-footer-login/header-footer-login.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('notificationBottom', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('an-off, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('an-animate', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        overflow: 'hidden',
                        height: __WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* AUTO_STYLE */],
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('an-off <=> an-animate', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('mobileHeaderNavRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('nav-off, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('nav-on', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        height: __WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* AUTO_STYLE */],
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('nav-off <=> nav-on', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderFooterLoginComponent);
    return HeaderFooterLoginComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/header-footer-login/header-footer-login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFooterLoginModule", function() { return HeaderFooterLoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_footer_login_component__ = __webpack_require__("./src/app/theme/auth/login/header-footer-login/header-footer-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_footer_login_routing_module__ = __webpack_require__("./src/app/theme/auth/login/header-footer-login/header-footer-login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HeaderFooterLoginModule = /** @class */ (function () {
    function HeaderFooterLoginModule() {
    }
    HeaderFooterLoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__header_footer_login_routing_module__["a" /* HeaderFooterLoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__header_footer_login_component__["a" /* HeaderFooterLoginComponent */]]
        })
    ], HeaderFooterLoginModule);
    return HeaderFooterLoginModule;
}());



/***/ })

});
//# sourceMappingURL=header-footer-login.module.chunk.js.map