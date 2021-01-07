import { Component, OnInit, Injectable } from '@angular/core';
import { NgbDateStruct, NgbDatepickerI18n, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ForkliftService } from '../../master-services/Forklift/forklift.service';
import { RestService } from '../../master-services/Rest/rest.service';
import { ResumenesService } from '../../master-services/resumenes/resumenes.service';
import { WorkService } from '../../master-services/Work/work.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ChecklistService } from '../../master-services/checklist/checklist.service';

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
  selector: 'app-master-checklist-maintenance',
  templateUrl: './master-checklist-maintenance.component.html',
  styleUrls: ['./master-checklist-maintenance.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss'],
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: MasterChecklistMaintenanceComponent }]
})
export class MasterChecklistMaintenanceComponent extends NgbDatepickerI18n {

  checklisSelecteds: Array<itemSelectInterface> = [];
  checklistSelected: itemSelectInterface;

  technicianSelecteds: Array<itemSelectInterface> = [];
  technicianSelected: itemSelectInterface;

  fromDate: NgbDateStruct;
  untilDate: NgbDateStruct;
  massiveFromDate: NgbDateStruct;
  massiveUntilDate: NgbDateStruct;
  preventives: any;

  dateSelecteds = [];

  selectedBusinessId: any = 0;
  selectedRegionalId: any = 0;
  selectedBranchOfficeId: any = 0;
  selectedForkliftId: any = 0;

  branchOffices: any;
  forklifts: any;
  customers: any;
  regional: any;
  now: any;

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

  checkedList: string = '';
  technicianList: string = '';
  oldDate: string;

  checklists: any;
  currentChecklist: any;

  selectedMinutChecklist: any = 0;
  selectedHourChecklist: any = 0;

  selectedMinutUpdateChecklist: any = 0;
  selectedHourUpdateChecklist: any = 0;

  selectedHourPreventiveMassive: any = 0;
  selectedMinutPreventiveMassive: any = 0;
  selectedHourUpdatePreventiveMassive: any = 0;
  selectedMinutUpdatePreventiveMassive: any = 0;

  consecutive: any;
  massiveDescrition: any = '';
  currentDetail: any;
  currentMassive: any;
  currentMassiveDescription: any;
  massiveDescritionUpdate: any;

  massiveDate = false;


  constructor(private restService: RestService, private resumenesService: ResumenesService, private router: Router,
    private forkliftService: ForkliftService, private _i18n: I18n, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter,
    private checklistService: ChecklistService) {
    super();

    var date = new Date();
    var ngbDateStruct = { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear() };
    this.fromDate = ngbDateStruct;
    this.untilDate = ngbDateStruct;
    this.massiveFromDate = ngbDateStruct;
    this.massiveUntilDate = ngbDateStruct;

    console.log(ngbDateStruct);

    this.getRegional();

    // this.getChecklist();
    // this.getTechnician();



    var day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    // 01, 02, 03, ... 10, 11, 12
    let month = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    // 1970, 1971, ... 2015, 2016, ...
    var year = date.getFullYear();


    this.now = year + '-' + month + '-' + day;
  }

  getRegional() {
    this.restService.getRegionalAll().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.regional = resp.data;
    }).catch(error => {
      console.log(error);
    });
  }

  getCustomerRegionals() {
    this.restService.getRegionalCustomers(this.selectedRegionalId.id).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.customers = resp.data;

      //asignar valores customer;

    }).catch(error => {
      console.log(error);
    });
  }



  getBranchOffices() {
    if (this.selectedBusinessId != 0) {

      // Llenar información de cliente  
      this.restService.getOffice(this.selectedBusinessId.id).then(data => {
        const resp: any = data;
        console.log('oficinas: ' + data);
        swal.close();
        this.branchOffices = resp.data;
      }).catch(error => {
        console.log(error);
      });


    } else {
      this.selectedBranchOfficeId = 0;
      this.selectedForkliftId = 0;
    }
  }

  getForklifs() {
    if (this.selectedBranchOfficeId != 0) {
      console.log('this.selectedBusinessId.id');
      console.log(this.selectedBranchOfficeId.id);

      this.forkliftService.getForkliftBranchOfficesFull(this.selectedBranchOfficeId.id).then(data => {
        const resp: any = data;
        console.log(data);
        swal.close();
        this.forklifts = resp.data;

      }).catch(error => {
        console.log(error);
      });
    } else {

    }
  }

  showAssing() {
    if (this.selectedForkliftId == 0 || this.selectedRegionalId == 0 || this.selectedBusinessId == 0 || this.selectedBranchOfficeId == 0) {
      swal({
        title: 'Importante',
        text: 'Debes seleccionar todos los filtros.',
        type: 'warning'
      });
    } else {
      this.getChecklistFilters(this.selectedRegionalId, this.selectedBusinessId);
      this.getTechnician(this.selectedRegionalId);
      document.getElementById('showAssing').click();
    }
  }

  getConsecutive() {

    this.resumenesService.showChecklisteConsecutive().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.consecutive = resp.data;
      var date = new Date();

      let now = date.getFullYear();


      // 01, 02, 03, ... 10, 11, 12
      let month = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);


      let yearCosecutive = date.getFullYear().toString().substring(2, 4);
      this.consecutive = Number(this.consecutive.consecutive) + 1;
      this.consecutive = Number(yearCosecutive.toString() + month.toString() + this.consecutive.toString());

      // this.rowsClient = resp.data;
      // this.rowStatic =  resp.data;
      // this.rowsTemp = resp.data;
      // console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
  }


  getChecklist() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.checklistService.showChecklist().then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
      } else {
        console.log(data);
        swal.close();
        this.checklists = resp.data;
        for (let item of this.checklists) {
          // console.log(item); // 1, "string", false

          this.checklistSelected = {
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
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }


  getChecklistFilters(regional_id: any, customer_id: any) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.checklistService.showChecklistFilter(regional_id.id, customer_id.id).then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
      } else {
        console.log(data);
        swal.close();
        this.checklists = resp.data;
        for (let item of this.checklists) {
          // console.log(item); // 1, "string", false

          this.checklistSelected = {
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
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }


  getTechnician(regional_id: any) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(regional_id);
    this.restService.getUserRegional(regional_id.id).then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
      } else {
        console.log(data);
        swal.close();
        this.technician = resp.data;
        // console.log(JSON.parse(this.technician));
        for (let item of this.technician) {
          console.log(item); // 1, "string", false
          // item = JSON.parse(item);
          this.technicianSelected = {
            id: item.id,
            item: item.name,
            select: false
          }
          this.technicianSelecteds.push(this.technicianSelected);

        }
        console.log(this.technicianSelecteds);
        console.log(this.technician);
      }
    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }

  createDescritionMassive() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    for (let item of this.checklisSelecteds) {
      console.log('entro');
      if (item.select) {
        console.log(item);
        console.log('entro');
        this.checkedList = this.checkedList + item.id + ',';
      }
    }
    if (this.checkedList == '') {
      swal({
        title: 'Error',
        text: 'Debes saleccionar al menos una rutina de checklist',
        type: 'error'
      });
    } else {

      console.log(this.technicianSelecteds);
      for (let item of this.technicianSelecteds) {
        console.log('entro');
        if (item.select) {
          console.log(item);
          console.log('entro');
          this.technicianList = this.technicianList + item.id + ',';
        }
      }
      if (this.technicianList == '') {
        swal({
          title: 'Error',
          text: 'Debes saleccionar al menos un tecnico',
          type: 'error'
        });

      } else {
        console.log(this.massiveDescrition);
        if (this.massiveDescrition == '') {
          swal({
            title: 'Por favor colocar la descripción del checklist',
            type: 'error'
          });
        } else {
          this.resumenesService.storeMassiveChacklist(this.massiveDescrition, this.selectedForkliftId.id).then(data => {
            const resp: any = data;
            console.log(data);
            this.createPreventiveMassive(resp.data.id);
            this.massiveDescrition = '';
          }).catch(error => {
            swal({
              title: 'Se presento un problema, para guardar este manteminiento preventivo',
              type: 'error'
            });
            console.log(error);
          });
        }
      }
    }
  }


  createPreventiveMassive(massive: any) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
    // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;


    console.log('entro');
    console.log(this.checklisSelecteds);
    console.log(this.consecutive);


    console.log('entro');
    console.log(this.checklisSelecteds);
    for (let item of this.checklisSelecteds) {
      console.log('entro');
      if (item.select) {
        console.log(item);
        console.log('entro');
        this.checkedList = this.checkedList + item.id + ',';
      }
    }

    console.log(this.technicianSelecteds);
    for (let item of this.technicianSelecteds) {
      console.log('entro');
      if (item.select) {
        console.log(item);
        console.log('entro');
        this.technicianList = this.technicianList + item.id + ',';
      }
    }
    console.log(this.forklift);
    for (let item of this.dateSelecteds) {
      this.resumenesService.storeChecklistMassive(massive, this.selectedForkliftId.id, this.selectedBusinessId.id, this.selectedBranchOfficeId.id, this.checkedList, this.technicianList, Number(this.consecutive), item).then(data => {
        const resp: any = data;
        console.log(data);
        if (resp.success == false) {
          swal({
            title: 'Error',
            text: 'Ha ocurrido un error',
            type: 'error'
          });
        } else {
          swal.close();

          let result = resp.data;
          console.log(result);

          this.resumenesService.updateConsecutiveChecklist().then(data => {
            const resp: any = data;
            console.log(data);


            // this.rowsClient = resp.data;
            // this.rowStatic =  resp.data;
            // this.rowsTemp = resp.data;
            // console.log( this.rowsClient);
          }).catch(error => {
            swal({
              title: 'Se presento un problema, para guardar este encabezado de manteminiento preventivo',
              type: 'error'
            });
            console.log(error);
          });
        }
      }).catch(error => {
        swal.close();
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
        console.log(error);
      });
    }
    document.getElementById('assignPrevetiveHideMassive').click();

    this.getForkliftChecklist();
    swal({
      title: 'Guardado con exito',
      type: 'success'
    });

    this.cleanSelectChecklist();
    // this.cleanSelectTechnician();
    this.checklisSelecteds.length = 0;
    this.technicianSelecteds.length = 0;
    this.checkedList = '';
    this.technicianList = '';
    this.dateSelecteds = [];
    console.log('llego hasta aqui');

    swal.close();
  }


  getDetailMassive(item: any) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(item);
    this.currentMassiveDescription = item;
    this.resumenesService.showChecklistMassive(item.id).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentDetail = resp.data;
      this.massiveDescritionUpdate = item.description
      console.log(this.selectedRegionalId);
      this.restService.getUserRegional(this.selectedRegionalId.id).then(data => {
        const resp: any = data;
        if (resp.error) {
          swal({
            title: 'Error',
            text: 'Ha ocurrido un error',
            type: 'error'
          });
        } else {
          console.log(data);
          swal.close();
          this.technician = resp.data;
          // console.log(JSON.parse(this.technician));
          for (let item of this.technician) {
            console.log(item); // 1, "string", false
            // item = JSON.parse(item);
            this.technicianSelected = {
              id: item.id,
              item: item.name,
              select: false
            }
            this.technicianSelecteds.push(this.technicianSelected);

          }
          console.log(this.technicianSelecteds);
          console.log(this.technician);
          this.updateDateMassive(this.currentDetail);
        }
      }).catch(error => {
        swal.close();
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
        console.log(error);
      });
    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }

  updateDateMassive(row: any) {
    // this.getTechnician(this.selectedRegionalId);
    console.log(row);
    this.checklistUpdate = row.checklistRoutines;
    this.technicianUpdate = row.technicians;
    this.oldDate = row.date;
    let swith = false;

    for (let date of this.checklistUpdate) {
      for (let value of this.dateSelecteds) {
        if (date.date == value) {
          console.log('cambio')
          // this.massiveDate = true;
          // this.dateSelecteds.push(date.date);
          swith = true;
        }
      }
      if (swith == false) {

        this.dateSelecteds.push(date.date);
        console.log(this.dateSelecteds);
        swith = false;
      }
      swith = false;
    }


    for (let elemento of this.checklistUpdate) {
      console.log('ingreso a mirar rutinas');
      this.SelectItemChecklist(elemento);
    }

    for (let elemento of this.technicianUpdate) {
      console.log('ingreso a mirar tech');
      this.SelectItemTechnician(elemento);
    }

    document.getElementById('showUpdatePreventiveMassive').click();
  }

  updateDescritionMassive() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    for (let item of this.checklisSelecteds) {
      console.log('entro');
      if (item.select) {
        console.log(item);
        console.log('entro');
        this.checkedList = this.checkedList + item.id + ',';
      }
    }
    if (this.checkedList == '') {
      swal({
        title: 'Error',
        text: 'Debes saleccionar al menos una rutina de checklist',
        type: 'error'
      });
    } else {
      console.log(this.technicianSelecteds);
      for (let item of this.technicianSelecteds) {
        console.log('entro');
        if (item.select) {
          console.log(item);
          console.log('entro');
          this.technicianList = this.technicianList + item.id + ',';
        }
      }
      if (this.technicianList == '') {
        swal({
          title: 'Error',
          text: 'Debes saleccionar al menos un tecnico',
          type: 'error'
        });
      } else {
        console.log(this.massiveDescritionUpdate);
        this.resumenesService.updateMassiveDescriptionChecklist(this.currentMassiveDescription.id, this.massiveDescritionUpdate).then(data => {
          const resp: any = data;
          console.log(data);
          this.updatePreventiveMassive(this.currentMassiveDescription);
        }).catch(error => {
          swal({
            title: 'Se presento un problema, para guardar este manteminiento preventivo',
            type: 'error'
          });
          console.log(error);
        });
      }
    }
  }


  updatePreventiveMassive(row: any) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(row);
    this.resumenesService.deleteRoutineMassiveDetailChecklist(row.id).then(data => {
      const resp: any = data;
      console.log(data);
      if (resp.success == false) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
      } else {
        swal({
          title: 'Obteniendo información ...',
          allowOutsideClick: false
        });
        swal.showLoading();


        let result = resp.data;
        console.log(result);

        console.log('entro');
        console.log(this.checklisSelecteds);
        console.log(this.consecutive);


        console.log(this.checklisSelecteds);

        console.log(this.forklift);
        for (let item of this.dateSelecteds) {
          this.resumenesService.storeChecklistMassive(row.id, this.selectedForkliftId.id, this.selectedBusinessId.id, this.selectedBranchOfficeId.id, this.checkedList, this.technicianList, Number(this.consecutive), item).then(data => {
            const resp: any = data;
            console.log(data);
            if (resp.success == false) {
              swal({
                title: 'Error',
                text: 'Ha ocurrido un error',
                type: 'error'
              });
            } else {
              swal.close();

              let result = resp.data;
              console.log(result);

              this.resumenesService.updateConsecutiveChecklist().then(data => {
                const resp: any = data;
                console.log(data);

              }).catch(error => {
                swal({
                  title: 'Se presento un problema, para guardar este  manteminiento preventivo',
                  type: 'error'
                });
                console.log(error);
              });
            }
          }).catch(error => {
            swal.close();
            swal({
              title: 'Error',
              text: 'Ha ocurrido un error',
              type: 'error'
            });
            console.log(error);
          });
        }
        document.getElementById('assingUpdatePrevetiveHideMassive').click();

        this.getForkliftChecklist();
        swal({
          title: 'Guardado con exito',
          type: 'success'
        });

        this.cleanSelectChecklist();
        // this.cleanSelectTechnician();
        this.checklisSelecteds.length = 0;
        this.technicianSelecteds.length = 0;
        this.checkedList = '';
        this.technicianList = '';
        this.dateSelecteds = [];
        console.log('llego hasta aqui');

        swal.close();
        // document.getElementById('assingUpdatePrevetiveHide').click();

        // this.getPreventiveRoutines();
        swal({
          title: 'Guardado con exito',
          type: 'success'
        });
      }
    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }

  showAssingMassive() {
    if (this.selectedForkliftId == 0 || this.selectedRegionalId == 0 || this.selectedBusinessId == 0 || this.selectedBranchOfficeId == 0) {
      swal({
        title: 'Importante',
        text: 'Debes seleccionar todos los filtros.',
        type: 'warning'
      });
    } else {
      this.getChecklistFilters(this.selectedRegionalId, this.selectedBusinessId);
      this.getTechnician(this.selectedRegionalId);
      document.getElementById('showAssingMassive').click();
    }
  }


  createChecklist() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let consecutiveTemp = Number(this.consecutive);

    let params;
    // poner los 0
    var day = (this.untilDate.day < 10 ? '0' : '') + this.untilDate.day;
    // 01, 02, 03, ... 10, 11, 12
    let month = ((this.untilDate.month) < 10 ? '0' : '') + (this.untilDate.month);
    // 1970, 1971, ... 2015, 2016, ...
    var year = this.untilDate.year;


    var hour = this.selectedHourChecklist;
    var minut = this.selectedMinutChecklist;

    console.log(hour);
    console.log(minut);


    var fromD = year + '-' + month + '-' + day + ' ' + hour + ':' + minut + ':00';
    console.log(fromD);
    //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
    // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
    params = fromD;

    console.log('entro');
    console.log(this.checklisSelecteds);
    for (let item of this.checklisSelecteds) {
      console.log('entro');
      if (item.select) {
        console.log(item);
        console.log('entro');
        this.checkedList = this.checkedList + item.id + ',';
      }
    }
    if (this.checkedList == '') {
      swal({
        title: 'Error',
        text: 'Debes saleccionar al menos una rutina de checklist',
        type: 'error'
      });
    }

    console.log(this.technicianSelecteds);
    for (let item of this.technicianSelecteds) {
      console.log('entro');
      if (item.select) {
        console.log(item);
        console.log('entro');
        this.technicianList = this.technicianList + item.id + ',';
      }
    }
    if (this.technicianList == '') {
      swal({
        title: 'Error',
        text: 'Debes saleccionar al menos un tecnico',
        type: 'error'
      });
    }
    console.log(this.forklift);
    this.resumenesService.storeChecklist(this.selectedForkliftId.id, this.selectedBusinessId.id, this.selectedBranchOfficeId.id, this.checkedList, this.technicianList, Number(this.consecutive), params).then(data => {
      const resp: any = data;
      console.log(data);
      if (resp.success == false) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
      } else {
        swal.close();
        let result = resp.data;
        console.log(result);
        this.resumenesService.updateConsecutiveChecklist().then(data => {
          const resp: any = data;
          console.log(data);

          swal({
            title: 'Guardado con exito',
            type: 'success'
          });
          document.getElementById('assignChecklistHide').click();
          this.getForkliftChecklist();
          this.cleanSelectChecklist();
          this.checkedList = '';
          this.technicianList = '';
          // this.cleanSelectTechnician();
          this.checklisSelecteds.length = 0;
          this.technicianSelecteds.length = 0;
          console.log('llego hasta aqui');

          swal.close();
          // this.rowsClient = resp.data;
          // this.rowStatic =  resp.data;
          // this.rowsTemp = resp.data;
          // console.log( this.rowsClient);
        }).catch(error => {
          swal({
            title: 'Se presento un problema, para guardar este encabezado de checklist',
            type: 'error'
          });
          console.log(error);
        });
      }
    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }

  getForkliftChecklist() {
    // Llenar información de cliente  
    if (this.selectedForkliftId == 0 || this.selectedRegionalId == 0 || this.selectedBusinessId == 0 || this.selectedBranchOfficeId == 0) {
      swal({
        title: 'Importante',
        text: 'Debes seleccionar todos los filtros.',
        type: 'warning'
      });
    } else {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();

      this.resumenesService.getWorkForkliftChecklist(this.selectedForkliftId.id).then(data => {
        const resp: any = data;
        console.log(data);
        swal.close();
        this.currentChecklist = resp.data;
        this.getMassive();

      }).catch(error => {
        console.log(error);
      });
    }
  }

  getUpdateDetail(row: any) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.getChecklistFilters(this.selectedRegionalId, this.selectedBusinessId);
    this.update(row);
  }
  getUpdateDetailMassive(row: any) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.getChecklistFilters(this.selectedRegionalId, this.selectedBusinessId);
    this.getDetailMassive(row);
  }

  update(row: any) {
    console.log('entro');
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(this.selectedRegionalId);
    this.restService.getUserRegional(this.selectedRegionalId.id).then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
      } else {
        console.log(data);
        swal.close();
        this.technician = resp.data;
        // console.log(JSON.parse(this.technician));
        for (let item of this.technician) {
          console.log(item); // 1, "string", false
          // item = JSON.parse(item);
          this.technicianSelected = {
            id: item.id,
            item: item.name,
            select: false
          }
          this.technicianSelecteds.push(this.technicianSelected);

        }
        console.log(this.technicianSelecteds);
        console.log(this.technician);
        this.updateDate(row);
      }
    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });

  }

  updateDate(row: any) {

    console.log(row);
    this.checklistUpdate = row.result.checklistRoutines;
    this.technicianUpdate = row.result.technicians;
    this.oldDate = row.date;

    let date = row.date;
    console.log(date);
    let dateComplete = date.substring(0, 10);
    let dateArray = dateComplete.split('-');

    let hourComplete = date.substring(10, 19);
    let hourArray = hourComplete.split(':');
    this.selectedHourUpdateChecklist = Number(hourArray[0]);
    this.selectedMinutUpdateChecklist = Number(hourArray[1]);

    console.log(hourComplete);
    let year = Number(dateArray[0]);
    let mounth = Number(dateArray[1]);
    let day = Number(dateArray[2]);
    var news: NgbDateStruct = { year: year, month: mounth, day: day };
    console.log(news);
    this.fromDate = news;

    for (let elemento of this.checklistUpdate) {
      console.log('ingreso a mirar checks');
      this.SelectItemChecklist(elemento);
    }

    for (let elemento of this.technicianUpdate) {
      console.log('ingreso a mirar tecnicos');
      this.SelectItemTechnician(elemento);
    }

    document.getElementById('showUpdatePreventive').click();
  }

  updatePreventive() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    let params;
    // poner los 0
    var day = (this.fromDate.day < 10 ? '0' : '') + this.fromDate.day;
    // 01, 02, 03, ... 10, 11, 12
    let month = ((this.fromDate.month) < 10 ? '0' : '') + (this.fromDate.month);
    // 1970, 1971, ... 2015, 2016, ...
    var year = this.fromDate.year;

    console.log(this.selectedHourUpdateChecklist);
    console.log(this.selectedMinutUpdateChecklist);

    var hour = this.selectedHourUpdateChecklist;
    var minut = this.selectedMinutUpdateChecklist;

    -


      console.log(hour);
    console.log(minut);


    var fromD = year + '-' + month + '-' + day + ' ' + hour + ':' + minut;
    console.log(fromD);
    //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
    // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
    params = fromD;

    console.log('entro');
    console.log(this.checklisSelecteds);

    for (let item of this.checklisSelecteds) {
      console.log('entro');
      if (item.select) {
        console.log(item);
        console.log('entro');
        this.checkedList = this.checkedList + item.id + ',';
      }
    }
    if (this.checkedList == '') {
      swal({
        title: 'Error',
        text: 'Debes saleccionar al menos una rutina de checklist',
        type: 'error'
      });
    }

    console.log(this.technicianSelecteds);
    for (let item of this.technicianSelecteds) {
      console.log('entro');
      if (item.select) {
        console.log(item);
        console.log('entro');
        this.technicianList = this.technicianList + item.id + ',';
      }
    }
    if (this.technicianList == '') {
      swal({
        title: 'Error',
        text: 'Debes saleccionar al menos un tecnico',
        type: 'error'
      });
    }
    console.log(this.forklift);
    this.resumenesService.updateChecklist(this.selectedForkliftId.id, this.selectedBusinessId.id, this.selectedBranchOfficeId.id, this.checkedList, this.technicianList, this.oldDate, params, this.consecutive).then(data => {
      const resp: any = data;
      console.log(data);
      if (resp.success == false) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
      } else {
        swal.close();

        let result = resp.data;
        console.log(result);
        this.resumenesService.updateConsecutiveChecklist().then(data => {
          const resp: any = data;
          console.log(data);

          document.getElementById('assignUpdateChecklistHide').click();

          this.getForkliftChecklist();
          swal({
            title: 'Guardado con exito',
            type: 'success'
          });

          this.cleanSelectChecklist();
          // this.cleanSelectTechnician();
          this.checklisSelecteds.length = 0;
          this.technicianSelecteds.length = 0;
          this.checkedList = '';
          this.technicianList = '';

          // this.rowsClient = resp.data;
          // this.rowStatic =  resp.data;
          // this.rowsTemp = resp.data;
          // console.log( this.rowsClient);
        }).catch(error => {
          swal({
            title: 'Se presento un problema, para guardar este encabezado de manteminiento preventivo',
            type: 'error'
          });
          console.log(error);
        });
      }
    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
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

          var rout = '';
          var tech = '';
          for (let routin of this.elementDelete.result.checklistRoutines) {

            rout = rout + routin.id + ','

          }

          for (let tec of this.elementDelete.result.technicians) {

            tech = tech + tec.id + ','

          }

          console.log(rout);
          console.log(tech);
          swal.showLoading();
          this.resumenesService.deleteChecklist(Number(this.elementDelete.id), rout, tech)
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

                this.getForkliftChecklist();
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

  insertMassiveDate() {
    // poner los 0
    var day = (this.massiveFromDate.day < 10 ? '0' : '') + this.massiveFromDate.day;
    // 01, 02, 03, ... 10, 11, 12
    let month = ((this.massiveFromDate.month) < 10 ? '0' : '') + (this.massiveFromDate.month);
    // 1970, 1971, ... 2015, 2016, ...
    var year = this.massiveFromDate.year;

    console.log(this.selectedHourPreventiveMassive);
    console.log(this.selectedMinutPreventiveMassive);

    var hour = this.selectedHourPreventiveMassive;
    var minut = this.selectedMinutPreventiveMassive;

    console.log(hour);
    console.log(minut);


    var fromD = year + '-' + month + '-' + day + ' ' + hour + ':' + minut + ':00';
    console.log(fromD);
    console.log(this.dateSelecteds)
    for (let date of this.dateSelecteds) {
      if (date == fromD) {
        console.log('cambio')
        this.massiveDate = true;
      }
    }
    if (this.massiveDate == true) {
      console.log('entro')
      swal({
        title: 'Importante',
        text: 'Esta fecha ya fue seleccionada.',
        type: 'warning'
      });
      this.massiveDate = false;
    } else {

      this.dateSelecteds.push(fromD);
      console.log(this.dateSelecteds);
    }
  }


  insertMassiveDateUpdate() {
    // poner los 0
    var day = (this.massiveUntilDate.day < 10 ? '0' : '') + this.massiveUntilDate.day;
    // 01, 02, 03, ... 10, 11, 12
    let month = ((this.massiveUntilDate.month) < 10 ? '0' : '') + (this.massiveUntilDate.month);
    // 1970, 1971, ... 2015, 2016, ...
    var year = this.massiveUntilDate.year;

    console.log(this.selectedHourUpdatePreventiveMassive);
    console.log(this.selectedMinutUpdatePreventiveMassive);

    var hour = this.selectedHourUpdatePreventiveMassive;
    var minut = this.selectedMinutUpdatePreventiveMassive;

    console.log(hour);
    console.log(minut);


    var fromD = year + '-' + month + '-' + day + ' ' + hour + ':' + minut + ':00';
    console.log(fromD);
    console.log(this.dateSelecteds)
    for (let date of this.dateSelecteds) {
      if (date == fromD) {
        console.log('cambio')
        this.massiveDate = true;
      }
    }
    if (this.massiveDate == true) {
      console.log('entro')
      swal({
        title: 'Importante',
        text: 'Esta fecha ya fue seleccionada.',
        type: 'warning'
      });
      this.massiveDate = false;
    } else {

      this.dateSelecteds.push(fromD);
      console.log(this.dateSelecteds);
    }
  }

  deleteMassive(item: any, index) {
    console.log(item);
    console.log(index);
    this.dateSelecteds.splice(index, 1);
  }

  onDateSelectionFromMassive(date: any) {


    var fromD = new Date(this.massiveFromDate.year, this.massiveFromDate.month, this.massiveFromDate.day); //31 de diciembre de 2015
    var untilD = new Date(this.massiveUntilDate.year, this.massiveUntilDate.month, this.massiveUntilDate.day);

    console.log(this.massiveFromDate.day);
    if (fromD > untilD) {
      console.log('es mayor');
      this.massiveUntilDate = this.massiveFromDate;
    }
  }

  onDateSelectionUntilMassive(date: any) {
    var fromD = new Date(this.massiveFromDate.year, this.massiveFromDate.month, this.massiveFromDate.day); //31 de diciembre de 2015
    var untilD = new Date(this.massiveUntilDate.year, this.massiveUntilDate.month, this.massiveUntilDate.day);
    if (untilD < fromD) {
      console.log('es mayor');
      this.massiveFromDate = this.massiveUntilDate;
    }
  }


  deleteMassiveDescription(item: any) {
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
          this.resumenesService.deleteChecklistMassive(this.elementDelete.id).then(data => {
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

              this.getForkliftChecklist();
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

  getMassive() {
    this.resumenesService.getForkliftMassiveChecklist(this.selectedForkliftId.id).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentMassive = resp.data;


    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }

  cleanSelectChecklist() {
    console.log('entro a limpiar');
    this.checklisSelecteds.map(function (dato) {
      //if(dato.Modelo == modelo){
      dato.select = false;
      //}

      return dato;
    });
  }

  cleanSelectTechnician() {
    this.technicianSelecteds.map(function (dato) {
      //if(dato.Modelo == modelo){
      dato.select = false;
      //}

      return dato;
    });
  }

  SelectItemChecklist(idItem: any) {// Falta organizarlo
    var item = idItem.checklists_id;
    this.checklisSelecteds.map(function (dato) {

      console.log(idItem);
      console.log(dato);
      if (Number(dato.id) === Number(item)) {
        dato.select = true;
        console.log('hacer cambio');
      }

      return dato;
    });
  }

  SelectItemTechnician(idTechnician: any) {// Falta organizarlo
    var tech = idTechnician.user_id
    console.log('jajaja');
    console.log(this.technicianSelecteds);
    this.technicianSelecteds.map(function (dato) {
      if (dato.id == tech) {
        dato.select = true;
        console.log('ingreso');
      }
      return dato;
    });
  }

  addCancelDateMassive() {
    //If exist, remove the date


    this.cleanSelectChecklist();
    // this.cleanSelectTechnician();
    this.checklisSelecteds.length = 0;
    this.technicianSelecteds.length = 0;
    this.dateSelecteds = [];
    this.selectedHourPreventiveMassive = 0;
    this.selectedMinutPreventiveMassive = 0;
    document.getElementById('assignPrevetiveHideMassive').click();
  }


  addCancelUpdateDateMassive() {
    //If exist, remove the date


    this.cleanSelectChecklist();
    // this.cleanSelectTechnician();
    this.checklisSelecteds.length = 0;
    this.technicianSelecteds.length = 0;
    this.selectedHourUpdatePreventiveMassive = 0;
    this.selectedMinutUpdatePreventiveMassive = 0;
    this.dateSelecteds = [];
    document.getElementById('assingUpdatePrevetiveHideMassive').click();
  }

  addCancelDate() {
    //If exist, remove the date


    this.cleanSelectChecklist();
    // this.cleanSelectTechnician();
    this.checklisSelecteds.length = 0;
    this.technicianSelecteds.length = 0;
    this.selectedHourChecklist = 0;
    this.selectedMinutChecklist = 0;
    document.getElementById('assignChecklistHide').click();
  }
  addCancelUpdateDate() {
    //If exist, remove the date


    this.cleanSelectChecklist();
    // this.cleanSelectTechnician();
    this.checklisSelecteds.length = 0;
    this.technicianSelecteds.length = 0;
    this.selectedHourUpdateChecklist = 0;
    this.selectedMinutUpdateChecklist = 0;
    document.getElementById('assignUpdateChecklistHide').click();
  }

  onDateSelectionFrom(date: any) {


    var fromD = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day); //31 de diciembre de 2015
    var untilD = new Date(this.untilDate.year, this.untilDate.month, this.untilDate.day);

    console.log(this.fromDate.day);
    if (fromD > untilD) {
      console.log('es mayor');
      this.untilDate = this.fromDate;
    }
  }

  onDateSelectionUntil(date: any) {
    var fromD = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day); //31 de diciembre de 2015
    var untilD = new Date(this.untilDate.year, this.untilDate.month, this.untilDate.day);
    if (untilD < fromD) {
      console.log('es mayor');
      this.fromDate = this.untilDate;
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
