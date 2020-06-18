import { Component, OnInit } from '@angular/core';
import { WorkService } from '../../master-services/Work/work.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-master-register-checklists',
  templateUrl: './master-register-checklists.component.html',
  styleUrls: ['./master-register-checklists.component.scss']
})
export class MasterRegisterChecklistsComponent implements OnInit {

  title1:string;
  hours1:number;
  observation1:string;

  headerinfo:any;

  constructor(private workservice: WorkService, private router: Router,  private activatedroute: ActivatedRoute,
    private formbuilder:FormBuilder) { 
      
    }

  registerheader(){
    console.log(this.title1);
    if ((this.title1!=null) || (this.title1!="") || (this.hours1==null)) {
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.workservice.storeWorkHeader(1,this.title1,this.hours1,this.observation1).then(data=>{
        const resp:any=data;
        this.headerinfo=resp.data;
        console.log("header information");
        console.log(this.headerinfo)
        swal.close();
        this.router.navigateByUrl('maintenance/updateChecklist'+this.headerinfo.id);
      }).catch(err=>{

        console.log(err);
        this.generalAlert("ha ocurrido un herror","ocurrio un error durante la ecucion","error");
      });
    }else{
      this.generalAlert("ha ocurrido un herror","complete todos los campos obligatorios","error");
    }
  }

  generalAlert(title:string,message:string,type:any){
    swal({
      title:title,
      text: message,
      type: type
     });
  }

  ngOnInit() {
  }

}
