import { Component, OnInit, Injectable } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { RestService } from '../../master-services/Rest/rest.service';
import { ResumenesService } from '../../master-services/resumenes/resumenes.service';
import { Router } from '@angular/router';
import { ForkliftService } from '../../master-services/Forklift/forklift.service';
import { WorkService } from '../../master-services/Work/work.service';
import swal from 'sweetalert2';

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
  selector: 'app-master-preventive-maintenance',
  templateUrl: './master-preventive-maintenance.component.html',
  styleUrls: ['./master-preventive-maintenance.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: MasterPreventiveMaintenanceComponent}]
})
export class MasterPreventiveMaintenanceComponent extends NgbDatepickerI18n {
  routineSelecteds: Array <itemSelectInterface> = [];
  routineSelected: itemSelectInterface;

  technicianSelecteds: Array <itemSelectInterface> = [];
  technicianSelected: itemSelectInterface;

  fromDate: NgbDateStruct;
  untilDate: NgbDateStruct;
  preventives: any;

  selectedBusinessId: any = 0;
  selectedRegionalId:any = 0;
  selectedBranchOfficeId: any = 0;
  selectedForkliftId: any = 0;
  selectedHourPreventive: any = 0;
  selectedMinutPreventive: any = 0;
  branchOffices: any;
  forklifts: any;
  customers: any;
  regional: any;
  
  selectedHourUpdatePreventive: any = 0;
  selectedMinutUpdatePreventive: any = 0;

  rowsWork: any;
  technician: any;
  currentPreventive: any;

  technicianUpdate: any;
  preventiveUpdate: any;

  elementDelete: any;

  forkliftText = '';
  rowsClient: any;

  forklift: any = '';
  customerName: any = '';
  branch: any = '';

  technicianList: string='';
  preventiveList: string='';
  oldDate:any;

  constructor(private restService: RestService, private resumenesService: ResumenesService, private router: Router, 
    private forkliftService: ForkliftService, private _i18n: I18n, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter,
    private workService: WorkService) { 
      super();

      var date = new Date();
      var ngbDateStruct = { day: date.getDate(), month: date.getMonth()+1, year: date.getFullYear()};
      this.fromDate=ngbDateStruct;
      this.untilDate=ngbDateStruct;

      this.getRegional();
      this.getWorks();
      this.getTechnician();
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
          // console.log(item); // 1, "string", false

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


    var fromD = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day); //31 de diciembre de 2015
    var untilD = new Date(this.untilDate.year, this.untilDate.month, this.untilDate.day);

    console.log(this.fromDate.day);
    if(fromD> untilD){
      console.log('es mayor');
      this.untilDate=this.fromDate;
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
     
     console.log( this.selectedHourPreventive);
     console.log( this.selectedMinutPreventive);

     var hour = this.selectedHourPreventive;
     var minut = this.selectedMinutPreventive;

     console.log(hour);
     console.log( minut);
     
     
     var fromD = year +'-'+ month+'-'+ day+' '+hour+':'+minut;
     console.log( fromD);
     //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
     // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
     params=fromD;

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
        this.resumenesService.storePreventive(this.selectedForkliftId.id,this.selectedBusinessId.id,this.selectedBranchOfficeId.id,this.preventiveList,this.technicianList,params).then(data => {
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
          
          this.getPreventiveRoutines();
          swal({
            title: 'Guardado con exito',
            type: 'success'
           });
          }
          this.cleanSelectRoutines();
          this.cleanSelectTechnician();
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

  getPreventiveRoutines(){
    // Llenar información de cliente  
    if( this.selectedForkliftId == 0 ){
      swal({
        title:'Importante',
        text: 'Debes seleccionar todos los filtros.',
        type: 'error'
       });
    }else{
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();

    this.resumenesService.getWorkForkliftPreventive(this.selectedForkliftId.id).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentPreventive  = resp.data;

    
    }).catch(error => {
      console.log(error);
    });
  }
  }

  updateDate(row: any){

    console.log(row);
    this.preventiveUpdate = row.result.preventiveRoutines;
    this.technicianUpdate = row.result.technicians;
    this.oldDate = row.date;


    let date = row.result.corrective.date; 
    let dateComplete = date.substring(0,10);
    let dateArray = dateComplete.split('-');
    
    let hourComplete =  date.substring(10,19);
    let hourArray = hourComplete.split(':');
    this.selectedHourUpdatePreventive = Number(hourArray[0]);
    this.selectedMinutUpdatePreventive = Number(hourArray[1]);

    console.log(hourComplete);
    let year = Number(dateArray[0]);
    let mounth = Number(dateArray[1]);
    let day = Number(dateArray[2]);
    var news: NgbDateStruct = { year: year, month: mounth, day: day };
    console.log(news);
    this.untilDate=news;

    for (let elemento of this.preventiveUpdate) {
      console.log('ingreso a mirar checks');
      this.SelectItemRoutines(elemento);
      }

    for (let elemento of this.technicianUpdate) {
      console.log('ingreso a mirar checks');
      this.SelectItemTechnician(elemento);
      }

      document.getElementById( 'showUpdatePreventive').click();
  }

  deleteEstimateDetail(item: any) {
    swal({
      title: 'Estás seguro de eliminar este elemento?',
     // text: 'Once deleted, you will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Si'

    })
    .then((willDelete) => {
        if (willDelete.value) {
          this.elementDelete = item;
          console.log(item);
          console.log(this.elementDelete);
          console.log(this.elementDelete.result);
          console.log(this.elementDelete.result.technicians);
          var rout = '';
          var tech = '';
          for (let routin of this.elementDelete.result.preventiveRoutines){
            
            rout = rout + routin.id + ','

          }

          for (let tec of this.elementDelete.result.technicians){
            
            tech = tech + tec.id + ','

          }
 
          console.log(rout);
          console.log(tech);
          swal.showLoading();
          this.resumenesService.deletePreventive(Number(this.selectedForkliftId.id),rout,tech)
          .then(data => {
            swal.showLoading();
            const resp: any = data;
            console.log(resp);

            if (resp.success === false) {
              swal({
                title: 'Esta rutina presenta problemas',
                text: 'Esta rutina no se puede eliminar',
                type: 'error'
               });
            } else {
           // this.router.navigateByUrl('master/registerBrand');
           swal({
            title: 'Elemento eliminado',
            type: 'success'
           });

           this.getPreventiveRoutines();
          }
          }).catch(error => {
            console.log(error);
          });
          console.log(this.elementDelete.id);
        } else {
         // swal('Fail');
        }
      console.log(willDelete);
    });
  }

  updatePreventive(){
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
     
     console.log( this.selectedHourUpdatePreventive);
     console.log( this.selectedHourUpdatePreventive);

     var hour = this.selectedHourUpdatePreventive;
     var minut = this.selectedHourUpdatePreventive;

  
     console.log(hour);
     console.log( minut);
     
     
     var fromD = year +'-'+ month+'-'+ day+' '+hour+':'+minut;
     console.log( fromD);
     //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
     // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
     params=fromD;

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
        this.resumenesService.updatePreventive(this.selectedForkliftId.id,this.selectedBusinessId.id,this.selectedBranchOfficeId.id,this.preventiveList,this.technicianList,this.oldDate,params).then(data => {
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
          document.getElementById('assingUpdatePrevetiveHide').click();
          
          this.getPreventiveRoutines();
          swal({
            title: 'Guardado con exito',
            type: 'success'
           });
          }
          this.cleanSelectRoutines();
          this.cleanSelectTechnician();
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

  cleanSelectRoutines(){
    this.routineSelecteds.map(function(dato){
      //if(dato.Modelo == modelo){
        dato.select = false;
      //}
      
      return dato;
    });
  }

  cleanSelectTechnician(){
    this.routineSelecteds.map(function(dato){
      //if(dato.Modelo == modelo){
        dato.select = false;
      //}
      
      return dato;
    });
  }

  SelectItemRoutines(idItem: any){// Falta organizarlo
    var item = idItem.preventive_routines_id;
    this.routineSelecteds.map(function(dato){

      console.log(idItem);
      console.log(dato);
      if(Number(dato.id) === Number(item)){
        dato.select = true;
        console.log('hacer cambio');
      }
      
      return dato;
    });
  }
  
  SelectItemTechnician(idTechnician: any){// Falta organizarlo
    var tech = idTechnician.technician_id
    console.log('jajaja');
    console.log(this.technicianSelecteds);
    this.technicianSelecteds.map(function(dato){
      if(dato.id == tech){
       dato.select = true;
       console.log('ingreso');
    }   
      return dato;
    });
  }

  addCancelDate(){
    //If exist, remove the date
    
    
    this.cleanSelectRoutines();
    this.cleanSelectTechnician();
    document.getElementById( 'assignPrevetiveHide').click();
}
  addCancelUpdateDate(){
    //If exist, remove the date
    
    
    this.cleanSelectRoutines();
    this.cleanSelectTechnician();
    document.getElementById( 'assingUpdatePrevetiveHide').click();
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
