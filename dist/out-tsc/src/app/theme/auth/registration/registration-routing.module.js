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
            title: 'Registration',
            status: false
        },
        children: [
            {
                path: 'simple',
                loadChildren: './basic-reg/basic-reg.module#BasicRegModule'
            },
            {
                path: 'header-footer',
                loadChildren: './header-footer-reg/header-footer-reg.module#HeaderFooterRegModule'
            },
            {
                path: 'social',
                loadChildren: './social-reg/social-reg.module#SocialRegModule'
            },
            {
                path: 'social-header-footer',
                loadChildren: './social-header-footer-reg/social-header-footer-reg.module#SocialHeaderFooterRegModule'
            }
        ]
    }
];
var RegistrationRoutingModule = /** @class */ (function () {
    function RegistrationRoutingModule() {
    }
    RegistrationRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], RegistrationRoutingModule);
    return RegistrationRoutingModule;
}());
exports.RegistrationRoutingModule = RegistrationRoutingModule;
//# sourceMappingURL=registration-routing.module.js.map