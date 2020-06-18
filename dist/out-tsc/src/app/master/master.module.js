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
var master_auth_component_1 = require("./master-auth/master-auth.component");
var master_routing_module_1 = require("./master-routing.module");
var master_user_register_component_1 = require("./master-user-register/master-user-register.component");
var master_news_component_1 = require("./master-news/master-news.component");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("./../shared/shared.module");
var master_shared_module_1 = require("../master-shared/master-shared.module");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var master_forget_password_component_1 = require("./master-forget-password/master-forget-password.component");
var master_change_password_component_1 = require("./master-change-password/master-change-password.component");
var master_create_slider_component_1 = require("./master-create-slider/master-create-slider.component");
// Formularios maestras
var master_brand_component_1 = require("./master-brand/master-brand.component");
var master_model_component_1 = require("./master-model/master-model.component");
var master_type_document_component_1 = require("./master-type-document/master-type-document.component");
var master_payment_condition_component_1 = require("./master-payment-condition/master-payment-condition.component");
var master_machine_component_1 = require("./master-machine/master-machine.component");
var master_tyre_component_1 = require("./master-tyre/master-tyre.component");
var master_profile_component_1 = require("./master-profile/master-profile.component");
var master_register_third_component_1 = require("./master-register-third/master-register-third.component");
var master_fuel_component_1 = require("./master-fuel/master-fuel.component");
var master_branch_office_component_1 = require("./master-branch-office/master-branch-office.component");
var master_forklift_component_1 = require("./master-forklift/master-forklift.component");
var master_task_component_1 = require("./master-task/master-task.component");
var master_customers_component_1 = require("./master-customers/master-customers.component");
var master_update_customer_component_1 = require("./master-update-customer/master-update-customer.component");
var master_show_forklift_component_1 = require("./master-show-forklift/master-show-forklift.component");
var master_external_user_component_1 = require("./master-external-user/master-external-user.component");
var ej2_angular_schedule_1 = require("@syncfusion/ej2-angular-schedule");
var ng2_ui_switch_1 = require("ng2-ui-switch");
var master_restart_password_component_1 = require("./master-restart-password/master-restart-password.component");
var master_work_details_component_1 = require("./master-work-details/master-work-details.component");
var master_work_dashboard_component_1 = require("./master-work-dashboard/master-work-dashboard.component");
var master_routine_details_component_1 = require("./master-routine-details/master-routine-details.component");
var master_multi_date_picker_component_1 = require("./master-multi-date-picker/master-multi-date-picker.component");
var master_horometro_component_1 = require("./master-horometro/master-horometro.component");
var master_forklift_update_component_1 = require("./master-forklift-update/master-forklift-update.component");
var master_external_user_update_component_1 = require("./master-external-user-update/master-external-user-update.component");
var master_forklift_show_component_1 = require("./master-forklift-show/master-forklift-show.component");
var master_multi_date_picker_show_component_1 = require("./master-multi-date-picker-show/master-multi-date-picker-show.component");
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
// import { MasterAdminComponent } from '../master-layout/master-admin/master-admin.component';
// Servicios
var user_service_1 = require("../master-services/User/user.service");
var new_service_1 = require("../master-services/new/new.service");
var rest_service_1 = require("../master-services/Rest/rest.service");
var upload_service_1 = require("../master-services/services/upload.service");
var work_service_1 = require("../master-services/Work/work.service");
var ngx_color_picker_1 = require("ngx-color-picker");
var horometro_service_1 = require("../master-services/horometro/horometro.service");
var forklift_service_1 = require("../master-services/Forklift/forklift.service");
var estimate_service_1 = require("../master-services/estimate/estimate.service");
var filexcel_service_1 = require("../master-services/FileExcel/filexcel.service");
var settlement_service_1 = require("../master-services/settlement/settlement.service");
var modules_service_1 = require("../master-services/modules/modules.service");
var angular_ng_autocomplete_1 = require("angular-ng-autocomplete");
var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ej2_angular_schedule_1.ScheduleModule,
                ej2_angular_schedule_1.RecurrenceEditorModule,
                master_routing_module_1.MasterRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                master_shared_module_1.MasterSharedModule,
                shared_module_1.SharedModule,
                ng2_ui_switch_1.UiSwitchModule,
                ngx_datatable_1.NgxDatatableModule,
                ng_bootstrap_1.NgbModule,
                angular_ng_autocomplete_1.AutocompleteLibModule
            ],
            exports: [],
            declarations: [
                master_auth_component_1.MasterAuthComponent,
                master_user_register_component_1.MasterUserRegisterComponent,
                master_news_component_1.MasterNewsComponent,
                master_forget_password_component_1.MasterForgetPasswordComponent,
                master_change_password_component_1.MasterChangePasswordComponent,
                master_create_slider_component_1.MasterCreateSliderComponent,
                master_brand_component_1.MasterBrandComponent,
                master_model_component_1.MasterModelComponent,
                master_type_document_component_1.MasterTypeDocumentComponent,
                master_payment_condition_component_1.MasterPaymentConditionComponent,
                master_machine_component_1.MasterMachineComponent,
                master_fuel_component_1.MasterFuelComponent,
                master_tyre_component_1.MasterTyreComponent,
                master_profile_component_1.MasterProfileComponent,
                master_register_third_component_1.MasterRegisterThirdComponent,
                master_branch_office_component_1.MasterBranchOfficeComponent,
                master_forklift_component_1.MasterForkliftComponent,
                master_task_component_1.MasterTaskComponent,
                master_customers_component_1.MasterCustomersComponent,
                master_update_customer_component_1.MasterUpdateCustomerComponent,
                master_show_forklift_component_1.MasterShowForkliftComponent,
                master_external_user_component_1.MasterExternalUserComponent,
                master_restart_password_component_1.MasterRestartPasswordComponent,
                master_work_dashboard_component_1.MasterWorkDashboardComponent,
                master_work_details_component_1.MasterWorkDetailsComponent,
                master_routine_details_component_1.MasterRoutineDetailsComponent,
                master_multi_date_picker_component_1.MasterMultiDatePickerComponent,
                master_horometro_component_1.MasterHorometroComponent,
                master_forklift_update_component_1.MasterForkliftUpdateComponent,
                master_external_user_update_component_1.MasterExternalUserUpdateComponent,
                master_forklift_show_component_1.MasterForkliftShowComponent,
                master_multi_date_picker_show_component_1.MasterMultiDatePickerShowComponent,
                master_reset_password_login_component_1.MasterResetPasswordLoginComponent,
                master_estimate_countries_component_1.MasterEstimateCountriesComponent,
                master_price_countries_dhl_component_1.MasterPriceCountriesDhlComponent,
                master_estimate_customer_component_1.MasterEstimateCustomerComponent,
                master_estimate_all_component_1.MasterEstimateAllComponent,
                master_estimate_configuration_component_1.MasterEstimateConfigurationComponent,
                master_update_estimate_customer_component_1.MasterUpdateEstimateCustomerComponent,
                master_copy_estimate_customer_component_1.MasterCopyEstimateCustomerComponent,
                master_privacy_policy_component_1.MasterPrivacyPolicyComponent,
                master_regionals_component_1.MasterRegionalsComponent,
                master_technicians_component_1.MasterTechniciansComponent,
                master_create_technicians_component_1.MasterCreateTechniciansComponent,
                master_cost_center_component_1.MasterCostCenterComponent,
                master_warehouses_component_1.MasterWarehousesComponent,
                master_sub_cost_center_component_1.MasterSubCostCenterComponent,
                master_warehouses_out_component_1.MasterWarehousesOutComponent,
                master_create_warehouses_out_component_1.MasterCreateWarehousesOutComponent,
                master_settlement_customer_component_1.MasterSettlementCustomerComponent,
                master_settlement_all_component_1.MasterSettlementAllComponent,
                master_update_settlement_customer_component_1.MasterUpdateSettlementCustomerComponent,
                master_module_component_1.MasterModuleComponent,
                master_register_module_component_1.MasterRegisterModuleComponent,
                master_update_module_component_1.MasterUpdateModuleComponent,
                master_log_trm_component_1.MasterLogTrmComponent,
                master_checklists_component_1.MasterChecklistsComponent
                // MasterAdminComponent
            ],
            providers: [
                rest_service_1.RestService,
                user_service_1.UserService,
                upload_service_1.UploadService,
                work_service_1.WorkService,
                new_service_1.NewService,
                ej2_angular_schedule_1.DayService,
                ej2_angular_schedule_1.WeekService,
                ej2_angular_schedule_1.WorkWeekService,
                ej2_angular_schedule_1.MonthService,
                ej2_angular_schedule_1.MonthAgendaService,
                ngx_color_picker_1.ColorPickerService,
                horometro_service_1.HorometroService,
                forklift_service_1.ForkliftService,
                estimate_service_1.EstimateService,
                filexcel_service_1.FilexcelService,
                settlement_service_1.SettlementService,
                modules_service_1.ModulesService
            ]
        })
    ], MasterModule);
    return MasterModule;
}());
exports.MasterModule = MasterModule;
//# sourceMappingURL=master.module.js.map