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
        core_1.ViewChild('myTable'),
        __metadata("design:type", Object)
    ], RowDetailsComponent.prototype, "table", void 0);
    RowDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-row-details',
            templateUrl: './row-details.component.html',
            styleUrls: [
                './row-details.component.scss',
                '../../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RowDetailsComponent);
    return RowDetailsComponent;
}());
exports.RowDetailsComponent = RowDetailsComponent;
//# sourceMappingURL=row-details.component.js.map