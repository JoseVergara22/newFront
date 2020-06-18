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
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var TableBasicDataComponent = /** @class */ (function () {
    function TableBasicDataComponent() {
        var _this = this;
        this.rowsBasic = [];
        this.fullScreenRow = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
        this.rows = [];
        this.expanded = {};
        this.rowsFilter = [];
        this.tempFilter = [];
        this.fetchBasicData(function (data) {
            _this.rowsBasic = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
        this.fetch(function (data) {
            _this.rows = data;
        });
        this.fetchFullScreenData(function (data) {
            _this.fullScreenRow = data;
        });
        this.fetchFilterData(function (data) {
            // cache our list
            _this.tempFilter = data.slice();
            // push our inital complete list
            _this.rowsFilter = data;
        });
    }
    TableBasicDataComponent.prototype.ngOnInit = function () {
    };
    TableBasicDataComponent.prototype.fetchBasicData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/basic.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableBasicDataComponent.prototype.fetchFullScreenData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/fullscreen.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableBasicDataComponent.prototype.fetchFilterData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableBasicDataComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.tempFilter.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    TableBasicDataComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    TableBasicDataComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            var rows = JSON.parse(req.response);
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                row.height = Math.floor(Math.random() * 80) + 50;
            }
            cb(rows);
        };
        req.send();
    };
    TableBasicDataComponent.prototype.getRowHeight = function (row) {
        return row.height;
    };
    __decorate([
        core_1.ViewChild(ngx_datatable_1.DatatableComponent),
        __metadata("design:type", ngx_datatable_1.DatatableComponent)
    ], TableBasicDataComponent.prototype, "table", void 0);
    TableBasicDataComponent = __decorate([
        core_1.Component({
            selector: 'app-table-basic-data',
            templateUrl: './table-basic-data.component.html',
            styleUrls: [
                './table-basic-data.component.scss',
                '../../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TableBasicDataComponent);
    return TableBasicDataComponent;
}());
exports.TableBasicDataComponent = TableBasicDataComponent;
//# sourceMappingURL=table-basic-data.component.js.map