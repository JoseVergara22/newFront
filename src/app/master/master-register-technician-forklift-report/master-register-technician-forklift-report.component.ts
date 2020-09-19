import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ForkliftService } from '../../master-services/Forklift/forklift.service';
import { PersonalService } from '../../master-services/personal/personal.service';
import { RestService } from '../../master-services/Rest/rest.service';
import { ResumenesService } from '../../master-services/resumenes/resumenes.service';

@Component({
  selector: 'app-master-register-technician-forklift-report',
  templateUrl: './master-register-technician-forklift-report.component.html',
  styleUrls: ['./master-register-technician-forklift-report.component.scss']
})
export class MasterRegisterTechnicianForkliftReportComponent implements OnInit {

  selectedBusinessId: any = 0;
  selectedRegionalId:any = 0;
  selectedBranchOfficeId: any = 0;
  selectedForkliftId: any = 0;
  selectedReporId: any = 0;

  customers: any;
  regional: any;

  branchOffices: any;
  forklifts: any;
  report: any

  headerinfo:any;

  constructor(private restService: RestService, private personalServices:PersonalService, private router: Router, 
    private forkliftService: ForkliftService) {
    this.getRegional();
    this.getReportTechnicians();

   }

  
  getRegional(){
    this.restService.getRegionalAll().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.regional  = resp.data;
    }).catch(error => {
      console.log(error);
    });
  }

  getCustomerRegionals() {
    this.restService.getRegionalCustomers(this.selectedRegionalId.id).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.customers  = resp.data;
      
      //asignar valores customer;
    
    }).catch(error => {
      console.log(error);
    });
   }

  getReportTechnicians() {
    this.personalServices.getReportTechnician().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.report  = resp.data;
      
      //asignar valores customer;
    
    }).catch(error => {
      console.log(error);
    });
   }

  getReportTechnicianDetail() {
    this.personalServices.getReportTechnicianDetail(this.selectedReporId.id).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.report  = resp.data;
      
      //asignar valores customer;
    
    }).catch(error => {
      console.log(error);
    });
   }

   

  getBranchOffices() {
    if(this.selectedBusinessId!=0){
    
    // Llenar información de cliente  
    this.restService.getOffice(this.selectedBusinessId.id).then(data => {
      const resp: any = data;
      console.log('oficinas: '+data);
      swal.close();
      this.branchOffices  = resp.data;
    }).catch(error => {
      console.log(error);
    });
  
   
    }else{
      this.selectedBranchOfficeId=0;
      this.selectedForkliftId=0;
    }
  }

  getForklifs() {
    if(this.selectedBranchOfficeId!=0){
    console.log('this.selectedBusinessId.id');
    console.log(this.selectedBranchOfficeId.id);

  this.forkliftService.getForkliftBranchOfficesFull(this.selectedBranchOfficeId.id).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.forklifts  = resp.data;
 
    }).catch(error => {
      console.log(error);
    });
  }else{
    
  }
}

registerheader(){
  // console.log(this.title);
  if ((this.selectedRegionalId!=0) || (this.selectedBusinessId!=0) || (this.selectedBranchOfficeId==0)
   || (this.selectedForkliftId==0) || this.selectedReporId != 0) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.personalServices.createReportForklift(this.selectedBusinessId.id,this.selectedBranchOfficeId.id,
      this.selectedForkliftId.id,this.selectedReporId.id).then(data=>{
      const resp:any=data;
      console.log(data);
      this.headerinfo=resp.data;
      console.log("header information");
      console.log(this.headerinfo)
      swal.close();
      this.router.navigateByUrl('maintenance/reportUpdate/'+this.headerinfo.id);
    }).catch(err=>{

      console.log(err);
      this.generalAlert("Ha ocurrido un herror","Ocurrio un error durante la ecucion","error");
    });
  }else{
    this.generalAlert("Ha ocurrido un herror","Complete todos los campos obligatorios","error");
  }
}

generalAlert(title:string,text:string,type:any){
  swal({
    title:title,
    text:text,
    type:type
  })
}

  ngOnInit() {
  }

}
