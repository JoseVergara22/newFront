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
interface itemPendingInterface {// item para mostrar pendientes
  id?:number;
  consecutive?: number;
  description?: string;
  routing?: string;
  type?:string
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
 
  pending: Array <itemPendingInterface> = [];
  pendingIn: itemPendingInterface;
 
  preventiveList: string='';
  correctiveList: string='';
  checkedList: string='';
  technicianList: string='';
  observationCorrective: string='';

  currentPreventive: any;
  currentChecklist: any;
  currentCorrective: any;
  currentPlatform: any;
  currentStevedore: any;
  currentEstimate: any;

  selectedMinutChecklist: any= 0;
  selectedHourChecklist: any= 0;

  preventiveDate: any;
  checklistDate: any;
  correctiveDate: any;
  pendingGeneral: any;

  urlImages: any;
  consecutiveCorrective: any;
  idRoutineCorrective: any;

  rowPreventive=[];
  rowChecklist=[];

  rowPlatform: any;
  rowStevedore: any;
  rowReport: any;
  rowEstimate: any;
  
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
      // this.getWorks();
      // this.getChecklist();
      // this.getTechnician();
     
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
       
        // this.getPreventiveRoutinesLast();
        this.getPreventiveRoutinesLastGeneral();
        // this.getPendingGeneral(id);
        this.getImages(id);
        this.getForkliftPendingGeneralMain();
        this.getStevedoreRoutinesLast();
        this.getPlatformRoutinesLast();
        this.getReportTechnicianLast();
        this.getEstimateLast();
        }).catch(error => {
          console.log(error);
        });
     
    }

    getImages(id){
      console.log(id);
      this.resumenesService.getForkliftImage(id).then(data => {
        const resp: any = data;
        console.log(data);
        this.urlImages = resp.data;
        swal.close();
      
        }).catch(error => {
          console.log(error);
        });
    }




    getForkliftPendingGeneralMain(){
      // Llenar información de cliente  
      this.resumenesService.getForkliftPendingGeneral(this.forkliftId).then(data => {
        const resp: any = data;
        console.log(data);
        swal.close();
        this.pendingGeneral  = resp.data; 
      }).catch(error => {
        console.log(error);
      });
    }
    

    getPendingGeneral(id){
      console.log(id);
      this.resumenesService.getPendingPreventive(id).then(data => {
        const resp: any = data;

        console.log(data);
        
        if(resp.success == true){
          let pendings = resp.data;
          console.log(pendings);
          for (let item of  pendings) {
            console.log(item); // 1, "string", false
            console.log(item.routing);
            let routine = item.routing[0];
            for (let value of  item.peding) {
              this.pendingIn= {
                id: value.forklift_routine_id,
                consecutive: routine.preventive_consecutive,
                description: value.description,
                routing: routine.description,
                type:'Preventivo'
              }
              console.log(this.pendingIn)
              this.pending.push(this.pendingIn);
            }
          }
         
          this.rowsWork = this.pending;
          console.log(this.rowsWork)
        }
        
        swal.close();
      
        }).catch(error => {
          console.log(error);
        });
    }
    

    getForkliftPendingGeneral(){
      // Llenar información de cliente  
      this.resumenesService.getForkliftPendingGeneral(this.forkliftId).then(data => {
        const resp: any = data;
        console.log(data);
        swal.close();
        this.pendingGeneral  = resp.data; 
      }).catch(error => {
        console.log(error);
      });
    }
    
    getPendingCorrective(id){
      console.log(id);
      this.resumenesService.getPendingCorrective(id).then(data => {
        const resp: any = data;

        console.log(data);
        console.log(this.pending.length);
        if(resp.success == true){
          let pendings = resp.data;
          console.log(pendings);
          for (let item of  pendings) {
            console.log(item); // 1, "string", false
            console.log(item.routing);
            let routine = item.routing[0];
            for (let value of  item.peding) {
              this.pendingIn= {
                id: value.corrective_forklift_routines_id,
                consecutive: routine.corrective_consecutive,
                description: value.description,
                routing: routine.work,
                type:'Correctivo'
              }
              console.log(this.pendingIn)
              this.pending.push(this.pendingIn);
            }
          }
         
          this.rowsWork = this.pending;
          console.log(this.rowsWork)
        }
        
        swal.close();
      
        }).catch(error => {
          console.log(error);
        });
    }

    getPendingChecklist(id){
      console.log(id);
      this.resumenesService.getPendingChecklist(id).then(data => {
        const resp: any = data;

        console.log(data);
        console.log(this.pending);
        console.log(this.pending.length);
          console.log(this.rowsWork);
        if(resp.success == true){
          let pendings = resp.data;
          console.log(pendings);
          for (let item of  pendings) {
            console.log(item); // 1, "string", false
            console.log(item.routing);
            let routine = item.routing[0];
            for (let value of  item.peding) {
              this.pendingIn= {
                id: value.checklist_forklift_routines_id,
                consecutive: routine.checklists_consecutive,
                description: value.description,
                routing: routine.description,
                type:'Checklist'
              }
              console.log(this.pendingIn);
              this.pending.push(this.pendingIn);
            }
          }
         
           
          this.rowsWork = this.pending;
          console.log(this.pending);
          console.log(JSON.stringify(this.pending));
        }
        
        swal.close();
      
        }).catch(error => {
          console.log(error);
        });
    }


    // editResumenes(row: any){
    //   console.log(row);
    //   if(row.type === "Correctivo"){
    //     this.router.navigateByUrl('maintenance/viewCorrective/'+row.id);
    //   }
    //   if(row.type === "Checklist"){
    //     this.router.navigateByUrl('maintenance/viewChecklist/'+row.id);
    //   }
    //   if(row.type === "Preventivo"){
    //     this.router.navigateByUrl('maintenance/viewPreventive/'+row.id);
    //   }
    // }

    showRoutineChecklist(item: any){
      this.router.navigateByUrl('maintenance/viewChecklist/'+item.id);
    }
    showRoutineCorrective(row: any){
      this.router.navigateByUrl('maintenance/viewCorrective/'+row.result.corrective.id);
    }
    showRoutinePlatform(item: any){
      this.router.navigateByUrl('maintenance/viewPlatform/'+item.id);
    }
    showRoutineStevedore(row: any){
      this.router.navigateByUrl('maintenance/viewStevedore/'+row.id);
    }
    showRoutineReport(row: any){
      this.router.navigateByUrl('maintenance/updateForkliftReport/'+row.id);
    }
    showEstimate(row: any){
      this.router.navigateByUrl('maintenance/estimateCustomerUpdate/'+row.id);
    }


    getChecklist(check: any){
      console.log(check);
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
            // console.log(item); // 1, "string", false
            if(item.id == check.id){
              this.checklistSelected= {
                id: item.id,
                item: item.description,
                select: true
              }
              this.checklisSelecteds.push(this.checklistSelected);
            }
           
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

    getWorks(preventive: any) {
      console.log(preventive);
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
            if(item.id == preventive.id){
              this.routineSelected= {
                id: item.id,
                item: item.description,
                select: true
              }
              this.routineSelecteds.push(this.routineSelected);
            }
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
  
    getTechnician(tech: any){
      console.log(this.technicianSelecteds.length)
      console.log(tech);
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
            if(item.id == tech.id ){
              this.technicianSelected= {
                id: item.id,
                item: item.name,
                select: true
              }
              this.technicianSelecteds.push(this.technicianSelected);
            
            }
            
          console.log( this.technicianSelecteds);
          console.log( this.technician);
          }
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

  showPreventive(row: any){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    console.log(row);
    this.preventiveDate = row.date;
    var preventive = row.result.preventiveRoutines;
    var tech =  row.result.technicians;
    

    for (let item of  preventive) {
      // console.log(item); // 1, "string", false
        this.routineSelected= {
          id: item.id,
          item: item.description,
          select: true
        }
        this.routineSelecteds.push(this.routineSelected);
    }

    console.log("ole ole");
    console.log(this.routineSelecteds);

    for (let item of  tech) {
      // console.log(item); // 1, "string", false
        this.technicianSelected= {
          id: item.id,
          item: item.name,
          select: true
        }
        this.technicianSelecteds.push(this.technicianSelected);
      
    }
      
    console.log( this.technicianSelecteds);




    for (let item of  tech) {
      // console.log(item); // 1, "string", false
      this.getTechnician(item);
}
  console.log( this.technicianSelecteds);

  document.getElementById( 'showPreventives').click();

  swal.close();
  }

  showRoutinePreventive(item: any){
    this.router.navigateByUrl('maintenance/viewPreventive/'+item.id);
  }

  
  cleanPreventive(){
    console.log(this.routineSelecteds.length);
    this.routineSelecteds.length = 0;
  }

  showCorrective(row: any){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(row);
    console.log(row);
    this.correctiveDate = row.result.corrective.date;
    this.observationCorrective = row.result.corrective.work;
    this.consecutiveCorrective = row.result.corrective.corrective_consecutive;
    var tech =  row.result.technicians;
    this.idRoutineCorrective = row.result.corrective.id;


    for (let item of  tech) {
      // console.log(item); // 1, "string", false
        this.technicianSelected= {
          id: item.id,
          item: item.name,
          select: true
        }
        this.technicianSelecteds.push(this.technicianSelected);
    }
      
    console.log( this.technicianSelecteds);

    document.getElementById( 'showCorrectives').click();
    swal.close();
  }

  cleanTechnician(){
    console.log(this.technicianSelecteds.length);
    this.technicianSelecteds.length = 0;
  }



  showChecklist(row: any){

    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    console.log(row);
    this.preventiveDate = row.date;
    var checklist = row.result.checklistRoutines;
    var tech =  row.result.technicians;

    for (let item of  checklist) {
      // console.log(item); // 1, "string", false
        this.checklistSelected= {
          id: item.id,
          item: item.description,
          select: true
        }
        this.checklisSelecteds.push(this.checklistSelected);
      }

  for (let item of  tech) {
    // console.log(item); // 1, "string", false
      this.technicianSelected= {
        id: item.id,
        item: item.name,
        select: true
      }
      this.technicianSelecteds.push(this.technicianSelected);
  }
    
  console.log( this.technicianSelecteds);

    document.getElementById( 'showChecklists').click();
    swal.close();
  }

  
  cleanChecklist(){
    console.log(this.checklisSelecteds.length);
    this.checklisSelecteds.length = 0;
  }


  getRoutinesFromDate(){
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    let from_date='';
    let to_date='';
  
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
  
     from_date=fromD+' 00:00:00';
     to_date=untilD+' 23:59:59';
    
    //  this.getPreventiveRoutinesFilter(from_date,to_date);
     this.getPreventiveRoutinesFilterGeneral(from_date,to_date);
     this.getCorrectiveRoutinesFilter(from_date,to_date);
     this.getForkliftChecklistFilterGeneral(from_date,to_date);
     this.getPlatformRoutinesFilter(from_date,to_date);
     this.getStevedoreRoutinesFilter(from_date,to_date);
    //  this.getForkliftChecklistFilter(from_date,to_date);
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

  // getPreventiveRoutinesLast(){
  //   // Llenar información de cliente  
  //   this.resumenesService.getWorkForkliftPreventiveLast(this.forkliftId).then(data => {
  //     const resp: any = data;
  //     console.log(data);
  //     swal.close();
  //     this.currentPreventive  = resp.data;
  //     console.log(this.currentPreventive);
      
  //     console.log(this.currentPreventive);
      
  //     this.getCorrectiveRoutinesLast();
        
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }
  getPreventiveRoutinesLastGeneral(){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftPreventiveLasteneral(this.forkliftId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentPreventive  = resp.data;
      // this.currentPreventive = this.currentPreventive[0];
      console.log(this.currentPreventive);
      for (let value of  this.currentPreventive) {
        //     
            for (let item of  value) {
            // console.log(value);
            this.rowPreventive.push(item);
            console.log(this.rowPreventive);
    
        //       this.getPendingGeneral(item.id);
            }
          }
        
      this.getCorrectiveRoutinesLast();
        
    }).catch(error => {
      console.log(error);
    });
  }

  getPreventiveRoutinesFilter(fromdate:string, to_date:string){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftPreventiveFilter(this.forkliftId,fromdate,to_date).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentPreventive  = resp.data;
      console.log(this.currentPreventive);
    // for (let value of  this.currentPreventive) {
    //     var preventive = value.result.preventiveRoutines;
    //     console.log(preventive);
 
    //     for (let item of  preventive) {

    //       this.getPendingGeneral(item.id);
    //     }
    //   }

    }).catch(error => {
      console.log(error);
    });
  
  }
  getPreventiveRoutinesFilterGeneral(fromdate:string, to_date:string){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftPreventiveFilterGeneral(this.forkliftId,fromdate,to_date).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentPreventive  = resp.data;
      console.log(this.currentPreventive);
    // for (let value of  this.currentPreventive) {
    //      
    //     for (let item of  value) {
    //      console.log(value);
    //     this.rowPreventive.push(item);
    //     console.log(this.rowPreventive);

    //       this.getPendingGeneral(item.id);
    //     }
    //   }

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
      this.rowsClient  = this.currentCorrective.corrective;


    }).catch(error => {
      console.log(error);
    });
  
  }

  getCorrectiveRoutinesLast(){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftCorrectiveLast(this.forkliftId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentCorrective  = resp.data;
      this.rowsClient  = this.currentCorrective;
      console.log(this.rowsClient);
      // for(let result of this.rowsClient){
      //   console.log(result.result.corrective.id);
        
      //   this.getPendingCorrective(result.result.corrective.id);
      // }
      this.getForkliftChecklistLastGeneral();
      // this.getForkliftChecklistLast();

    }).catch(error => {
      console.log(error);
    });
  
  }

  getReportTechnicianLast(){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftReportLast(this.forkliftId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.rowReport  = resp.data;
      // this.rowPlatform  = this.currentPlatform;
      console.log(this.rowReport);
      // for(let result of this.rowsClient){
      //   console.log(result.result.corrective.id);
        
      //   this.getPendingCorrective(result.result.corrective.id);
      // }
      // this.getStevedoreRoutinesLast();
      // this.getForkliftChecklistLast();

    }).catch(error => {
      console.log(error);
    });
  
  }


  getPlatformRoutinesLast(){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftPlatformLast(this.forkliftId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentPlatform  = resp.data;
      this.rowPlatform  = this.currentPlatform;
      console.log(this.rowPlatform);
      // for(let result of this.rowsClient){
      //   console.log(result.result.corrective.id);
        
      //   this.getPendingCorrective(result.result.corrective.id);
      // }
      // this.getStevedoreRoutinesLast();
      // this.getForkliftChecklistLast();

    }).catch(error => {
      console.log(error);
    });
  
  }
  
  getStevedoreRoutinesLast(){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftStevedoreLast(this.forkliftId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentStevedore  = resp.data;
      this.rowStevedore  = this.currentStevedore;
      console.log(this.rowStevedore);
      // for(let result of this.rowsClient){
      //   console.log(result.result.corrective.id);
        
      //   this.getPendingCorrective(result.result.corrective.id);
      // }
      // this.getForkliftChecklistLastGeneral();
      // this.getForkliftChecklistLast();

    }).catch(error => {
      console.log(error);
    });
  }

  getEstimateLast(){
    // Llenar información de cliente  
    this.resumenesService.getEstimateLast(this.forkliftId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentEstimate  = resp.data;
      this.rowEstimate  = this.currentEstimate;
      console.log(this.rowEstimate);
      // for(let result of this.rowsClient){
      //   console.log(result.result.corrective.id);
        
      //   this.getPendingCorrective(result.result.corrective.id);
      // }
      // this.getForkliftChecklistLastGeneral();
      // this.getForkliftChecklistLast();

    }).catch(error => {
      console.log(error);
    });
  }

  getCorrectiveRoutinesFilter(fromdate:string, to_date:string){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftCorrectiveFilter(this.forkliftId,fromdate,to_date).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentCorrective  = resp.data;
      this.rowsClient  = this.currentCorrective;
      console.log(this.rowsClient);
      // for(let result of this.rowsClient){
      //   console.log(result.result.corrective.id);
        
      //   this.getPendingCorrective(result.result.corrective.id);
      // }

    }).catch(error => {
      console.log(error);
    });
  
  }

  getReportTechnicianFilter(fromdate:string, to_date:string){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftPlatoformFilter(this.forkliftId,fromdate,to_date).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.rowReport  = resp.data;
      // this.rowsClient  = this.currentCorrective;
      console.log(this.rowReport);
      // for(let result of this.rowsClient){
      //   console.log(result.result.corrective.id);
        
      //   this.getPendingCorrective(result.result.corrective.id);
      // }

    }).catch(error => {
      console.log(error);
    });
  
  }
 

  getPlatformRoutinesFilter(fromdate:string, to_date:string){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftPlatoformFilter(this.forkliftId,fromdate,to_date).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentPlatform  = resp.data;
      this.rowPlatform  = this.currentPlatform;
      console.log(this.rowPlatform);
      // for(let result of this.rowsClient){
      //   console.log(result.result.corrective.id);
        
      //   this.getPendingCorrective(result.result.corrective.id);
      // }

    }).catch(error => {
      console.log(error);
    });
  
  }
 
  getStevedoreRoutinesFilter(fromdate:string, to_date:string){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftStevedoreFilter(this.forkliftId,fromdate,to_date).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentStevedore  = resp.data;
      this.rowStevedore  = this.currentStevedore;
      console.log(this.rowStevedore);
      // for(let result of this.rowsClient){
      //   console.log(result.result.corrective.id);
        
      //   this.getPendingCorrective(result.result.corrective.id);
      // }

    }).catch(error => {
      console.log(error);
    });
  
  }

  getEstimateFilter(fromdate:string, to_date:string){
    // Llenar información de cliente  
    this.resumenesService.getEstimateFilter(this.forkliftId,fromdate,to_date).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentEstimate  = resp.data;
      this.rowEstimate  = this.currentEstimate;
      console.log(this.rowEstimate);
      // for(let result of this.rowsClient){
      //   console.log(result.result.corrective.id);
        
      //   this.getPendingCorrective(result.result.corrective.id);
      // }

    }).catch(error => {
      console.log(error);
    });
  
  }

  getForkliftChecklist(){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftChecklist(this.forkliftId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentChecklist  = resp.data;


    }).catch(error => {
      console.log(error);
    });
  
  }

  getForkliftChecklistLast(){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftChecklistLast(this.forkliftId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentChecklist  = resp.data;
      // for(let check of this.currentChecklist){
      //   let result = check.result;
      //   for(let sub of result.checklistRoutines){

      //     this.getPendingChecklist(sub.id);
      //   }
      // }

    }).catch(error => {
      console.log(error);
    });
  
  }

  getForkliftChecklistLastGeneral(){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftChecklistLastGeneral(this.forkliftId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentChecklist  = resp.data;
      // this.currentChecklist = this.currentChecklist[0];
      for(let check of this.currentChecklist){
      //   let result = check.result;
        for(let sub of check){
          this.rowChecklist.push(sub);
      //     this.getPendingChecklist(sub.id);
        }
      }
      // this.getPlatformRoutinesLast();
    }).catch(error => {
      console.log(error);
    });
  
  }

  getForkliftChecklistFilter(fromdate:string, to_date:string){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftChecklistFilter(this.forkliftId,fromdate,to_date).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentChecklist  = resp.data;


    }).catch(error => {
      console.log(error);
    });
  
  }
  getForkliftChecklistFilterGeneral(fromdate:string, to_date:string){
    // Llenar información de cliente  
    this.resumenesService.getWorkForkliftChecklistFilterGeneral(this.forkliftId,fromdate,to_date).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentChecklist  = resp.data;
      // for(let check of this.currentChecklist){
        //   let result = check.result;
          // for(let sub of check){
          //   this.rowChecklist.push(sub);
          //   console.log(this.rowChecklist)
        //     this.getPendingChecklist(sub.id);
        //   }
        // }

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
