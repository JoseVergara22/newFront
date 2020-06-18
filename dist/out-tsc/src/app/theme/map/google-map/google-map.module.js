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
var google_map_component_1 = require("./google-map.component");
var google_map_routing_module_1 = require("./google-map-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var core_2 = require("@agm/core");
var GoogleMapModule = /** @class */ (function () {
    function GoogleMapModule() {
    }
    GoogleMapModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                google_map_routing_module_1.GoogleMapRoutingModule,
                shared_module_1.SharedModule,
                core_2.AgmCoreModule.forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
            ],
            declarations: [google_map_component_1.GoogleMapComponent]
        })
    ], GoogleMapModule);
    return GoogleMapModule;
}());
exports.GoogleMapModule = GoogleMapModule;
//# sourceMappingURL=google-map.module.js.map