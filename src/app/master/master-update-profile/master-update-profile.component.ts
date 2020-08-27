import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../master-services/User/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { ModulesService } from '../../master-services/modules/modules.service';

@Component({
  selector: 'app-master-update-profile',
  templateUrl: './master-update-profile.component.html',
  styleUrls: ['./master-update-profile.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterUpdateProfileComponent implements OnInit {

  profile:any
  rowsClient: any;

  updateComponentForm: FormGroup;

  currentProfile: any;
  profileId: any;
  modules: any;

  constructor( private userService:UserService,  private router:Router, private activatedRoute: ActivatedRoute, 
    private moduleServices:ModulesService) {

    this.profileId = this.activatedRoute.snapshot.params.id;

    this.getProfileSpecific(this.profileId);
    const updateComponent = new FormControl('',Validators.required);

    this.updateComponentForm= new FormGroup({
      updateComponent: updateComponent
    });
   }

   
   getProfileSpecific(id: number) {
    this.userService.getprofileId(id).then(data => {
      const resp: any = data;
      console.log(data);
      if (resp.error) {
        swal({
          title:'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
         });
        } else {
          console.log( resp.data);
      //  this.title2 = resp.data.description;
      //  this.hours2 = resp.data.hours;
      //  this.observation2 = resp.data.observation;
      this.profile = resp.data;
        
     this. getWorkDetails();   
    }
    }).catch(error => {
      swal({
        title:'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
       });
      console.log(error);
    });
  }
    
  
  getWorkDetails(){
    this.moduleServices.getModuleFuntion().then(data=>{
      const resp:any=data;
      if (resp.success==true) {
        this.modules = resp.data;
        console.log(this.modules)

       /* for (let system of this.maintenanceSystem){
          console.log(system.id);
          this.getComponent(system.id);
        }*/
      }/* else {
        this.generalAlert("ha ocurrido un error","ha ocurrido un error al mostrar la informacion","error");
      }*/
    }).catch(error=>{
      console.log(error);
      this.generalAlert("ha ocurrido un error","ha ocurrido un error al mostrar la informacion","error");
    });
  }

  updateWare(){

  }
  
 

  deleteComponent(row:any){

  }

  updateComponent(components: any){
    this.currentProfile = components;
    console.log( this.currentProfile );
    this.updateComponentForm.get('updateComponent').setValue(this.currentProfile.system_description);
   document.getElementById('showUpdateSystem').click();

  }


  sendUpdateComponent(system: any){
    console.log(system);
    if ((system.updateComponent!=null)&&(system.updateComponent!="")) {
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.userService.updateProfile(this.currentProfile.maintenance_system_id,system.updateComponent).then(data=>{
        const resp:any=data;
        // this.headerInfo=resp.data;
        // console.log("header information");
        // console.log(this.headerInfo);
        this.getWorkDetails();
        this.generalAlert("Proceso completado","Proceso completado correctamente!","success");
        document.getElementById( 'updateComponentHide').click();
      }).catch(err=>{
        console.log(err);
        this.generalAlert("ha ocurrido un herror","ocurrio un error durante la ecucion","error");
      });
    }else{
      this.generalAlert("ha ocurrido un herror","complete todos los campos obligatorios","error");
    }
  }

  generalAlert(title:string,message:string,type:any){
    swal({
      title:title,
      text: message,
      type: type
     });
  }

  ngOnInit() {
  }

}
