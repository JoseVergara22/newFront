import { Component, OnInit } from '@angular/core';
import { RestService } from '../../master-services/Rest/rest.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-master-cost-center',
  templateUrl: './master-cost-center.component.html',
  styleUrls: ['./master-cost-center.component.scss']
})
export class MasterCostCenterComponent implements OnInit {

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
  submitted = false;
  enabledCreated= true;
  switchUpdate = true;
  showButtonUpdated = 0;

  code: any;
  description= '';

  regionals: any;
  selectedRegional: any = 0;
  idConstCenter;
  currentCostCenter= 0;
  myFormUpdate: FormGroup;
  submittedUpdated = false;


  codeUpdate: any;
  descriptionUpdate = '';
  idCostCenter;
  constCenter: any;
  regionalsUpdate;
  selectedRegionalUpdate = 0;

  constructor(private restService: RestService, private router: Router) {
   this.loadingData();
   const code = new FormControl('', Validators.required);
   const description = new FormControl('', Validators.required);
   const regionals = new FormControl('', Validators.required);

   const codeUpdate = new FormControl('', Validators.required);
   const descriptionUpdate  = new FormControl('', Validators.required);
   const regionalsUpdate = new FormControl('', Validators.required);

   this.myForm = new FormGroup({
    code: code,
    description: description,
    regionals: regionals,
    
   });

   this.myFormUpdate = new FormGroup({
    codeUpdate: codeUpdate,
    descriptionUpdate: descriptionUpdate,
    regionalsUpdate: regionalsUpdate,
  });
  }

  getRegionals(){
    this.restService.getRegional().then(data => {
        const resp: any = data;
        console.log(resp);
        this.regionals = resp;
          swal.close();
  });
}

   sendCostCenter() {
    console.log('Ole ole ole');
    console.log(this.code);
    console.log(this.description);
    console.log(this.selectedRegional)
  
    if (  Number(this.selectedRegional) !== 0) {
      this.submitted = true;
     if ( !this.myForm.invalid) {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.restService.createCostCenter(this.myForm.get('description').value.toUpperCase(),
       this.myForm.get('code').value)
      .then(data => {
        const resp: any = data;
        console.log(resp);
        if (resp.success === false) {
          swal({
            title: 'Este centro de costos ya esta registrado',
            text: 'Este centro de costos no se pudo registrar',
            type: 'error'
           });
        } else {
          this.idConstCenter = resp.data.id;
          console.log('Cambio');
          document.getElementById('modalRegisterCostCenter').click();
          this.loadingData();
     swal({
      title: 'Centro de cosots agregada',
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

  updateCostCenter(row) {
    console.log(row);
    this.currentCostCenter = row;
    console.log( this.currentCostCenter );
    this.myFormUpdate.get('descriptionUpdate').setValue(row.description);
    this.myFormUpdate.get('codeUpdate').setValue(row.code);
    
    document.getElementById( 'updateCostCenter').click();
   }

  updateCostCenters() {
    console.log('Ole ole ole kakaakkaka');
    console.log(this.codeUpdate);
    console.log(this.descriptionUpdate);
    console.log(this.selectedRegionalUpdate);

    if ( Number(this.selectedRegionalUpdate) !== 0) {
      this.submittedUpdated = true;
     if ( !this.myFormUpdate.invalid) {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      console.log('kakakaka');
      this.restService.updatCostCenters(Number(this.idCostCenter), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(),
       this.myFormUpdate.get('codeUpdate').value, this.myFormUpdate.get('selectedRegionalUpdate').value)
      .then(data => {
        const resp: any = data;
        console.log(JSON.stringify(resp));
        if (resp.success === false) {
          swal({
            title: 'Falla en la actualizacion',
            text: 'Esta regional no se pudo actualizar',
            type: 'error'
           });
        } else {
          console.log('Cambio');
          document.getElementById('updateCostCenterHide').click();
          this.loadingData();
     swal({
      title: 'Regional actualizada.',
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

  deleteCostCenters(brand: any) {
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
          this.restService.deleteCostCenter(Number(this.elementDelete.id))
          .then(data => {
            swal.showLoading();
            const resp: any = data;
            console.log(resp);

            if (resp.success === false) {
              swal({
                title: 'Este centro de costos presenta problemas',
                text: 'Este centro de costos no se puede eliminar',
                type: 'error'
               });
            } else {
           // this.router.navigateByUrl('master/registerBrand');
           this.loadingData();
           swal({
            title: 'Centro de costos eliminado',
            type: 'success'
           });
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
      return d.description.toLowerCase().indexOf(val) !== -1 || !val;
    });

    if (val !== '') {
      this.filterIndicatorText = true;
      this.rowsTempText = temp;
    }

    // update the rows
    this.rowsClient = temp;

  }

  loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.restService.getCostCenter().then(data => {
      const resp: any = data;
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


  ngOnInit() {
  }

  blockAgents( vadr: any) {
    console.log(vadr);
   }
   
   get checkForm() { return this.myForm.controls; }
   get checkFormUpdate() { return this.myFormUpdate.controls; }
}
