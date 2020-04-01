import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadService } from '../../master-services/services/upload.service';
import swal from 'sweetalert2';
import { RestService } from '../../master-services/Rest/rest.service';

@Component({
  selector: 'app-master-update-cost-center',
  templateUrl: './master-update-cost-center.component.html',
  styleUrls: ['./master-update-cost-center.component.scss']
})
export class MasterUpdateCostCenterComponent implements OnInit {

  myFormUpdate: FormGroup;
  submittedUpdated = false;
  switchUpdate = true;
  enabledCreatedOfficeUpdate:boolean;


  codeUpdate: any;
  descriptionUpdate = '';
  idCostCenter;
  constCenter: any;
  regionalsUpdate;
  selectedRegionalUpdate = 0;

  constructor(private router: Router, private uploadService: UploadService,
    private rutaActiva: ActivatedRoute, private restService: RestService) {
    this.idCostCenter = this.rutaActiva.snapshot.params.id;
    swal.showLoading();
    this.getCostCenter(this.idCostCenter);
    const codeUpdate = new FormControl('', Validators.required);
    const descriptionUpdate  = new FormControl('', Validators.required);
    const regionalsUpdate = new FormControl('', Validators.required);

    this.myFormUpdate = new FormGroup({
      codeUpdate: codeUpdate,
      descriptionUpdate: descriptionUpdate,
      regionalsUpdate: regionalsUpdate,
    });
    }
    getCostCenter(id:number){
      this.restService.getSpecificCostCenter(id).then((data:any) => {
        const resp: any = data.data;
        console.log("datosfffffffff");
        console.log(resp);
        this.constCenter=resp;
        console.log("importar datos");
        console.log(resp.description);
        this.myFormUpdate.get('codeUpdate').setValue(resp.code);
        this.myFormUpdate.get('descriptionUpdate').setValue(resp.description);
        this.myFormUpdate.get('regionalsUpdate').setValue(resp.description);
        swal.close();
      
      }).catch(error => {
        console.log(error);
      });
    }

    updatedCostCenter() {
      console.log('Ole ole ole kakaakkaka');
      console.log(this.codeUpdate);
      console.log(this.descriptionUpdate);
      console.log(this.selectedRegionalUpdate);
  
    
      if (   Number(this.codeUpdate) !== 0  &&  this.descriptionUpdate.trim() != '' && Number(this.selectedRegionalUpdate) !== 0) {
        this.submittedUpdated = true;
       if ( !this.myFormUpdate.invalid) {
        swal({
          title: 'Validando información ...',
          allowOutsideClick: false
        });
        swal.showLoading();
    
        let statusTemp = 1;
        console.log( this.switchUpdate);
        if ( this.enabledCreatedOfficeUpdate) {
          statusTemp = 0;
        }
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

  ngOnInit() {
  }

  goAdminRegionals(){
    this.router.navigateByUrl('master/costCenter');
  }
  get checkFormUpdate() { return this.myFormUpdate.controls; }
}
