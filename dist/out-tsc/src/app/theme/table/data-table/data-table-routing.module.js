"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        data: {
            title: 'Data Table',
            status: false
        },
        children: [
            {
                path: 'basic',
                loadChildren: './table-basic-data/table-basic-data.module#TableBasicDataModule'
            },
            {
                path: 'editable',
                loadChildren: './table-edit/table-edit.module#TableEditModule'
            },
            {
                path: 'row-details',
                loadChildren: './row-details/row-details.module#RowDetailsModule'
            },
            {
                path: 'paging',
                loadChildren: './paging/paging.module#PagingModule'
            },
            {
                path: 'selection',
                loadChildren: './selection/selection.module#SelectionModule'
            }
        ]
    }
];
var DataTableRoutingModule = /** @class */ (function () {
    function DataTableRoutingModule() {
    }
    DataTableRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], DataTableRoutingModule);
    return DataTableRoutingModule;
}());
exports.DataTableRoutingModule = DataTableRoutingModule;
//# sourceMappingURL=data-table-routing.module.js.map