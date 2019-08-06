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

import {UiSwitchModule} from 'ng2-ui-switch';

// Servicios
import { UserService } from '../master-services/User/user.service';
import { RestService } from '../master-services/Rest/rest.service';
import { UploadService } from '../master-services/services/upload.service';



@NgModule({
  imports: [
    CommonModule,
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
    MasterForkliftComponent
  ],
  providers: [RestService, UserService, UploadService]
})
export class MasterModule { }
