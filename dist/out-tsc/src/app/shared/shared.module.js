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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var toggle_fullscreen_directive_1 = require("./fullscreen/toggle-fullscreen.directive");
var accordionanchor_directive_1 = require("./accordion/accordionanchor.directive");
var accordionlink_directive_1 = require("./accordion/accordionlink.directive");
var accordion_directive_1 = require("./accordion/accordion.directive");
var http_1 = require("@angular/common/http");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var title_component_1 = require("../layout/admin/title/title.component");
var card_component_1 = require("./card/card.component");
var card_toggle_directive_1 = require("./card/card-toggle.directive");
var modal_basic_component_1 = require("./modal-basic/modal-basic.component");
var modal_animation_component_1 = require("./modal-animation/modal-animation.component");
var spinner_component_1 = require("./spinner/spinner.component");
var ng_click_outside_1 = require("ng-click-outside");
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                http_1.HttpClientModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ng_click_outside_1.ClickOutsideModule,
            ],
            exports: [
                ng_bootstrap_1.NgbModule,
                toggle_fullscreen_directive_1.ToggleFullScreenDirective,
                accordionanchor_directive_1.AccordionAnchorDirective,
                accordionlink_directive_1.AccordionLinkDirective,
                accordion_directive_1.AccordionDirective,
                card_toggle_directive_1.CardToggleDirective,
                http_1.HttpClientModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                title_component_1.TitleComponent,
                card_component_1.CardComponent,
                modal_basic_component_1.ModalBasicComponent,
                modal_animation_component_1.ModalAnimationComponent,
                spinner_component_1.SpinnerComponent,
                ng_click_outside_1.ClickOutsideModule
            ],
            declarations: [
                toggle_fullscreen_directive_1.ToggleFullScreenDirective,
                accordionanchor_directive_1.AccordionAnchorDirective,
                accordionlink_directive_1.AccordionLinkDirective,
                accordion_directive_1.AccordionDirective,
                card_toggle_directive_1.CardToggleDirective,
                title_component_1.TitleComponent,
                card_component_1.CardComponent,
                modal_basic_component_1.ModalBasicComponent,
                modal_animation_component_1.ModalAnimationComponent,
                spinner_component_1.SpinnerComponent
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar_1.PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map