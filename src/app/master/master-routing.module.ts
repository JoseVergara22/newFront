import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MasterUserRegisterComponent } from './master-user-register/master-user-register.component';
import { MasterNewsComponent } from './master-news/master-news.component';
import { MasterForgetPasswordComponent } from './master-forget-password/master-forget-password.component';
import { MasterChangePasswordComponent } from './master-change-password/master-change-password.component';
import { MasterCreateSliderComponent } from './master-create-slider/master-create-slider.component';
import { MasterSliderComponent } from "../master-shared/master-slider/master-slider.component";
import { MasterRegisterThirdComponent } from './master-register-third/master-register-third.component';
import { MasterBranchOfficeComponent } from './master-branch-office/master-branch-office.component';
import { MasterForkliftComponent } from './master-forklift/master-forklift.component';
import { MasterBrandComponent } from './master-brand/master-brand.component';
import { MasterModelComponent } from './master-model/master-model.component';
import { MasterFuelComponent } from './master-fuel/master-fuel.component';
import { MasterTyreComponent } from './master-tyre/master-tyre.component';
import { MasterMachineComponent } from './master-machine/master-machine.component';
import { MasterTypeDocumentComponent } from './master-type-document/master-type-document.component';
import { MasterPaymentConditionComponent } from './master-payment-condition/master-payment-condition.component';
import { MasterTaskComponent } from './master-task/master-task.component';
import { MasterCustomersComponent } from './master-customers/master-customers.component';
import { MasterUpdateCustomerComponent } from './master-update-customer/master-update-customer.component';
import { MasterShowForkliftComponent } from './master-show-forklift/master-show-forklift.component';
import { MasterExternalUserComponent } from './master-external-user/master-external-user.component';
import { MasterRestartPasswordComponent } from "./master-restart-password/master-restart-password.component";
import { MasterWorkDashboardComponent } from "./master-work-dashboard/master-work-dashboard.component";
import { MasterWorkDetailsComponent } from "./master-work-details/master-work-details.component";
import { MasterRoutineDetailsComponent } from './master-routine-details/master-routine-details.component';
import { MasterHorometroComponent } from "./master-horometro/master-horometro.component";
import { MasterForkliftUpdateComponent } from './master-forklift-update/master-forklift-update.component';
import { MasterExternalUserUpdateComponent } from './master-external-user-update/master-external-user-update.component';

const routes: Routes = [
  {
    path: 'master',
    component: MasterSliderComponent
  },
  {
    path: 'register',
    component: MasterUserRegisterComponent
  },
  {
    path:'horometro',
    component:MasterHorometroComponent
  },
  {
    path: 'work_details',
    component: MasterWorkDetailsComponent
  },
  {
    path: 'work_detailsUpdate/:name',
    component: MasterWorkDetailsComponent
  },
  {
    path:'work_dashboard',
    component: MasterWorkDashboardComponent
  },
  {
    path: 'restartPassword/:token',
    component: MasterRestartPasswordComponent
  },
  {
    path: '',
    component: MasterNewsComponent
  },
  {
    path: 'forget',
    component: MasterForgetPasswordComponent
  },
  {
    path: 'changePassword',
    component: MasterChangePasswordComponent
  },
  {
    path: 'createSlider',
    component: MasterCreateSliderComponent
  },
  {
    path: 'registerCustomer',
    component: MasterRegisterThirdComponent
  },
  {
    path: 'registerOffice',
    component: MasterBranchOfficeComponent
  },
  {
    path: 'task',
    component: MasterTaskComponent
  },
  {
    path: 'registerForklift',
    component: MasterForkliftComponent
  },
  {
    path: 'registerBrand',
    component: MasterBrandComponent
  },
  {
    path: 'registerModel',
    component: MasterModelComponent
  },
  {
    path: 'registerFuel',
    component: MasterFuelComponent
  },
  {
    path: 'registerTyre',
    component: MasterTyreComponent
  },
  {
    path: 'registerMachine',
    component:  MasterMachineComponent
  },
  {
    path: 'registerTypeDocument',
    component:  MasterTypeDocumentComponent
  },
  {
    path: 'registerPaymentCondition',
    component:  MasterPaymentConditionComponent
  },
  {
    path: 'customers',
    component:  MasterCustomersComponent
  },
  {
    path: 'customersUpdate/:id',
    component:  MasterUpdateCustomerComponent
  },
  {
    path: 'forkliftShow',
    component:  MasterShowForkliftComponent
  },
  {
    path: 'externalUser',
    component:  MasterExternalUserComponent
  },
  {
    path: 'detailRoutine',
    component:  MasterRoutineDetailsComponent
  },
  {
    path: 'forkliftUpdate/:id',
    component:  MasterForkliftUpdateComponent
  },{
    path: 'externalUserUpdate',
    component:  MasterExternalUserUpdateComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
