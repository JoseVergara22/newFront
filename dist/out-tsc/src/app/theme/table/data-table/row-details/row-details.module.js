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
var row_details_component_1 = require("./row-details.component");
var row_details_routing_module_1 = require("./row-details-routing.module");
var shared_module_1 = require("../../../../shared/shared.module");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var RowDetailsModule = /** @class */ (function () {
    function RowDetailsModule() {
    }
    RowDetailsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                row_details_routing_module_1.RowDetailsRoutingModule,
                shared_module_1.SharedModule,
                ngx_datatable_1.NgxDatatableModule
            ],
            declarations: [row_details_component_1.RowDetailsComponent]
        })
    ], RowDetailsModule);
    return RowDetailsModule;
}());
exports.RowDetailsModule = RowDetailsModule;
//# sourceMappingURL=row-details.module.js.map