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
var TableEditComponent = /** @class */ (function () {
    function TableEditComponent() {
        var _this = this;
        this.editing = {};
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableEditComponent.prototype.ngOnInit = function () {
    };
    TableEditComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableEditComponent.prototype.updateValue = function (event, cell, row) {
        this.editing[row + '-' + cell] = false;
        this.rows[row][cell] = event.target.value;
    };
    TableEditComponent = __decorate([
        core_1.Component({
            selector: 'app-table-edit',
            templateUrl: './table-edit.component.html',
            styleUrls: [
                './table-edit.component.scss',
                '../../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TableEditComponent);
    return TableEditComponent;
}());
exports.TableEditComponent = TableEditComponent;
//# sourceMappingURL=table-edit.component.js.map