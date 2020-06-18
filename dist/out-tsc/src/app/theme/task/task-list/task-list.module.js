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
var task_list_component_1 = require("./task-list.component");
var task_list_routing_module_1 = require("./task-list-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var TaskListModule = /** @class */ (function () {
    function TaskListModule() {
    }
    TaskListModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                task_list_routing_module_1.TaskListRoutingModule,
                shared_module_1.SharedModule,
                ngx_datatable_1.NgxDatatableModule
            ],
            declarations: [task_list_component_1.TaskListComponent]
        })
    ], TaskListModule);
    return TaskListModule;
}());
exports.TaskListModule = TaskListModule;
//# sourceMappingURL=task-list.module.js.map