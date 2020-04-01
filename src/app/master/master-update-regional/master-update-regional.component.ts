import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { UploadService } from '../../master-services/services/upload.service';
import { RestService } from '../../master-services/Rest/rest.service';

@Component({
  selector: 'app-maste-update-regional',
  templateUrl: './master-update-regional.component.html',
  styleUrls: ['./master-update-regional.component.scss']
})
export class MasterUpdateRegionalComponent implements OnInit {

  myFormUpdate: FormGroup;
  submittedUpdated = false;
  switchUpdate = true;
  enabledCreatedOfficeUpdate:boolean;


  codeUpdate: any;
  descriptionUpdate = '';
  idRegional;
  regional: any;

  constructor(private router: Router, private uploadService: UploadService,
    private rutaActiva: ActivatedRoute, private restService: RestService) {

    this.idRegional = this.rutaActiva.snapshot.params.id;
    this.getRegional(this.idRegional);
    const codeUpdate = new FormControl('', Validators.required);
    const descriptionUpdate  = new FormControl('', Validators.required);

    this.myFormUpdate = new FormGroup({
      codeUpdate: codeUpdate,
      descriptionUpdate: descriptionUpdate
    });
   }

  updatedRegional() {
    console.log('Ole ole ole kakaakkaka');
    console.log(this.codeUpdate);
    console.log(this.descriptionUpdate);

  
    if (   Number(this.codeUpdate) !== 0  &&  this.descriptionUpdate.trim() != '') {
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
  
      this.restService.updateRegional(Number(this.idRegional), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(),
       this.myFormUpdate.get('codeUpdate').value)
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

  getRegional(id:number){
    this.restService.getSpecificRegional(id).then((data:any) => {
      const resp: any = data.data;
      console.log("datosfffffffff");
      console.log(resp);
      this.regional=resp;
      console.log("importar datos");
      console.log(resp.description);
      this.myFormUpdate.get('codeUpdate').setValue(resp.code);
      this.myFormUpdate.get('descriptionUpdate').setValue(resp.description);
    
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

  goAdminRegionals(){
    this.router.navigateByUrl('master/regionalsAll');
  }
  get checkFormUpdate() { return this.myFormUpdate.controls; }

}
