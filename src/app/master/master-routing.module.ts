import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MasterUserRegisterComponent } from './master-user-register/master-user-register.component';
import { MasterNewsComponent } from './master-news/master-news.component';
import { MasterForgetPasswordComponent } from './master-forget-password/master-forget-password.component';
import { MasterChangePasswordComponent } from './master-change-password/master-change-password.component';
import { MasterCreateSliderComponent } from './master-create-slider/master-create-slider.component';
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


const routes: Routes = [
  {
    path: 'register',
    component: MasterUserRegisterComponent
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
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
