import { Component, OnInit, Injectable } from '@angular/core';
import { RestService } from '../../master-services/Rest/rest.service';
import { ResumenesService } from '../../master-services/resumenes/resumenes.service';
import { ForkliftService } from '../../master-services/Forklift/forklift.service';
import { NgbCalendar, NgbDateParserFormatter, NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { ChecklistService } from '../../master-services/checklist/checklist.service';
import { WorkService } from '../../master-services/Work/work.service';

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

interface itemSelectInterface {// item para mostrar selccionados
  id?: number;
  item?: string;
  select?: boolean;
}

@Component({
  selector: 'app-master-edit-resumenes',
  templateUrl: './master-edit-resumenes.component.html',
  styleUrls: ['./master-edit-resumenes.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: MasterEditResumenesComponent}]
})
export class MasterEditResumenesComponent extends NgbDatepickerI18n {

  now:any;

  forkliftText = '';
  rowsClient: any;

  fromDate: NgbDateStruct;
  untilDate: NgbDateStruct;
  correctiveDate: NgbDateStruct;

  forkliftId: any;
  forklift: any;
  customerName: any = '';
  branch: any = '';
  description: any;
  brand: any;
  fuel: any;
  hCurrent: any;
  hInitial: any;
  machine: any;
  mastilContract: any;
  mastilIzado: any;
  model: any;
  observation: any;
  serie: any;
  sequence: any;
  tonne: any;
  tyre_description: any;

  correctives: any;
  preventives: any;
  checklists: any;
  technician: any;
  rowsWork: any;

  routineSelecteds: Array <itemSelectInterface> = [];
  routineSelected: itemSelectInterface;

  checklisSelecteds: Array <itemSelectInterface> = [];
  checklistSelected: itemSelectInterface;

  technicianSelecteds: Array <itemSelectInterface> = [];
  technicianSelected: itemSelectInterface;
 
  preventiveList: string='';
  correctiveList: string='';
  checkedList: string='';
  technicianList: string='';
  observationCorrective: string='';

  currentPreventive: any;
  currentChecklist: any;
  currentCorrective: any;
  
  constructor(private restService: RestService, private resumenesService: ResumenesService, private router: Router, 
    private forkliftService: ForkliftService, private _i18n: I18n, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter,
    private rutaActiva: ActivatedRoute, private checklistService: ChecklistService, private workService: WorkService) {
      super();

      this.forkliftId = this.rutaActiva.snapshot.params.id;
      console.log(this.rutaActiva.snapshot.params);
      this.getForklifs(this.forkliftId);
      this.forkliftText = this.rutaActiva.snapshot.params.full_name;
      
      var date = new Date();
      var ngbDateStruct = { day: date.getDate(), month: date.getMonth()+1, year: date.getFullYear()};
      this.fromDate=ngbDateStruct;
      this.untilDate=ngbDateStruct;
      this.correctiveDate=ngbDateStruct;
     }

     getForklifs(id) {
      console.log(id);
      this.forkliftService.getForklift(id).then(data => {
        const resp: any = data;
        console.log(data);
        swal.close();
        this.forklift  = resp.data;
        console.log(this.forklift);
        //Asignacion de detalle
        this.customerName= this.forklift.business_name;
        this.branch= this.forklift.branch_name;
        this.description = this.forklift.description;
        this.brand = this.forklift.brand_description;
        this.fuel =this.forklift.fuel_description;
        this.hCurrent = this.forklift.h_current;
        this.hInitial = this.forklift.h_initial;
        this.machine = this.forklift.machine_description;
        this.mastilContract = this.forklift.mastil_contract;
        this.mastilIzado = this.forklift.mastil_izado;
        this.model = this.forklift.model_description;
        this.observation = this.forklift.observation;
        this.sequence = this.forklift.sequence;
        this.serie = this.forklift.serie;
        this.tonne = this.forklift.tonne;
        this.tyre_description = this.forklift.tyre_description;
   
        this.getPreventiveRoutines();
        this.getCorrectiveRoutines();
        }).catch(error => {
          console.log(error);
        });
     
    }

    getChecklist(){
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.checklistService.showChecklist().then(data => {
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
          this.checklists = resp.data;
          for (let item of  this.checklists) {
            console.log(item); // 1, "string", false
  
            this.checklistSelected= {
              id: item.id,
              item: item.description,
              select: false
            }
            this.checklisSelecteds.push(this.checklistSelected);
        }
  
        console.log("ole ole");
        console.log(this.checklisSelecteds);
  
  
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
          for (let item of  this.rowsWork) {
            console.log(item); // 1, "string", false
  
            this.routineSelected= {
              id: item.id,
              item: item.description,
              select: false
            }
            this.routineSelecteds.push(this.routineSelected);
        }
  
        console.log("ole ole");
        console.log(this.routineSelecteds);
  
  
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
  
    getTechnician(){
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.restService.getTechnician().then(data => {
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
          this.technician = resp.data;
          for (let item of  this.technician) {
            console.log(item); // 1, "string", false
  
            this.technicianSelected= {
              id: item.id,
              item: item.name,
              select: false
            }
            this.technicianSelecteds.push(this.technicianSelected);
          
      }
      console.log( this.technicianSelecteds);
          console.log( this.technician);
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

  createPreventive(){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    let params;
     // poner los 0
     var day = (this.fromDate.day < 10 ? '0' : '') +this.fromDate.day;
     // 01, 02, 03, ... 10, 11, 12
     let month = ((this.fromDate.month) < 10 ? '0' : '') + (this.fromDate.month);
     // 1970, 1971, ... 2015, 2016, ...
     var year = this.fromDate.year;

     var fromD = year +'-'+ month+'-'+ day;
     
     //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
     // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
     params=fromD+' 00:00:00';

      console.log('entro');
      console.log(this.routineSelecteds);

      for (let item of this.routineSelecteds) {
        console.log('entro');
        if(item.select){
         console.log(item);
         console.log('entro');
          this.preventiveList = this.preventiveList + item.id +',';
          console.log('entro');
        }
      }

      console.log(this.technicianSelecteds);
      for (let item of this.technicianSelecteds) {
        console.log('entro');
        if(item.select){
          console.log(item);
          console.log('entro');
            this.technicianList = this.technicianList + item.id +',';
          }
        }
        console.log(this.forklift);
        this.resumenesService.storePreventive(this.forkliftId,this.forklift.customer_id,this.forklift.branch_offices_id,this.preventiveList,this.technicianList,params).then(data => {
          const resp: any = data;
          console.log(data);
          if (resp.success == false) {
            swal({
              title:'Error',
              text: 'Ha ocurrido un error',
              type: 'error'
             });
          } else {
          swal.close();
          let result  = resp.data;
          console.log(result);
          document.getElementById('assignPrevetiveHide').click();
          this.getTechnician();
          this.getPreventiveRoutines();
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

  createChecklist(){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    let params;

     // until poner los ceros
     var dayUntil = (this.untilDate.day < 10 ? '0' : '') +this.untilDate.day;
     // 01, 02, 03, ... 10, 11, 12
     let monthUntil = ((this.untilDate.month) < 10 ? '0' : '') + (this.untilDate.month);
     // 1970, 1971, ... 2015, 2016, ...
     var yearUntil = this.untilDate.year;    

     var untilD = yearUntil +'-'+ monthUntil+'-'+ dayUntil;
     //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
     // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
     params=untilD+' 00:00:00';

      console.log('entro');
      console.log(this.checklisSelecteds);
      for (let item of this.checklisSelecteds) {
        console.log('entro');
          if(item.select){
            console.log(item);
            console.log('entro');
            this.checkedList = this.checkedList + item.id +',';
          }
      }

      console.log(this.technicianSelecteds);
      for (let item of this.technicianSelecteds) {
        console.log('entro');
        if(item.select){
          console.log(item);
          console.log('entro');
            this.technicianList = this.technicianList + item.id +',';
          }
        }
        console.log(this.forklift);
        this.resumenesService.storeChecklist(this.forkliftId,this.forklift.customer_id,this.forklift.branch_offices_id,this.checkedList,this.technicianList,params).then(data => {
          const resp: any = data;
          console.log(data);
          if (resp.success) {
            swal({
              title:'Error',
              text: 'Ha ocurrido un error',
              type: 'error'
             });
          } else {
          swal.close();
          let result  = resp.data;
           console.log(result);
          document.getElementById('assignChecklistHide').click();
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

  createCorrective(){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    if(this.observationCorrective != ''){
      let params;

      // until poner los ceros
      var dayUntil = (this.untilDate.day < 10 ? '0' : '') +this.untilDate.day;
      // 01, 02, 03, ... 10, 11, 12
      let monthUntil = ((this.untilDate.month) < 10 ? '0' : '') + (this.untilDate.month);
      // 1970, 1971, ... 2015, 2016, ...
      var yearUntil = this.untilDate.year;    
 
      var untilD = yearUntil +'-'+ monthUntil+'-'+ dayUntil;
      //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
      // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
      params=untilD+' 00:00:00';
 
       console.log('entro');
       
 
       console.log(this.technicianSelecteds);
       for (let item of this.technicianSelecteds) {
         console.log('entro');
         if(item.select){
           console.log(item);
           console.log('entro');
             this.technicianList = this.technicianList + item.id +',';
           }
         }
         console.log(this.forklift);
         this.resumenesService.storeCorrective(this.forkliftId,this.forklift.customer_id,this.forklift.branch_offices_id,this.observationCorrective,this.technicianList,params).then(data => {
           const resp: any = data;
           console.log(data);
           if (resp.success) {
             swal({
               title:'Error',
               text: 'Ha ocurrido un error',
               type: 'error'
              });
           } else {
           swal.close();
           let result  = resp.data;
           console.log(result);
           document.getElementById('assignCorrectiveHide').click();
           this.getCorrectiveRoutines();
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
    }else{
      swal({
        title:'Campo vacio',
        text: 'Debe ingresar una observación',
        type: 'warning'
      });
    }
  }

  getPreventiveRoutines(){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftPreventive(this.forkliftId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentPreventive  = resp.data;


    }).catch(error => {
      console.log(error);
    });
  
  }

  getCorrectiveRoutines(){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftCorrective(this.forkliftId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentCorrective  = resp.data;


    }).catch(error => {
      console.log(error);
    });
  
  }

  getCChecklist(){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftPreventive(this.forkliftId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentChecklist  = resp.data;


    }).catch(error => {
      console.log(error);
    });
  
  }

  toBack(){
    this.router.navigateByUrl('maintenance/resumenes');
  }

  ngOnInit() {
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
 
}
