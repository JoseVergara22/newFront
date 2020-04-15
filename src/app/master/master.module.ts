import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterAuthComponent } from './master-auth/master-auth.component';
import { MasterRoutingModule } from './master-routing.module';
import { MasterUserRegisterComponent } from './master-user-register/master-user-register.component';
import { MasterNewsComponent } from './master-news/master-news.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { MasterSharedModule } from '../master-shared/master-shared.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MasterForgetPasswordComponent } from './master-forget-password/master-forget-password.component';
import { MasterChangePasswordComponent } from './master-change-password/master-change-password.component';
import { MasterCreateSliderComponent } from './master-create-slider/master-create-slider.component';

// Formularios maestras
import { MasterBrandComponent } from './master-brand/master-brand.component';
import { MasterModelComponent } from './master-model/master-model.component';
import { MasterTypeDocumentComponent } from './master-type-document/master-type-document.component';
import { MasterPaymentConditionComponent } from './master-payment-condition/master-payment-condition.component';
import { MasterMachineComponent } from './master-machine/master-machine.component';
import { MasterTyreComponent } from './master-tyre/master-tyre.component';
import { MasterProfileComponent } from './master-profile/master-profile.component';
import { MasterRegisterThirdComponent } from './master-register-third/master-register-third.component';
import { MasterFuelComponent } from './master-fuel/master-fuel.component';
import { MasterBranchOfficeComponent } from './master-branch-office/master-branch-office.component';
import { MasterForkliftComponent } from './master-forklift/master-forklift.component';
import { MasterTaskComponent } from './master-task/master-task.component';
import { MasterCustomersComponent } from './master-customers/master-customers.component';
import { MasterUpdateCustomerComponent } from './master-update-customer/master-update-customer.component';
import { MasterShowForkliftComponent } from './master-show-forklift/master-show-forklift.component';
import { MasterExternalUserComponent } from './master-external-user/master-external-user.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService,
         WorkWeekService, MonthService,MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import {UiSwitchModule} from 'ng2-ui-switch';
import { MasterRestartPasswordComponent } from './master-restart-password/master-restart-password.component';
import { MasterWorkDetailsComponent } from './master-work-details/master-work-details.component';
import { MasterWorkDashboardComponent } from './master-work-dashboard/master-work-dashboard.component';
import { MasterRoutineDetailsComponent } from './master-routine-details/master-routine-details.component';
import { MasterMultiDatePickerComponent } from './master-multi-date-picker/master-multi-date-picker.component';
import { MasterHorometroComponent } from './master-horometro/master-horometro.component';
import { MasterForkliftUpdateComponent } from './master-forklift-update/master-forklift-update.component';
import { MasterExternalUserUpdateComponent } from './master-external-user-update/master-external-user-update.component';
import { MasterForkliftShowComponent } from './master-forklift-show/master-forklift-show.component';
import { MasterMultiDatePickerShowComponent } from './master-multi-date-picker-show/master-multi-date-picker-show.component';
import { MasterResetPasswordLoginComponent } from './master-reset-password-login/master-reset-password-login.component';
import { MasterEstimateCountriesComponent } from './master-estimate-countries/master-estimate-countries.component';
import { MasterPriceCountriesDhlComponent } from './master-price-countries-dhl/master-price-countries-dhl.component';
import { MasterEstimateCustomerComponent } from './master-estimate-customer/master-estimate-customer.component';
import { MasterEstimateAllComponent } from './master-estimate-all/master-estimate-all.component';
import { MasterEstimateConfigurationComponent } from './master-estimate-configuration/master-estimate-configuration.component';
import { MasterUpdateEstimateCustomerComponent } from './master-update-estimate-customer/master-update-estimate-customer.component';
import { MasterCopyEstimateCustomerComponent } from './master-copy-estimate-customer/master-copy-estimate-customer.component';
import { MasterPrivacyPolicyComponent } from './master-privacy-policy/master-privacy-policy.component';
import { MasterRegionalsComponent } from './master-regionals/master-regionals.component';
import { MasterTechniciansComponent } from './master-technicians/master-technicians.component';
import { MasterCreateTechniciansComponent } from './master-create-technicians/master-create-technicians.component';
import { MasterCostCenterComponent } from './master-cost-center/master-cost-center.component';
import { MasterWarehousesComponent } from './master-warehouses/master-warehouses.component';
import { MasterSubCostCenterComponent } from './master-sub-cost-center/master-sub-cost-center.component';
import { MasterWarehousesOutComponent } from './master-warehouses-out/master-warehouses-out.component';
import { MasterCreateWarehousesOutComponent } from './master-create-warehouses-out/master-create-warehouses-out.component';

// import { MasterAdminComponent } from '../master-layout/master-admin/master-admin.component';

// Servicios
import { UserService } from '../master-services/User/user.service';
import { NewService } from '../master-services/new/new.service';
import { RestService } from '../master-services/Rest/rest.service';
import { UploadService } from '../master-services/services/upload.service';
import { WorkService } from '../master-services/Work/work.service';
import { ColorPickerService } from 'ngx-color-picker';
import { HorometroService } from "../master-services/horometro/horometro.service";
import { ForkliftService } from '../master-services/Forklift/forklift.service';
import { EstimateService } from '../master-services/estimate/estimate.service';
import { FilexcelService } from '../master-services/FileExcel/filexcel.service';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';


@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,
    RecurrenceEditorModule,
    MasterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MasterSharedModule,
    SharedModule,
    UiSwitchModule,
    NgxDatatableModule,
    NgbModule,
    AutocompleteLibModule
  ],
  exports: [
  ],
  declarations: [
    MasterAuthComponent,
    MasterUserRegisterComponent,
    MasterNewsComponent,
    MasterForgetPasswordComponent,
    MasterChangePasswordComponent,
    MasterCreateSliderComponent,
    MasterBrandComponent,
    MasterModelComponent,
    MasterTypeDocumentComponent,
    MasterPaymentConditionComponent,
    MasterMachineComponent,
    MasterFuelComponent,
    MasterTyreComponent,
    MasterProfileComponent,
    MasterRegisterThirdComponent,
    MasterBranchOfficeComponent,
    MasterForkliftComponent,
    MasterTaskComponent,
    MasterCustomersComponent,
    MasterUpdateCustomerComponent,
    MasterShowForkliftComponent,
    MasterExternalUserComponent,
    MasterRestartPasswordComponent,
    MasterWorkDashboardComponent,
    MasterWorkDetailsComponent,
    MasterRoutineDetailsComponent,
    MasterMultiDatePickerComponent,
    MasterHorometroComponent,
    MasterForkliftUpdateComponent,
    MasterExternalUserUpdateComponent,
    MasterForkliftShowComponent,
    MasterMultiDatePickerShowComponent,
    MasterResetPasswordLoginComponent,
    MasterEstimateCountriesComponent,
    MasterPriceCountriesDhlComponent,
    MasterEstimateCustomerComponent,
    MasterEstimateAllComponent,
    MasterEstimateConfigurationComponent,
    MasterUpdateEstimateCustomerComponent,
    MasterCopyEstimateCustomerComponent,
    MasterPrivacyPolicyComponent,
    MasterRegionalsComponent,
    MasterTechniciansComponent,
    MasterCreateTechniciansComponent,
    MasterCostCenterComponent,
    MasterWarehousesComponent,
    MasterSubCostCenterComponent,
    MasterWarehousesOutComponent,
    MasterCreateWarehousesOutComponent,
   // MasterAdminComponent
  ],
  providers: [
    RestService,
    UserService,
    UploadService,
    WorkService,
    NewService,
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    MonthAgendaService,
    ColorPickerService,
    HorometroService,
    ForkliftService,
    EstimateService,
    FilexcelService]
})
export class MasterModule { }
