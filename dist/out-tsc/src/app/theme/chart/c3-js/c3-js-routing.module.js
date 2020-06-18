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
var c3_js_component_1 = require("./c3-js.component");
var routes = [
    {
        path: '',
        component: c3_js_component_1.C3JsComponent,
        data: {
            title: 'C3 Chart',
            icon: 'ti-bar-chart-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - c3 chart',
            status: true
        }
    }
];
var C3JsRoutingModule = /** @class */ (function () {
    function C3JsRoutingModule() {
    }
    C3JsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], C3JsRoutingModule);
    return C3JsRoutingModule;
}());
exports.C3JsRoutingModule = C3JsRoutingModule;
//# sourceMappingURL=c3-js-routing.module.js.map