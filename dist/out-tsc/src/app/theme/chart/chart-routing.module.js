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
            title: 'Charts',
            status: false
        },
        children: [
            {
                path: 'google',
                loadChildren: './google-chart/google-chart.module#GoogleChartModule'
            },
            {
                path: 'chart-js',
                loadChildren: './chart-js/chart-js.module#ChartJsModule'
            },
            {
                path: 'radial',
                loadChildren: './radial/radial.module#RadialModule'
            },
            {
                path: 'c3-js',
                loadChildren: './c3-js/c3-js.module#C3JsModule'
            }
        ]
    }
];
var ChartRoutingModule = /** @class */ (function () {
    function ChartRoutingModule() {
    }
    ChartRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ChartRoutingModule);
    return ChartRoutingModule;
}());
exports.ChartRoutingModule = ChartRoutingModule;
//# sourceMappingURL=chart-routing.module.js.map