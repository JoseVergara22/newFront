import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import { WorkService } from '../../master-services/Work/work.service';
import swal from 'sweetalert2';
import { UserInternalInterface } from '../../master-models/user-internal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-master-work-dashboard',
  templateUrl: './master-work-dashboard.component.html',
  styleUrls: ['./master-work-dashboard.component.scss']
})
export class MasterWorkDashboardComponent implements OnInit {

  rowsWork: any;
  constructor(private workService:WorkService) { }

  ngOnInit() {
  }

  getUser() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.workService.getWorks().then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title:'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
         });
      } else {
        console.log(data);
        swal.close();
        this.rowsWork = resp.data;
        console.log( this.rowsWork);
    }
    }).catch(error => {
      swal.close();
      swal({
        title:'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
       });
      console.log(error);
    });
  }


}
