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
var selection_component_1 = require("./selection.component");
var cell_component_1 = require("./cell/cell.component");
var checkbox_component_1 = require("./checkbox/checkbox.component");
var multi_rows_component_1 = require("./multi-rows/multi-rows.component");
var single_row_component_1 = require("./single-row/single-row.component");
var selection_routing_module_1 = require("./selection-routing.module");
var shared_module_1 = require("../../../../shared/shared.module");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var SelectionModule = /** @class */ (function () {
    function SelectionModule() {
    }
    SelectionModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                selection_routing_module_1.SelectionRoutingModule,
                shared_module_1.SharedModule,
                ngx_datatable_1.NgxDatatableModule
            ],
            declarations: [selection_component_1.SelectionComponent, cell_component_1.CellComponent, checkbox_component_1.CheckboxComponent, multi_rows_component_1.MultiRowsComponent, single_row_component_1.SingleRowComponent]
        })
    ], SelectionModule);
    return SelectionModule;
}());
exports.SelectionModule = SelectionModule;
//# sourceMappingURL=selection.module.js.map