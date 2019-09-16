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
<<<<<<< HEAD
import { MasterWorkDashboardComponent } from "./master-work-dashboard/master-work-dashboard.component";
import { MasterWorkDetailsComponent } from './master-work-details/master-work-details.component';
=======
import { MasterWorkDashboardComponent } from './master-work-dashboard/master-work-dashboard.component';
import { MasterRoutineDetailsComponent } from './master-routine-details/master-routine-details.component';
>>>>>>> 9c4e66ee1e990313571f76892fb8bb2a3879bd94
// Servicios
import { UserService } from '../master-services/User/user.service';
import { NewService } from '../master-services/new/new.service';
import { RestService } from '../master-services/Rest/rest.service';
import { UploadService } from '../master-services/services/upload.service';
import { WorkService } from '../master-services/Work/work.service';




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
    NgxDatatableModule
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
<<<<<<< HEAD
    MasterWorkDetailsComponent
=======
    MasterRoutineDetailsComponent
>>>>>>> 9c4e66ee1e990313571f76892fb8bb2a3879bd94
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
    MonthAgendaService]
})
export class MasterModule { }
