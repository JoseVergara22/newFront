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
var form_select_component_1 = require("./form-select.component");
var form_select_routing_module_1 = require("./form-select-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var forms_1 = require("@angular/forms");
var ng_select_1 = require("ng-select");
var ngx_chips_1 = require("ngx-chips");
var select_option_service_1 = require("../../../shared/elements/select-option.service");
var http_1 = require("@angular/http");
var FormSelectModule = /** @class */ (function () {
    function FormSelectModule() {
    }
    FormSelectModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                form_select_routing_module_1.FormSelectRoutingModule,
                shared_module_1.SharedModule,
                forms_1.FormsModule,
                ng_select_1.SelectModule,
                ngx_chips_1.TagInputModule,
                http_1.JsonpModule
            ],
            declarations: [form_select_component_1.FormSelectComponent],
            providers: [select_option_service_1.SelectOptionService]
        })
    ], FormSelectModule);
    return FormSelectModule;
}());
exports.FormSelectModule = FormSelectModule;
//# sourceMappingURL=form-select.module.js.map