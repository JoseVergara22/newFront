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
var basic_elements_component_1 = require("./basic-elements.component");
var routes = [
    {
        path: '',
        component: basic_elements_component_1.BasicElementsComponent,
        data: {
            title: 'Basic Form Inputs',
            icon: 'ti-layers',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - form components',
            status: true
        }
    }
];
var BasicElementsRoutingModule = /** @class */ (function () {
    function BasicElementsRoutingModule() {
    }
    BasicElementsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], BasicElementsRoutingModule);
    return BasicElementsRoutingModule;
}());
exports.BasicElementsRoutingModule = BasicElementsRoutingModule;
//# sourceMappingURL=basic-elements-routing.module.js.map