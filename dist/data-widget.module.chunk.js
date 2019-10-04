webpackJsonp(["data-widget.module"],{

/***/ "./src/app/theme/widget/data-widget/data-widget-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataWidgetRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_widget_component__ = __webpack_require__("./src/app/theme/widget/data-widget/data-widget.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__data_widget_component__["a" /* DataWidgetComponent */],
        data: {
            title: 'Data Widget',
            status: false
        }
    }
];
var DataWidgetRoutingModule = /** @class */ (function () {
    function DataWidgetRoutingModule() {
    }
    DataWidgetRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], DataWidgetRoutingModule);
    return DataWidgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\n  <div class=\"row\">\n    <!-- tabs card start -->\n    <div class=\"col-sm-12\">\n      <app-card [cardClass]=\"'tab-card'\" [cardOptionBlock]=\"true\">\n        <div class=\"md-tabs\">\n          <ngb-tabset>\n            <ngb-tab title=\"Home\">\n              <ng-template ngbTabContent>\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <tr>\n                        <th>Image</th>\n                        <th>Product Code</th>\n                        <th>Customer</th>\n                        <th>Purchased On</th>\n                        <th>Status</th>\n                        <th>Transaction ID</th>\n                      </tr>\n                      <tr>\n                        <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n                        <td>PNG002344</td>\n                        <td>John Deo</td>\n                        <td>05-01-2017</td>\n                        <td><span class=\"label label-danger\">Failed</span></td>\n                        <td>#7234486</td>\n                      </tr>\n                      <tr>\n                        <td><img src=\"assets/images/product/prod3.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n                        <td>PNG002653</td>\n                        <td>Eugine Turner</td>\n                        <td>04-01-2017</td>\n                        <td><span class=\"label label-success\">Delivered</span></td>\n                        <td>#7234417</td>\n                      </tr>\n                      <tr>\n                        <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n                        <td>PNG002156</td>\n                        <td>Jacqueline Howell</td>\n                        <td>03-01-2017</td>\n                        <td><span class=\"label label-warning\">Pending</span></td>\n                        <td>#7234454</td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class=\"text-center\">\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab title=\"Security\">\n              <ng-template ngbTabContent>\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <tr>\n                        <th>Image</th>\n                        <th>Product Code</th>\n                        <th>Customer</th>\n                        <th>Purchased On</th>\n                        <th>Status</th>\n                        <th>Transaction ID</th>\n                      </tr>\n                      <tr>\n                        <td><img src=\"assets/images/product/prod3.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n                        <td>PNG002653</td>\n                        <td>Eugine Turner</td>\n                        <td>04-01-2017</td>\n                        <td><span class=\"label label-success\">Delivered</span></td>\n                        <td>#7234417</td>\n                      </tr>\n                      <tr>\n                        <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n                        <td>PNG002156</td>\n                        <td>Jacqueline Howell</td>\n                        <td>03-01-2017</td>\n                        <td><span class=\"label label-warning\">Pending</span></td>\n                        <td>#7234454</td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class=\"text-center\">\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab title=\"Entertainment\">\n              <ng-template ngbTabContent>\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <tr>\n                        <th>Image</th>\n                        <th>Product Code</th>\n                        <th>Customer</th>\n                        <th>Purchased On</th>\n                        <th>Status</th>\n                        <th>Transaction ID</th>\n                      </tr>\n                      <tr>\n                        <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n                        <td>PNG002413</td>\n                        <td>Jane Elliott</td>\n                        <td>06-01-2017</td>\n                        <td><span class=\"label label-primary\">Shipping</span></td>\n                        <td>#7234421</td>\n                      </tr>\n                      <tr>\n                        <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n                        <td>PNG002156</td>\n                        <td>Jacqueline Howell</td>\n                        <td>03-01-2017</td>\n                        <td><span class=\"label label-warning\">Pending</span></td>\n                        <td>#7234454</td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class=\"text-center\">\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab title=\"Big Data\">\n              <ng-template ngbTabContent>\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <tr>\n                        <th>Image</th>\n                        <th>Product Code</th>\n                        <th>Customer</th>\n                        <th>Purchased On</th>\n                        <th>Status</th>\n                        <th>Transaction ID</th>\n                      </tr>\n                      <tr>\n                        <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n                        <td>PNG002413</td>\n                        <td>Jane Elliott</td>\n                        <td>06-01-2017</td>\n                        <td><span class=\"label label-primary\">Shipping</span></td>\n                        <td>#7234421</td>\n                      </tr>\n                      <tr>\n                        <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n                        <td>PNG002344</td>\n                        <td>John Deo</td>\n                        <td>05-01-2017</td>\n                        <td><span class=\"label label-danger\">Failed</span></td>\n                        <td>#7234486</td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class=\"text-center\">\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n          </ngb-tabset>\n        </div>\n      </app-card>\n    </div>\n    <!-- tabs card end -->\n\n    <!-- social statustic start -->\n    <div class=\"col-md-12 col-lg-4\">\n      <div class=\"card chat-card\">\n        <div class=\"card-header\">\n          <h5>Chats</h5>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"media received-chat\">\n            <img class=\"align-self-start mr-3 img-radius img-40\" src=\"assets/images/avatar-2.jpg\" alt=\"usrer image\">\n            <div class=\"media-body\">\n              <h6 class=\"mt-0\">John Deo</h6>\n              <p class=\"m-t-10 msg\">Lorem Ipsum is simply dummy text of the printing industry.</p>\n              <p class=\"text-muted\">10:53am</p>\n            </div>\n          </div>\n          <div class=\"chat-saprator\"><span>Today</span></div>\n          <div class=\"media send-chat\">\n            <div class=\"media-body\">\n              <h6 class=\"mt-0\">John Deo</h6>\n              <p class=\"m-t-10 msg\">Lorem Ipsum is simply dummy text of the printing industry.</p>\n              <p class=\"text-muted\">10:53am</p>\n            </div>\n            <img class=\"align-self-start ml-3 img-radius img-40\" src=\"assets/images/avatar-4.jpg\" alt=\"usrer image\">\n          </div>\n          <div class=\"media received-chat\">\n            <img class=\"align-self-start mr-3 img-radius img-40\" src=\"assets/images/avatar-2.jpg\" alt=\"usrer image\">\n            <div class=\"media-body\">\n              <h6 class=\"mt-0\">John Deo</h6>\n              <p class=\"m-t-10 msg\">Lorem Ipsum is simply dummy text of the printing industry.</p>\n              <p class=\"text-muted\">10:53am</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer chat-control\">\n          <div class=\"chat-form\">\n            <input type=\"text\" class=\"form-control search-text\" placeholder=\"Type Hear . .\">\n            <div class=\"chat-btn\">\n              <button class=\"btn btn-primary btn-icon\"><i class=\"fa fa-paper-plane\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-8\">\n      <app-card [title]=\"'Activity'\">\n        <ul class=\"activity-blog\">\n          <li>\n            <div class=\"activity-user-img\">\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n            </div>\n            <h6 class=\"m-b-0\">John Deo <small class=\"text-muted\"> 2 hours ago</small></h6>\n            <p class=\"m-b-15\">Assign a new Task <span class=\"text-c-blue\">Design Web Mockup</span></p>\n            <div class=\"row m-b-15\">\n              <div class=\"col-auto text-center m-b-5 m-t-5\">\n                <img src=\"assets/images/blog/blog-r-1.jpg\" alt=\"img\" class=\"img-fluid img-100\">\n              </div>\n              <div class=\"col-auto text-center m-b-5 m-t-5\">\n                <img src=\"assets/images/blog/blog-r-2.jpg\" alt=\"img\" class=\"img-fluid img-100\">\n              </div>\n              <div class=\"col-auto text-center m-b-5 m-t-5\">\n                <img src=\"assets/images/blog/blog-r-3.jpg\" alt=\"img\" class=\"img-fluid img-100\">\n              </div>\n              <div class=\"col-auto text-center m-b-5 m-t-5\">\n                <img src=\"assets/images/blog/blog-r-2.jpg\" alt=\"img\" class=\"img-fluid img-100\">\n              </div>\n            </div>\n            <a href=\"javascript:\" class=\"m-r-10\"><i class=\"fa fa-comment text-c-blue m-r-5\"></i> 3 Comments</a>\n            <a href=\"javascript:\"> <i class=\"fa fa-heart text-c-pink m-r-5\"></i> 5 Like</a>\n          </li>\n          <li>\n            <div class=\"activity-user-img\">\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n            </div>\n            <h6 class=\"m-b-0\">John Deo <small class=\"text-muted\"> 2 hours ago</small></h6>\n            <div class=\"row m-b-15 m-t-15\">\n              <div class=\"col-auto col-sm-3\">\n                <img src=\"assets/images/blog/blog-r-1.jpg\" alt=\"img\" class=\"img-fluid img-100\">\n              </div>\n              <div class=\"col-sm-auto col-sm-9\">\n                <p class=\"m-b-15\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n                <button class=\"btn btn-primary btn-round btn-sm\">Design Web Mockup</button>\n              </div>\n            </div>\n            <a href=\"javascript:\" class=\"m-r-10\"><i class=\"fa fa-comment text-c-blue m-r-5\"></i> 3 Comments</a>\n            <a href=\"javascript:\"> <i class=\"fa fa-heart text-c-pink m-r-5\"></i> 5 Like</a>\n          </li>\n          <li>\n            <div class=\"activity-user-img\">\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n            </div>\n            <h6 class=\"m-b-0\">John Deo <small class=\"text-muted\"> 2 hours ago</small></h6>\n            <p class=\"m-b-15 m-t-15\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n            <a href=\"javascript:\" class=\"m-r-10\"><i class=\"fa fa-comment text-c-blue m-r-5\"></i> 3 Comments</a>\n            <a href=\"javascript:\"> <i class=\"fa fa-heart text-c-pink m-r-5\"></i> 5 Like</a>\n          </li>\n        </ul>\n      </app-card>\n      <!-- social statustic end -->\n    </div>\n    <!-- social statustic end -->\n\n    <!-- activity feed start -->\n    <div class=\"col-sm-12\">\n      <app-card [title]=\"'Activity Feed'\" [cardOptionBlock]=\"true\">\n        <ul class=\"feed-blog\">\n          <li class=\"active-feed\">\n            <div class=\"feed-user-img\">\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n            </div>\n            <h6><span class=\"label label-danger\">File</span> Eddie uploaded new files: <small class=\"text-muted\"> 2 hours ago</small></h6>\n            <p class=\"m-b-15 m-t-15\">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n            <div class=\"row\">\n              <div class=\"col-auto text-center\">\n                <img src=\"assets/images/blog/blog-r-1.jpg\" alt=\"img\" class=\"img-fluid img-100\">\n                <h6 class=\"m-t-15 m-b-0\">Old Scooter</h6>\n                <p class=\"text-muted m-b-0\"><small>PNG-100KB</small></p>\n              </div>\n              <div class=\"col-auto text-center\">\n                <img src=\"assets/images/blog/blog-r-2.jpg\" alt=\"img\" class=\"img-fluid img-100\">\n                <h6 class=\"m-t-15 m-b-0\">Wall Art</h6>\n                <p class=\"text-muted m-b-0\"><small>PNG-150KB</small></p>\n              </div>\n              <div class=\"col-auto text-center\">\n                <img src=\"assets/images/blog/blog-r-3.jpg\" alt=\"img\" class=\"img-fluid img-100\">\n                <h6 class=\"m-t-15 m-b-0\">Microphone</h6>\n                <p class=\"text-muted m-b-0\"><small>PNG-150KB</small></p>\n              </div>\n            </div>\n          </li>\n          <li class=\"diactive-feed\">\n            <div class=\"feed-user-img\">\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n            </div>\n            <h6><span class=\"label label-success\">Task</span>Sarah marked the Pending Review: <span class=\"text-c-green\"> Trash Can Icon Design</span><small class=\"text-muted\"> 2 hours ago</small></h6>\n          </li>\n          <li class=\"diactive-feed\">\n            <div class=\"feed-user-img\">\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n            </div>\n            <h6><span class=\"label label-primary\">comment</span> abc posted a task:  <span class=\"text-c-green\">Design a new Homepage</span>  <small class=\"text-muted\"> 6 hours ago</small></h6>\n            <p class=\"m-b-15 m-t-15\">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n          </li>\n        </ul>\n      </app-card>\n    </div>\n    <!-- activity feed end -->\n\n    <!-- Recent Orders start -->\n    <div class=\"col-sm-12\">\n      <app-card [title]=\"'Recent Orders'\" [blockClass]=\"'p-0'\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <tr>\n              <th>Image</th>\n              <th>Product Code</th>\n              <th>Customer</th>\n              <th>Purchased On</th>\n              <th>Status</th>\n              <th>Transaction ID</th>\n            </tr>\n            <tr>\n              <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n              <td>PNG002413</td>\n              <td>Jane Elliott</td>\n              <td>06-01-2017</td>\n              <td><span class=\"label label-primary\">Shipping</span></td>\n              <td>#7234421</td>\n            </tr>\n            <tr>\n              <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n              <td>PNG002344</td>\n              <td>John Deo</td>\n              <td>05-01-2017</td>\n              <td><span class=\"label label-danger\">Failed</span></td>\n              <td>#7234486</td>\n            </tr>\n            <tr>\n              <td><img src=\"assets/images/product/prod3.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n              <td>PNG002653</td>\n              <td>Eugine Turner</td>\n              <td>04-01-2017</td>\n              <td><span class=\"label label-success\">Delivered</span></td>\n              <td>#7234417</td>\n            </tr>\n            <tr>\n              <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\n              <td>PNG002156</td>\n              <td>Jacqueline Howell</td>\n              <td>03-01-2017</td>\n              <td><span class=\"label label-warning\">Pending</span></td>\n              <td>#7234454</td>\n            </tr>\n          </table>\n        </div>\n      </app-card>\n    </div>\n    <!-- Recent Orders end -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataWidgetComponent; });
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


var DataWidgetComponent = /** @class */ (function () {
    function DataWidgetComponent() {
    }
    DataWidgetComponent.prototype.ngOnInit = function () {
    };
    DataWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-data-widget',
            template: __webpack_require__("./src/app/theme/widget/data-widget/data-widget.component.html"),
            styles: [__webpack_require__("./src/app/theme/widget/data-widget/data-widget.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('fadeInOutTranslate', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'translate(0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DataWidgetComponent);
    return DataWidgetComponent;
}());



/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataWidgetModule", function() { return DataWidgetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_widget_component__ = __webpack_require__("./src/app/theme/widget/data-widget/data-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_widget_routing_module__ = __webpack_require__("./src/app/theme/widget/data-widget/data-widget-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DataWidgetModule = /** @class */ (function () {
    function DataWidgetModule() {
    }
    DataWidgetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__data_widget_routing_module__["a" /* DataWidgetRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__data_widget_component__["a" /* DataWidgetComponent */]]
        })
    ], DataWidgetModule);
    return DataWidgetModule;
}());



/***/ })

});
//# sourceMappingURL=data-widget.module.chunk.js.map