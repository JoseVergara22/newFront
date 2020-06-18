import { Component, OnInit } from '@angular/core';
import { WorkService } from '../../master-services/Work/work.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ChecklistService } from '../../master-services/checklist/checklist.service';

@Component({
  selector: 'app-master-checklists',
  templateUrl: './master-checklists.component.html',
  styleUrls: ['./master-checklists.component.scss']
})
export class MasterChecklistsComponent implements OnInit {

  rowsWork: any;
  rowtodelete:any;
  
  constructor(private workService:WorkService,    private router:Router, private checkServices:ChecklistService) {
    this.getWorks();
   }

   getWorks() {
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
        this.rowsWork = resp.data;
        console.log( this.rowsWork);
    }
    }).catch(error => {
      swal({
        title:'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
       });
      console.log(error);
    });
  }

  redirecttodetails(){
    this.router.navigateByUrl('maintenance/registerChecklist');
  }

  goToTpdateView(workrow:any){
    console.log(workrow.description);
    this.router.navigateByUrl('maintenance/work_detailsUpdate/'+workrow.description);
  }
  deleteWorkHeader(workrow:any){
    swal({
      title:"Confirmacion",
      text:"esta seguro que desea borrar este elemento?",
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
            this.generalAlert('Rutina eliminada','Rutina eliminada correctamente','success');
            this.getWorks();
          }
        }).catch(err=>{
          console.log(err);
          this.generalAlert('Error','ocurrio un error durante el procesado',"error");
        });
      } else {
        console.log("proceso cancelado");
      }
    });
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


  ngOnInit() {
  }

}
