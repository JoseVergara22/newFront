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
var coming_soon_component_1 = require("./coming-soon.component");
var coming_soon_routing_module_1 = require("./coming-soon-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var ComingSoonModule = /** @class */ (function () {
    function ComingSoonModule() {
    }
    ComingSoonModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                coming_soon_routing_module_1.ComingSoonRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [coming_soon_component_1.ComingSoonComponent]
        })
    ], ComingSoonModule);
    return ComingSoonModule;
}());
exports.ComingSoonModule = ComingSoonModule;
//# sourceMappingURL=coming-soon.module.js.map