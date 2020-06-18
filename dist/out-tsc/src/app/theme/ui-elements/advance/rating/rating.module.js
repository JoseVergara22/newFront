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
var rating_component_1 = require("./rating.component");
var rating_routing_module_1 = require("./rating-routing.module");
var shared_module_1 = require("../../../../shared/shared.module");
var ngx_bar_rating_1 = require("ngx-bar-rating");
var RatingModule = /** @class */ (function () {
    function RatingModule() {
    }
    RatingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                rating_routing_module_1.RatingRoutingModule,
                shared_module_1.SharedModule,
                ngx_bar_rating_1.BarRatingModule
            ],
            declarations: [rating_component_1.RatingComponent]
        })
    ], RatingModule);
    return RatingModule;
}());
exports.RatingModule = RatingModule;
//# sourceMappingURL=rating.module.js.map