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
            title: 'Basic Components',
            status: false
        },
        children: [
            {
                path: 'alert',
                loadChildren: './alert/alert.module#AlertModule'
            },
            {
                path: 'breadcrumb',
                loadChildren: './breadcrumb/breadcrumb.module#BreadcrumbModule'
            },
            {
                path: 'button',
                loadChildren: './button/button.module#ButtonModule'
            },
            {
                path: 'box-shadow',
                loadChildren: './box-shadow/box-shadow.module#BoxShadowModule'
            },
            {
                path: 'accordion',
                loadChildren: './accordion/accordion.module#AccordionModule'
            },
            {
                path: 'generic-class',
                loadChildren: './generic-class/generic-class.module#GenericClassModule'
            },
            {
                path: 'progressbar',
                loadChildren: './progressbar/progressbar.module#ProgressbarModule'
            },
            {
                path: 'pre-loader',
                loadChildren: './pre-loader/pre-loader.module#PreLoaderModule'
            },
            {
                path: 'list',
                loadChildren: './basic-list/basic-list.module#BasicListModule'
            },
            {
                path: 'tooltip',
                loadChildren: './tooltip/tooltip.module#TooltipModule'
            },
            {
                path: 'tabs',
                loadChildren: './tabs/tabs.module#TabsModule'
            },
            {
                path: 'color',
                loadChildren: './basic-color/basic-color.module#BasicColorModule'
            },
            {
                path: 'label-badge',
                loadChildren: './label-badge/label-badge.module#LabelBadgeModule'
            },
            {
                path: 'typography',
                loadChildren: './typography/typography.module#TypographyModule'
            },
            {
                path: 'other',
                loadChildren: './basic-other/basic-other.module#BasicOtherModule'
            }
        ]
    }
];
var BasicRoutingModule = /** @class */ (function () {
    function BasicRoutingModule() {
    }
    BasicRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], BasicRoutingModule);
    return BasicRoutingModule;
}());
exports.BasicRoutingModule = BasicRoutingModule;
//# sourceMappingURL=basic-routing.module.js.map