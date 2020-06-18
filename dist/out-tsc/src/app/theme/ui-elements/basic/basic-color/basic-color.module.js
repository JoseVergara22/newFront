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
var basic_color_component_1 = require("./basic-color.component");
var basic_color_routing_module_1 = require("./basic-color-routing.module");
var shared_module_1 = require("../../../../shared/shared.module");
var BasicColorModule = /** @class */ (function () {
    function BasicColorModule() {
    }
    BasicColorModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                basic_color_routing_module_1.BasicColorRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [basic_color_component_1.BasicColorComponent]
        })
    ], BasicColorModule);
    return BasicColorModule;
}());
exports.BasicColorModule = BasicColorModule;
//# sourceMappingURL=basic-color.module.js.map