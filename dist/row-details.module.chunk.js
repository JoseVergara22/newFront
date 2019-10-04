webpackJsonp(["row-details.module"],{

/***/ "./src/app/theme/table/data-table/row-details/row-details-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowDetailsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__row_details_component__ = __webpack_require__("./src/app/theme/table/data-table/row-details/row-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__row_details_component__["a" /* RowDetailsComponent */],
        data: {
            title: 'Extra Information Details',
            icon: 'ti-widgetized',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - row detsils',
            status: true
        }
    }
];
var RowDetailsRoutingModule = /** @class */ (function () {
    function RowDetailsRoutingModule() {
    }
    RowDetailsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], RowDetailsRoutingModule);
    return RowDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/row-details/row-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'Ng-X CHILD ROWS (SHOW EXTRA / DETAILED INFORMATION)'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use class <code>expandable</code> and <code>data-table</code> inside ngx-datatable element with <code>ngx-datatable-column</code> elements</span>\n      <ngx-datatable\n        #myTable\n        class=\"data-table expandable\"\n        [rows]='rows'\n        [limit]=\"10\"\n        [columnMode]=\"'force'\"\n        [headerHeight]=\"50\"\n        [footerHeight]=\"50\"\n        [rowHeight]=\"'auto'\"\n        (page)=\"onPage($event)\">\n        <!-- Row Detail Template -->\n        <ngx-datatable-row-detail [rowHeight]=\"'auto'\" #myDetailRow (toggle)=\"onDetailToggle($event)\">\n          <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-row-detail-template>\n            <div class=\"dt-desc\">\n              <table class=\"table-striped table-bordered\">\n                <tr>\n                  <th colspan=\"2\"><strong>Address</strong></th>\n                </tr>\n                <tr>\n                  <td>City</td>\n                  <td>{{row.address.city}}</td>\n                </tr>\n                <tr>\n                  <td>State</td>\n                  <td>{{row.address.state}}</td>\n                </tr>\n              </table>\n            </div>\n\n          </ng-template>\n        </ngx-datatable-row-detail>\n        <ngx-datatable-column\n          [width]=\"50\"\n          [resizeable]=\"false\"\n          [sortable]=\"false\"\n          [draggable]=\"false\"\n          [canAutoResize]=\"false\">\n          <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-cell-template>\n            <a\n              href=\"javascript:;\"\n              [class.datatable-ti-right]=\"!expanded\"\n              [class.datatable-ti-down]=\"expanded\"\n              title=\"Expand/Collapse Row\"\n              (click)=\"toggleExpandRow(row)\">\n            </a>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Index\">\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\n            <strong>{{row['id']}}</strong>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Expanded\">\n          <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-cell-template>\n            <strong>{{expanded === 1}}</strong>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Name\">\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            <strong>{{value}}</strong>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Gender\">\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n            <i [innerHTML]=\"row['name']\"></i> and <i>{{value}}</i>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\n      </ngx-datatable>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/table/data-table/row-details/row-details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/table/data-table/row-details/row-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowDetailsComponent; });
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

var RowDetailsComponent = /** @class */ (function () {
    function RowDetailsComponent() {
        var _this = this;
        this.rows = [];
        this.expanded = {};
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    RowDetailsComponent.prototype.ngOnInit = function () { };
    RowDetailsComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    RowDetailsComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    RowDetailsComponent.prototype.toggleExpandRow = function (row) {
        this.table.rowDetail.toggleExpandRow(row);
    };
    RowDetailsComponent.prototype.onDetailToggle = function (event) { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTable'),
        __metadata("design:type", Object)
    ], RowDetailsComponent.prototype, "table", void 0);
    RowDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-row-details',
            template: __webpack_require__("./src/app/theme/table/data-table/row-details/row-details.component.html"),
            styles: [__webpack_require__("./src/app/theme/table/data-table/row-details/row-details.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RowDetailsComponent);
    return RowDetailsComponent;
}());



/***/ }),

/***/ "./src/app/theme/table/data-table/row-details/row-details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowDetailsModule", function() { return RowDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__row_details_component__ = __webpack_require__("./src/app/theme/table/data-table/row-details/row-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__row_details_routing_module__ = __webpack_require__("./src/app/theme/table/data-table/row-details/row-details-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RowDetailsModule = /** @class */ (function () {
    function RowDetailsModule() {
    }
    RowDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__row_details_routing_module__["a" /* RowDetailsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__row_details_component__["a" /* RowDetailsComponent */]]
        })
    ], RowDetailsModule);
    return RowDetailsModule;
}());



/***/ })

});
//# sourceMappingURL=row-details.module.chunk.js.map