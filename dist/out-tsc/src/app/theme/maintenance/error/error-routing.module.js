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
var error_component_1 = require("./error.component");
var routes = [
    {
        path: '',
        component: error_component_1.ErrorComponent,
        data: {
            title: 'Error pages',
            icon: 'ti-settings',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - error',
            status: true
        }
    }
];
var ErrorRoutingModule = /** @class */ (function () {
    function ErrorRoutingModule() {
    }
    ErrorRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ErrorRoutingModule);
    return ErrorRoutingModule;
}());
exports.ErrorRoutingModule = ErrorRoutingModule;
//# sourceMappingURL=error-routing.module.js.map