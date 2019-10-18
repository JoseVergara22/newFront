webpackJsonp(["task-issue.module"],{

/***/ "./src/app/theme/task/task-issue/task-issue-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskIssueRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_issue_component__ = __webpack_require__("./src/app/theme/task/task-issue/task-issue.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__task_issue_component__["a" /* TaskIssueComponent */],
        data: {
            title: 'Task Issue',
            icon: 'ti-check-box',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - task issue',
            status: true
        }
    }
];
var TaskIssueRoutingModule = /** @class */ (function () {
    function TaskIssueRoutingModule() {
    }
    TaskIssueRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], TaskIssueRoutingModule);
    return TaskIssueRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/task/task-issue/task-issue.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\n  <div class=\"row\">\n    <div class=\"col-xl-4\">\n      <!-- Overall Progress card start -->\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <!-- <p>.col-sm-4</p> -->\n          <div class=\"issue-list-progress\">\n            <h6>Overall Progress</h6>\n            <div class=\"issue-progress\">\n              <div class=\"progress\">\n                <span #issueText1 class=\"issue-text1 txt-primary\"></span>\n                <div #issueBar1 class=\"issue-bar1 bg-primary\"></div>\n              </div>\n              <!-- end of progress -->\n            </div>\n            <!-- end of issue progress -->\n          </div>\n          <!-- end of issue list progress -->\n          <!-- end of matric progress -->\n          <div class=\"table-responsive\">\n            <table class=\"table matrics-table\">\n              <tbody>\n              <tr>\n                <td>\n                  <strong>Assigned Hours</strong>\n                </td>\n                <td class=\"txt-primary\">70 Hours</td>\n              </tr>\n              <tr>\n                <td>\n                  <strong>Time Consumed</strong>\n                </td>\n                <td class=\"txt-danger\">49 Hours</td>\n              </tr>\n              <tr>\n                <td>\n                  <strong>Issues</strong>\n                </td>\n                <td class=\"txt-primary\">19</td>\n              </tr>\n              <tr>\n                <td>\n                  <strong>Bugs</strong>\n                </td>\n                <td class=\"txt-primary\">16</td>\n              </tr>\n              <tr>\n                <td>\n                  <strong>Health</strong>\n                </td>\n                <td class=\"txt-success\">75%</td>\n              </tr>\n              <tr>\n                <td>\n                  <strong>Commits</strong>\n                </td>\n                <td class=\"txt-primary\">280</td>\n              </tr>\n              <tr>\n                <td>\n                  <strong>Bugs Percentage</strong>\n                </td>\n                <td class=\"txt-danger\">25%</td>\n              </tr>\n              <tr>\n                <td>\n                  <strong>Assign Date</strong>\n                </td>\n                <td class=\"txt-info\">02/11/2016</td>\n              </tr>\n              <tr>\n                <td>\n                  <strong>Last closed on</strong>\n                </td>\n                <td class=\"txt-info\">15/01/2017</td>\n              </tr>\n              </tbody>\n              <!-- end of tbody -->\n            </table>\n          </div>\n          <!-- end of table -->\n        </div>\n      </div>\n      <!-- Overall Progress card stendart -->\n    </div>\n    <div class=\"col-xl-8\">\n      <!-- New ticket button card start -->\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\" waves-effect waves-light m-r-10 v-middle issue-btn-group\">\n            <button type=\"button\" class=\"btn btn-sm btn-success btn-new-tickets waves-effect waves-light m-r-15 m-t-5 m-b-5\"><i class=\"icofont icofont-paper-plane\"></i><span class=\"m-l-10\">New Tickets</span></button>\n            <div class=\"btn-group m-t-5 m-b-5\">\n              <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-ui-user\"></i></button>\n              <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-edit-alt\"></i></button>\n              <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-reply\"></i></button>\n              <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-printer\"></i></button>\n            </div>\n            <div class=\"f-right bug-issue-link\">\n              <ol class=\"breadcrumb bg-white m-0 p-t-5 p-b-0\">\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">16 Bugs</a></li>\n                <li class=\"breadcrumb-item\"><a href=\"javascript:;\">19 Issue</a></li>\n              </ol>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- New ticket button card end -->\n      <!-- bug list card start -->\n      <app-card [title]=\"'Issue Details'\" [cardOptionBlock]=\"true\">\n        <ngx-datatable\n          class=\"data-table table-responsive task-list-table\"\n          [rows]=\"rowsTask\"\n          [loadingIndicator]=\"loadingIndicator\"\n          [columnMode]=\"'force'\"\n          [headerHeight]=\"50\"\n          [footerHeight]=\"50\"\n          [limit]=\"10\"\n          [rowHeight]=\"66\"\n          [reorderable]=\"reorderable\">\n          <ngx-datatable-column name=\"Bug\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row['type']}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"#\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              <a href=\"javascript:\">{{row['id']}}</a>\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Description\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row['description']}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Start Date\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row['date']}}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Priority\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              <span class=\"label label-danger\" *ngIf=\"row.priority === 'Highest'\">{{row.priority}}</span>\n              <span class=\"label label-warning\" *ngIf=\"row.priority === 'High'\">{{row.priority}}</span>\n              <span class=\"label label-success\" *ngIf=\"row.priority === 'Normal'\">{{row.priority}}</span>\n              <span class=\"label label-primary\" *ngIf=\"row.priority === 'Slow'\">{{row.priority}}</span>\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Assigned\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              <a href=\"javascript:\">{{row['assigned']}}</a>\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Status\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              <span class=\"label label-primary\" *ngIf=\"row.status === 'Open'\">{{row.status}}</span>\n              <span class=\"label label-danger\" *ngIf=\"row.status === 'Close'\">{{row.status}}</span>\n              <span class=\"label label-warning\" *ngIf=\"row.status === 'Pending'\">{{row.status}}</span>\n              <span class=\"label label-info\" *ngIf=\"row.status === 'On Hold'\">{{row.status}}</span>\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n      </app-card>\n      <!-- bug list card end -->\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/theme/task/task-issue/task-issue.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/task/task-issue/task-issue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskIssueComponent; });
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

var TaskIssueComponent = /** @class */ (function () {
    function TaskIssueComponent() {
        var _this = this;
        this.rowsTask = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.fetchTaskData(function (data) {
            _this.rowsTask = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
    }
    TaskIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        var progression1 = 0;
        var progress = setInterval(function () {
            var commonEle = _this.issueText1.nativeElement;
            var commonEle1 = _this.issueBar1.nativeElement;
            commonEle.innerHTML = progression1 + '%';
            var element_style = 'left:' + progression1 + '%;' + 'top: -20px;';
            commonEle.setAttribute('style', element_style);
            var element_style1 = 'width:' + progression1 + '%;';
            commonEle1.setAttribute('style', element_style1);
            if (progression1 === 70) {
                clearInterval(progress);
            }
            else {
                progression1 += 1;
            }
        }, 100);
    };
    TaskIssueComponent.prototype.fetchTaskData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/issue-list.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('issueText1'),
        __metadata("design:type", Object)
    ], TaskIssueComponent.prototype, "issueText1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('issueBar1'),
        __metadata("design:type", Object)
    ], TaskIssueComponent.prototype, "issueBar1", void 0);
    TaskIssueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-issue',
            template: __webpack_require__("./src/app/theme/task/task-issue/task-issue.component.html"),
            styles: [__webpack_require__("./src/app/theme/task/task-issue/task-issue.component.scss"), __webpack_require__("./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskIssueComponent);
    return TaskIssueComponent;
}());



/***/ }),

/***/ "./src/app/theme/task/task-issue/task-issue.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskIssueModule", function() { return TaskIssueModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_issue_component__ = __webpack_require__("./src/app/theme/task/task-issue/task-issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_issue_routing_module__ = __webpack_require__("./src/app/theme/task/task-issue/task-issue-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TaskIssueModule = /** @class */ (function () {
    function TaskIssueModule() {
    }
    TaskIssueModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__task_issue_routing_module__["a" /* TaskIssueRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__task_issue_component__["a" /* TaskIssueComponent */]]
        })
    ], TaskIssueModule);
    return TaskIssueModule;
}());



/***/ })

});
//# sourceMappingURL=task-issue.module.chunk.js.map