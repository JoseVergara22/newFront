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
var default_component_1 = require("./default.component");
var default_routing_module_1 = require("./default-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var angular2_chartjs_1 = require("angular2-chartjs");
var angular2_notifications_1 = require("angular2-notifications");
var DefaultModule = /** @class */ (function () {
    function DefaultModule() {
    }
    DefaultModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                default_routing_module_1.DefaultRoutingModule,
                shared_module_1.SharedModule,
                angular2_chartjs_1.ChartModule,
                angular2_notifications_1.SimpleNotificationsModule.forRoot()
            ],
            declarations: [default_component_1.DefaultComponent],
            bootstrap: [default_component_1.DefaultComponent]
        })
    ], DefaultModule);
    return DefaultModule;
}());
exports.DefaultModule = DefaultModule;
//# sourceMappingURL=default.module.js.map