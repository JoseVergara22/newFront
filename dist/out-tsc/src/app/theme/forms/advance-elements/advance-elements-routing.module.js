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
var advance_elements_component_1 = require("./advance-elements.component");
var routes = [
    {
        path: '',
        component: advance_elements_component_1.AdvanceElementsComponent,
        data: {
            title: 'Advance Form Inputs',
            icon: 'ti-layers',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - advance components',
            status: true
        }
    }
];
var AdvanceElementsRoutingModule = /** @class */ (function () {
    function AdvanceElementsRoutingModule() {
    }
    AdvanceElementsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AdvanceElementsRoutingModule);
    return AdvanceElementsRoutingModule;
}());
exports.AdvanceElementsRoutingModule = AdvanceElementsRoutingModule;
//# sourceMappingURL=advance-elements-routing.module.js.map