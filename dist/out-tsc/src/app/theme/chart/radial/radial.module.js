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
var radial_component_1 = require("./radial.component");
var radial_routing_module_1 = require("./radial-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var RadialModule = /** @class */ (function () {
    function RadialModule() {
    }
    RadialModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                radial_routing_module_1.RadialRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [radial_component_1.RadialComponent]
        })
    ], RadialModule);
    return RadialModule;
}());
exports.RadialModule = RadialModule;
//# sourceMappingURL=radial.module.js.map