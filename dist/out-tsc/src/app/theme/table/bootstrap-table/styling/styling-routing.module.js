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
var styling_component_1 = require("./styling.component");
var routes = [
    {
        path: '',
        component: styling_component_1.StylingComponent,
        data: {
            title: 'Bootstrap Styling Tables',
            icon: 'ti-receipt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - styling table',
            status: true
        }
    }
];
var StylingRoutingModule = /** @class */ (function () {
    function StylingRoutingModule() {
    }
    StylingRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], StylingRoutingModule);
    return StylingRoutingModule;
}());
exports.StylingRoutingModule = StylingRoutingModule;
//# sourceMappingURL=styling-routing.module.js.map