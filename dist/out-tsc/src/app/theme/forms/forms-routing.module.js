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
            title: 'Forms Components',
            status: false
        },
        children: [
            {
                path: 'basic',
                loadChildren: './basic-elements/basic-elements.module#BasicElementsModule'
            },
            {
                path: 'add-on',
                loadChildren: './add-on/add-on.module#AddOnModule'
            },
            {
                path: 'advance',
                loadChildren: './advance-elements/advance-elements.module#AdvanceElementsModule'
            },
            {
                path: 'validation',
                loadChildren: './form-validation/form-validation.module#FormValidationModule'
            },
            {
                path: 'picker',
                loadChildren: './form-picker/form-picker.module#FormPickerModule'
            },
            {
                path: 'select',
                loadChildren: './form-select/form-select.module#FormSelectModule'
            }
        ]
    }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());
exports.FormsRoutingModule = FormsRoutingModule;
//# sourceMappingURL=forms-routing.module.js.map