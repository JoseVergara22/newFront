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
var c3_js_component_1 = require("./c3-js.component");
var c3_js_routing_module_1 = require("./c3-js-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var C3JsModule = /** @class */ (function () {
    function C3JsModule() {
    }
    C3JsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                c3_js_routing_module_1.C3JsRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [c3_js_component_1.C3JsComponent]
        })
    ], C3JsModule);
    return C3JsModule;
}());
exports.C3JsModule = C3JsModule;
//# sourceMappingURL=c3-js.module.js.map