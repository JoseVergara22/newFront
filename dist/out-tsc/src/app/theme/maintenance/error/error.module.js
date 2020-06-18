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
var error_component_1 = require("./error.component");
var error_routing_module_1 = require("./error-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                error_routing_module_1.ErrorRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [error_component_1.ErrorComponent]
        })
    ], ErrorModule);
    return ErrorModule;
}());
exports.ErrorModule = ErrorModule;
//# sourceMappingURL=error.module.js.map