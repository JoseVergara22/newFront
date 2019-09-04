import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../../master-services/Rest/rest.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UploadService } from '../../master-services/services/upload.service';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-master-update-customer',
  templateUrl: './master-update-customer.component.html',
  styleUrls: ['./master-update-customer.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterUpdateCustomerComponent implements OnInit {

selectedFiles: FileList;
dataMasters: any;
dataOffices: any;
typeDocuments: any;
priceList: any;
departments: any;
department: any;
cities: any;
citiesOffice: any;
citiesOfficeUpdate: any;
paymentConditions: any;
elementDelete: any;

currentOffice: any;
currentCustomerId: any = 0;


myForm: FormGroup;
myFormUpdate: FormGroup;

myFormCreateOffice: FormGroup;
myFormUpdateOffice: FormGroup;

opcionSeleccionado: any = 0;
check = false;
enable = false;

submitted = false;
submittedUpdated = false;

submittedOffice = false;
submittedOfficeUpdated = false;

enabledCreated = true;
public imagePath;
imgURL: any;
public message: string;
enabledUpdated = true;
idCustomerCreated;

showButtonUpdated = 0;
selectedValue = 0;
switchCreate = true;
switchUpdate = true;

selectedTypeDocumentId: any = 0;
selectedPriceListId: any = 0;
selectedPaymentConditionId: any = 0;
selectedDepartmentId: any = 0;
selectedCityId: any = 0;

selectedDepartmentOfficeId: any = 0;
selectedCityOfficeId: any = 0;

selectedDepartmentOfficeIdUpdate: any = 0;
selectedCityOfficeIdUpdate: any = 0;

selectedTypeDocumentIdUpdate: any = 0;
selectedPriceListIdUpdate: any = 0;
selectedPaymentConditionIdUpdate: any = 0;
selectedDepartmentIdUpdate: any = 0;
selectedCityIdUpdate: any = 0;


  constructor(private restService: RestService, private router: Router, private uploadService: UploadService, 
              private rutaActiva: ActivatedRoute) {

    this.getMasters(0);
    // this.getOffices();

    this.currentCustomerId = this.rutaActiva.snapshot.params.id;

    this.getOffices(this.currentCustomerId);
    console.log(this.currentCustomerId);

    const businessName = new FormControl('', Validators.required);
    const typeDocumentId = new FormControl('', Validators.required);
    const documentId = new FormControl('', Validators.required);
    const telephone = new FormControl('', Validators.required);
    const address = new FormControl('', Validators.required);
    const priceListId = new FormControl('', Validators.required);
    const paymentConditionId = new FormControl('', Validators.required);
    const departmentId = new FormControl('', Validators.required);
    const cityId = new FormControl('', Validators.required);

    const businessNameUpdate = new FormControl('', Validators.required);
    const typeDocumentIdUpdate  = new FormControl('', Validators.required);
    const documentIdUpdate  = new FormControl('', Validators.required);
    const telephoneUpdate  = new FormControl('', Validators.required);
    const addressUpdate  = new FormControl('', Validators.required);
    const priceListIdUpdate  = new FormControl('', Validators.required);
    const paymentConditionIdUpdate  = new FormControl('', Validators.required);
    const departmentIdUpdate  = new FormControl('', Validators.required);
    const cityIdUpdate  = new FormControl('', Validators.required);


    const nameOffice = new FormControl('', Validators.required);
    const telephoneOffice = new FormControl('', Validators.required);
    const departmentOffice = new FormControl('', Validators.required);
    const citytOffice = new FormControl('', Validators.required);
    const addressOffice = new FormControl('', Validators.required);

    const nameOfficeUpdate = new FormControl('', Validators.required);
    const telephoneOfficeUpdate = new FormControl('', Validators.required);
    const departmentOfficeUpdate = new FormControl('', Validators.required);
    const citytOfficeUpdate = new FormControl('', Validators.required);
    const addressOfficeUpdate = new FormControl('', Validators.required);


this.myFormCreateOffice = new FormGroup({
  nameOffice: nameOffice,
  telephoneOffice: telephoneOffice,
  departmentOffice: departmentOffice,
  citytOffice: citytOffice,
  addressOffice: addressOffice
});

this.myFormUpdateOffice = new FormGroup({
  nameOfficeUpdate: nameOfficeUpdate,
  telephoneOfficeUpdate: telephoneOfficeUpdate,
  departmentOfficeUpdate: departmentOfficeUpdate,
  citytOfficeUpdate: citytOfficeUpdate,
  addressOfficeUpdate: addressOfficeUpdate
});


    this.myForm = new FormGroup({
      businessName: businessName,
      typeDocumentId: typeDocumentId,
      documentId: documentId,
      telephone: telephone,
      address: address,
      priceListId: priceListId,
      paymentConditionId: paymentConditionId,
      departmentId: departmentId,
      cityId: cityId
    });

    this.myFormUpdate = new FormGroup({
      businessNameUpdate: businessNameUpdate,
      typeDocumentIdUpdate: typeDocumentIdUpdate,
      documentIdUpdate: documentIdUpdate,
      telephoneUpdate: telephoneUpdate,
      addressUpdate: addressUpdate,
      priceListIdUpdate: priceListIdUpdate,
      paymentConditionIdUpdate: paymentConditionIdUpdate,
      departmentIdUpdate: departmentIdUpdate,
      cityIdUpdate: cityIdUpdate
    });



   }

  ngOnInit() {
  }


  updateBrand(brand) {
    console.log(brand);
    this.currentOffice = brand;
    console.log( this.currentOffice );
    if ( this.currentOffice.status === '0') {
      this.enabledUpdated = true;
    } else {
      this.enabledUpdated = false;
    }

    this.myFormUpdateOffice.get('nameOfficeUpdate').setValue(this.currentOffice.branch_name);
    this.myFormUpdateOffice.get('telephoneOfficeUpdate').setValue(this.currentOffice.telephone);

    this.myFormUpdateOffice.get('addressOfficeUpdate').setValue(this.currentOffice.address);

     this.selectedDepartmentOfficeIdUpdate = 1;
      this.getCitiesOfficeUpdate(1);
    this.selectedCityOfficeIdUpdate = 3;

    document.getElementById( 'uploadBrand').click();
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
  this.selectedTypeDocumentIdUpdate = this.selectedTypeDocumentId.id;
  this.selectedPriceListIdUpdate = this.selectedPriceListId.id;
  this.selectedPaymentConditionIdUpdate = this.selectedPaymentConditionId.id;
  this.selectedDepartmentIdUpdate = this.selectedDepartmentId.id;
  this.selectedCityIdUpdate = this.selectedCityId.id;

  console.log(  this.selectedTypeDocumentIdUpdate);
  }


  getCitiesOffice(val: any) {
     console.log(val);
      this.selectedCityOfficeId = 0;

      this.restService.getCities(Number(this.selectedDepartmentOfficeId.id)).then(data => {
        const resp: any = data;
        console.log(data);
        swal.close();
        this.citiesOffice = resp.data;
        console.log( this.cities);
      }).catch(error => {
        console.log(error);
      });
    }


    getCitiesOfficeUpdate(val: any) {
      // console.log(this.opcionSeleccionado);
        this.selectedCityOfficeIdUpdate = 0;
        console.log('oleole');

        this.restService.getCities(Number(val)).then(data => {
          const resp: any = data;
          console.log(data);
          swal.close();
          this.citiesOfficeUpdate = resp.data;
          console.log( this.cities);
        }).catch(error => {
          console.log(error);
        });
      }

getCities(val: any) {
// console.log(this.opcionSeleccionado);
  this.selectedCityId = 0;

  this.restService.getCities(Number(this.selectedDepartmentId.id)).then(data => {
    const resp: any = data;
    console.log(data);
    swal.close();
    this.cities = resp.data;
    console.log( this.cities);
  }).catch(error => {
    console.log(error);
  });
}


getCitiesUpdate(val: any) {
  // console.log(this.opcionSeleccionado);
    this.selectedCityIdUpdate = 0;

    this.restService.getCities(Number(this.selectedDepartmentIdUpdate)).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.cities = resp.data;
      console.log( this.cities);
    }).catch(error => {
      console.log(error);
    });
  }


sendCustomer() {
  console.log('Ole ole ole');
  console.log(this.selectedTypeDocumentId);
  console.log(this.selectedPaymentConditionId);
  console.log(this.selectedDepartmentId);
  console.log(this.selectedCityId);
  console.log(this.selectedPriceListId);

  if (   Number(this.selectedTypeDocumentId) !== 0  &&  Number(this.selectedPaymentConditionId) !== 0 
     && Number(this.selectedPriceListId) !==0
  &&  Number(this.selectedDepartmentId) !== 0 && Number(this.selectedCityId) !== 0) {
    this.submitted = true;
   if ( !this.myForm.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let statusTemp = 0;
    console.log( this.switchUpdate);
    if ( this.switchUpdate === true) {

      statusTemp = 0;
    } else {
      statusTemp = 1;
    }

    console.log(this.selectedPaymentConditionId.id);

    this.restService.createCustomer(this.myForm.get('businessName').value.toUpperCase(),
     this.selectedTypeDocumentId.id, this.myForm.get('documentId').value,
    this.myForm.get('telephone').value,   this.myForm.get('address').value,
     statusTemp, this.selectedPriceListId.id,
     this.selectedPaymentConditionId.id, this.selectedCityId.id, this.selectedDepartmentId.id)
    .then(data => {
      const resp: any = data;
      console.log(resp);
      console.log('id customer' + resp.data.id);
      this.currentCustomerId =  resp.data.id;
      if (resp.success === false) {
        swal({
          title: 'Este tercero ya esta registrado',
          text: 'Este tercero no se puede registrar',
          type: 'error'
         });
      } else {

        this.getMasters(1);
        // this.getOffices();

        this.showButtonUpdated = 1;
        console.log('oleole');
        console.log(this.myForm.get('documentId').value);

        this.myFormUpdate.get('documentIdUpdate').setValue(this.myForm.get('documentId').value);
        this.myFormUpdate.get('businessNameUpdate').setValue(this.myForm.get('businessName').value.toUpperCase());
        this.myFormUpdate.get('telephoneUpdate').setValue(this.myForm.get('telephone').value);
        this.myFormUpdate.get('addressUpdate').setValue(this.myForm.get('address').value);
        this.idCustomerCreated = resp.data.id;
        console.log('Cambio');
     /*swal({
      title: 'tercero agregada',
      type: 'success'
     });*/
   //   this.router.navigateByUrl('master/registerBrand');

   // document.getElementById( 'createBrandHide').click();
   // this.loadingData();
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
    swal({
      title: 'Debe seleccionar todos los campos obligatorios',
      text: 'Debe seleccionar todos los campos obligatorios',
      type: 'error'
     });
  }
}

sendOffice() {


  try {
  console.log('Ole ole ole');

  /*console.log('Ole ole ole');
  console.log(this.selectedTypeDocumentId);
  console.log(this.selectedPaymentConditionId);
  console.log(this.selectedDepartmentId);
  console.log(this.selectedCityId);
  console.log(this.selectedPriceListId);*/

  console.log(this.selectedDepartmentOfficeId.id + ',' + this.selectedCityOfficeId.id);
  console.log(this.myFormCreateOffice.get('nameOffice').hasError('required'));
  console.log(this.myFormCreateOffice.get('telephoneOffice').hasError('required'));
  console.log(this.myFormCreateOffice.get('departmentOffice').hasError('required'));
  console.log(this.myFormCreateOffice.get('citytOffice').hasError('required'));
  console.log(this.myFormCreateOffice.get('addressOffice').hasError('required'));
  console.log(this.myFormCreateOffice.get('addressOffice').errors);

  if ( Number(this.selectedDepartmentOfficeId.id) !== 0 && Number(this.selectedCityOfficeId.id) !== 0) {
    this.submittedOffice = true;
    console.log(this.myFormCreateOffice.errors);

   if ( !this.myFormCreateOffice.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let statusTemp = 0;
    console.log( this.switchUpdate);
    if ( this.switchUpdate === true) {

      statusTemp = 0;
    } else {
      statusTemp = 1;
    }

console.log('llego');


    this.restService.createOffice(this.currentCustomerId, this.myFormCreateOffice.get('nameOffice').value.toUpperCase(),
     this.myFormCreateOffice.get('addressOffice').value, this.myFormCreateOffice.get('telephoneOffice').value,
     statusTemp, this.selectedCityOfficeId.id, this.selectedDepartmentOfficeId.id)
    .then(data => {
      const resp: any = data;
      console.log(resp);
      if (resp.success === false) {
        swal({
          title: 'Este sucursal ya esta registrado',
          text: 'Este sucursal no se puede registrar',
          type: 'error'
         });
      } else {

       // this.getMasters(1);
      //  this.getOffices();


     /*swal({
      title: 'sucursal agregada',
      type: 'success'
     });*/
   //   this.router.navigateByUrl('master/registerBrand');

   // document.getElementById( 'createBrandHide').click();
   // this.loadingData();
   this.myFormCreateOffice.reset();
   document.getElementById( 'createBrandHide').click();
   this.getOffices(this.currentCustomerId);
   swal({
    title: 'Sucursal agregado',
    type: 'success'
   });
    }
    }).catch(error => {
      console.log(error);
    });
    }
  } else {
    console.log('llegod');
    swal({
      title: 'Debe seleccionar todos los campos obligatorios',
      text: 'Debe seleccionar todos los campos obligatorios',
      type: 'error'
     });
  }
} catch (error) {
console.log(error);
}
}


messageError() {
  swal({
    title: 'Debe crear un cliente',
    text: 'Luego de crear el cliente, puedes crear sucursales',
    type: 'error'
   });
}


updatedOffice() {


  try {
  console.log('Ole ole ole');

  /*console.log('Ole ole ole');
  console.log(this.selectedTypeDocumentId);
  console.log(this.selectedPaymentConditionId);
  console.log(this.selectedDepartmentId);
  console.log(this.selectedCityId);
  console.log(this.selectedPriceListId);*/



  if ( Number(this.selectedDepartmentOfficeIdUpdate) !== 0 && Number(this.selectedCityOfficeIdUpdate) !== 0) {
    this.submittedOfficeUpdated = true;
    console.log(this.myFormUpdateOffice.errors);

   if ( !this.myFormUpdateOffice.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let statusTemp = 0;
    console.log( this.switchUpdate);
    if ( this.switchUpdate === true) {

      statusTemp = 0;
    } else {
      statusTemp = 1;
    }

console.log('llego');

    this.restService.createOffice(this.currentCustomerId, this.myFormUpdateOffice.get('nameOfficeUpdate').value.toUpperCase(),
     this.myFormUpdateOffice.get('addressOfficeUpdate').value, this.myFormUpdateOffice.get('telephoneOfficeUpdate').value,
     statusTemp, this.selectedCityOfficeIdUpdate, this.selectedDepartmentOfficeIdUpdate)
    .then(data => {
      const resp: any = data;
      console.log(resp);
      if (resp.success === false) {
        swal({
          title: 'Este tercero ya esta registrado',
          text: 'Este tercero no se puede registrar',
          type: 'error'
         });
      } else {

       // this.getMasters(1);
      //  this.getOffices();


     /*swal({
      title: 'tercero agregada',
      type: 'success'
     });*/
   //   this.router.navigateByUrl('master/registerBrand');

   // document.getElementById( 'createBrandHide').click();
   // this.loadingData();
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
    console.log('llegod');
    swal({
      title: 'Debe seleccionar todos los campos obligatorios',
      text: 'Debe seleccionar todos los campos obligatorios',
      type: 'error'
     });
  }
} catch (error) {
console.log(error);
}
}
















updatedCustomer() {
  console.log(this.showButtonUpdated);
  console.log('Ole ole ole kakaakkaka');
  console.log(this.selectedTypeDocumentIdUpdate);
  console.log(this.selectedPaymentConditionIdUpdate);
  console.log(this.selectedDepartmentIdUpdate);
  console.log(this.selectedCityIdUpdate);
  console.log(this.selectedPriceListIdUpdate);

  if (   Number(this.selectedTypeDocumentIdUpdate) !== 0  &&  Number(this.selectedPaymentConditionIdUpdate) !== 0
  && Number(this.selectedPriceListIdUpdate) !== 0 &&  Number(this.selectedDepartmentIdUpdate) !== 0
  && Number(this.selectedCityIdUpdate) !== 0) {
    this.submittedUpdated = true;
   if ( !this.myFormUpdate.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let statusTemp = 0;
    console.log( this.switchUpdate);
    if ( this.switchUpdate === true) {

      statusTemp = 0;
    } else {
      statusTemp = 1;
    }
    console.log('kakakaka');

    this.restService.updateCustomer(Number(this.idCustomerCreated), this.myFormUpdate.get('businessNameUpdate').value.toUpperCase(),
     this.selectedTypeDocumentIdUpdate, this.myFormUpdate.get('documentIdUpdate').value,
    this.myFormUpdate.get('telephoneUpdate').value,   this.myFormUpdate.get('addressUpdate').value,
     statusTemp, this.selectedPriceListIdUpdate,
     this.selectedPaymentConditionIdUpdate, this.selectedCityIdUpdate, this.selectedDepartmentIdUpdate)
    .then(data => {
      const resp: any = data;
      console.log(JSON.stringify(resp));
      if (resp.success === false) {
        swal({
          title: 'Este tercero ya esta registrado',
          text: 'Este tercero no se puede registrar',
          type: 'error'
         });
      } else {

        this.getMasters(1);
       // this.getOffices();



        console.log('Cambio');
     /*swal({
      title: 'tercero agregada',
      type: 'success'
     });*/
   //   this.router.navigateByUrl('master/registerBrand');

   // document.getElementById( 'createBrandHide').click();
   // this.loadingData();
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
    swal({
      title: 'Debe seleccionar todos los campos obligatorios',
      text: 'Debe seleccionar todos los campos obligatorios',
      type: 'error'
     });
  }
}




onChangeCreated(check: any) {
  this.switchUpdate = check;
  this.enabledCreated = check;
  this.enabledUpdated = this.enabledCreated ;
    }


    onChangeUpdated(check: any) {
      this.switchUpdate = check;
      this.enabledUpdated = check;
        }
  getMasters(indice: number) {
    // console.log(this.opcionSeleccionado);
      this.restService.getMastersThird().then(data => {
        const resp: any = data;
        this.dataMasters = data;
        this.paymentConditions = this.dataMasters.payment_condition;
        this.typeDocuments = this.dataMasters.documents;
        this.departments = this.dataMasters.department;
        this.priceList = this.dataMasters.price_list;
        console.log('master');
        console.log(data);
        swal.close();

       /* if (indice === 1) {

          console.log('oleole2');
          console.log(this.selectedTypeDocumentId);
          console.log(this.selectedTypeDocumentId.id);
          this.selectedTypeDocumentIdUpdate = '3'; // String(this.selectedTypeDocumentId.id);
          this.selectedPriceListIdUpdate = this.selectedPriceListId;
          this.selectedPaymentConditionIdUpdate = this.selectedPaymentConditionId;
          this.selectedDepartmentIdUpdate = this.selectedDepartmentId;
          this.selectedCityIdUpdate = this.selectedCityIdUpdate;
        }*/
      }).catch(error => {
        console.log(error);
      });

}

getOffices(idCustomer: number) {
  // console.log(this.opcionSeleccionado);
    this.restService.getCustomerOffice( idCustomer).then(data => {
      console.log('que mas ps');
      const resp: any = data;
      console.log(resp);
      this.dataOffices = resp.data_branchoffices;

    this.myFormUpdateOffice.get('businessNameUpdate').setValue(resp.customer.business_name);
    this.myFormUpdateOffice.get('documentIdUpdate').setValue(resp.customer.document_id);
    this.myFormUpdateOffice.get('telephoneUpdate').setValue(resp.customer.telephone);
    this.myFormUpdateOffice.get('addressUpdate').setValue(resp.customer.address);

    this.selectedTypeDocumentIdUpdate = resp.customer.type_document_id;
    this.selectedPriceListIdUpdate = resp.customer.price_list_id;
    this.selectedPaymentConditionIdUpdate = resp.customer.payment_condition_id;
    this.selectedDepartmentIdUpdate = resp.customer.department_id;
    this.selectedCityIdUpdate = resp.customer.address.city_id;

    this.getCitiesOfficeUpdate(resp.customer.department_id);

   //   this.dataOffices = this.dataOffices.data;

      console.log('master');
      swal.close();
     // this.cities = resp.data;
      console.log( this.dataOffices);
    }).catch(error => {
      console.log(error);
    });

}


deleteBrand(brand: any) {
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
        this.elementDelete = brand;
        console.log(brand);
        console.log(    this.elementDelete);
        swal.showLoading();
        this.restService.deleteOffice(Number(this.elementDelete.id))
        .then(data => {
          swal.showLoading();
          const resp: any = data;
          console.log(resp);

          if (resp.success === false) {
            swal({
              title: 'Esta marca presenta problemas',
              text: 'Esta marca no se puede eliminar',
              type: 'error'
             });
          } else {
         // this.router.navigateByUrl('master/registerBrand');
         swal({
          title: 'Marca eliminada',
          type: 'success'
         });
        }
        }).catch(error => {
          console.log(error);
        });
      } else {
       // swal('Fail');
      }
    console.log(willDelete);
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
  };
}

get checkForm() { return this.myForm.controls; }
get checkFormUpdate() { return this.myFormUpdate.controls; }
get checkFormOffice() { return this.myFormCreateOffice.controls; }
get checkFormOfficeUpdate() { return this.myFormUpdateOffice.controls; }

}
