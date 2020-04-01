import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../../master-services/Rest/rest.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-master-register-cost-center',
  templateUrl: './master-register-cost-center.component.html',
  styleUrls: ['./master-register-cost-center.component.scss']
})
export class MasterRegisterCostCenterComponent implements OnInit {

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
  
  constructor(private restService: RestService, private router: Router) {
    swal.showLoading();
    this.getRegionals();
    const code = new FormControl('', Validators.required);
    const description = new FormControl('', Validators.required);
    const regionals = new FormControl('', Validators.required);

    this.myForm = new FormGroup({
      code: code,
      description: description,
      regionals: regionals,
      
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

  
    if (   Number(this.code) !== 0  &&  this.description.trim() != '' && Number(this.selectedRegional) !== 0) {
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
     swal({
      title: 'Centro de cosots agregada',
      type: 'success'
     });
     
     this.router.navigateByUrl('master/costCeneterUpdate/' +this.idConstCenter);
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
