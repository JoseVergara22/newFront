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
var label_badge_component_1 = require("./label-badge.component");
var label_badge_routing_module_1 = require("./label-badge-routing.module");
var shared_module_1 = require("../../../../shared/shared.module");
var LabelBadgeModule = /** @class */ (function () {
    function LabelBadgeModule() {
    }
    LabelBadgeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                label_badge_routing_module_1.LabelBadgeRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [label_badge_component_1.LabelBadgeComponent]
        })
    ], LabelBadgeModule);
    return LabelBadgeModule;
}());
exports.LabelBadgeModule = LabelBadgeModule;
//# sourceMappingURL=label-badge.module.js.map