import { Component, OnInit } from '@angular/core';
import { RestService } from '../../master-services/Rest/rest.service';
import { ResumenesService } from '../../master-services/resumenes/resumenes.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-master-view-resumenes-preventive',
  templateUrl: './master-view-resumenes-preventive.component.html',
  styleUrls: ['./master-view-resumenes-preventive.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss'],
})
export class MasterViewResumenesPreventiveComponent implements OnInit {

  descriptionRutine: any;
  dateAssing: any;
  dateStart: any;

  rutine_id:any;
  detail: any;


  constructor(private restService: RestService, private resumenesService: ResumenesService, private router: Router, 
    private rutaActiva: ActivatedRoute) { 
    this.rutine_id = this.rutaActiva.snapshot.params.id;
      this.getDetail(this.rutine_id);
  }

  getDetail(id: any){
    console.log(id);
      this.resumenesService.getMakeRoutinePreventive(id).then(data => {
        const resp: any = data;
        console.log(data);
        this.detail = resp.data;
        swal.close();
      
        }).catch(error => {
          console.log(error);
        });
  }

  ngOnInit() {
  }
  editResumenes(){}
}
