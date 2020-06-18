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
var master_user_register_component_1 = require("./master-user-register/master-user-register.component");
var master_news_component_1 = require("./master-news/master-news.component");
var master_forget_password_component_1 = require("./master-forget-password/master-forget-password.component");
var master_change_password_component_1 = require("./master-change-password/master-change-password.component");
var master_create_slider_component_1 = require("./master-create-slider/master-create-slider.component");
var master_slider_component_1 = require("../master-shared/master-slider/master-slider.component");
var master_register_third_component_1 = require("./master-register-third/master-register-third.component");
var master_branch_office_component_1 = require("./master-branch-office/master-branch-office.component");
var master_forklift_component_1 = require("./master-forklift/master-forklift.component");
var master_brand_component_1 = require("./master-brand/master-brand.component");
var master_model_component_1 = require("./master-model/master-model.component");
var master_fuel_component_1 = require("./master-fuel/master-fuel.component");
var master_tyre_component_1 = require("./master-tyre/master-tyre.component");
var master_machine_component_1 = require("./master-machine/master-machine.component");
var master_type_document_component_1 = require("./master-type-document/master-type-document.component");
var master_payment_condition_component_1 = require("./master-payment-condition/master-payment-condition.component");
var master_task_component_1 = require("./master-task/master-task.component");
var master_customers_component_1 = require("./master-customers/master-customers.component");
var master_update_customer_component_1 = require("./master-update-customer/master-update-customer.component");
var master_show_forklift_component_1 = require("./master-show-forklift/master-show-forklift.component");
var master_external_user_component_1 = require("./master-external-user/master-external-user.component");
var master_restart_password_component_1 = require("./master-restart-password/master-restart-password.component");
var master_work_dashboard_component_1 = require("./master-work-dashboard/master-work-dashboard.component");
var master_work_details_component_1 = require("./master-work-details/master-work-details.component");
var master_routine_details_component_1 = require("./master-routine-details/master-routine-details.component");
var master_horometro_component_1 = require("./master-horometro/master-horometro.component");
var master_forklift_update_component_1 = require("./master-forklift-update/master-forklift-update.component");
var master_external_user_update_component_1 = require("./master-external-user-update/master-external-user-update.component");
var master_forklift_show_component_1 = require("./master-forklift-show/master-forklift-show.component");
var master_reset_password_login_component_1 = require("./master-reset-password-login/master-reset-password-login.component");
var master_estimate_countries_component_1 = require("./master-estimate-countries/master-estimate-countries.component");
var master_price_countries_dhl_component_1 = require("./master-price-countries-dhl/master-price-countries-dhl.component");
var master_estimate_customer_component_1 = require("./master-estimate-customer/master-estimate-customer.component");
var master_estimate_all_component_1 = require("./master-estimate-all/master-estimate-all.component");
var master_estimate_configuration_component_1 = require("./master-estimate-configuration/master-estimate-configuration.component");
var master_update_estimate_customer_component_1 = require("./master-update-estimate-customer/master-update-estimate-customer.component");
var master_copy_estimate_customer_component_1 = require("./master-copy-estimate-customer/master-copy-estimate-customer.component");
var master_privacy_policy_component_1 = require("./master-privacy-policy/master-privacy-policy.component");
var master_regionals_component_1 = require("./master-regionals/master-regionals.component");
var master_technicians_component_1 = require("./master-technicians/master-technicians.component");
var master_create_technicians_component_1 = require("./master-create-technicians/master-create-technicians.component");
var master_cost_center_component_1 = require("./master-cost-center/master-cost-center.component");
var master_warehouses_component_1 = require("./master-warehouses/master-warehouses.component");
var master_sub_cost_center_component_1 = require("./master-sub-cost-center/master-sub-cost-center.component");
var master_warehouses_out_component_1 = require("./master-warehouses-out/master-warehouses-out.component");
var master_create_warehouses_out_component_1 = require("./master-create-warehouses-out/master-create-warehouses-out.component");
var master_settlement_customer_component_1 = require("./master-settlement-customer/master-settlement-customer.component");
var master_settlement_all_component_1 = require("./master-settlement-all/master-settlement-all.component");
var master_update_settlement_customer_component_1 = require("./master-update-settlement-customer/master-update-settlement-customer.component");
var master_module_component_1 = require("./master-module/master-module.component");
var master_register_module_component_1 = require("./master-register-module/master-register-module.component");
var master_update_module_component_1 = require("./master-update-module/master-update-module.component");
var master_log_trm_component_1 = require("./master-log-trm/master-log-trm.component");
var master_checklists_component_1 = require("./master-checklists/master-checklists.component");
var routes = [
    {
        path: 'master',
        component: master_slider_component_1.MasterSliderComponent
    },
    {
        path: 'register',
        component: master_user_register_component_1.MasterUserRegisterComponent
    },
    {
        path: 'horometro',
        component: master_horometro_component_1.MasterHorometroComponent
    },
    {
        path: 'work_details',
        component: master_work_details_component_1.MasterWorkDetailsComponent
    },
    {
        path: 'work_detailsUpdate/:name',
        component: master_work_details_component_1.MasterWorkDetailsComponent
    },
    {
        path: 'work_dashboard',
        component: master_work_dashboard_component_1.MasterWorkDashboardComponent
    },
    {
        path: 'restartPassword/:token',
        component: master_restart_password_component_1.MasterRestartPasswordComponent
    },
    {
        path: '',
        component: master_news_component_1.MasterNewsComponent
    },
    {
        path: 'forget',
        component: master_forget_password_component_1.MasterForgetPasswordComponent
    },
    {
        path: 'changePassword',
        component: master_change_password_component_1.MasterChangePasswordComponent
    },
    {
        path: 'createSlider',
        component: master_create_slider_component_1.MasterCreateSliderComponent
    },
    {
        path: 'registerCustomer',
        component: master_register_third_component_1.MasterRegisterThirdComponent
    },
    {
        path: 'registerOffice',
        component: master_branch_office_component_1.MasterBranchOfficeComponent
    },
    {
        path: 'task',
        component: master_task_component_1.MasterTaskComponent
    },
    {
        path: 'registerForklift',
        component: master_forklift_component_1.MasterForkliftComponent
    },
    {
        path: 'registerBrand',
        component: master_brand_component_1.MasterBrandComponent
    },
    {
        path: 'registerModel',
        component: master_model_component_1.MasterModelComponent
    },
    {
        path: 'registerFuel',
        component: master_fuel_component_1.MasterFuelComponent
    },
    {
        path: 'registerTyre',
        component: master_tyre_component_1.MasterTyreComponent
    },
    {
        path: 'registerMachine',
        component: master_machine_component_1.MasterMachineComponent
    },
    {
        path: 'registerTypeDocument',
        component: master_type_document_component_1.MasterTypeDocumentComponent
    },
    {
        path: 'registerPaymentCondition',
        component: master_payment_condition_component_1.MasterPaymentConditionComponent
    },
    {
        path: "customers",
        component: master_customers_component_1.MasterCustomersComponent
    },
    {
        path: 'customersUpdate/:id',
        component: master_update_customer_component_1.MasterUpdateCustomerComponent
    },
    {
        path: 'forkliftShow',
        component: master_show_forklift_component_1.MasterShowForkliftComponent
    },
    {
        path: 'externalUser',
        component: master_external_user_component_1.MasterExternalUserComponent
    },
    {
        path: 'detailRoutine',
        component: master_routine_details_component_1.MasterRoutineDetailsComponent
    },
    {
        path: 'forkliftUpdate/:id',
        component: master_forklift_update_component_1.MasterForkliftUpdateComponent
    }, {
        path: 'externalUserUpdate/:id',
        component: master_external_user_update_component_1.MasterExternalUserUpdateComponent
    }, {
        path: 'forkliftShow/:id',
        component: master_forklift_show_component_1.MasterForkliftShowComponent
    }, {
        path: 'resetPasswordLogin',
        component: master_reset_password_login_component_1.MasterResetPasswordLoginComponent
    }, {
        path: 'estimateCountries',
        component: master_estimate_countries_component_1.MasterEstimateCountriesComponent
    }, {
        path: 'priceCountriesDhl',
        component: master_price_countries_dhl_component_1.MasterPriceCountriesDhlComponent
    }, {
        path: 'estimateCustomer',
        component: master_estimate_customer_component_1.MasterEstimateCustomerComponent
    }, {
        path: 'estimateAll',
        component: master_estimate_all_component_1.MasterEstimateAllComponent
    }, {
        path: 'estimateConfiguration',
        component: master_estimate_configuration_component_1.MasterEstimateConfigurationComponent
    }, {
        path: 'estimateCustomerUpdate/:id',
        component: master_update_estimate_customer_component_1.MasterUpdateEstimateCustomerComponent
    }, {
        path: 'estimateCustomerCopy/:id',
        component: master_copy_estimate_customer_component_1.MasterCopyEstimateCustomerComponent
    }, {
        path: 'privacyPolicy',
        component: master_privacy_policy_component_1.MasterPrivacyPolicyComponent
    }, {
        path: 'administrarclientes',
        component: master_privacy_policy_component_1.MasterPrivacyPolicyComponent
    }, {
        path: 'regionalsAll',
        component: master_regionals_component_1.MasterRegionalsComponent
    }, {
        path: 'techniciansAll',
        component: master_technicians_component_1.MasterTechniciansComponent,
    }, {
        path: 'registerTechnicians',
        component: master_create_technicians_component_1.MasterCreateTechniciansComponent,
    }, {
        path: 'costCenter',
        component: master_cost_center_component_1.MasterCostCenterComponent,
    }, {
        path: 'warehouses',
        component: master_warehouses_component_1.MasterWarehousesComponent
    }, {
        path: 'subCostCenter',
        component: master_sub_cost_center_component_1.MasterSubCostCenterComponent
    }, {
        path: 'warehousesout',
        component: master_warehouses_out_component_1.MasterWarehousesOutComponent
    }, {
        path: 'createWarehousesout',
        component: master_create_warehouses_out_component_1.MasterCreateWarehousesOutComponent
    }, {
        path: 'settlementCustomer',
        component: master_settlement_customer_component_1.MasterSettlementCustomerComponent
    }, {
        path: 'settlementAll',
        component: master_settlement_all_component_1.MasterSettlementAllComponent
    }, {
        path: 'settlementCustomerUpdate/:id',
        component: master_update_settlement_customer_component_1.MasterUpdateSettlementCustomerComponent
    }, {
        path: 'modules',
        component: master_module_component_1.MasterModuleComponent
    }, {
        path: 'moduleRegister',
        component: master_register_module_component_1.MasterRegisterModuleComponent
    }, {
        path: 'moduleUpdate/:id',
        component: master_update_module_component_1.MasterUpdateModuleComponent
    }, {
        path: 'LogTrm',
        component: master_log_trm_component_1.MasterLogTrmComponent
    }, {
        path: 'checklists',
        component: master_checklists_component_1.MasterChecklistsComponent
    }
];
var MasterRoutingModule = /** @class */ (function () {
    function MasterRoutingModule() {
    }
    MasterRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], MasterRoutingModule);
    return MasterRoutingModule;
}());
exports.MasterRoutingModule = MasterRoutingModule;
//# sourceMappingURL=master-routing.module.js.map