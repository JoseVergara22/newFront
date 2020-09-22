import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { ForkliftService } from '../../master-services/Forklift/forklift.service';
import { PersonalService } from '../../master-services/personal/personal.service';
import { RestService } from '../../master-services/Rest/rest.service';

@Component({
  selector: 'app-master-update-technician-forklift-report',
  templateUrl: './master-update-technician-forklift-report.component.html',
  styleUrls: ['./master-update-technician-forklift-report.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterUpdateTechnicianForkliftReportComponent implements OnInit {

  selectedBusinessId: any = 0;
  selectedRegionalId:any = 0;
  selectedBranchOfficeId: any = 0;
  selectedForkliftId: any = 0;
  selectedReporId: any = 0;
  selectedReporDetailId: any = 0;
  selectedUpdateReporDetailId: any = 0;

  customers: any;
  regional: any;

  branchOffices: any;
  forklifts: any;
  report: any
  reportDetail: any

  headerinfo:any;
  parts:any;
  partsId:any;
  partForm:FormGroup;
  updatePartForm:FormGroup;

  switchUpdate = false;

  image:any
  makeForklift:any
  header:any
  headerId:any
  
  currentPart:any
  
  constructor(private restService: RestService, private personalServices:PersonalService, private router: Router, 
    private forkliftService: ForkliftService, private activatedRoute: ActivatedRoute) {

      this.headerId = this.activatedRoute.snapshot.params.id;
      this.getReportForkliftDetail(this.headerId);

      const partDescription = new FormControl('',Validators.required);
      const reportDetail = new FormControl('',Validators.required);

    this.partForm= new FormGroup({
      partDescription:partDescription,
      reportDetail:reportDetail,

    });

    const partDescriptionUpdate = new FormControl('',Validators.required);
    const reportDetailUpdate = new FormControl('',Validators.required);

    this.updatePartForm= new FormGroup({
      partDescriptionUpdate:partDescriptionUpdate,
      reportDetailUpdate:reportDetailUpdate,

    });
   }

  
  getRegional(){
    this.restService.getRegionalAll().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.regional  = resp.data;
      this.selectedRegionalId = this.header.regional_id;
    }).catch(error => {
      console.log(error);
    });
  }

  getCustomerRegionals() {
    this.restService.getRegionalCustomers(this.selectedRegionalId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.customers  = resp.data;
      this.selectedBusinessId = this.header.customer_id;


      
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

      this.selectedReporId =  this.header.technical_reports_id;
      //asignar valores customer;
    
    }).catch(error => {
      console.log(error);
    });
   }

  getReportForkliftDetailMake() {
    this.personalServices.getForkliftReportMake(this.headerId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.makeForklift  = resp.data;

      
      //asignar valores customer;
    
    }).catch(error => {
      console.log(error);
    });
   }

  getReportTechnicianDetail() {
    this.personalServices.getReportTechnicianDetail(this.selectedReporId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.reportDetail  = resp.data;
      
      //asignar valores customer;
    
    }).catch(error => {
      console.log(error);
    });
   }

  getReportForkliftDetail(id: number) {
    this.personalServices.getForkliftReportId(id).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.header  = resp.data.header;
      this.image  = resp.data.image;
      this.makeForklift  = resp.data.make;
      
      //asignar valores customer;
      this.getRegional();
    this.getReportTechnicians();
    
    }).catch(error => {
      console.log(error);
    });
   }

   

  getBranchOffices() {
    if(this.selectedBusinessId!=0){
    
    // Llenar información de cliente  
    this.restService.getOffice(this.selectedBusinessId).then(data => {
      const resp: any = data;
      console.log('oficinas: '+data);
      swal.close();
      this.branchOffices  = resp.data;

      this.selectedBranchOfficeId = this.header.branch_offices_id;
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
    console.log(this.selectedBranchOfficeId);

  this.forkliftService.getForkliftBranchOfficesFull(this.selectedBranchOfficeId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.forklifts  = resp.data;

      this.selectedForkliftId = this.header.forklift_id;
 
    }).catch(error => {
      console.log(error);
    });
  }else{
    
  }
  }

  validateCondition(){
    if(this.selectedReporId != 0){
      this.getReportTechnicianDetail();
      document.getElementById('showPart').click();
    }else{
      this.generalAlert("Ha ocurrido un error.","Seleccione y actualice el encabezado con el reporte a diligenciar.","error");
    }
  }

  updateParts(row: any){
    this.currentPart = row;
    console.log( this.currentPart );
    this.updatePartForm.get('partDescriptionUpdate').setValue(this.currentPart.technical_report_details_description);
    this.selectedUpdateReporDetailId = row.technical_report_details_id;
   document.getElementById('showPartUpdate').click();
  }

  sendUpdatePart(part: any){
    if(this.selectedUpdateReporDetailId!=0){
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading(); 
      var work =part.value.partDescription;
      this.personalServices.createReportForkliftPart(this.headerId,this.selectedRegionalId,this.selectedReporId,this.selectedReporDetailId.id,
        this.selectedReporDetailId.description,work).then(data=>{
        const resp:any=data;
        console.log(data);
        this.partsId=resp.data;
        console.log("part information");
        console.log(this.partsId)
        swal.close();
        this.getReportForkliftDetailMake();
      }).catch(err=>{
  
        console.log(err);
        this.generalAlert("Ha ocurrido un error.","Ocurrio un error durante la ecución","error");
      });
    }else{
      this.generalAlert("Ha ocurrido un error.","Debe seleccionar el item  diigenciar","error");
    }
  }

  deletePart(workrow:any){
    swal({
      title:"Confirmacion",
      text:"esta seguro que desea borrar este elemento?",
      cancelButtonText:"No",
      confirmButtonText:"Si",
      showCancelButton:true,
      showConfirmButton:true
    }).then(goingtodelete=>{
      if (goingtodelete.value) {
        swal({
          title:"procesando informacion",
          allowEscapeKey:false,
          allowOutsideClick:false
        });
        swal.showLoading();
        this.reportDetail=workrow;
        console.log(this.reportDetail);
        this.personalServices.deleteForkliftReportDetail(this.reportDetail.id).then(data=>{
          const resp:any=data;
          if (resp.success==false){
            this.generalAlert('Error','Ocurrio un error durante el procesado',"error");
          }else{
            this.generalAlert('Reporte eliminada','Rutina eliminada correctamente','success');
            this.getReportForkliftDetailMake();
          }
        }).catch(err=>{
          console.log(err);
          this.generalAlert('Error','Ocurrio un error durante el procesado',"error");
        });
      } else {
        console.log("proceso cancelado");
      }
    });
  }

  storagePart(part: any){
    if(this.selectedReporDetailId!=0){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading(); 
    var work =part.value.partDescription;
    this.personalServices.createReportForkliftPart(this.headerId,this.selectedRegionalId,this.selectedReporId,this.selectedReporDetailId.id,
      this.selectedReporDetailId.description,work).then(data=>{
      const resp:any=data;
      console.log(data);
      this.partsId=resp.data;
      console.log("part information");
      console.log(this.partsId)
      swal.close();
      
    }).catch(err=>{

      console.log(err);
      this.generalAlert("Ha ocurrido un error.","Ocurrio un error durante la ecución","error");
    });
  }else{
    this.generalAlert("Ha ocurrido un error.","Debe seleccionar el item  diigenciar","error");
  }
  }

  
  updateHeader(){
  // console.log(this.title);
  if ((this.selectedRegionalId!=0) || (this.selectedBusinessId!=0) || (this.selectedBranchOfficeId==0)
   || (this.selectedForkliftId==0) || this.selectedReporId != 0) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.personalServices.updateReportForklift(this.headerId,this.selectedRegionalId,this.selectedBusinessId,this.selectedBranchOfficeId,
      this.selectedForkliftId,this.selectedReporId).then(data=>{
      const resp:any=data;
      console.log(data);
      this.headerinfo=resp.data;
      console.log("header information");
      console.log(this.headerinfo)
      swal.close();
      this.router.navigateByUrl('maintenance/reportUpdate/'+this.headerinfo.id);
    }).catch(err=>{

      console.log(err);
      this.generalAlert("Ha ocurrido un error.","Ocurrio un error durante la ecucion","error");
    });
  }else{
    this.generalAlert("Ha ocurrido un error.","Complete todos los campos obligatorios","error");
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
