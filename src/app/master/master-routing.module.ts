import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MasterAuthComponent } from './master-auth/master-auth.component';

const routes: Routes = [
  {
    path: '',
    component: MasterAuthComponent,
    data: {
      title: 'Simple Login'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
