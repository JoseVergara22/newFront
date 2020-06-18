import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { WorkService } from '../../master-services/Work/work.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-master-update-checklists',
  templateUrl: './master-update-checklists.component.html',
  styleUrls: ['./master-update-checklists.component.scss']
})
export class MasterUpdateChecklistsComponent implements OnInit {

  title2:string;
  hours2:number;
  observation2:string;

  componentform: FormGroup;
  updatecomponentform: FormGroup;
  partform: FormGroup;
  updatepartform: FormGroup;

  rowsWorkDetails: any;
  elementDelete:any;

  currentComponent: any;
  componentSystem: any;
  currentPart: any;
  componentForPart: any

  checklistId: any
  dataPart: any;
  headerinfo: any;

  constructor(private workservice: WorkService, private router: Router,  private rutaActiva: ActivatedRoute) { 


    this.checklistId = this.rutaActiva.snapshot.params.id;

    this.getComponent(this.checklistId);
    //component
    const component = new FormControl('',Validators.required);
   
    this.componentform= new FormGroup({
      component:component
    });

    const updatecomponent = new FormControl('',Validators.required);

    this.updatecomponentform= new FormGroup({
      updatecomponent: updatecomponent
    });
 
    //part
    const partdescription = new FormControl('',Validators.required);
    const partwork = new FormControl('',Validators.required);
    const partsupplice = new FormControl('',Validators.required);
    const partparameter = new FormControl('',Validators.required);
   
    this.partform= new FormGroup({
      partdescription:partdescription,
      partwork:partwork,
      partsupplice:partsupplice,
      partparameter:partparameter
    });

    const partupdatedescription = new FormControl('',Validators.required);
    const partupdatework = new FormControl('',Validators.required);
    const partupdatesupplice = new FormControl('',Validators.required);
    const partupdateparameter = new FormControl('',Validators.required);
   
    this.updatepartform= new FormGroup({
      partupdatedescription:partupdatedescription,
      partupdatework:partupdatework,
      partupdatesupplice:partupdatesupplice,
      partupdateparameter:partupdateparameter
    });
  }

  getComponent(id: any){
    this.workservice.getComponent(id).then(data=>{
      const resp:any=data;
      console.log('carga de componentes');
      console.log(resp);
      if (resp.success==true) {
        this.componentSystem = resp.data;
        console.log(this.componentSystem);

        for (let com of this.componentSystem){
          this.getPart(com.id);
        }
      } else {
        this.generalAlert("ha ocurrido un error","ha ocurrido un error al mostrar la informacion","error");
      }
    }).catch(error=>{
      console.log(error);
      this.generalAlert("ha ocurrido un error","ha ocurrido un error al mostrar la informacion","error");
    });
  }

 

  getPart(id: any){
    this.workservice.getPart(id).then(data=>{
      const resp:any=data;
      console.log('carga de partes');
      console.log(resp);
      if (resp.success==true) {
        this.dataPart = resp.data;
        console.log(this.dataPart);

      } else {
        this.generalAlert("ha ocurrido un error","ha ocurrido un error al mostrar la informacion","error");
      }
    }).catch(error=>{
      console.log(error);
      this.generalAlert("ha ocurrido un error","ha ocurrido un error al mostrar la informacion","error");
    });
  }

  currentParts(idComponent:any){
    console.log(idComponent);
    console.log(idComponent.id);
    this.componentForPart = idComponent.id
    // document.getElementById('storageDetailHide').click();
  }
  
  storageComponent(formValue:any){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(formValue);
    console.log(formValue.component);
    const system=formValue.component;
  
    if((system!=null)&&(system!="")){
    this.workservice.storeComponent(this.checklistId,this.componentform.get('component').value).then(data=>{
      const resp:any=data;
      console.log(data);
      console.log(resp);
      if (resp.success==1) {
        this.generalAlert('Proceso exitoso','Se ha guardado el detalle correctamente','success');
        this.getComponent(this.checklistId);
        this.componentform.reset();
        document.getElementById('storageComponentlHide').click();
        swal.close();
      } else {
        this.generalAlert('No se puede guardar','Ha ocurrido un error en la ejecucion','error');
      }
      }).catch(error=>{
        console.log(error);
        this.generalAlert('No se puede guardar','Ha ocurrido un error en la ejecucion','error')
      });
    }else{
      this.generalAlert('No se puede guardar','Debe Completar todos los campos obligatorios','error')
    }
  }
  
  storagePart(formValue:any){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    
    console.log(formValue.value);
    console.log(formValue.value.partdescription);
    console.log(formValue.value.partwork);
    console.log(formValue.value.partsupplice);
    console.log(formValue.value.partparameter);

    const description=formValue.value.partdescription;
    const work=formValue.value.partwork;
    const supplice=formValue.value.partsupplice;
    const parameter=formValue.value.partparameter;
  
    if(((description!=null)&&(description!="")) && ((work!=null)&&(work!="")) && ((supplice!=null)&&(supplice!="")) &&  ((parameter!=null)&&(parameter!=""))){
    this.workservice.storeParts(this.componentForPart,description,work,supplice,parameter).then(data=>{
      const resp:any=data;
      console.log(data);
      console.log(resp);
      if (resp.success==1) {
        this.generalAlert('Proceso exitoso','Se ha guardado el detalle correctamente','success');
        this.partform.reset();
        document.getElementById('storagePartHide').click();
        this.getPart(this.componentForPart);
        swal.close();
      } else {
        this.generalAlert('No se puede guardar','Ha ocurrido un error en la ejecucion','error');
      }
      }).catch(error=>{
        console.log(error);
        this.generalAlert('No se puede guardar','Ha ocurrido un error en la ejecucion','error')
      });
    }else{
      this.generalAlert('No se puede guardar','Debe Completar todos los campos obligatorios','error')
    }
  }

  
  deleteComponent(item: any) {
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
          this.elementDelete = item;
          console.log(item);
          console.log(    this.elementDelete);
          swal.showLoading();
          this.workservice.deleteComponents(Number(this.elementDelete.id))
          .then(data => {
            swal.showLoading();
            const resp: any = data;
            console.log(resp);

            if (resp.success === false) {
              swal({
                title: 'Este peso presenta problemas',
                text: 'Este peso no se puede eliminar',
                type: 'error'
               });
            } else {
           // this.router.navigateByUrl('master/registerBrand');
           swal({
            title: 'Elemento eliminado',
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
 
 
  deletePart(item: any) {
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
          this.elementDelete = item;
          console.log(item);
          console.log(    this.elementDelete);
          swal.showLoading();
          this.workservice.deleteParts(Number(this.elementDelete.id))
          .then(data => {
            swal.showLoading();
            const resp: any = data;
            console.log(resp);

            if (resp.success === false) {
              swal({
                title: 'Este peso presenta problemas',
                text: 'Este peso no se puede eliminar',
                type: 'error'
               });
            } else {
           // this.router.navigateByUrl('master/registerBrand');
           swal({
            title: 'Elemento eliminado',
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
 
  updateComponent(components: any){
    this.currentComponent = components;
    console.log( this.currentComponent );
    this.updatecomponentform.get('updatesystem').setValue(this.currentComponent.description);
   document.getElementById( 'showUpdateSystem').click();

  }

  sendUpdateComponent(system: any){
    if ((system.updatecomponent!=null)&&(system.updatecomponent!="")) {
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.workservice.updateSystem(this.currentComponent.id,system.updatecomponent).then(data=>{
        const resp:any=data;
        this.headerinfo=resp.data;
        console.log("header information");
        console.log(this.headerinfo);
        this.generalAlert("Proceso completado","Proceso completado correctamente!","success");
        document.getElementById( 'updateComponentHide').click();
        this.getComponent(this.currentComponent.id);
      }).catch(err=>{
        console.log(err);
        this.generalAlert("ha ocurrido un herror","ocurrio un error durante la ecucion","error");
      });
    }else{
      this.generalAlert("ha ocurrido un herror","complete todos los campos obligatorios","error");
    }
  }


  updatePart(row: any){
    
    this.currentPart = row;
    console.log( this.currentPart );
    this.updatepartform.get('partupdatedescription').setValue(this.currentPart.description);
    this.updatepartform.get('partupdatework').setValue(this.currentPart.work);
    this.updatepartform.get('partupdatesupplice').setValue(this.currentPart.supplice);
    this.updatepartform.get('partupdateparameter').setValue(this.currentPart.parameter);

   document.getElementById( 'showUpdatePart').click();
  }

  sendUpdatePart(updatedetailform: any){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    console.log(updatedetailform);
    console.log(updatedetailform.partdescription);
    console.log(updatedetailform.partwork);
    console.log(updatedetailform.partsupplice);
    console.log(updatedetailform.partparameter);

    const description=updatedetailform.partupdatedescription;
    const work=updatedetailform.partupdatework;
    const supplice=updatedetailform.partupdatesupplice;
    const parameter=updatedetailform.partupdateparameter;
    if(((description!=null)&&(description!="")) && ((work!=null)&&(work!="")) && ((supplice!=null)&&(supplice!="")) &&  ((parameter!=null)&&(parameter!=""))){
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.workservice.updatePart(this.currentPart.id,description,work,supplice,parameter).then(data=>{
        const resp:any=data;
        this.headerinfo=resp.data;
        console.log("header information");
        console.log(this.headerinfo);
        this.generalAlert("Proceso completado","Proceso completado correctamente!","success");
        document.getElementById( 'updatePartHide').click();
      }).catch(err=>{
        console.log(err);
        this.generalAlert("ha ocurrido un herror","ocurrio un error durante la ecucion","error");
      });
    }else{
      this.generalAlert("ha ocurrido un herror","complete todos los campos obligatorios","error");
    }
  }

  updateheader(){
    console.log(this.title2);
    if ((this.title2!=null) || (this.title2!="") || (this.hours2==null)) {
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.workservice.updateWorkHeader(this.headerinfo.id,1,this.title2,this.hours2,this.observation2).then(data=>{
        const resp:any=data;
        this.headerinfo=resp.data;
        console.log("header information");
        console.log(this.headerinfo);
        this.generalAlert("Proceso completado","Proceso completado correctamente!","success");
        this.hours2=this.headerinfo.hours;
        this.title2=this.headerinfo.description;
        this.observation2=this.headerinfo.observation;
      }).catch(err=>{
        console.log(err);
        this.generalAlert("ha ocurrido un herror","ocurrio un error durante la ecucion","error");
      });
    }else{
      this.generalAlert("ha ocurrido un herror","complete todos los campos obligatorios","error");
    }
  }

  goAdminRoutines(){
    this.router.navigateByUrl('master/work_dashboard');
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
