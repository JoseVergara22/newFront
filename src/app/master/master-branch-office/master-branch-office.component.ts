import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../../master-services/Rest/rest.service';
import { Router } from '@angular/router';
import { UploadService } from '../../master-services/services/upload.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-master-branch-office',
  templateUrl: './master-branch-office.component.html',
  styleUrls: ['./master-branch-office.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterBranchOfficeComponent implements OnInit {

  active = false;
  inactive = false;
  filterIndicatorText = false;
  rowsTemp: any;
  rowStatic: any;
  change = true;
  rowsClient: any;
  
  elementDelete: any;
  filterIndicatorCheck = false;

  rowsTempCheck: any;
  rowsTempText: any;

  myForm: FormGroup;
  submittedOffice = false;
  enabledCreated= true;
  switchUpdate = true;
  showButtonUpdated = 0;

  code: any;
  description= '';

  regionals: any;
  selectedRegional: any = 0;
  idConstCenter;
  currentOffice: any= 0;
  myFormUpdate: FormGroup;
  submittedUpdated = false;


  codeUpdate: any;
  descriptionUpdate = '';
  idCostCenter;
  constCenter: any;
  regionalsUpdate;
  selectedRegionalUpdate: any;
  dataOffices: any;

  constructor(private restService: RestService, private router: Router, private uploadService: UploadService) { 

    this.getMasters();

   const description = new FormControl('', Validators.required);
  
   const descriptionUpdate  = new FormControl('', Validators.required);

   this.myForm = new FormGroup({
    description: description,
   });

   this.myFormUpdate = new FormGroup({
    descriptionUpdate: descriptionUpdate,
  });

  }

  getMasters() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.restService.getCustomer().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.rowsClient = resp.data;
     
      console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
}

  showCreate(){

    if(Number(this.selectedRegional) !== 0){
      console.log('entro')
      document.getElementById( 'registerOffice').click();
    }else{
      console.log('no entro')
      swal({
        title: 'No hay cliente selecionado',
        text: 'Se debe seleccionar un cliente primero',
        type: 'error'
       });
    }

  }
  sendOffice() {
    try {
    console.log('Ole ole ole');  
    console.log('aqui');
  
    if ( Number(this.selectedRegional) !== 0 ) {
      this.submittedOffice = true;
      console.log('paso y no podia pasar');

  
     if ( !this.myForm.invalid) {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
  
  console.log('llego');
  
  
      this.restService.createOffice(this.selectedRegional, this.myForm.get('description').value.toUpperCase())
      .then(data => {
        const resp: any = data;
        console.log(resp);
        if (resp.success === false) {
          swal({
            title: 'Esta sede ya esta registrada',
            text: 'Esta sede no se puede registrar',
            type: 'error'
           });
        } else {
          this.getOffices();
          document.getElementById( 'createBrandHide').click();
          this.myForm.reset();
     swal({
      title: 'Sede agregada',
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

getOffices() {
 
    this.restService.getCustomerOffice( this.selectedRegional).then(data => {
      console.log('que mas ps');
      const resp: any = data;
      console.log(resp);
      this.dataOffices = resp.data_branchoffices;
      this.rowsTemp = resp.data_branchoffices;

      console.log('Importante ver la info');
      console.log( this.dataOffices);

      swal.close();
    }).catch(error => {
      console.log(error);
    });
}

updateBrand(brand) {
  console.log(brand);
  this.currentOffice = brand;

  this.myFormUpdate.get('descriptionUpdate').setValue(this.currentOffice.branch_name);

  document.getElementById( 'uploadBrand').click();
}

updatedOffice() {
  console.log("datos a actualizar");
  console.log(this.currentOffice.id);


     try {
    if ( Number(this.selectedRegional) !== 0 ) {
      this.submittedOffice = true;
      console.log(this.myFormUpdate.errors);
     if ( !this.myFormUpdate.invalid) {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
     
      
  console.log('llego');
      this.restService.updateOffice(this.currentOffice.id, this.selectedRegional, this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(),)
      .then(data => {
        const resp: any = data;
        console.log(resp);
        if (resp.success === false) {
          swal({
            title: 'Esta sede ya esta registrada',
            text: 'Esta sede no se puede registrar',
            type: 'error'
           });
        } else {
     this.myFormUpdate.reset();
     this.getOffices();
     document.getElementById('updateBrandHide').click();
     swal({
      title: 'Sede Actualizada',
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
          this.getOffices();
          if (resp.success === false) {
            swal({
              title: 'Esta sede presenta problemas',
              text: 'Esta sede no se puede eliminar',
              type: 'error'
             });
          } else {
         // this.router.navigateByUrl('master/registerBrand');
         swal({
          title: 'Sede eliminada',
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



  ngOnInit() {
  }

  get checkForm() { return this.myForm.controls; }
  get checkFormUpdate() { return this.myFormUpdate.controls; }

}
