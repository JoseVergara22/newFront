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
var paging_component_1 = require("./paging.component");
var paging_routing_module_1 = require("./paging-routing.module");
var shared_module_1 = require("../../../../shared/shared.module");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var PagingModule = /** @class */ (function () {
    function PagingModule() {
    }
    PagingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                paging_routing_module_1.PagingRoutingModule,
                shared_module_1.SharedModule,
                ngx_datatable_1.NgxDatatableModule
            ],
            declarations: [paging_component_1.PagingComponent]
        })
    ], PagingModule);
    return PagingModule;
}());
exports.PagingModule = PagingModule;
//# sourceMappingURL=paging.module.js.map