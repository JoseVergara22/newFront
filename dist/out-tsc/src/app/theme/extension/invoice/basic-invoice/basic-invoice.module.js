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
var basic_invoice_component_1 = require("./basic-invoice.component");
var basic_invoice_routing_module_1 = require("./basic-invoice-routing.module");
var shared_module_1 = require("../../../../shared/shared.module");
var BasicInvoiceModule = /** @class */ (function () {
    function BasicInvoiceModule() {
    }
    BasicInvoiceModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                basic_invoice_routing_module_1.BasicInvoiceRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [basic_invoice_component_1.BasicInvoiceComponent]
        })
    ], BasicInvoiceModule);
    return BasicInvoiceModule;
}());
exports.BasicInvoiceModule = BasicInvoiceModule;
//# sourceMappingURL=basic-invoice.module.js.map