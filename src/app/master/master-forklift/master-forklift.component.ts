import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../../master-services/Rest/rest.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UploadService } from '../../master-services/services/upload.service';
import { UUID } from 'angular2-uuid';


@Component({
  selector: 'app-master-forklift',
  templateUrl: './master-forklift.component.html',
  styleUrls: ['./master-forklift.component.scss']
})
export class MasterForkliftComponent implements OnInit {

  selectedOfficeId = 0;
  selectedBrandId = 0;
  selectedBusinessId = 0;
  selectedMachineId = 0;
  selectedFuelId = 0;
  selectedtyreId = 0;
  selectedModelId = 0;
  selectedRoutineId = 0;

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

  name = 'Angular 4';
  urls = [];



  constructor(private restService: RestService, private router: Router, private uploadService: UploadService) {

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

   sendBrand() {
      this.submitted = true;
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

  get checkForm() { return this.myForm.controls; }
}
