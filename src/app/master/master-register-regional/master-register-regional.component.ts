import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RestService } from '../../master-services/Rest/rest.service';
import { UploadService } from '../../master-services/services/upload.service';

@Component({
  selector: 'app-maste-register-regional',
  templateUrl: './master-register-regional.component.html',
  styleUrls: ['./master-register-regional.component.scss']
})
export class MasterRegisterRegionalComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;
  enabledCreated= true;
  switchUpdate = true;
  showButtonUpdated = 0;

  code: any;
  description= '';
  idRegionalCreate;

  constructor(private restService: RestService, private router: Router) {
    const code = new FormControl('', Validators.required);
    const description = new FormControl('', Validators.required);

    this.myForm = new FormGroup({
      code: code,
      description: description,
      
    });

   }



  sendRegional() {
    console.log('Ole ole ole');
    console.log(this.code);
    console.log(this.description);

  
    if (   Number(this.code) !== 0  &&  this.description.trim() != '' ) {
      this.submitted = true;
     if ( !this.myForm.invalid) {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
  
      let statusTemp = 0;
      console.log( this.switchUpdate);
      if ( this.enabledCreated === false) {
        statusTemp = 1;
      }

      this.restService.createRegional(this.myForm.get('description').value.toUpperCase(),
       this.myForm.get('code').value)
      .then(data => {
        const resp: any = data;
        console.log(resp);
        if (resp.success === false) {
          swal({
            title: 'Esta regional ya esta registrada',
            text: 'Esta regional no se pudo registrar',
            type: 'error'
           });
        } else {
          this.idRegionalCreate = resp.data.id;
          console.log('Cambio');
     swal({
      title: 'Regional agregada',
      type: 'success'
     });
     
     this.router.navigateByUrl('master/regionalsUpdate/' +this.idRegionalCreate);
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

  get checkForm() { return this.myForm.controls; }
}
