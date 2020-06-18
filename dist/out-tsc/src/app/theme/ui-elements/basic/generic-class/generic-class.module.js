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
var generic_class_component_1 = require("./generic-class.component");
var generic_class_routing_module_1 = require("./generic-class-routing.module");
var shared_module_1 = require("../../../../shared/shared.module");
var GenericClassModule = /** @class */ (function () {
    function GenericClassModule() {
    }
    GenericClassModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                generic_class_routing_module_1.GenericClassRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [generic_class_component_1.GenericClassComponent]
        })
    ], GenericClassModule);
    return GenericClassModule;
}());
exports.GenericClassModule = GenericClassModule;
//# sourceMappingURL=generic-class.module.js.map