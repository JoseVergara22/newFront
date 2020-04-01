import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadService } from '../../master-services/services/upload.service';
import swal from 'sweetalert2';
import { RestService } from '../../master-services/Rest/rest.service';

@Component({
  selector: 'app-master-update-technicians',
  templateUrl: './master-update-technicians.component.html',
  styleUrls: ['./master-update-technicians.component.scss']
})
export class MasterUpdateTechniciansComponent implements OnInit {

  dataMasters: any;
  typeDocuments: any;

  myFormUpdate: FormGroup;
  submittedUpdated = false;
  switchUpdate = true;
  enabledCreatedOfficeUpdate:boolean;

  selectedTypeDocumentIdUpdate: any = 0;
  idTechnician;
  technician: any;

  constructor(private router: Router, private uploadService: UploadService,
    private rutaActiva: ActivatedRoute, private restService: RestService) {

    this.idTechnician = this.rutaActiva.snapshot.params.id;
    this.getTechnician(this.idTechnician);
    const codeUpdate = new FormControl('', Validators.required);
    const descriptionUpdate  = new FormControl('', Validators.required);

    this.myFormUpdate = new FormGroup({
      codeUpdate: codeUpdate,
      descriptionUpdate: descriptionUpdate
    });
     }

     getTechnician(id:number){
      this.restService.getSpecificTechnician(id).then((data:any) => {
        const resp: any = data.data;
        console.log("datosfffffffff");
        console.log(resp);
        this.technician=resp;
        console.log("importar datos");
        console.log(resp.description);
        this.myFormUpdate.get('codeUpdate').setValue(resp.code);
        this.myFormUpdate.get('descriptionUpdate').setValue(resp.description);
      
      }).catch(error => {
        console.log(error);
      });
    }

    getMasters(indice: number) {
      // console.log(this.opcionSeleccionado);
        this.restService.getMastersThird().then(data => {
          const resp: any = data;
          this.dataMasters = data;
          this.typeDocuments = this.dataMasters.documents;
        //  this.priceList = this.dataMasters.price_list;
          console.log('master');
          console.log(data);
          swal.close();
        }).catch(error => {
          console.log(error);
        });
  }

    updatedTechnician() {
      console.log('Ole ole ole kakaakkaka');
      console.log(this.selectedTypeDocumentIdUpdate);

      if (   Number(this.selectedTypeDocumentIdUpdate) !== 0  ) {
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
    
        this.restService.updateTechnian(Number(this.technician.id), this.myFormUpdate.get('nameUpdate').value.toUpperCase(),
        this.myFormUpdate.get('documentUpdate').value, this.myFormUpdate.get('cellphoneUpdate').value)
        .then(data => {
          const resp: any = data;
          console.log(JSON.stringify(resp));
          if (resp.success === false) {
            swal({
              title: 'Falla en la actualización',
              text: 'Este tecnico no se pudo actualizar',
              type: 'error'
             });
          } else {
            this.getMasters(1);
            console.log('Cambio');
       swal({
        title: 'Tecnico actualizado',
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

  goAdminCustomer(){
    this.router.navigateByUrl('master/techiciansAll');
  }

  get checkFormUpdate() { return this.myFormUpdate.controls; }

}
