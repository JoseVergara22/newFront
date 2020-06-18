"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var admin_component_1 = require("./layout/admin/admin.component");
var auth_component_1 = require("./layout/auth/auth.component");
var animations_1 = require("@angular/platform-browser/animations");
var shared_module_1 = require("./shared/shared.module");
var breadcrumbs_component_1 = require("./layout/admin/breadcrumbs/breadcrumbs.component");
var master_module_1 = require("./master/master.module");
var master_admin_component_1 = require("./master-layout/master-admin/master-admin.component");
var master_shared_module_1 = require("./master-shared/master-shared.module");
var menu_items_1 = require("./shared/menu-items/menu-items");
var menu_items_master_service_1 = require("./master-shared/menu-master/menu-items-master.service");
var angular_ng_autocomplete_1 = require("angular-ng-autocomplete");
var master_checklists_component_1 = require("./master-checklists/master-checklists.component");
var master_register_checklists_component_1 = require("./master-register-checklists/master-register-checklists.component");
// import { MasterNewsComponent } from './master/master-news/master-news.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                admin_component_1.AdminComponent,
                auth_component_1.AuthComponent,
                breadcrumbs_component_1.BreadcrumbsComponent,
                master_admin_component_1.MasterAdminComponent,
                master_checklists_component_1.MasterChecklistsComponent,
                master_register_checklists_component_1.MasterRegisterChecklistsComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                shared_module_1.SharedModule,
                master_module_1.MasterModule,
                master_shared_module_1.MasterSharedModule,
                angular_ng_autocomplete_1.AutocompleteLibModule
            ],
            providers: [menu_items_1.MenuItems, menu_items_master_service_1.MenuItemsMasterService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map