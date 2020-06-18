"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admin_component_1 = require("./layout/admin/admin.component");
var auth_component_1 = require("./layout/auth/auth.component");
var master_auth_component_1 = require("./master/master-auth/master-auth.component");
var master_admin_component_1 = require("./master-layout/master-admin/master-admin.component");
var routes = [
    {
        path: '',
        component: admin_component_1.AdminComponent,
        children: [
            {
                path: '',
                redirectTo: '/masterauth',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: './theme/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'navigation',
                loadChildren: './theme/navigation/navigation.module#NavigationModule'
            },
            {
                path: 'widget',
                loadChildren: './theme/widget/widget.module#WidgetModule'
            },
            {
                path: 'basic',
                loadChildren: './theme/ui-elements/basic/basic.module#BasicModule'
            },
            {
                path: 'advance',
                loadChildren: './theme/ui-elements/advance/advance.module#AdvanceModule'
            },
            {
                path: 'animations',
                loadChildren: './theme/ui-elements/animation/animation.module#AnimationModule'
            },
            {
                path: 'forms',
                loadChildren: './theme/forms/forms.module#FormsModule'
            },
            {
                path: 'bootstrap-table',
                loadChildren: './theme/table/bootstrap-table/bootstrap-table.module#BootstrapTableModule'
            },
            {
                path: 'data-table',
                loadChildren: './theme/table/data-table/data-table.module#DataTableModule'
            },
            {
                path: 'maintenance/error',
                loadChildren: './theme/maintenance/error/error.module#ErrorModule'
            },
            {
                path: 'maintenance/coming-soon',
                loadChildren: './theme/maintenance/coming-soon/coming-soon.module#ComingSoonModule'
            },
            {
                path: 'user',
                loadChildren: './theme/user/user.module#UserModule'
            },
            {
                path: 'task',
                loadChildren: './theme/task/task.module#TaskModule'
            },
            {
                path: 'invoice',
                loadChildren: './theme/extension/invoice/invoice.module#InvoiceModule'
            },
            {
                path: 'file-upload-ui',
                loadChildren: './theme/extension/file-upload-ui/file-upload-ui.module#FileUploadUiModule'
            },
            {
                path: 'charts',
                loadChildren: './theme/chart/chart.module#ChartModule'
            },
            {
                path: 'map',
                loadChildren: './theme/map/map.module#MapModule'
            },
            {
                path: 'simple-page',
                loadChildren: './theme/simple-page/simple-page.module#SimplePageModule'
            }
        ]
    },
    {
        path: '',
        component: auth_component_1.AuthComponent,
        children: [
            {
                path: 'auth',
                loadChildren: './theme/auth/auth.module#AuthModule'
            },
            {
                path: 'masterp',
                loadChildren: './master/master.module#MasterModule'
            },
            {
                path: 'maintenance/offline-ui',
                loadChildren: './theme/maintenance/offline-ui/offline-ui.module#OfflineUiModule'
            },
            {
                path: 'masterauth',
                component: master_auth_component_1.MasterAuthComponent
            }
        ]
    },
    {
        path: '',
        component: master_admin_component_1.MasterAdminComponent,
        children: [
            {
                path: 'master',
                loadChildren: './master/master.module#MasterModule'
            }, {
                path: 'maintenance',
                loadChildren: './master/master.module#MasterModule'
            }, {
                path: 'configuracion',
                loadChildren: './master/master.module#MasterModule'
            }
        ]
    } /*,
    {
      path: 'master/maintenance',
      component: MasterAdminComponent,
      children: [{
        path: 'maintenance',
        loadChildren: './master/master.module#MasterModule'
      }]
    }*/,
    { path: 'doLogin', component: master_auth_component_1.MasterAuthComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map