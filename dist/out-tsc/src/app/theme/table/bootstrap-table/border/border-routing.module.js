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
var border_component_1 = require("./border.component");
var routes = [
    {
        path: '',
        component: border_component_1.BorderComponent,
        data: {
            title: 'Bootstrap Border Sizes',
            icon: 'ti-receipt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - border table',
            status: true
        }
    }
];
var BorderRoutingModule = /** @class */ (function () {
    function BorderRoutingModule() {
    }
    BorderRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], BorderRoutingModule);
    return BorderRoutingModule;
}());
exports.BorderRoutingModule = BorderRoutingModule;
//# sourceMappingURL=border-routing.module.js.map