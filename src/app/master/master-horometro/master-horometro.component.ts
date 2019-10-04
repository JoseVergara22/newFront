import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HorometroService } from '../../master-services/horometro/horometro.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-master-horometro',
  templateUrl: './master-horometro.component.html',
  styleUrls: ['./master-horometro.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterHorometroComponent implements OnInit {

  rowsForklift:any;
  currentrow:any;
  tableinputs:any=Array();
  constructor(private forkliftservice:HorometroService) { }

  ngOnInit() {
    this.getForklift();
  }

  getForklift(){
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.forkliftservice.getForklift().then(data=>{
      const resp:any=data;
      this.rowsForklift=resp.data;
      console.log(resp.data);
      swal.close();
    }).catch(error=>{
      swal.close();
      console.log("error en el consumo:"+error);
    });
  }

  generalAalert(title:string,message:string,type){
    swal({
        title:title
    });
  }

  updatehorometro(toupdate:any,value:any){
    console.log("hola");
    console.log (toupdate);
    console.log("hola");
    console.log(this.tableinputs);
  }

}
