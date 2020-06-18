"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var sizing_component_1 = require("./sizing.component");
var sizing_routing_module_1 = require("./sizing-routing.module");
var shared_module_1 = require("../../../../shared/shared.module");
var SizingModule = /** @class */ (function () {
    function SizingModule() {
    }
    SizingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                sizing_routing_module_1.SizingRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [sizing_component_1.SizingComponent]
        })
    ], SizingModule);
    return SizingModule;
}());
exports.SizingModule = SizingModule;
//# sourceMappingURL=sizing.module.js.map