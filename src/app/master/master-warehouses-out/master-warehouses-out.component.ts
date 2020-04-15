import {Component, OnInit, ViewChild,Injectable} from '@angular/core';

declare let jsPDF;
import {FormControl, FormGroup, Validators,FormBuilder, FormArray} from '@angular/forms';
import {NgbCalendar, NgbDateParserFormatter,NgbDatepickerI18n, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { RestService } from '../../master-services/Rest/rest.service';
import { ForkliftService } from '../../master-services/Forklift/forklift.service';
import { UploadService } from '../../master-services/services/upload.service';
import { UserService } from '../../master-services/User/user.service';
import { EstimateService } from '../../master-services/estimate/estimate.service';
//import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';


/*interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}*/

import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DomEventsPlugin } from '@angular/platform-browser/src/dom/events/dom_events';
import { async } from '@angular/core/testing';


const I18N_VALUES = {
  'fr': {
    weekdays: ['Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb', 'Dom'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic'],
  }
  // other languages you would support
};

interface emailFormat {// item para mostrar selccionados
  email?: string;
  contact?: string;
}


interface itemSelectInterface {// item para mostrar selccionados
  id?: number;
  item?: string;
  description?: string;
  cost?: number;
  quantity?: number;
  active?: boolean;
  type?: boolean;
}


interface fileImage {// item para mostrar selccionados
  content?: any;
  ext?: string;
  url?:string;
}


@Injectable()
export class I18n {
  language = 'fr';
}


@Component({
  selector: 'app-master-warehouses-out',
  templateUrl: './master-warehouses-out.component.html',
  styleUrls: ['./master-warehouses-out.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: MasterWarehousesOutComponent}]
})
export class MasterWarehousesOutComponent implements NgbDatepickerI18n {
  @ViewChild('myTable') table: any;

  public rows: any[] = [];
  public expanded: any = {};
  public timeout: any;

  public userModel = {
    id: 0,
    name: "",
    roles: []
   };





  names=['','Juan','Pedro'];
  modelPopup: any;
  modelPorpup: any;

  emailsSend: Array <emailFormat> = [];
  emailSend:emailFormat;

  filesImage: Array <fileImage> = [];
  fileImage:fileImage;

  myForm: FormGroup;
  myFormUpdate: FormGroup;
  rowsClient: any;
  rowsTemp: any;
  rowStatic: any;
  a: any = 5;
  kilo: any;
  elementDelete: any;
  indice:number=0;
  comment:'';
  images: Array <any>=[];
  switchCreate = true;
  switchUpdate = true;
  change = true;
  active = false;
  inactive = false;
  enabledUpdated = false;

  filterIndicatorText = false;
  filterIndicatorCheck = false;

  checkHideCode = false;// false por defecto
  filesEstimateImage:any;

  extImageOne:string;
  extImageTwo:string;
  extImageThree:string;
  extImageFour:string;

  rowsTempCheck: any;
  rowsTempText: any;

  currentBrand: any;

  forklifts: any;

  part:any='';
  codepart:any='';

  numberEstimate:any='';

  subject:any='';
  message:any;
  emails:any;
  quantityItem:any;

  checkAllWorkForce= false;
  checkAllPart= false;
  considerDate=true;

  listStatus: any =[];
  
  selectedBusinessId: any = 0;
  selectedForkliftId:any = 0;
  selectedOfficeId: any = 0;
  selectedUserId: any =0;
  customerOffices: any = 0;
  rowsUser:any;
  rowsItemsparts:any;
  rowsItemsWorkforce:any;
  estimateId:any;
  blobGlobal:any;

  forkliftText: any='';
  cityEstimate: any='';
  guarantyEstimate: any='';
  validity: any='';
  payment_method: any='';
  subtotalHoursEstimate: any='';
  subtotalPartsEstimate : any='';
  totalEstimate: any='';
  observationEstimate: any='';

  user:any;
  consecutive:any; 
  documentCustomer:any;
  nameCustomer:any;
  contact:any;
  cellphone:any;

  estimateCurrent:any;

  s3info:any;
  detailform: FormGroup;

  masterEmail: any;
  masterName: any;

  rowsItemsWorkforceApproval: any;
  rowsItemsPartsApproval: any;

  itemsWorkforce: Array <itemSelectInterface> = [];
  itemWorkforce:itemSelectInterface;

  itemsPart: Array <itemSelectInterface> = [];
  itemPart:itemSelectInterface;

  itemsFinalApproval: Array <itemSelectInterface> = [];

  rejectionsEstimate: any;
  imageGlobal: any;

  columns = [
    { name: 'Estado', prop: 'status'}
  ];

  columnWidths = [
    {column: "status", width: 200}
  ];

  partUpdateTemp:any;

  fromDate: NgbDateStruct;
  untilDate: NgbDateStruct;
  today = this.calendar.getToday();
  masterSelected:boolean;
  checklist:any;

  emailCustomer: any = '';
  emailShow: any = '';

  
  selectedTypeDocumentId: any;
  selectedCustomer: any;
  selectedBranchOffice: any;
  selectedTechnician: any;
  selectForkLift: any;

  selectedTypeDocumentIdUpdate: any;
  selectedCustomerUpdate: any;
  selectedBranchOfficeUpdate: any;
  selectedTechnicianUpdate: any;
  selectForkLiftUpdate: any;
  
  typeDocuments: any;
  customers: any;
  branchOffices: any;
  forkLift: any;
  technicians: any;

  typeDocumentsUpdate: any;
  customersUpdate: any;
  branchOfficesUpdate: any;
  forkLiftUpdate: any;
  techniciansUpdate: any;
  warehousesout: any;
  quantitys = 0;
  value = 0;

  submitted = false;

  constructor(private restService: RestService, private _i18n: I18n, private router: Router, private estimateService: EstimateService, private forkliftService: ForkliftService,
              private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private userService: UserService,  private uploadService: UploadService,   private formbuilder:FormBuilder) {
              //  super();


                const subject = new FormControl('',Validators.required);
                //const work = new FormControl('');
                const comment = new FormControl('');
                this.detailform= this.formbuilder.group({
                  subject:subject,
                  emails:this.formbuilder.array([
                    this.formbuilder.group({
                      email:['']
                    }),
                    this.formbuilder.group({
                      name:['']
                    })
                  ]),
                  comment:comment
                })

                var date = new Date();
                var ngbDateStruct = { day: date.getDate(), month: date.getMonth()+1, year: date.getFullYear()};
                
                
                this.fetch((data) => {
                  this.rows = data;
                });
                
                
                this.fromDate=ngbDateStruct;
                this.untilDate=ngbDateStruct;

                console.log(   this.fromDate);
                console.log(   this.untilDate);

                this.getUser();
                this.masterSelected = false;
                this.checklist = [
                  {id:1,value:'APROBADO',isSelected:false},
                  {id:2,value:'ENVIADO',isSelected:false},
                  {id:3,value:'GENERADO',isSelected:false},
                  {id:4,value:'RECHAZADO',isSelected:false}
                ];

    this.loadingData();
    this.getCustomer();

    const customer = new FormControl('', Validators.required);
   const branchOffice = new FormControl('', Validators.required);
   const technician = new FormControl('', Validators.required);
   const quantity = new FormControl('', Validators.required);
   const reference  = new FormControl('', Validators.required);
   const unitCost = new FormControl('', Validators.required);
   const totalCost = new FormControl('', Validators.required);
   const descriptions = new FormControl('', Validators.required);
   const control = new FormControl('', Validators.required);
   const estimate = new FormControl('', Validators.required);
   const consumption = new FormControl('', Validators.required);
   const observation = new FormControl('', Validators.required);

   const customerUpdate = new FormControl('', Validators.required);
   const branchOfficeUpdate = new FormControl('', Validators.required);
   const technicianUpdate = new FormControl('', Validators.required);
   const quantityUpdate = new FormControl('', Validators.required);
   const referenceUpdate  = new FormControl('', Validators.required);
   const unitCostUpdate = new FormControl('', Validators.required);
   const totalCostUpdate = new FormControl('', Validators.required);
   const descriptionsUpdate = new FormControl('', Validators.required);
   const controlUpdate = new FormControl('', Validators.required);
   const estimateUpdate = new FormControl('', Validators.required);
   const consumptionUpdate = new FormControl('', Validators.required);
   const observationUpdate = new FormControl('', Validators.required);


   this.myForm = new FormGroup({
    customer: customer,
    branchOffice: branchOffice,
    technician: technician,
    quantity: quantity,
    reference: reference,
    unitCost: unitCost,
    totalCost: totalCost,
    description: descriptions,
    control: control,
    estimate: estimate,
    consumption: consumption,
    observation: observation
   });

   this.myFormUpdate = new FormGroup({
    customerUpdate: customerUpdate,
    branchOfficeUpdate: branchOfficeUpdate,
    technicianUpdate: technicianUpdate,
    quantityUpdate: quantityUpdate,
    referenceUpdate: referenceUpdate,
    unitCostUpdate: unitCostUpdate,
    totalCostUpdate: totalCostUpdate,
    descriptionUpdate: descriptionsUpdate,
    controlUpdate: controlUpdate,
    estimateUpdate: estimateUpdate,
    consumptionUpdate: consumptionUpdate,
    observationUpdate: observationUpdate,
   });
  }

  getCustomers() {
    this.restService.getCustomers().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.customers  = resp.data;
    }).catch(error => {
      console.log(error);
    });
   }

  getWarehousesOut() {
    this.restService.getWarehousesOut().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.warehousesout  = resp.data;
    }).catch(error => {
      console.log(error);
    });
   }



   getOffices(idCustomer: number) {
    console.log(idCustomer);
      this.restService.getCustomerOffice( idCustomer).then(data => {
        console.log('que mas ps');
        const resp: any = data;
        console.log(resp);
        this.branchOffices = resp.data_branchoffices;
        console.log('master');
        swal.close();
        console.log( this.branchOffices);
      }).catch(error => {
        console.log(error);
      });
  }

  getForkLift(idOffice: number) {
    console.log(idOffice);
      this.restService.getForkLift( idOffice).then(data => {
        console.log('que mas ps');
        const resp: any = data;
        console.log(resp);
        this.forkLift = resp.data;
        console.log('master');
        swal.close();
        console.log( this.forkLift);
      }).catch(error => {
        console.log(error);
      });
  }

  getTechnician() {
    console.log();
      this.restService.getTechnician().then(data => {
        console.log('que mas ps');
        const resp: any = data;
        console.log(resp);
        this.technicians = resp.data;
        console.log('master');
        swal.close();
        console.log( this.technicians);
      }).catch(error => {
        console.log(error);
      });
  }

  ChangingValue(){
    console.log('Cambio cliente');
    console.log(this.selectedCustomer);
    console.log(this.selectedCustomer.id);
    this.getOffices(this.selectedCustomer);
  }

  ChangingValueBranch(){
    console.log('Cambio sucursal');
    console.log(this.selectedBranchOffice);
    console.log(this.selectedBranchOffice.id);
    this.getForkLift(this.selectedBranchOffice);
  }

  calculateTotal(){
    this.quantitys = this.myForm.get('quantity').value;
    console.log(this.quantitys);
    this.value = this.myForm.get('unitCost').value;
    console.log(this.value);
    let total;
    total = Number(this.value * this.quantitys).toFixed(0);
    console.log(total);
    this.myForm.get('totalCost').setValue(total);
    
  }

  finalFormatPrice(){
    var num = this.myForm.get('totalCost').value; //.toString().replace('.','').replace(',','.');
    console.log(num);
    num +='';
    console.log(num);
    var splitStr = num.split('.');
    var splitLeft = splitStr[0];
    var splitRight = splitStr.length > 1 ? ',' + splitStr[1] : '';
    var regx = /(\d+)(\d{3})/;
    while (regx.test(splitLeft)) {
    splitLeft = splitLeft.replace(regx, '$1' + '.' + '$2');
    console.log(splitLeft);
    }
    console.log('Importante oleole');
    console.log(splitLeft +splitRight);
    var total=splitLeft +splitRight;
    console.log(total);
    this.myForm.get('totalCost').setValue(total);
    }

  sendWarehousesOut(){
    if (  Number(this.selectedCustomer) !== 0 && Number(this.selectedBranchOffice) !== 0 && Number(this.selectForkLift) !== 0 && Number(this.selectedTechnician) !== 0) {
      this.submitted = true;
     if ( !this.myForm.invalid) {
        swal({
          title: 'Validando información ...',
          allowOutsideClick: false
        });
        swal.showLoading();
        this.restService.createWarehousesOut(this.selectedCustomer, this.selectedTechnician, this.selectedBranchOffice, this.myForm.get('quantity').value, this.myForm.get('reference').value, this.myForm.get('descriptions').value, this.myForm.get('control').value, this.myForm.get('unitCost').value, this.myForm.get('totalCost').value, this.selectForkLift.description, this.selectForkLift.id, this.myForm.get('estimate').value, this.myForm.get('consumption').value, this.myForm.get('observation').value)
     .then(data => {
        const resp: any = data;
        console.log(resp);
        if (resp.success === false) {
          swal({
            title: 'Esta salida ya esta registrada',
            text: 'Esta salida no se pudo registrar',
            type: 'error'
          });
        } else {
          console.log('Cambio');
          console.log(resp.data.id);
          document.getElementById('warehousesOutHide').click();
          this.loadingData();
          swal({
          title: 'Salida agregada',
          type: 'success'
          });
        }
        }).catch(error => {
          console.log(error);
        });
      }
    }else {
      swal({
        title: 'Debe seleccionar todos los campos obligatorios',
        text: 'Debe seleccionar todos los campos obligatorios',
        type: 'error'
       });
    }
  }

  updateWare(){}

  updateWarehousesOut(){
    if (  Number(this.selectedCustomerUpdate) !== 0 && Number(this.selectedBranchOfficeUpdate) !== 0 && Number(this.selectForkLiftUpdate) !== 0 && Number(this.selectedTechnicianUpdate) !== 0) {
      this.submitted = true;
     if ( !this.myForm.invalid) {
        swal({
          title: 'Validando información ...',
          allowOutsideClick: false
        });
        swal.showLoading();
        this.restService.updateWarehousesOut(1,this.selectedCustomerUpdate, this.selectedTechnicianUpdate, this.selectedBranchOfficeUpdate,
           this.myFormUpdate.get('quantityUpdate').value, this.myFormUpdate.get('referenceUpdate').value, this.myFormUpdate.get('descriptionsUpdate').value,
            this.myFormUpdate.get('controlUpdate').value, this.myFormUpdate.get('unitCostUpdate').value, this.myFormUpdate.get('totalCostUpdate').value, 
            this.selectForkLiftUpdate.description, this.selectForkLiftUpdate.id, this.myFormUpdate.get('estimateUpdate').value,
             this.myFormUpdate.get('consumptionUpdate').value, this.myFormUpdate.get('observationUpdate').value)
     .then(data => {
        const resp: any = data;
        console.log(resp);
        if (resp.success === false) {
          swal({
            title: 'Falla en la actualizacion',
            text: 'Esta salida no se pudo actualizar',
            type: 'error'
          });
        } else {
          console.log('Cambio');
          console.log(resp.data.id);
          document.getElementById('warehousesOutUpdateHide').click();
          this.loadingData();
          swal({
          title: 'Salida Actualizada',
          type: 'success'
          });
        }
        }).catch(error => {
          console.log(error);
        });
      }
    }else {
      swal({
        title: 'Debe seleccionar todos los campos obligatorios',
        text: 'Debe seleccionar todos los campos obligatorios',
        type: 'error'
       });
    }
  }

  deleteWarehoueses(){}

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {}
   loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

     this.getEstimateFiltersInitial();
  
  }
   updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data

    if (val === '') {
      console.log('vacio');
      this.filterIndicatorText = false;
      this.rowsTemp = this.rowStatic;
    }

    // this.filterIndicatorCheck = true;
    if (this.inactive === true ||  this.active === true) {
      this.rowsTemp = this.rowsTempCheck;
    }
    const temp = this.rowsTemp.filter(function(d) {
      return d.brand_description.toLowerCase().indexOf(val) !== -1 || !val;
    });

    if (val !== '') {
      this.filterIndicatorText = true;
      this.rowsTempText = temp;
    }

    // update the rows
    this.rowsClient = temp;

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

   

  changeConsiderDate(event: any){
  if(this.considerDate==true){
    this.considerDate=false;
  }else{
    this.considerDate=true;
  }

  console.log('------');
  console.log(this.considerDate);

  }

  updateFilterActiveInactive(active: string) {
    const val = active;

    // filter our data

    if (this.filterIndicatorText === true) {
      this.rowsTemp = this.rowsTempText;
    } else {
      console.log('vacio por este lado');
      this.rowsTemp = this.rowStatic;
    }

    const temp = this.rowsTemp.filter(function(d) {
      return d.status.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows

    if (this.inactive === true ||  this.active === true) {
      this.rowsTempCheck = temp;
      this.filterIndicatorCheck = true;
    }

    this.rowsClient = temp;
  }


   // Estos consumos es para la vista de aprobación

   getEstimatePartsApproval(ind: number) {
    if(ind){
      this.estimateService.getEstimateDetailsParts(ind).then(data => {
        const resp: any = data;
        this.rowsItemsPartsApproval=resp.data;

        console.log('información de items');
        console.log( this.rowsItemsPartsApproval);

        this.itemsPart=[];
        this.itemsWorkforce=[];
        this.rowsItemsPartsApproval.forEach((item)=>{
          console.log(item);
          let unitPrice =  Number(item.price)/Number(item.quantity);
          this.itemPart={
            id: item.id,
            item: item.item,
            description: item.description,
            cost: unitPrice,
            quantity: item.quantity,
            active: false
          }
          this.itemsPart.push(this.itemPart);
        });


        this.getEstimateWorkforceApproval(ind);
      }).catch(error => {
        console.log(error);
      });

    }
   }

   getEstimateWorkforceApproval(ind: number) {
     
    if(ind){
      this.estimateService.getEstimateDetailsWorkforce(ind).then(data => {

        const resp: any = data;
        this.rowsItemsWorkforceApproval=resp.data;
        swal.close();
        console.log(this.rowsItemsWorkforceApproval);
        this.rowsItemsWorkforceApproval.forEach((item)=>{
          let unitPrice =  Number(item.price)/Number(item.quantity);
          this.itemWorkforce={
            id: item.id,
            item: item.item,
            description: item.service,
            cost: unitPrice,
            quantity: item.quantity,
            active: false
          }
          this.itemsWorkforce.push(this.itemWorkforce);
        });

      }).catch(error => {
        console.log(error);
      });
    }
   }

   sendEmailEstimateAmazon(){
     console.log('IMPORTANTE INGRESO');
    let nameFileEstimate ='Cotizacion_No_'+this.estimateCurrent.estimate_consecutive+'.pdf';
    this.uploadService.uploadFilesAllEstimate(this.blobGlobal, this.estimateCurrent.id,3,nameFileEstimate).then(res=>{
    console.log('s3info'+JSON.stringify(res));
    this.s3info=res;
    console.log(this.s3info);
    console.log('Cargo la info en s3 6/3/20');
    //Aqui va el codigo para enviar correo
    this.sendEmailFinal();
    
    swal({
      title: 'cotización almacenada',
      type: 'success'
     });
   
    //this.insertNew();
  }).catch(error=> {
    console.log(error);
    swal({
      type: 'error',
      title: 'oops a currido un error',
      text:'se ha presentado un error al subir la imagen',
      allowOutsideClick: false
    });
  });
}

selectEvent(item) {
  console.log('este es el item: '+JSON.stringify(item));
  this.masterName = item.email;
  // masterName
  // do something with selected item
}

onChangeSearch(search: string) {
  console.log('search:' +JSON.stringify(search));}

onFocused(e) {
console.log('este es el e:'+ +JSON.stringify(e));
}



   upload() { 

    this.uploadService.uploadFileForkliftUpdate3(this.blobGlobal).then(res=>{
      console.log('que paso');
      console.log(this.blobGlobal);
      console.log('s3info'+JSON.stringify(res));
      this.s3info=res;
      console.log(this.s3info);
      //this.insertNew();
    }).catch(error=> {
      console.log(error);
      swal({
        type: 'error',
        title: 'oops a currido un error',
        text: error,
        allowOutsideClick: false
      });
    });
    }

    sendEstimateEmail(row:any){
      
   /*   this.estimateId= row.id;
      this.user = row.elaborate_user.username;
      this.consecutive = row.estimate_consecutive;
      this.documentCustomer = row.customer_document;
      this.nameCustomer = row.business_name;
      this.contact = row.contact;
      this.cellphone =   row.email;*/


      this.estimateId= row.id;
      this.user = row.elaborate_user.username;
      this.consecutive = row.estimate_consecutive;
      this.documentCustomer = row.customer_document;
      this.nameCustomer = row.customer.business_name;
      this.contact = row.contact;
      this.cellphone =   row.telephone;
     
      if( this.forkliftText){
        this.forkliftText = row.forklift_text;
      }else{
        this.forkliftText = '';
      } 
      this.cityEstimate =  row.city.name;
      this.guarantyEstimate =  row.guaranty;
      this.validity = row.validity;
      this.payment_method= row.payment_method;
      this.subtotalHoursEstimate = row.subtotal_hours_decimal;
      this.subtotalPartsEstimate = row.subtotal_parts_decimal;
      this.totalEstimate = row.total_decimal;
      this.observationEstimate= row.observation;

      this.emailsSend = [];
      this.subject = '';
      this.comment = '';
      console.log('cotización actual:'+ row);
      this.estimateCurrent= row;
      document.getElementById( 'showItemsApprove').click();
      this.getEmailCustomer();
    }

    getEmailCustomer(){//this.estimateCurrent.customer_id
      this.estimateService.getEmailsCustomer(this.estimateCurrent.customer_id).then(data=>{
        const resp: any = data;
        console.log('que paso');
        this.emailCustomer= resp.data;
        //Poner un for para los email's
        console.log(this.emailCustomer);
      }).catch(error=> {
        console.log(error);
      });
    }

    showCheckItems(row: any){
      let rowCurrent= row;
      this.estimateCurrent=row;
      this.getEstimatePartsApproval(rowCurrent.id);
      this.checkAllPart=false;
      this.checkAllWorkForce= false;
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();

     // this.getEstimateWorkforceApproval(rowCurrent.id);
      //this.checkItemsApprove(rowCurrent);
      document.getElementById( 'showCheckItem').click();
    
      swal.close();
    }

    checkItemsApprove(row: any){
      let rowCurrent= row
     
    }



     sendEmailFinal(){
      let subjectTemp; //= 'Montacargas Master Cotización '+ this.estimateCurrent.estimate_consecutive;
      if((this.subject.trim()).length>0){
        console.log('importante el subject:'+this.subject)
        subjectTemp= this.subject;
      }else{
        subjectTemp= 'Montacargas Master Cotización '+ this.estimateCurrent.estimate_consecutive;
      }
     // concatenar los correos y nos con ","
    let emailsName = '';
     for (let i = 0; i < this.emailsSend.length; i++) {
       if(i!==0){
        emailsName=emailsName+'|';
       }
        emailsName=emailsName+this.emailsSend[i].email+'|'+this.emailsSend[i].contact;
     }

     if( this.masterEmail != '' &&  this.masterName != '' ){

      emailsName= this.masterEmail+'|'+ this.masterName+'|'+ emailsName;
    }

     console.log('------------------');
     console.log(emailsName);
     console.log('---------------------');

      if(this.emailsSend.length>0){
      

      this.estimateService.sendEstimateEmailAmazon(//sendEstimateEmailAmazon
        this.estimateCurrent.elaborate_user_id, this.estimateCurrent.customer_id, this.estimateCurrent.id,
        emailsName.trim(),this.comment,subjectTemp).then(data => {
        const resp: any = data;
        console.log('envio');
        console.log(resp);
     
         this.estimateService.updateEstimateStatus(
          this.estimateCurrent.id, 1).then(data => {
          const resp: any = data;
          console.log('envio');
          console.log(resp);
          this.getEstimateFiltersInitial();
          document.getElementById('emailDetailHide').click();
          swal({
            title: 'Correo enviado',
            type: 'success'
           });  
           this.masterEmail='';
           this.masterName='';

           this.checkHideCode=false;
         
        }).catch(error => {
          console.log(error);
        });
      }).catch(error => {
        console.log(error);
      });
    }else if( this.masterEmail != '' &&  this.masterName != '' ){

      this.estimateService.sendEstimateEmailAmazon(//sendEstimateEmailAmazon
        this.estimateCurrent.elaborate_user_id, this.estimateCurrent.customer_id, this.estimateCurrent.id,
        emailsName.trim(),this.comment,subjectTemp).then(data => {
        const resp: any = data;
        console.log('envio');
        console.log(resp);
     
         this.estimateService.updateEstimateStatus(
          this.estimateCurrent.id, 1).then(data => {
          const resp: any = data;
          console.log('envio');
          console.log(resp);
          this.getEstimateFiltersInitial();
          document.getElementById('emailDetailHide').click();
          swal({
            title: 'Correo enviado',
            type: 'success'
           });  
           this.masterEmail='';
           this.masterName='';
           this.checkHideCode=false;
        }).catch(error => {
          console.log(error);
        });
      }).catch(error => {
        console.log(error);
      });
    }else{
      swal({
        text:'Debe ingresar por lo menos un correo electrónico valido',
        type: 'error'
       });
    }
     //este es el codigo para enviar el correo
     }


     
    getHeight(row: any, index: number): number {
      return row.someHeight;
    }

// ******************************************* 
    async pp(id:number){

    
   /* this.getBase64ImageFromUrl('https://masterforklift.s3.amazonaws.com/estimate_files/simpsons_PNG95.png')
    .then(result =>{
    //  console.log(result);
    //this.download(254);
      this.imageGlobal=result;
    }) 
    .catch(err => console.error(err));*/
  }
  
 getImgFromUrl(logo_url, callback) {
    var img = new Image();
    img.src = logo_url;
    img.onload = function () {
        callback(img);
    };
} 

 generatePDF(img){
  var options = {orientation: 'p', unit: 'mm'};
  var doc = new jsPDF(options);
  doc.addImage(img, 'JPEG', 0, 0, 100, 50);
}


opp(){
  var logo_url = "/images/logo.jpg";
this.getImgFromUrl(logo_url, function (img) {
    this.generatePDF(img);
});
}




   getCustomer() {
    this.restService.getCustomer().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.customers  = resp.data;
      // this.rowsClient = resp.data;
      // this.rowStatic =  resp.data;
      // this.rowsTemp = resp.data;
      // console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
   }

   getForklifs() {
   
    if(this.selectedBusinessId!=0){
    this.forkliftService.getForkliftsCustomerFull(this.selectedBusinessId).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.forklifts  = resp.data;
      // this.rowsClient = resp.data;
      // this.rowStatic =  resp.data;
      // this.rowsTemp = resp.data;
      // console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
  }
   }


   partChange(event:any, item:any){
    
    console.log('valor para editar');
    console.log(event.target.value);
    console.log(item);
    console.log(item.id);

    for (let i = 0; i < this.itemsPart.length; i++){
     if (this.itemsPart[i].id == item.id){
     console.log(item);
     console.log('lo encontre'+i);

     if(event.target.value !='' && event.target.value != 0){
       this.itemsPart[i].quantity=event.target.value;
       console.log(this.itemsPart[i]);
     }else{
       swal({
         title:'Error',
         text: 'Las cantidades deben ser diferentes a 0',
         type: 'error'
        });
     }

     }
   }
  }



   workForceChange(event:any, item:any){
    
     console.log('valor para editar');
     console.log(event.target.value);
     console.log(item);
     console.log(item.id);

     for (let i = 0; i < this.itemsWorkforce.length; i++){
      if (this.itemsWorkforce[i].id == item.id){
      console.log(item);
      console.log('lo encontre'+i);

      if(event.target.value !='' && event.target.value != 0){
        this.itemsWorkforce[i].quantity=event.target.value;
        console.log(this.itemsWorkforce[i]);
      }else{
        swal({
          title:'Error',
          text: 'Las cantidades deben ser diferentes a 0',
          type: 'error'
         });
      }

      }
    }
   }


   workForceChangeActive(event:any, item:any){
    
    console.log('valor para editar');
    console.log(event);
    console.log(item);
    console.log(item.id);

    for (let i = 0; i < this.itemsWorkforce.length; i++){
     if (this.itemsWorkforce[i].id == item.id){
     console.log(item);
     console.log('lo encontre'+i);
       this.itemsWorkforce[i].active=event.target.checked;
       console.log(this.itemsWorkforce[i]);
     }
   }
  }


  partChangeActive(event:any, item:any){
    
    console.log('valor para editar');
    console.log(event);
    console.log(item);
    console.log(item.id);

    for (let i = 0; i < this.itemsPart.length; i++){
     if (this.itemsPart[i].id == item.id){
     console.log(item);
     console.log('lo encontre'+i);
       this.itemsPart[i].active=event.target.checked;
       console.log(this.itemsPart[i]);
     }
   }
  }

  
  onChangeCode(event){
    console.log(event);
    this.checkHideCode= event.target.checked;
    console.log('este es el evento para chekear eso');
  }

  
  checkUncheckAllWorkforce(event:any){

  this.checkAllWorkForce=event.target.checked;    
    for (let i = 0; i < this.itemsWorkforce.length; i++){
      console.log('lo encontre'+i);
        this.itemsWorkforce[i].active=event.target.checked;
    }
  }


  checkUncheckAllPart(event:any){

    this.checkAllPart=event.target.checked;    
      for (let i = 0; i < this.itemsPart.length; i++){
        console.log('lo encontre'+i);
          this.itemsPart[i].active=event.target.checked;
      }
    }

  

   getEstimateFilters() {

    if(this.considerDate == false && this.selectedBusinessId == 0 &&  this.part == 0 &&
      this.codepart == 0 && this.numberEstimate == 0  &&  this.selectedForkliftId == 0 &&
      this.listStatus.length == 0){
        swal({
          title:'Importante',
          text: 'Debes seleccionar por lo menos uno de los filtros o activar casilla para tener en cuenta las fechas',
          type: 'error'
         });
      }else{
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let params='';
    let cont=0;
    if(this.considerDate){

      // poner los 0
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
      //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
      // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
      params='from_date='+ fromD+' 00:00:00'+'&&'+'to_date=' +untilD+' 23:59:59';
    cont++;
    }

    if(this.selectedBusinessId!=0){
      console.log('imprimir cont');
      console.log(cont);
      if(cont>0){
        params=params+'&&customer_id='+this.selectedBusinessId;
      }else{
        params=params+'customer_id='+this.selectedBusinessId;
        cont++;
      }     
    }

    if(this.part!=''){
      if(cont>0){
        params=params+'&&description_query='+this.part;
      }else{
        params=params+'description_query='+this.part;
        cont++;
      }
    }

    if(this.codepart!=''){
      if(cont>0){
        params=params+'&&codepart_query='+this.codepart;
      }else{
        params=params+'codepart_query='+this.codepart;
        cont++;
      }
    }

    if(this.numberEstimate!=''){
      if(cont>0){
        params=params+'&&consecutive='+this.numberEstimate;
      }else{
        params=params+'consecutive='+this.numberEstimate;
        cont++;
      }
    }

    if(this.selectedForkliftId!=0){
      if(cont>0){
      params=params+'&&forklift_id='+this.selectedForkliftId;
      }else{
        params=params+'forklift_id='+this.selectedForkliftId;
        cont++;
      }
    }

    if(this.listStatus.length>0){
      if(cont>0){
      params=params+'&&status=['+this.listStatus+']';
      }else{
        params=params+'status=['+this.listStatus+']';
        cont++;
      }
    }

    console.log('.---------->'+params);
    this.estimateService.showEstimateFilter(params).then(data => {
      const resp: any = data;
      console.log('info de filter');
      console.log(data);
     // this.customers  = resp.data;
       this.rowsClient = resp.data;
       swal.close();
      // this.rowStatic =  resp.data;
      // this.rowsTemp = resp.data;
      // console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });  
  }
}

   getEstimateFiltersInitial() {

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
      params='from_date='+ fromD+' 00:00:00'+'&&'+'to_date=' +untilD+' 23:59:59';

    console.log('.---------->'+params);
    this.estimateService.showEstimateFilter(params).then(data => {
      const resp: any = data;
      console.log('info de filter');
      console.log(data);
      swal.close();
     // this.customers  = resp.data;
       this.rowsClient = resp.data;
      // this.rowStatic =  resp.data;
      // this.rowsTemp = resp.data;
      // console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
   }




   ole(){
    console.log(this.modelPorpup);
   }

    getCustomersForklift(idCustomer:number) {
    this.forkliftService.getForkliftsCustomer(idCustomer).then(data => {
      const resp: any = data;
      console.log('forklifts');
      console.log(data);
      swal.close();
      this.rowsClient = resp.data;
      this.rowStatic =  resp.data;
      this.rowsTemp = resp.data;
      console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
   }


   getBranchOfficeForklift(idBranch:number) {
    this.forkliftService.getForkliftsBranch(idBranch).then(data => {
      const resp: any = data;
      console.log('forklifts branch');
      console.log(data);
     swal.close();
      this.rowsClient = resp.data;
      this.rowStatic =  resp.data;
      this.rowsTemp = resp.data;
      console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
   }

   getCustomerOffice() {
    console.log(this.selectedBusinessId);
    this.getCustomersForklift(this.selectedBusinessId);
    this.restService. getCustomerOffice(this.selectedBusinessId).then(data => {
     const resp: any = data;
     console.log('ole ole');
     console.log(resp);
     this.customerOffices = resp.data_branchoffices;
     swal.close();
   }).catch(error => {
     console.log(error);
   });

  }

  getOfficeForklift() {
   this.getBranchOfficeForklift(this.selectedOfficeId);
  }

  onChangeCreate(check: any) {
   this.change = check;
    console.log(check);
  }

  
  selectStatus(item:any){
    let position =  this.listStatus.indexOf(item.id); 
    if(position>=0){
      this.listStatus.splice(position,1);
    }else{
      this.listStatus.push(item.id);
    }
    console.log(this.listStatus);
  }

  onChangeUpdate(check: any) {
    this.switchUpdate = check;
    this.enabledUpdated = check;

    console.log(check);
  }


  getUser() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.userService.getUsers().then(data => {
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
        this.rowsUser = resp.data;
        console.log( this.rowsUser);
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

  onChangeActive(d) {
    let indice;
    if (this.active === false ) {
      this.active = true;
      if (this.inactive === true ) {
        indice = '';
      } else {
        indice = '0';
      }
      this.updateFilterActiveInactive(indice);
    } else {
      this.active = false;
      if (this.inactive === true ) {
        indice = '1';
      } else {
        indice = '';
      }
      this.updateFilterActiveInactive(indice);
    }
  }

  updateEstimate(row:any){
    console.log(row);
    this.router.navigateByUrl('maintenance/estimateCustomerUpdate/'+row.id);
  }

  copyEstimateProcess(row:any){
    console.log(row);
   // this.router.navigateByUrl('master/estimateCustomerCopy/'+row.id);
   this.loadingData();
   this.estimateService.copyEstimate(row.id).then(data => {
    const resp: any = data;
    console.log(resp);
    if (resp.success === false) {
      swal({
        text: 'Esta cotizacion presenta problemas para copiar',
        type: 'error'
       });
    } else {
      this.loadingData(); 
 swal({
  title: 'Cotización creada',
  type: 'success'
 });
 

  }
  }).catch(error => {
    console.log(error);
  });
  }



  onChangeInactive(d) {
    let indice;
    if (this.inactive === false ) {
      this.inactive = true;
      if (this.active === true ) {
        indice = '';
      } else {
        indice = '1';
      }
      this.updateFilterActiveInactive(indice);
    } else {
      this.inactive = false;
      if (this.active === true ) {
        indice = '0';
      } else {
        indice = '';
      }
      this.updateFilterActiveInactive(indice);
    }
  }

updateForklift(forklift:any) {
  console.log(forklift);
  this.router.navigateByUrl('maintenance/forkliftUpdate/' + forklift.id);
}

   sendBrand() {
    console.log(localStorage.getItem('token'));
    this.submitted = true;
   if ( !this.myForm.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let statusTemp = 0;
    if (this.enabledUpdated === true) {
      statusTemp = 0;
    } else {
      statusTemp = 1;
    }
    this.restService.createBrand(this.myForm.get('description').value.toUpperCase(), statusTemp).then(data => {
      const resp: any = data;
      console.log(resp);
      if (resp.success === false) {
        swal({
          title: 'Este equipo ya esta registrado',
          text: 'Este equipo no se puede registrar',
          type: 'error'
         });
      } else {
        this.myForm.get('description').setValue('');
     /*swal({
      title: 'equipo agregada',
      type: 'success'
     });*/
   //   this.router.navigateByUrl('master/registerBrand');

   document.getElementById( 'createBrandHide').click();
   this.loadingData();
   swal({
    title: 'equipo agregado',
    type: 'success'
   });
    }
    }).catch(error => {
      console.log(error);
    });
    }
  }

  sendUpdateBrand() {
    console.log(this.myFormUpdate.get('descriptionUpdate'));
    console.log(localStorage.getItem('token'));
    this.submitted = true;
   if ( !this.myFormUpdate.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let statusTemp = 1;
    if (this.enabledUpdated === true) {
      statusTemp = 0;
    } else {
      statusTemp = 1;
    }
    console.log(this.myFormUpdate.get('descriptionUpdate').value.toUpperCase() + ' ' + statusTemp);
    this.restService.updateBrand(Number(this.currentBrand.id), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(), statusTemp)
    .then(data => {
      const resp: any = data;
      console.log(resp);
      if (resp.success === false) {
        swal({
          title: 'Esta equipo ya esta actualizado',
          text: 'Esta equipo no se puede actualizar',
          type: 'error'
         });
      } else {
     // this.router.navigateByUrl('master/registerBrand');
     document.getElementById( 'updateBrandHide').click();
     this.loadingData();
     swal({
      title: 'equipo actualizado',
      type: 'success'
     });
    }
    }).catch(error => {
      console.log(error);
    });
    }
  }

  get checkForm() { return this.myForm.controls; }
  get checkFormUpdate() { return this.myFormUpdate.controls; }


  copyEstimate(row:any){
    swal({
      title: 'Estás seguro que deseas copiar la cotización número '+row.estimate_consecutive+' ?',
     // text: 'Once deleted, you will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Si'

    })
    .then((willDelete) => {
        if (willDelete.value) {
        this.copyEstimateProcess(row);
        } else {
         // swal('Fail');
        }
      console.log(willDelete);
    });
  }


  showForklift(forklift:any){
    console.log(forklift);
    this.router.navigateByUrl('maintenance/forkliftShow/' + forklift.id);
  }

  sendForklift() {
    this.router.navigateByUrl('/maintenance/registerForklift');
  }
  


  ngOnInit() {
    this.columns.forEach((col: any) => {
      const colWidth = this.columnWidths.find(colWidth => colWidth.column === col.prop);
      if (colWidth) {
        col.width = colWidth.width;
      }
    });
  }

  blockAgents( vadr: any) {
  console.log('----------------');
  console.log(vadr);
  }


  showEstimateLink(row: any){
  console.log('EL NUEVO VALOR') ;
  console.log(row);
  }

  clearFilter(){
    console.log(this.fromDate);
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


  rejectEstimateFinal(){
    this.estimateService.updateEstimateStatus(
      this.estimateCurrent.id, 5).then(data => {
      const resp: any = data;
      console.log('envio');
      console.log(resp);
      document.getElementById('hideRejection').click();
  
      this.getEstimateFiltersInitial();
      swal({
        title: 'cotización rechazada',
        type: 'success'
       });
    }).catch(error => {
      console.log(error);
      swal.close();
    });

  }



  onDateSelectionUntil(date: any) {
      var fromD = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day); //31 de diciembre de 2015
      var untilD = new Date(this.untilDate.year, this.untilDate.month, this.untilDate.day);
      if( untilD< fromD){
        console.log('es mayor');
        this.fromDate=this.untilDate;
      }
  }


  get getEmails(){
    return this.detailform.get('emails') as FormArray;
  }
  

  get getNames(){
    return this.detailform.get('names') as FormArray;
  }
  
  
    addEmail(){
      console.log('este es el valor de email: '+ this.masterEmail);
      if(this.validateEmail(this.masterEmail)){
        this.emailSend={
          email: this.masterEmail,
          contact: this.masterName
        }
        this.emailsSend.push(this.emailSend);

        this.masterEmail='';
        this.masterName='';
      }else{
        swal({
          text:'Debe ingresar un correo electrónico valido',
          type: 'error'
         });
      } 
  }




  validateEmail( email ) 
  {
      var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email) ? true : false;
  }
    



  storageDetail(formValue:any){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    const emails=formValue.emails;
    const names=formValue.name;
    const subject=formValue.subject;
    const comment=formValue.comment;
    console.log('info');
    console.log(subject);
    console.log(comment);
    console.log("parte");
    console.log(emails[0].email);
    if ((emails[0].email!=null)&&(emails[0].email!="")&&(comment!=null)&&(comment!="")&&(subject!=null)&&(subject!="")) {
      console.log((emails));
    let array=""
    emails.forEach(email => {
      if(email.email!=null){
        array+=email.email+"<br><br>";
      }
    });
    console.log(array);


    let arrayNames=""
    names.forEach(name => {
      if(name.name!=null){
        array+=name.name+"<br><br>";
      }
    });
    console.log('este es el array  de los  names');
    console.log(arrayNames);

   /* this.workservice.storeWorkDetail(this.headerinfo.id,comment,array,subject).then(data=>{
      const resp:any=data;
      console.log(data);
      console.log(resp);
      if (resp.success==1) {
        this.generalAlert('Proceso exitoso','Se ha guardado el detalle correctamente','success');
       //  this.getWorkDetails();
       
        document.getElementById('storageDetailHide').click();emailDetailHide
      } else {
        this.generalAlert('No se puede guardar','Ha ocurrido un error en la ejecucion','error');
      }

    }).catch(error=>{
      console.log(error);
      this.generalAlert('No se puede guardar','Ha ocurrido un error en la ejecucion','error')
    });*/
    this.resetCreateForm();
    }else{
      this.generalAlert('No se puede guardar','Debe Completar todos los campos obligatorios','error')
    }
  }

 
  resetCreateForm(){
    this.detailform.reset();
    for (let index = this.indice; index > 0; index--) {
      const control =<FormArray>this.detailform.controls['emails'];
      control.removeAt(index);
      this.indice--;
    }
  }

  deleteEmail(index:number){
    
     /* const control =<FormArray>this.detailform.controls['emails'];
      control.removeAt(index);
      this.indice--;*/
      this.emailsSend.splice(index);
  }


  generalAlert(title:string,message:string,type:any){
    swal({
      title:title,
      text: message,
      type: type
     });
  }

finalApproval(){

  this.itemsFinalApproval=[];
  for (let i = 0; i < this.itemsPart.length; i++){
    console.log('lo encontre'+i);
    if(this.itemsPart[i].active){
      this.itemsFinalApproval.push(this.itemsPart[i]);
    }
  }
  for (let i = 0; i < this.itemsWorkforce.length; i++){
    console.log('lo encontre'+i);
    if(this.itemsWorkforce[i].active){
      this.itemsFinalApproval.push(this.itemsWorkforce[i]);
    } 
  }

  let valuesApproval='';

  for (let i = 0; i < this.itemsFinalApproval.length; i++){
    valuesApproval=valuesApproval+ this.itemsFinalApproval[i].id+'@'+this.itemsFinalApproval[i].quantity+'@'; 
  }

  console.log('items aprobados de cotizacion '+ this.estimateCurrent);
  console.log(this.itemsFinalApproval);
  console.log(valuesApproval);

  if(valuesApproval != ''){
  swal({
    title: 'Validando información ...',
    allowOutsideClick: false
  });
  swal.showLoading();
 
  this.estimateService.approveEstimateDetails(valuesApproval
    ).then(data => {
    const resp: any = data;
    console.log('envio autorización');
    console.log(resp);
   
    //---------------------------
    this.estimateService.updateEstimateStatus(
      this.estimateCurrent.id, 2).then(data => {
      const resp: any = data;
      console.log('envio');
      console.log(resp);
      document.getElementById('hideCheckItem').click();
  
      this.getEstimateFiltersInitial();
      swal({
        title: 'cotización aprobada',
        type: 'success'
       });
    }).catch(error => {
      console.log(error);
      swal.close();
    });
    // ----------------------------
    
  }).catch(error => {
    console.log(error);
    swal.close();
  });

}else{
     swal({
        title: 'Se presentó un problema',
        text: 'Favor selecionar al menos una opcion.',
        type: 'error',
      });
    }

}

rejectQuote(){

}

  /*

  Comparar fechas https://desarrolloweb.com/articulos/comparar-fechas-javascript.html*/
}
