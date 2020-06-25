import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder, FormArray} from '@angular/forms';
import { WorkService } from '../../master-services/Work/work.service';
import swal from 'sweetalert2';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-master-work-details',
  templateUrl: './master-work-details.component.html',
  styleUrls: ['./master-work-details.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})

export class MasterWorkDetailsComponent implements OnInit {
  @Input()
  routineDescription:string;
  routineHour:number;
  routineObservation:string;
  routineDescriptionUpdate:string;
  routineHourUpdate:number;
  routineObservationUpdate:string;

  detailForm: FormGroup;
  updateDetailForm: FormGroup;
  componentForm: FormGroup;
  updateComponentForm: FormGroup;
  partForm: FormGroup;
  updatePartForm: FormGroup;

  showButtonUpdated:boolean;
  headerInfo:any;
  submitted = false;
  indice:number=0;
  updateIndice:number=0;
  rowsWorkDetails: any;
  elementDelete:any;
  currentDetail:any;
  name: any;


  descriptionSystem: string;
  maintenanceSystem: any;
  componentSystem: any;
  partSystem: any;
  dataPart: any;
  
  currentSystem: any;
  currentComponent: any;
  currentPart: any;
  systemForComponent: any
  componentForPart: any

  headerId:any;

  constructor( private workService: WorkService, private router: Router,  private activatedRoute: ActivatedRoute,
    private formBuilder:FormBuilder) {

    this.showButtonUpdated=false;

    //system
    const system = new FormControl('',Validators.required);
   
    this.detailForm= new FormGroup({
      system:system
    });

    const updateSystem = new FormControl('',Validators.required);

    this.updateDetailForm= new FormGroup({
      updateSystem: updateSystem
    });

    //component
    const component = new FormControl('',Validators.required);
   
    this.componentForm= new FormGroup({
      component:component
    });

    const updateComponent = new FormControl('',Validators.required);

    this.updateComponentForm= new FormGroup({
      updateComponent: updateComponent
    });
 
    //part
    const partDescription = new FormControl('',Validators.required);
    const partWork = new FormControl('',Validators.required);
    const partSupplice = new FormControl('',Validators.required);
    const partParameter = new FormControl('',Validators.required);
   
    this.partForm= new FormGroup({
      partDescription:partDescription,
      partWork:partWork,
      partSupplice:partSupplice,
      partParameter:partParameter
    });

    const partDescriptionUpdate = new FormControl('',Validators.required);
    const partWorkUpdate = new FormControl('',Validators.required);
    const partSuppliceUpdate = new FormControl('',Validators.required);
    const partParameterUpdate = new FormControl('',Validators.required);
   
    this.updatePartForm= new FormGroup({
      partDescriptionUpdate:partDescriptionUpdate,
      partWorkUpdate:partWorkUpdate,
      partSuppliceUpdate:partSuppliceUpdate,
      partParameterUpdate:partParameterUpdate
    });
 

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data=>{
       //this.name=data.get('id');
       this.headerId=data.get('id');
       if (this.headerId) {
          this.showButtonUpdated=true;
          this.routineHourUpdate=Number(data.get('hours'));
          this.routineDescriptionUpdate=data.get('description');
          this.routineObservationUpdate=data.get('observation');
         
          this.getWorkDetails();
       }

       // consultar header y detalles

    /*  console.log(this.name);
      if (this.name) {
        this.routineHour=0;
        this.routineDescription=this.name;
        this.routineObservation="nada";
      }*/
    });
  }

  ngAfterContentInit() {
  /*  if (this.headerId) {
      document.getElementById('storeheaderbutton2').click();
    }*/
  }
  registerheader(){
    console.log(this.routineDescription);
    if ((this.routineDescription!=null) || (this.routineDescription!="") || (this.routineHour==null)) {
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      console.log(1+','+this.routineDescription+','+this.routineHour+','+this.routineObservation);
      this.workService.storeWorkHeader(1,this.routineDescription,this.routineHour,this.routineObservation).then(data=>{
        const resp:any=data;
       
        if(resp.success){
          this.headerInfo=resp.data;
          console.log("header information");
          console.log(this.headerInfo)
          swal.close();
  
          this.headerId=this.headerInfo.id;
          this.showButtonUpdated=true;
          this.routineHourUpdate=this.headerInfo.hours;
          this.routineDescriptionUpdate=this.headerInfo.description;
          this.routineObservationUpdate=this.headerInfo.observation;
          this.getWorkDetails();
        }else{
          this.generalAlert("ha ocurrido un herror","Ya existe una rutina con este nombre","error");
        }
      }).catch(err=>{
        this.showButtonUpdated=false;
        console.log(err);
        this.generalAlert("ha ocurrido un herror","ocurrio un error durante la ecucion","error");
      });
    }else{
      console.log('description '+this.routineDescription);
      this.showButtonUpdated=false;
      this.generalAlert("ha ocurrido un herror","complete todos los campos obligatorios","error");
    }
  }

  getWorkDetails(){
    this.workService.getRoutineDetails(this.headerId).then(data=>{
      const resp:any=data;
      if (resp.success==true) {
        this.maintenanceSystem = resp.data;
        console.log(this.maintenanceSystem)

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

  

  getComponent(id: any){
    console.log(id);
    this.workService.getComponent(id).then(data=>{
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
    this.workService.getPart(id).then(data=>{
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

 

  updateSystem(system: any){
  console.log(system)
    this.currentSystem = system;
    console.log( this.currentSystem );
    this.updateDetailForm.get('updateSystem').setValue(this.currentSystem.system_description);
   document.getElementById( 'showUpdateSystem').click();

  }
  

  sendUpdateSystem(system: any){
    console.log('valor de sistema'+ JSON.stringify(system));
    if ((system.updateSystem!=null)&&(system.updateSystem!="")) {
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.workService.updateSystem(this.currentSystem.id,system.updateSystem).then(data=>{
        const resp:any=data;
        this.generalAlert("Proceso completado","Proceso completado correctamente!","success");
        document.getElementById( 'updateDetailHide').click();
        this.getWorkDetails();
      }).catch(err=>{
        console.log(err);
        this.generalAlert("ha ocurrido un herror","ocurrio un error durante la ecucion","error");
      });
    }else{
      this.generalAlert("ha ocurrido un herror","complete todos los campos obligatorios","error");
    }
  }

  deleteSystem(item: any) {
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
          this.workService.deleteSystems(Number(this.elementDelete.id))
          .then(data => {
            swal.showLoading();
            const resp: any = data;
            console.log(resp);

            if (resp.success === false) {
              swal({
                title: 'Este item presenta problemas',
                text: 'Este item no se puede eliminar',
                type: 'error'
               });
            } else {

              if(resp.indicator==0){
                this.getWorkDetails();
                // this.router.navigateByUrl('master/registerBrand');
                swal({
                 title: 'Elemento eliminado',
                 type: 'success'
                });
              }else{
                swal({
                  title: 'Este sistema tiene asignado componentes',
                  text: 'Este item no se puede eliminar',
                  type: 'error'
                 });
              }
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
          this.workService.deleteComponents(Number(this.elementDelete.id))
          .then(data => {
            swal.showLoading();
            const resp: any = data;
            console.log(resp);

            if (resp.success === false) {
              swal({
                title: 'Este item presenta problemas',
                text: 'Este item no se puede eliminar',
                type: 'error'
               });
            } else {

            if(resp.indicator==0){
              this.getWorkDetails();
              swal({
               title: 'Elemento eliminado',
               type: 'success'
              });
            } else{
              swal({
                title: 'Este componente tiene asignado partes',
                text: 'Este item no se puede eliminar',
                type: 'error'
               });
            }
           // this.router.navigateByUrl('master/registerBrand');
          
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
          this.workService.deleteParts(Number(this.elementDelete.id))
          .then(data => {
            swal.showLoading();
            const resp: any = data;
            console.log(resp);

            if (resp.success === false) {
              swal({
                title: 'Este item presenta problemas',
                text: 'Este item no se puede eliminar',
                type: 'error'
               });
            } else {
           // this.router.navigateByUrl('master/registerBrand');
           this.getWorkDetails();
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
    this.updateComponentForm.get('updateComponent').setValue(this.currentComponent.description);
   document.getElementById('showComponent').click();

  }

  sendUpdateComponent(system: any){
    if ((system.updateComponent!=null)&&(system.updateComponent!="")) {
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.workService.updateComponets(this.currentComponent.id,system.updateComponent).then(data=>{
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


  updatePart(row: any){
    
    this.currentPart = row;
    console.log( this.currentPart );
    this.updatePartForm.get('partDescriptionUpdate').setValue(this.currentPart.description);
    this.updatePartForm.get('partWorkUpdate').setValue(this.currentPart.work);
    this.updatePartForm.get('partSuppliceUpdate').setValue(this.currentPart.supplice);
    this.updatePartForm.get('partParameterUpdate').setValue(this.currentPart.parameter);

   document.getElementById( 'showUpdatePart').click();
  }

  sendUpdatePart(updatePartForm: any){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    console.log(updatePartForm);
    console.log(updatePartForm.partDescription);
    console.log(updatePartForm.partWork);
    console.log(updatePartForm.partSupplice);
    console.log(updatePartForm.partParameter);

    const description=updatePartForm.partDescriptionUpdate;
    const work=updatePartForm.partWorkUpdate;
    const supplice=updatePartForm.partSuppliceUpdate;
    const parameter=updatePartForm.partParameterUpdate;
    if((description!=null)&&(description!="")){
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.workService.updatePart(this.currentPart.id,description,work,supplice,parameter).then(data=>{
        this.getWorkDetails();
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
    console.log(this.routineDescriptionUpdate);
    if ((this.routineDescriptionUpdate!=null) || (this.routineDescriptionUpdate!="") || (this.routineHourUpdate==null)) {
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.workService.updateWorkHeader(this.headerId,1,this.routineDescriptionUpdate,this.routineHourUpdate,this.routineObservationUpdate).then(data=>{
        const resp:any=data;
        if(resp.success){
        this.headerInfo=resp.data;
        this.headerId= this.headerInfo.id;
        console.log("header information");
        console.log(this.headerInfo);
        this.generalAlert("Proceso completado","Proceso completado correctamente!","success");
        this.routineHourUpdate=this.headerInfo.hours;
        this.routineDescriptionUpdate=this.headerInfo.description;
        this.routineObservationUpdate=this.headerInfo.observation;
          this.getWorkDetails();
        }else{
          this.generalAlert("ha ocurrido un herror","Ya existe una rutina con este nombre","error");
        }
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

  get getParts(){
    return this.detailForm.get('parts') as FormArray;
  }

  get checkForm() { return this.detailForm.controls; }

  addPart(){
    console.log(this.indice);
     const control= <FormArray>this.detailForm.controls['parts'];

      let lastvalue=control.at(this.indice).value;
      console.log(lastvalue.part);
        if ((((lastvalue.part)==null))||((lastvalue.part)=="")) {
          this.generalAlert('No se puede agregar','El campo parte debe contener un valor','error')
        } else {
          control.push(this.formBuilder.group({
            part:[]
          }));
          this.indice++;
        }


  }

  get getUpdateParts(){
    return this.updateDetailForm.get('updateparts') as FormArray;
  }

  addUpdatePart(){
     const control= <FormArray>this.updateDetailForm.controls['updateparts'];
     console.log("valor en : "+(this.updateIndice-1)+" es: "+control.at(this.updateIndice-1));
      let lastvalue=control.at(this.updateIndice-1).value;
      console.log(lastvalue.updatepart);
        if ((((lastvalue.updatepart)==null))||((lastvalue.updatepart)=="")) {
          this.generalAlert('No se puede agregar','El campo parte debe contener un valor','error')
        } else {
          control.push(this.formBuilder.group({
            updatepart:[]
          }));
          this.updateIndice++;
        }
  }

  deleteUpdatePart(index:number){
    if (this.updateIndice==0) {
      this.generalAlert('No se puede borrar','debe contener almenos un valor','error');
    } else {
      const control =<FormArray>this.updateDetailForm.controls['updateparts'];
      console.log("valor en : "+ index+" es: "+control.at(index));
      control.removeAt(index);
      this.updateIndice--;
    }
  }

  storageDetail(formValue:any){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(formValue);
    console.log(formValue.system);
    const system=formValue.system;
  
    if((system!=null)&&(system!="")){
    this.workService.storeSystem( this.headerInfo,this.detailForm.get('system').value).then(data=>{
      const resp:any=data;
      console.log(data);
      console.log(resp);
      if (resp.success==1) {
        this.generalAlert('Proceso exitoso','Se ha guardado el detalle correctamente','success');
        this.getWorkDetails();
        this.detailForm.reset();
        document.getElementById('storageDetailHide').click();
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

  currentComponents(idSystem:any){
    console.log(idSystem);
    console.log(idSystem.id);
    this.systemForComponent = idSystem.id
    // document.getElementById('storageDetailHide').click();
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
    this.workService.storeComponent(this.systemForComponent,this.componentForm.get('component').value).then(data=>{
      const resp:any=data;
      console.log(data);
      console.log(resp);
      if (resp.success==1) {
        this.generalAlert('Proceso exitoso','Se ha guardado el detalle correctamente','success');
        console.log(this.systemForComponent);
        //this.getComponent(this.systemForComponent);
        this.getWorkDetails()
        this.componentForm.reset();
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
    console.log(formValue.value.partDescription);
    console.log(formValue.value.partWork);
    console.log(formValue.value.partSupplice);
    console.log(formValue.value.partParameter);

    const description=formValue.value.partDescription;
    const work=formValue.value.partWork;
    const supplice= formValue.value.partSupplice;
    const parameter=formValue.value.partParameter;
  
    if(((description!=null)&&(description!="")) ){
    this.workService.storeParts(this.componentForPart,description,work,supplice,parameter).then(data=>{
      const resp:any=data;
      console.log(data);
      console.log(resp);
      if (resp.success==1) {
        this.generalAlert('Proceso exitoso','Se ha guardado el detalle correctamente','success');
        this.partForm.reset();
        document.getElementById('storagePartHide').click();
        // this.getPart(this.componentForPart);
        this.getWorkDetails();
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


  resetCreateForm(){
    this.detailForm.reset();
    for (let index = this.indice; index > 0; index--) {
      const control =<FormArray>this.detailForm.controls['parts'];
      control.removeAt(index);
      this.indice--;
    }
  }

  deleteWorkDetail(row: any) {
    swal({
      title: 'Estás seguro de eliminar este elemento?',
      type: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Si'

    })
    .then((willDelete) => {
      swal.showLoading();
        if (willDelete.value) {
          this.elementDelete = row;
          console.log(row);
          console.log( this.elementDelete);
          this.workService.deleteWorkDetail(Number(this.elementDelete.id))
          .then(data => {
            const resp: any = data;
            console.log(resp);

            if (resp.success === false) {
              this.generalAlert('Este Detalle presenta problemas','Este Detalle no se puede eliminar','error');
            } else {
              this.generalAlert('Detalle eliminado','Detalle eliminado correctamente','success');
              this.getWorkDetails();
          }
          }).catch(error => {
            console.log(error);
            this.generalAlert('Este Detalle presenta problemas','Este Detalle no se puede eliminar','error');
          });
          console.log(this.elementDelete.id);
        } else {
         // swal('Fail');
        }
      console.log(willDelete);
    });
  }

  showModalUpdate(row:any){
    this.updateIndice=0;
    console.log(row);
    this.currentDetail=row;
    this.updateDetailForm.get('updatesystem').setValue(this.currentDetail.system);
    this.updateDetailForm.get('updatecomment').setValue(this.currentDetail.works);
    let parts=this.currentDetail.part;
    console.log(parts);
    if(parts!=null){
      let partsarray= parts;
      partsarray=partsarray.split('<br><br>');
      const control= <FormArray>this.updateDetailForm.controls['updateparts'];
      if (partsarray[0]!=null) {
        control.removeAt(0);
      }
      partsarray.forEach(part => {
        if (part) {
          control.push(this.formBuilder.group({
            updatepart:[part]
          }));
          this.updateIndice++;
        }
      });
      console.log(partsarray);
    }
    document.getElementById('showmodalbutton').click();
  }

  UpdateWorkDetail(formValue:any){
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    const system=formValue.updatesystem;
  let comment = 'ja'
  let array = 'ja'
    if ((system!=null)&&(system!="")) {
    this.workService.updateWorkDetail(this.currentDetail.id,comment,array,system).then(data=>{
      const resp:any=data;
      console.log(resp);
      if (resp.success==1) {
        this.generalAlert('Proceso exitoso','Se ha guardado el detalle correctamente','success');
        document.getElementById('updateDetailHide').click();
        this.getWorkDetails();
      } else {
        this.generalAlert('No se puede guardar','Debe Completar todos los campos obligatorios','error');
      }

    }).catch(error=>{
      console.log(error);
      this.generalAlert('No se puede guardar','Ha ocurrido un error en la ejecucion','error')
    });
    }else{
      this.generalAlert('No se puede guardar','Debe Completar todos los campos obligatorios','error')
    }
  }

  goAdminRoutines(){
    this.router.navigateByUrl('master/work_dashboard');
  }

}
