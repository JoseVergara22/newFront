webpackJsonp(["invoice-summary.module"],{

/***/ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceSummaryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_summary_component__ = __webpack_require__("./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__invoice_summary_component__["a" /* InvoiceSummaryComponent */],
        data: {
            title: 'Invoice Summary',
            icon: 'ti-layout-media-right',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - invoice summary',
            status: true
        }
    }
];
var InvoiceSummaryRoutingModule = /** @class */ (function () {
    function InvoiceSummaryRoutingModule() {
    }
    InvoiceSummaryRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], InvoiceSummaryRoutingModule);
    return InvoiceSummaryRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-6\">\n    <!-- Sales and expense card start -->\n    <app-card [title]=\"'Sales and Expenses'\" [cardOptionBlock]=\"true\">\n      <chart [type]=\"type1\" [data]=\"data1\" [options]=\"options\" style=\"height:310px;width:100%\"></chart>\n    </app-card>\n    <!-- Sales and expense card end -->\n  </div>\n  <div class=\"col-md-12 col-lg-6\">\n    <!-- Sales, Receipt and Dues card start -->\n    <app-card [title]=\"'Sales, Receipt and Dues'\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-lg table-hover\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>Sales</th>\n            <th>Receipt</th>\n            <th>Dues</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">Today</th>\n            <td>$250.00</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">This Week</th>\n            <td>$380.00</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">This Month</th>\n            <td>$450.00</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">This Year</th>\n            <td>$600.00</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Total</th>\n            <td>$600.00</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Sales, Receipt and Dues card end -->\n  </div>\n  <div class=\"col-sm-12\">\n    <!-- Recent Orders card start -->\n    <app-card [title]=\"'Recent Orders'\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-lg table-styling\">\n          <thead>\n          <tr class=\"table-primary\">\n            <th>#</th>\n            <th>Order No.</th>\n            <th>Product Name</th>\n            <th>Quantity</th>\n            <th>Price</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>54822</td>\n            <td>Product 1</td>\n            <td>2</td>\n            <td>\n              <label class=\"label label-md label-danger\">$99.00</label>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>54823</td>\n            <td>Product 2</td>\n            <td>1</td>\n            <td>\n              <label class=\"label label-md label-success\">$29.00</label>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>54824</td>\n            <td>Product 3</td>\n            <td>3</td>\n            <td>\n              <label class=\"label label-md label-warning\">$109.00</label>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Recent Orders card end -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceSummaryComponent; });
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

var InvoiceSummaryComponent = /** @class */ (function () {
    function InvoiceSummaryComponent() {
        this.type1 = 'bar';
        this.data1 = {
            labels: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                    label: 'Sales',
                    backgroundColor: [
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(95, 190, 170, 0.99)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)'
                    ],
                    data: [65, 59, 80, 81, 56, 55, 50, 45],
                }, {
                    label: 'Expense',
                    backgroundColor: [
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(93, 156, 236, 0.93)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(103, 162, 237, 0.82)'
                    ],
                    data: [60, 69, 85, 91, 58, 50, 45, 45],
                }]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            barValueSpacing: 20
        };
    }
    InvoiceSummaryComponent.prototype.ngOnInit = function () {
    };
    InvoiceSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice-summary',
            template: __webpack_require__("./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.html"),
            styles: [__webpack_require__("./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceSummaryComponent);
    return InvoiceSummaryComponent;
}());



/***/ }),

/***/ "./src/app/theme/extension/invoice/invoice-summary/invoice-summary.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceSummaryModule", function() { return InvoiceSummaryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_summary_component__ = __webpack_require__("./src/app/theme/extension/invoice/invoice-summary/invoice-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_summary_routing_module__ = __webpack_require__("./src/app/theme/extension/invoice/invoice-summary/invoice-summary-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InvoiceSummaryModule = /** @class */ (function () {
    function InvoiceSummaryModule() {
    }
    InvoiceSummaryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__invoice_summary_routing_module__["a" /* InvoiceSummaryRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__invoice_summary_component__["a" /* InvoiceSummaryComponent */]]
        })
    ], InvoiceSummaryModule);
    return InvoiceSummaryModule;
}());



/***/ })

});
//# sourceMappingURL=invoice-summary.module.chunk.js.map