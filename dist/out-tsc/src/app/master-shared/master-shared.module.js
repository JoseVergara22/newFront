"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var common_1 = require("@angular/common");
// import { MasterSliderModule } from './master-slider/master-slider.module';
var ngx_carousel_1 = require("ngx-carousel");
require("hammerjs");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var master_slider_component_1 = require("./master-slider/master-slider.component");
var master_spinner_component_1 = require("./master-spinner/master-spinner.component");
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var MasterSharedModule = /** @class */ (function () {
    function MasterSharedModule() {
    }
    MasterSharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                // MasterSliderModule,
                ng_bootstrap_1.NgbModule,
                ngx_carousel_1.NgxCarouselModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule
            ],
            declarations: [master_slider_component_1.MasterSliderComponent, master_spinner_component_1.MasterSpinnerComponent],
            exports: [master_slider_component_1.MasterSliderComponent,
                master_spinner_component_1.MasterSpinnerComponent,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ng_bootstrap_1.NgbModule
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar_1.PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], MasterSharedModule);
    return MasterSharedModule;
}());
exports.MasterSharedModule = MasterSharedModule;
//# sourceMappingURL=master-shared.module.js.map