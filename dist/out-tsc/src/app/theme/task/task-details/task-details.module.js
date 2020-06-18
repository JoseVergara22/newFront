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
var task_details_component_1 = require("./task-details.component");
var shared_module_1 = require("../../../shared/shared.module");
var task_details_routing_module_1 = require("./task-details-routing.module");
var ng2_ui_switch_1 = require("ng2-ui-switch");
var TaskDetailsModule = /** @class */ (function () {
    function TaskDetailsModule() {
    }
    TaskDetailsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                task_details_routing_module_1.TaskDetailsRoutingModule,
                shared_module_1.SharedModule,
                ng2_ui_switch_1.UiSwitchModule
            ],
            declarations: [task_details_component_1.TaskDetailsComponent]
        })
    ], TaskDetailsModule);
    return TaskDetailsModule;
}());
exports.TaskDetailsModule = TaskDetailsModule;
//# sourceMappingURL=task-details.module.js.map