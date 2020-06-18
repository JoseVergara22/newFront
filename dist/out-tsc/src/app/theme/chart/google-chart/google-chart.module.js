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
var google_chart_component_1 = require("./google-chart.component");
var google_chart_routing_module_1 = require("./google-chart-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var ng2_google_charts_1 = require("ng2-google-charts");
var GoogleChartModule = /** @class */ (function () {
    function GoogleChartModule() {
    }
    GoogleChartModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                google_chart_routing_module_1.GoogleChartRoutingModule,
                shared_module_1.SharedModule,
                ng2_google_charts_1.Ng2GoogleChartsModule
            ],
            declarations: [google_chart_component_1.GoogleChartComponent]
        })
    ], GoogleChartModule);
    return GoogleChartModule;
}());
exports.GoogleChartModule = GoogleChartModule;
//# sourceMappingURL=google-chart.module.js.map