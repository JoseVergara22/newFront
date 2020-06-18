"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        core_1.ViewChild('issueText1'),
        __metadata("design:type", Object)
    ], TaskIssueComponent.prototype, "issueText1", void 0);
    __decorate([
        core_1.ViewChild('issueBar1'),
        __metadata("design:type", Object)
    ], TaskIssueComponent.prototype, "issueBar1", void 0);
    TaskIssueComponent = __decorate([
        core_1.Component({
            selector: 'app-task-issue',
            templateUrl: './task-issue.component.html',
            styleUrls: [
                './task-issue.component.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TaskIssueComponent);
    return TaskIssueComponent;
}());
exports.TaskIssueComponent = TaskIssueComponent;
//# sourceMappingURL=task-issue.component.js.map