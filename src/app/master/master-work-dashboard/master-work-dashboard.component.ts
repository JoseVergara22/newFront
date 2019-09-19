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
  styleUrls: ['./master-work-dashboard.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterWorkDashboardComponent implements OnInit {

  rowsWork: any;
  rowtodelete:any;
  constructor(private workService:WorkService,
              private router:Router
            ) {
              this.getWorks();
            }

  ngOnInit() {
  }

  getWorks() {
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
  
  redirecttodetails(){
    this.router.navigateByUrl('master/work_details');
  }

  goToTpdateView(workrow:any){
    console.log(workrow.description);
    this.router.navigateByUrl('master/work_detailsUpdate/'+workrow.description);
  }
  deleteWorkHeader(workrow:any){
    swal({
      title:"Confirmacion",
      text:"esta seguro que desea borrar este elememto?",
      cancelButtonText:"No",
      confirmButtonText:"Si",
      showCancelButton:true,
      showConfirmButton:true
    }).then(goingtodelete=>{
      if (goingtodelete.value) {
        this.loader();
        this.rowtodelete=workrow;
        console.log(this.rowtodelete);
        this.workService.deleteWorkHeader(this.rowtodelete.id).then(data=>{
          const resp:any=data;
          if (resp.success==false){
            this.generalAlert('Error','ocurrio un error durante el procesado',"error");
          }else{
            this.generalAlert("Proceso exitoso","El proceso ha sido completado correctamente","success");
            this.getWorks();
          }
        }).catch(err=>{
          console.log(err);
          this.generalAlert('Error','ocurrio un error durante el procesado',"error");
        });
      } else {
        console.log("proceso cancelado");
      }
    })
  }

  generalAlert(title:string,text:string,type:any){
    swal({
      title:title,
      text:text,
      type:type
    })
  }
  
  loader(){
    swal({
      title:"procesando informacion",
      allowEscapeKey:false,
      allowOutsideClick:false
    });
    swal.showLoading();
  }

}
