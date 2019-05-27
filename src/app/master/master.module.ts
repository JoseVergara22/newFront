import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterAuthComponent } from './master-auth/master-auth.component';
import { MasterRoutingModule } from './master-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MasterRoutingModule
  ],
  declarations: [
    MasterAuthComponent
  ]
})
export class MasterModule { }
