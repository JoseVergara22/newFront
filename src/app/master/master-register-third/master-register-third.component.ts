import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../../master-services/Rest/rest.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UploadService } from '../../master-services/services/upload.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-master-register-third',
  templateUrl: './master-register-third.component.html',
  styleUrls: ['./master-register-third.component.scss']
})
export class MasterRegisterThirdComponent implements OnInit {
// getTypeDocuments

selectedFiles: FileList;

typeDocuments: any;
priceList: any;
departments: any;
department: any;
cities: any;
paymentConditions: any;
myForm: FormGroup;
opcionSeleccionado: any;
check = false;
enable = false;

public imagePath;
imgURL: any;
public message: string;

selectedValue = 2;
  constructor(private restService: RestService, private router: Router, private uploadService: UploadService) {

    this.restService.getPaymentConditions().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.paymentConditions = resp.data;
      console.log(this.paymentConditions);
    }).catch(error => {
      console.log(error);
    });

    this.restService.getTypeDocuments().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.typeDocuments = resp.data;
      console.log(this.typeDocuments);
    }).catch(error => {
      console.log(error);
    });

    this.restService.getPriceList().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.priceList = resp.data;
      console.log( this.priceList);
    }).catch(error => {
      console.log(error);
    });

    this.restService.getDepartments().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.departments = resp.data;
      console.log( this.departments);
    }).catch(error => {
      console.log(error);
    });

   }

  ngOnInit() {
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

  ChangingValue() {
  console.log(this.selectedValue);
  }

getCities(val: any) {
// console.log(this.opcionSeleccionado);
  this.restService.getCities(Number(this.opcionSeleccionado.id)).then(data => {
    const resp: any = data;
    console.log(data);
    swal.close();
    this.cities = resp.data;
    console.log( this.cities);
  }).catch(error => {
    console.log(error);
  });

}



onChange(d: any) {
  console.log('jajaja');
  console.log(d);
}

preview(files) {
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
  }
}



}
