import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbCalendar, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ColorPickerService} from 'ngx-color-picker';
import { RestService } from '../../master-services/Rest/rest.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UploadService } from '../../master-services/services/upload.service';
import { UUID } from 'angular2-uuid';
// import { View,EventSettingsModel } from "@syncfusion/ej2-angular-schedule";
// import { DatePipe } from "@angular/common";

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

    const now = new Date();

    export class Cmyk {
      constructor(public c: number, public m: number, public y: number, public k: number) { }
    }

@Component({
  selector: 'app-master-forklift',
  templateUrl: './master-forklift.component.html',
  styleUrls: ['./master-forklift.component.scss']
})
export class MasterForkliftComponent implements OnInit {
  datesSelected:NgbDateStruct[]=[]; 
  nothingToshowText: any = 'Nothing to show'; // "By default" => There are no events scheduled that day. 
   colors: any = {
      red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
      },
      yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
      }
    };
    actions: any[] = [
      {
        label: '<i class="fa fa-fw fa-times"></i>',
        name: 'delete'
      },
      {
        label: '<i class="fa fa-fw fa-pencil"></i>',
        name: 'edit'
      }
    ];
    events: any = [
      {
        start: new Date(),
        end: new Date(),
        title: 'title event 1',
        color: this.colors.red,
        actions: this.actions
      },
      {
        start: new Date(),
        end: new Date(),
        title: 'title event 2',
        color: this.colors.yellow,
        actions: this.actions
      }
    ]
    viewDate: Date = new Date();
    themecolor: any = '#0a5ab3'
  selectedOfficeId = 0;
  selectedBrandId = 0;
  selectedBusinessId = 0;
  selectedMachineId = 0;
  selectedFuelId = 0;
  selectedtyreId = 0;
  selectedModelId = 0;
  selectedRoutineId = 0;
  tooglecalendar: boolean = false;
  // public setView: View = 'Month';
  // public eventSettings: EventSettingsModel={

  // };
  myForm: FormGroup;
  switchCreate = true;
  switchUpdate = true;

  submitted = false;

  customers: any;
  customerOffices: any;
  brands: any;
  models: any;
  machines: any;
  tyres: any;
  fuels: any;
  public message: string;
  public imagePath;
  imgURL: any;
  imgURL1: any;
  imgURL2: any;
  selectedFiles: any;
  generateAlarms: true;
  active: true;
  myDate = new Date();
  // year=parseInt(this.datePipe.transform(this.myDate,'yyyy'))+1;
  // month=parseInt(this.datePipe.transform(this.myDate,'MM'));
  // day=parseInt(this.datePipe.transform(this.myDate,'dd'));
  // public setDate:Date=new Date(this.year,this.day,this.month);
  name = 'Angular 4';
  urls = [];

  public model: any;
  modelCustomDay: any;

  displayMonths = 1;
  navigation = 'select';

  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  disabled = true;



  toggle = false;
  public lastColor: string;
  public rgbaText: string;

  public color = '#2889e9';
  public color2 = 'hsla(300,82%,52%)';
  public color3 = '#fff500';
  public color4 = 'rgb(236,64,64)';
  public color5 = 'rgba(45,208,45,1)';

  public color13 = 'rgba(0, 255, 0, 0.5)';
  public color14 = 'rgb(0, 255, 255)';
  public color15 = '#a51ad633';

  public basicColor = '#4099ff';
  public showColorCode = '#db968d';
  public showColorCodeHSAL = 'hsl(149,27%,65%)';
  public showColorCodeRGBA = 'rgb(221,14,190)';
  public changeMeColor = '#523698';

  public arrayColors: any = {};
  public selectedColor = 'color';

  modelPopup: NgbDateStruct;
  public date: {year: number, month: number};

  modelDisabled: NgbDateStruct = {
    year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()
  };

  public cmyk: Cmyk = new Cmyk(0, 0, 0, 0);

  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }

  constructor(private restService: RestService, private router: Router, private uploadService: UploadService,
    public parserFormatter: NgbDateParserFormatter, public calendar: NgbCalendar, public cpService: ColorPickerService) {

    this.loadingData();

    const customer = new FormControl('', Validators.required);
    const office = new FormControl('', Validators.required);
    const series = new FormControl('', Validators.required);
    const description = new FormControl('', Validators.required);
    const brand = new FormControl('', Validators.required);
    const model = new FormControl('', Validators.required);
    const machine = new FormControl('', Validators.required); 
    const fuel = new FormControl('', Validators.required);
    const tyre = new FormControl('', Validators.required);
    const tyreForward = new FormControl('', Validators.required);
    const tyreSBack = new FormControl('', Validators.required);
    const tons = new FormControl('', Validators.required);
    const HoistedMast = new FormControl('', Validators.required);
    const ContractedMast = new FormControl('', Validators.required);
    const startTime = new FormControl('', Validators.required);
    const currentTime = new FormControl('', Validators.required);
    const routine = new FormControl('', Validators.required);

    this.myForm = new FormGroup({
      customer: customer,
      office: office,
      series: series,
      description: description,
      brand: brand,
      model: model,
      machine: machine,
      fuel: fuel,
      tyre: tyre,
      tyreForward: tyreForward,
      tyreSBack: tyreSBack,
      tons: tons,
      HoistedMast: HoistedMast,
      ContractedMast: ContractedMast,
      startTime: startTime,
      currentTime: currentTime,
      routine: routine
    });


   }

   eventClicked(event) {
    console.log(event);
  }
   actionClicked(event) {
    console.log('action',event.action)
    console.log('event',event.event)
  }

   sendBrand() {
      this.submitted = true;
   }
   toggleCalendar(){
    if(this.selectedRoutineId.valueOf()==3){
      this.tooglecalendar=true;
    }else{
      this.tooglecalendar=false;
    }
   }

   onChangeGenerateAlarms(check: any) {
    this.generateAlarms = check;
     console.log(check);
   }

   onChangeActive(check: any) {
    this.active = check;
     console.log(check);
   }

  loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.restService.getCustomer().then(data => {
      const resp: any = data;
      console.log(data);
      this.customers = resp.data;
      swal.close();
    }).catch(error => {
      console.log(error);
    });

    this.restService.getBrands().then(data => {
      const resp: any = data;
      console.log(data);
      this.brands = resp.data;
      swal.close();
    }).catch(error => {
      console.log(error);
    });

    this.restService.getMachines().then(data => {
      const resp: any = data;
      console.log(data);
      this.machines = resp.data;
      swal.close();
    }).catch(error => {
      console.log(error);
    });


    this.restService.getFuels().then(data => {
      const resp: any = data;
      console.log(data);
      this.fuels = resp.data;
      swal.close();
    }).catch(error => {
      console.log(error);
    });

    this.restService.getTyres().then(data => {
      const resp: any = data;
      console.log(data);
      this.tyres = resp.data;
      swal.close();
    }).catch(error => {
      console.log(error);
    });

   }


   getCustomerOffice() {
     console.log(this.selectedBusinessId);
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
   change(value: NgbDateStruct[])
   {
     this.datesSelected = value;
   }

   getCustomerModel() {
    console.log(this.selectedBusinessId);
    this.restService.getBrandModels(this.selectedBrandId).then(data => {
      const resp: any = data;
      console.log(data);
      this.models = resp.data_models;
      swal.close();
    }).catch(error => {
      console.log(error);
    });
   }


   preview(files) {
    console.log(files);
    if (files.length === 0) {
      return console.log('jaja');
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;

    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

   upload() {
    const file = this.selectedFiles.item(0);
    const uuid = UUID.UUID();
    console.log(uuid);
    console.log(file.name + '' + file.type);
    const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
    console.log(extension);
    this.uploadService.uploadFile(file);
   }


   selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    }


    sendForklift() {
      console.log('Ole ole ole');
      // "Cannot add or update a child row: a foreign key constraint fails 
      // (`witupco_master`.`forklift`, CONSTRAINT `fk_fork_lift_model_id` FOREIGN KEY 
      //  (`model_id`) REFERENCES `fuel` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION)"


      console.log();

      if (   Number(this.selectedOfficeId) !== 0  &&  Number(this.selectedBrandId) !== 0
         && Number(this.selectedBusinessId) !== 0  && Number(this.selectedMachineId) !== 0
         && Number(this.selectedModelId) !== 0  && Number(this.selectedModelId) !== 0
      &&  Number(this.selectedFuelId) !== 0 && Number(this.selectedtyreId) !== 0) {
        console.log('Ole ole ole');
        this.submitted = true;
       if ( !this.myForm.invalid) {
        swal({
          title: 'Validando información ...',
          allowOutsideClick: false
        });
        swal.showLoading();

        let generateAlarmTemp = 0;
        console.log( this.switchUpdate);
        if ( this.switchUpdate === true) {
          generateAlarmTemp = 0;
        } else {
          generateAlarmTemp = 1;
        }

        let activeTemp = 0;
        console.log( this.switchUpdate);
        if ( this.switchUpdate === true) {
          activeTemp = 0;
        } else {
          activeTemp = 1;
        }

console.log(this.myForm.get('series').value +','+
this.selectedBusinessId +','+ this. selectedOfficeId +','+ this.myForm.get('description').value.toUpperCase() +','+
this.selectedBrandId +','+  0 +','+  this.selectedModelId +','+ this. selectedMachineId +','+ this.selectedtyreId +','+ 
this.selectedFuelId);
        this.restService.createforklift(this.myForm.get('series').value,
        this.selectedBusinessId, this. selectedOfficeId, this.myForm.get('description').value.toUpperCase(),
        this.selectedBrandId,  0,  this.selectedModelId, this. selectedMachineId, this.selectedtyreId, this.selectedFuelId)
        .then(data => {
          const resp: any = data;
          console.log(resp);
          console.log('id customer' + resp.data.id);
          if (resp.success === false) {
            swal({
              title: 'Este tercero ya esta registrado',
              text: 'Este tercero no se puede registrar',
              type: 'error'
             });
          } else {
       swal({
        title: 'Tercero agregado',
        type: 'success'
       });
        }
        }).catch(error => {
          console.log(error);
        });
        }
      } else {
        console.log('Ole ole ole');
        swal({
          title: 'Debe seleccionar todos los campos obligatorios',
          text: 'Debe seleccionar todos los campos obligatorios',
          type: 'error'
         });
      }
    }


    onSelectFile(event) {
      if (event.target.files && event.target.files[0]) {
          var filesAmount = event.target.files.length;
          for (let i = 0; i < filesAmount; i++) {
                  var reader = new FileReader();
  
                  reader.onload = (event:any) => {
                    console.log(event.target.result);
                     this.urls.push(event.target.result); 
                  }
  
                  reader.readAsDataURL(event.target.files[i]);
          }
      }
    }

  ngOnInit() {
  }
  selectToday() {
    this.modelPopup = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  onDateChange(date: NgbDateStruct) {
    console.log(date);
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }


  hasJobs(date: NgbDateStruct) {
    for (let i = 0; i < this.customers.length; i++) {
      const taskDate = new Date(this.customers[i].due_date);
      const day: number = taskDate.getDate();
      const month: number = taskDate.getMonth() + 1;
      const year: number = taskDate.getFullYear();
      console.log(this.customers[i].due_date);
      if (day === date.day && month === date.month && year === date.year) {
        return true;
      }
    }
}

  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);


  onChangeColorHex8(color: string): string {
    return this.cpService.outputFormat(this.cpService.stringToHsva(color, true), 'rgba', null);
  }

  get checkForm() { return this.myForm.controls; }
}
