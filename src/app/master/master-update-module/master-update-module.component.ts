import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import swal from 'sweetalert2';
import { ModulesService } from '../../master-services/modules/modules.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-master-update-module',
  templateUrl: './master-update-module.component.html',
  styleUrls: ['./master-update-module.component.scss']
})
export class MasterUpdateModuleComponent implements OnInit {


  myFormUpdate: FormGroup;
  myFormSubModules: FormGroup;
  myFormUpdateSubModules: FormGroup;

  rowsClient: any;
  rowsTemp: any;
  rowStatic: any;
  rows: any;

  dataSubModule: any;

  submittedUpdated = false;
  enabledUpdated: boolean;

  enabledCreatedOfficeUpdate:boolean;

  currentModelId: any = 0;

  description: any;
  currentSubModule: any;

  elementDelete: any;

  constructor(private moduleService: ModulesService, private router: Router, private rutaActiva: ActivatedRoute) {

    this.currentModelId = this.rutaActiva.snapshot.params.id;
    console.log(this.currentModelId);

    this.loadingData(this.currentModelId);

    const descriptionUpdate = new FormControl('', Validators.required);
  
    const descriptionUpdateSub = new FormControl('', Validators.required);
  
    const description = new FormControl('', Validators.required);
  

    this.myFormUpdateSubModules = new FormGroup({
      descriptionUpdateSub: descriptionUpdateSub,
    });
    

    this.myFormUpdate = new FormGroup({
      descriptionUpdate: descriptionUpdate,
    });
    this.myFormSubModules = new FormGroup({
      description: description,
    });
   }

   loadingData(Id) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.moduleService.getModuleById(Id).then(data => {
      const resp: any = data;
      console.log(data);
      this.description = resp.data.description
      this.getSubModules(Id);
      swal.close();

      console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
   }

   getSubModules(idModule: number) {
    // console.log(this.opcionSeleccionado);
      this.moduleService.getSubModule( idModule).then(data => {
        console.log('que mas ps');
        const resp: any = data;
        console.log(resp);
        this.dataSubModule = resp.data_branchoffices;
 
        console.log('Importante ver la info');
        console.log( this.dataSubModule);
      console.log("antes de consulta "+resp.data_branchoffices[0].department_id);
     //   this.dataOffices = this.dataOffices.data;
        console.log('master');
        swal.close();
       // this.cities = resp.data;
        console.log( this.dataSubModule);
      }).catch(error => {
        console.log(error);
      });
  }

   updatedCustomer() {

    console.log('Ole ole ole kakaakkaka');
  
   // console.log(this.selectedPriceListIdUpdate);
    console.log(this.enabledCreatedOfficeUpdate);
  
      this.submittedUpdated = true;
     if ( !this.myFormUpdate.invalid) {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
  
      let statusTemp = 1;

      if ( this.enabledCreatedOfficeUpdate) {
        statusTemp = 0;
      }
      console.log('kakakaka');
  
     /* this.moduleService.updateCustomer(Number(this.currentModelId), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase())
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
     swal({
      title: 'Modulo Actualizado',
      type: 'success'
     });
      }
      }).catch(error => {
        console.log(error);
      });*/
      
    } else {
      swal({
        title: 'Debe llenar el campos obligatorio',
        text: 'Debe llenar el campos obligatorio',
        type: 'error'
       });
    }
  }
  
  updateBrand(row) {
    console.log(row);
    this.currentSubModule = row;
    console.log( this.currentSubModule );
    if ( this.currentSubModule.status === '0') {
      this.enabledUpdated = true;
    } else {
      this.enabledUpdated = false;
    }

    this.myFormUpdateSubModules.get('descriptionUpdateSub').setValue(this.currentSubModule.description);

     if(this.currentSubModule.status==0){
      this.enabledCreatedOfficeUpdate=true;
     }else{
      this.enabledCreatedOfficeUpdate=false;
     }

    document.getElementById( 'uploadSubModule').click();
  }
   
  deleteSubModulo(row: any) {
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
          this.elementDelete = row;
          console.log(row);
          console.log(    this.elementDelete);
          swal.showLoading();
          this.moduleService.deleteSubModule(Number(this.elementDelete.id))
          .then(data => {
            swal.showLoading();
            const resp: any = data;
            console.log(resp);
            this.getSubModules(this.currentModelId);
            if (resp.success === false) {
              swal({
                title: 'Este submodulo presenta problemas',
                text: 'Este submodulo no se pudo eliminar',
                type: 'error'
               });
            } else {
           // this.router.navigateByUrl('master/registerBrand');
           swal({
            title: 'Submodulo eliminado',
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

  blockAgents( vadr: any) {
    console.log(vadr);
   }

  
   onChangeCreatedOfficeUpdate(check: any) {
    console.log(check);
    this.enabledCreatedOfficeUpdate = check;
      }

   get checkFormUpdate() { return this.myFormUpdate.controls; }
   get checkFormOSubModules() { return this.myFormSubModules.controls; }
   get checkFormUpdateSubModules() { return this.myFormUpdateSubModules.controls; }
  ngOnInit() {
  }

}
