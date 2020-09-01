import { Component, OnInit, Injectable } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { RestService } from '../../master-services/Rest/rest.service';
import { ForkliftService } from '../../master-services/Forklift/forklift.service';
import { ResumenesService } from '../../master-services/resumenes/resumenes.service';
import { Router } from '@angular/router';
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
  selector: 'app-master-corrective-maintenance',
  templateUrl: './master-corrective-maintenance.component.html',
  styleUrls: ['./master-corrective-maintenance.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: MasterCorrectiveMaintenanceComponent}]
})
export class MasterCorrectiveMaintenanceComponent extends NgbDatepickerI18n {

  checklisSelecteds: Array <itemSelectInterface> = [];
  checklistSelected: itemSelectInterface;

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
  now:any;

  rowsWork: any;
  technician: any;
  currentPreventive: any;

  technicianUpdate: any;
  checklistUpdate: any;

  elementDelete: any;

  forkliftText = '';
  rowsClient: any;

  forklift: any = '';
  customerName: any = '';
  branch: any = '';

  observationCorrective: string='';
  observationUpdateCorrective: string='';
  technicianList: string='';
  oldDate: string;

  checklists: any;
  currentChecklist: any;

  selectedMinutUpdateCorrective: any= 0;
  selectedHourUpdateCorrective: any= 0;

  currentCorrective: any;
  correctiveId: any;

  row: any;
  consecutive: any;

  constructor(private restService: RestService, private resumenesService: ResumenesService, private router: Router, 
    private forkliftService: ForkliftService, private _i18n: I18n, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
      super();
      
      var date = new Date();

      let year = Number(date.getFullYear());


      var ngbDateStruct = { day: date.getDate(), month: date.getMonth()+1, year: date.getFullYear()};
      this.fromDate=ngbDateStruct;
      var news: NgbDateStruct = { year: year, month: 7, day: 14 };
      this.untilDate=news;


      this.getRegional();
    
      this.getTechnician();
      
    }

    getCorrectiveRoutines(){
      // Llenar información de cliente  
      if( this.selectedForkliftId==0 || this.selectedRegionalId==0 || this.selectedBusinessId==0 || this.selectedBranchOfficeId==0 ){
        swal({
          title:'Importante',
          text: 'Debes seleccionar todos los filtros.',
          type: 'warning'
         });
      }else{
        swal({
          title: 'Validando información ...',
          allowOutsideClick: false
        });
        swal.showLoading();

        this.resumenesService.getWorkForkliftCorrective(this.selectedForkliftId.id).then(data => {
          const resp: any = data;
          console.log(data);
          swal.close();
          this.currentCorrective  = resp.data;
          this.row  = this.currentCorrective;
    
    
        }).catch(error => {
          console.log(error);
        });
      }
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

  
  getConsecutive() {
   
    this.resumenesService.showCorrectiveConsecutive().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.consecutive  = resp.data;
      var date = new Date();
     
      let now = date.getFullYear();

     
      // 01, 02, 03, ... 10, 11, 12
      let month = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);

      
      let yearCosecutive=date.getFullYear().toString().substring(2,4);
      this.consecutive= Number(this.consecutive.consecutive)+1;
      this.consecutive = Number(yearCosecutive.toString()+month.toString()+this.consecutive.toString());
      
      // this.rowsClient = resp.data;
      // this.rowStatic =  resp.data;
      // this.rowsTemp = resp.data;
      // console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
   }

   showAssing(){
     if(this.selectedForkliftId==0 || this.selectedRegionalId==0 || this.selectedBusinessId==0 || this.selectedBranchOfficeId==0){
      swal({
        title:'Importante',
        text: 'Debes seleccionar todos los filtros.',
        type: 'warning'
       });
     }else{
       document.getElementById('showAssing').click();
     }
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
          // console.log(item); // 1, "string", false

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

  createCorrective(){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(this.observationCorrective);
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
         this.resumenesService.storeCorrective(this.selectedForkliftId.id,this.selectedBusinessId.id,this.selectedBranchOfficeId.id,this.observationCorrective,this.technicianList, Number(this.consecutive),params,).then(data => {
           const resp: any = data;
           console.log(data);
           if (resp.success== false) {
             swal({
               title:'Error',
               text: 'Ha ocurrido un error',
               type: 'error'
              });
           } else {
           swal.close();
           let result  = resp.data;
           console.log(result);

          //  this.resumenesService.updateConsecutiveCorrective().then(data => {
          //   const resp: any = data;
          //   console.log(data);
            this.getCorrectiveRoutines();
           this.cleanSelectCorrective();
           this.cleanSelectTechnician();
           document.getElementById('assignCorrectiveHide').click();
           swal({
            title: 'Guardado con exito',
            type: 'success'
           });
             console.log('llego hasta aqui');
    
            swal.close();
            // this.rowsClient = resp.data;
            // this.rowStatic =  resp.data;
            // this.rowsTemp = resp.data;
            console.log( this.rowsClient);
          // }).catch(error => {
          //   swal({
          //     title: 'Se presento un problema, para guardar este encabezado cotización',
          //     type: 'error'
          //    });
          //   console.log(error);
          // });
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

  updateDate(row: any){

    console.log(row);
    this.observationUpdateCorrective = row.result.corrective.work;
    this.technicianUpdate = row.result.technicians;
    this.correctiveId = row.result.corrective.id;
    
    let date = row.result.corrective.date; 
    let dateComplete = date.substring(0,10);
    let dateArray = dateComplete.split('-');
    
    let hourComplete =  date.substring(10,19);
    let hourArray = hourComplete.split(':');
    this.selectedHourUpdateCorrective = Number(hourArray[0]);
    this.selectedMinutUpdateCorrective = Number(hourArray[1]);

    console.log(hourComplete);
    let year = Number(dateArray[0]);
    let mounth = Number(dateArray[1]);
    let day = Number(dateArray[2]);
    var news: NgbDateStruct = { year: year, month: mounth, day: day };
    console.log(news);
    this.untilDate=news;

    // this.untilDate = '2020-08-04';
    for (let elemento of this.technicianUpdate) {
      console.log('ingreso a mirar tecnicos');
      this.SelectItemTechnician(elemento);
      }

      document.getElementById( 'showUpdateCorrective').click();
  }

  
  updateCorrective(){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    if(this.observationUpdateCorrective != ''){
    let params;
     // poner los 0
     var day = (this.fromDate.day < 10 ? '0' : '') +this.fromDate.day;
     // 01, 02, 03, ... 10, 11, 12
     let month = ((this.fromDate.month) < 10 ? '0' : '') + (this.fromDate.month);
     // 1970, 1971, ... 2015, 2016, ...
     var year = this.fromDate.year;
     
     console.log( this.selectedHourUpdateCorrective);
     console.log( this.selectedMinutUpdateCorrective);

     var hour = this.selectedHourUpdateCorrective;
     var minut = this.selectedMinutUpdateCorrective;




     console.log(hour);
     console.log( minut);
     
     
     var fromD = year +'-'+ month+'-'+ day+' '+hour+':'+minut;
     console.log( fromD);
     //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
     // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
     params=fromD;

     console.log('entro');
      console.log(this.checklisSelecteds);

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
        this.resumenesService.updateCorrective(this.correctiveId,this.selectedForkliftId.id,this.observationUpdateCorrective,this.technicianList,params).then(data => {
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
          document.getElementById('assignUpdateCorrectiveHide').click();
          
          this.getCorrectiveRoutines();
           this.cleanSelectCorrective();
           this.cleanSelectTechnician();
          swal({
            title: 'Guardado con exito',
            type: 'success'
           });
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
          swal.showLoading();
          this.resumenesService.deleteCorrective(Number(this.elementDelete.result.corrective.id))
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
           
           swal({
            title: 'Elemento eliminado',
            type: 'success'
           });

           this.getCorrectiveRoutines();
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

  cleanSelectCorrective(){
    this.observationUpdateCorrective = '';
    this.observationCorrective = '';
  }

  cleanSelectTechnician(){
    this.technicianSelecteds.map(function(dato){
      //if(dato.Modelo == modelo){
        dato.select = false;
      //}
      
      return dato;
    });
  }

  addCancelDate(){
    //If exist, remove the date
    
    
    this.cleanSelectCorrective();
    this.cleanSelectTechnician();
    document.getElementById('assignCorrectiveHide').click();
}
  addCancelUpdateDate(){
    //If exist, remove the date
    
    
    this.cleanSelectCorrective();
    this.cleanSelectTechnician();
    document.getElementById( 'assignUpdateCorrectiveHide').click();
}

SelectItemChecklist(idItem: any){// Falta organizarlo
  var item = idItem.checklists_id;
  this.checklisSelecteds.map(function(dato){

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
  var tech = idTechnician.user_id
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