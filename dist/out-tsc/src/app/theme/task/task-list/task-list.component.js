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
var TaskListComponent = /** @class */ (function () {
    function TaskListComponent() {
        var _this = this;
        this.rowsTask = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.fetchTaskData(function (data) {
            _this.rowsTask = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
    }
    TaskListComponent.prototype.ngOnInit = function () {
    };
    TaskListComponent.prototype.fetchTaskData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/task-list.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'app-task-list',
            templateUrl: './task-list.component.html',
            styleUrls: [
                './task-list.component.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map