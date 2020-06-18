"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var google_map_component_1 = require("./google-map.component");
var routes = [
    {
        path: '',
        component: google_map_component_1.GoogleMapComponent,
        data: {
            title: 'Google Map',
            icon: 'ti-map-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - google map',
            status: true
        }
    }
];
var GoogleMapRoutingModule = /** @class */ (function () {
    function GoogleMapRoutingModule() {
    }
    GoogleMapRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], GoogleMapRoutingModule);
    return GoogleMapRoutingModule;
}());
exports.GoogleMapRoutingModule = GoogleMapRoutingModule;
//# sourceMappingURL=google-map-routing.module.js.map