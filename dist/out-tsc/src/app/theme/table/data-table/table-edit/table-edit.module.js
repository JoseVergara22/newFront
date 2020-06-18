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
var table_edit_component_1 = require("./table-edit.component");
var table_edit_routing_module_1 = require("./table-edit-routing.module");
var shared_module_1 = require("../../../../shared/shared.module");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var TableEditModule = /** @class */ (function () {
    function TableEditModule() {
    }
    TableEditModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                table_edit_routing_module_1.TableEditRoutingModule,
                shared_module_1.SharedModule,
                ngx_datatable_1.NgxDatatableModule
            ],
            declarations: [table_edit_component_1.TableEditComponent]
        })
    ], TableEditModule);
    return TableEditModule;
}());
exports.TableEditModule = TableEditModule;
//# sourceMappingURL=table-edit.module.js.map