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
var carousel_component_1 = require("./carousel.component");
var carousel_routing_module_1 = require("./carousel-routing.module");
var shared_module_1 = require("../../../../shared/shared.module");
var ngx_carousel_1 = require("ngx-carousel");
require("hammerjs");
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                carousel_routing_module_1.CarouselRoutingModule,
                shared_module_1.SharedModule,
                ngx_carousel_1.NgxCarouselModule
            ],
            declarations: [carousel_component_1.CarouselComponent]
        })
    ], CarouselModule);
    return CarouselModule;
}());
exports.CarouselModule = CarouselModule;
//# sourceMappingURL=carousel.module.js.map