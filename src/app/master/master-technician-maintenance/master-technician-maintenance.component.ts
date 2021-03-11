import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { RestService } from '../../master-services/Rest/rest.service';
import { ResumenesService } from '../../master-services/resumenes/resumenes.service';
import { MasterSettlementAllComponent } from '../master-settlement-all/master-settlement-all.component';

declare var require: any
const FileSaver = require('file-saver');

const I18N_VALUES = {
  'fr': {
    weekdays: ['Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb', 'Dom'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic'],
  }
  // other languages you would support
};


@Injectable()
export class I18n {
  language = 'fr';
}

@Component({
  selector: 'app-master-technician-maintenance',
  templateUrl: './master-technician-maintenance.component.html',
  styleUrls: ['./master-technician-maintenance.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: MasterTechnicianMaintenanceComponent}]
})
export class MasterTechnicianMaintenanceComponent extends NgbDatepickerI18n {

  selectedRegionalId:any = 0;
  selectedTechnician: any = 0;
  selectedBusinessId: any = 0;
  selectedBranchOfficeId: any = 0;
  customers: any;
  now:any;
  regional:any;

  branchOffices: any;

  technician: any;
  rowsClient: any;

  forklift: any = '';
  customerName: any = '';
  branch: any = '';

  fromDate: NgbDateStruct;
  untilDate: NgbDateStruct;

  downloadPreventivePdf: any;
  downloadCorrectivePdf: any;
  downloadChecklistPdf: any;
  downloadPlatformPdf: any;
  downloadStevedorePdf: any;
  downloadBatteryPdf: any;



  constructor(private restService: RestService,private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, 
    private _i18n: I18n, private router: Router, private resumenesService: ResumenesService,) { 
    super();

    var date = new Date();
    var ngbDateStruct = { day: date.getDate(), month: date.getMonth()+1, year: date.getFullYear()};
               
    this.fromDate=ngbDateStruct;
    this.untilDate=ngbDateStruct;

    console.log(   this.fromDate);
    console.log(   this.untilDate);

    this.getRegional();
    this.getUser();
    this.getFilters();
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

  getUser(){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(this.selectedRegionalId);
    this.restService.getTechnician().then(data => {
      const resp: any = data;
      console.log(data);

      this.technician = resp.data
      swal.close();
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
    
    }
  }
  

  
getFilters() {

  
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      let params='';
      let cont=0;

      var day = (this.fromDate.day < 10 ? '0' : '') +this.fromDate.day;
   // 01, 02, 03, ... 10, 11, 12
   let month = ((this.fromDate.month) < 10 ? '0' : '') + (this.fromDate.month);
   // 1970, 1971, ... 2015, 2016, ...
   var year = this.fromDate.year;

   // until poner los ceros
   var dayUntil = (this.untilDate.day < 10 ? '0' : '') +this.untilDate.day;
   // 01, 02, 03, ... 10, 11, 12
   let monthUntil = ((this.untilDate.month) < 10 ? '0' : '') + (this.untilDate.month);
   // 1970, 1971, ... 2015, 2016, ...
   var yearUntil = this.untilDate.year;    

   var fromD = year +'-'+ month+'-'+ day;
   var untilD = yearUntil +'-'+ monthUntil+'-'+ dayUntil;

   //  var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
   //  var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
     var from_date= fromD+' 00:00:00';
      var to_date=untilD+' 23:59:59';
      
    console.log(from_date);
    console.log(to_date);
    console.log(this.selectedTechnician);
    console.log(this.selectedBusinessId);

      params='from_date='+from_date+'&to_date='+to_date;
     

      if(this.selectedTechnician!=0){
        console.log('imprimir cont');
        // console.log(cont);
          params=params+'&&user_id='+this.selectedTechnician.id;
        
      }
      if(this.selectedBusinessId!=0){
        console.log('imprimir cont');
        // console.log(cont);
          params=params+'&&customer_id='+this.selectedBusinessId.id;
        
      }

      if(this.selectedBranchOfficeId!=0){
        console.log('imprimir cont');
        // console.log(cont);

          params=params+'&&branch_offices_id='+this.selectedBranchOfficeId.id;
     
      }


      console.log('.---------->'+params);
      this.resumenesService.getTechnicianRoutine(params).then(data => {
        const resp: any = data;
        console.log('info de filter');
        console.log(data);
      // this.customers  = resp.data;
        this.rowsClient = resp.data;
        console.log(resp.error);
        swal.close();
        if(resp.error){
          console.log('entro')
          swal({
            title:'Oops',
            text: 'Hubo un error en la consulta.',
            type: 'error'
            });
        }
        // this.rowStatic =  resp.data;
        // this.rowsTemp = resp.data;
        // console.log( this.rowsClient);
      }).catch(error => {
        console.log(error);
      });  

}

 
  onDateSelectionFrom(date: any) {

    if(this.untilDate){
    var fromD = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day); //31 de diciembre de 2015
    var untilD = new Date(this.untilDate.year, this.untilDate.month, this.untilDate.day);
 
    console.log(this.fromDate.day);
    if(fromD> untilD){
      console.log('es mayor');
      this.untilDate=this.fromDate;
    }
  }
  }

  onDateSelectionUntil(date: any) {
    var fromD = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day); //31 de diciembre de 2015
    var untilD = new Date(this.untilDate.year, this.untilDate.month, this.untilDate.day);
    if( untilD< fromD){
      console.log('es mayor');
      this.fromDate=this.untilDate;
    }
}

  viewResumenes(row: any){
    if(row.type === "CORRECTIVO"){
      this.downloadCorrective(row);
      // this.router.navigateByUrl('maintenance/viewCorrective/'+row.id);
    }
    if(row.type === "CHECKLIST"){
      this.downloadChecklist(row);
      // this.router.navigateByUrl('maintenance/viewChecklist/'+row.id);
    }
    if(row.type === "PREVENTIVO"){
      this.downloadPreventive(row);
      // this.router.navigateByUrl('maintenance/viewPreventive/'+row.id);
    }
    if(row.type === "PLATAFORMA"){
      this.downloadPlatform(row);
      // this.router.navigateByUrl('maintenance/viewPlatform/'+row.id);
    }
    if(row.type === "ESTIBADORES"){
      this.downloadStevedore(row);
      // this.router.navigateByUrl('maintenance/viewStevedore/'+row.id);
    }
    if(row.type === "REPORTE TÉCNICO"){
      this.downloadReport(row);
      // this.router.navigateByUrl('maintenance/updateForkliftReport/'+row.id);
    }
}

 
downloadPreventive(row: any){
  swal.showLoading();
  console.log(row);
  this.resumenesService.downloadPreventivePdf(row.id).then(data => {
    const resp: any = data;
    console.log(data);
    this.downloadPreventivePdf  = resp.data; 
    
    const pdfUrl = this.downloadPreventivePdf.url;
    const pdfName = 'Matenimiento_Preventivo_Nro_'+row.preventive_consecutive;
    FileSaver.saveAs(pdfUrl, pdfName);
    swal.close();

  }).catch(error => {
    console.log(error);
    swal({
      title:'Error',
      text: 'Ha ocurrido un error',
      type: 'error'
     });
  });
}

downloadCorrective(row: any){
  swal.showLoading();
  console.log(row);
  this.resumenesService.downloadCorrectivePdf(row.result.corrective.id).then(data => {
    const resp: any = data;
    console.log(data);
    this.downloadCorrectivePdf  = resp.data; 
    
    
    const pdfUrl = this.downloadCorrectivePdf.url;
    const pdfName = 'Matenimiento_Correctivo_Nro_'+row.result.corrective.corrective_consecutive;
    FileSaver.saveAs(pdfUrl, pdfName);
    swal.close();

  }).catch(error => {
    console.log(error);
    swal({
      title:'Error',
      text: 'Ha ocurrido un error',
      type: 'error'
     });
  });
}

downloadChecklist(row: any){
  swal.showLoading();
  console.log(row);
  this.resumenesService.downloadChecklistPdf(row.id).then(data => {
    const resp: any = data;
    console.log(data);
    this.downloadChecklistPdf  = resp.data; 
    
    
    const pdfUrl = this.downloadChecklistPdf.url;
    const pdfName = 'Checklist_Nro_'+row.checklists_consecutive;
    FileSaver.saveAs(pdfUrl, pdfName);
    swal.close();

  }).catch(error => {
    console.log(error);
    swal({
      title:'Error',
      text: 'Ha ocurrido un error',
      type: 'error'
     });
  });
}

downloadPlatform(row: any){
  swal.showLoading();
  console.log(row);
  this.resumenesService.downloadPlatformPdf(row.id).then(data => {
    const resp: any = data;
    console.log(data);
    this.downloadPlatformPdf  = resp.data;
    
    const pdfUrl = this.downloadPlatformPdf.url;
    const pdfName = 'Matenimiento_Plataforma_Nro_'+row.platform_consecutive;
    FileSaver.saveAs(pdfUrl, pdfName);
    
    swal.close();
  }).catch(error => {
    console.log(error);
    swal({
      title:'Error',
      text: 'Ha ocurrido un error',
      type: 'error'
     });
  });
}

downloadStevedore(row: any){
  swal.showLoading();
  console.log(row);
  this.resumenesService.downloadStevedorePdf(row.id).then(data => {
    const resp: any = data;
    console.log(data);
    this.downloadStevedorePdf  = resp.data; 
    
    const pdfUrl = this.downloadStevedorePdf.url;
    const pdfName = 'Matenimiento_Estibador_Nro_'+row.stevedore_consecutive;
    FileSaver.saveAs(pdfUrl, pdfName);
    
    swal.close();
  }).catch(error => {
    console.log(error);
    swal({
      title:'Error',
      text: 'Ha ocurrido un error',
      type: 'error'
     });
  });
}

downloadBattery(row: any){
  swal.showLoading();
  console.log(row);
  this.resumenesService.downloadBatteryPdf(row.id).then(data => {
    const resp: any = data;
    console.log(data);
    this.downloadBatteryPdf  = resp.data; 
    
    const pdfUrl = this.downloadBatteryPdf.url;
    const pdfName = 'Matenimiento_Bateria_Nro_'+row.preventive_consecutive;
    FileSaver.saveAs(pdfUrl, pdfName);
    swal.close();

  }).catch(error => {
    console.log(error);
    swal({
      title:'Error',
      text: 'Ha ocurrido un error',
      type: 'error'
     });
  });
}

downloadReport(row: any){
  swal.showLoading();
  console.log(row);
  this.resumenesService.downloadReportPdf(row.id).then(data => {
    const resp: any = data;
    console.log(data);
    this.downloadBatteryPdf  = resp.data; 
    
    const pdfUrl = this.downloadBatteryPdf.url;
    const pdfName = 'Repote_Técnico_Nro_'+row.technical_reports_consecutive;
    FileSaver.saveAs(pdfUrl, pdfName);
    swal.close();

  }).catch(error => {
    console.log(error);
    swal({
      title:'Error',
      text: 'Ha ocurrido un error',
      type: 'error'
     });
  });
}

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  ngOnInit() {
  }
}
