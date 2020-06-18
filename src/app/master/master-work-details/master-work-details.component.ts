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
  title1:string;
  hours1:number;
  observation1:string;
  title2:string;
  hours2:number;
  observation2:string;

  detailform: FormGroup;
  updatedetailform: FormGroup;
  componentform: FormGroup;
  updatecomponentform: FormGroup;
  partform: FormGroup;
  updatepartform: FormGroup;

  showButtonUpdated:boolean;
  headerinfo:any;
  submitted = false;
  indice:number=0;
  updateindice:number=0;
  rowsWorkDetails: any;
  elementDelete:any;
  currentdetail:any;
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

  constructor( private workservice: WorkService, private router: Router,  private activatedroute: ActivatedRoute,
    private formbuilder:FormBuilder) {

    this.showButtonUpdated=false;

    //system
    const system = new FormControl('',Validators.required);
   
    this.detailform= new FormGroup({
      system:system
    });

    const updatesystem = new FormControl('',Validators.required);

    this.updatedetailform= new FormGroup({
      updatesystem: updatesystem
    });

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

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(data=>{
       this.name=data.get('name');
      console.log(this.name);
      if (this.name) {
        this.hours1=0;
        this.title1=this.name;
        this.observation1="nada";
      }
    });
  }

  ngAfterContentInit() {
    if (this.name) {
      document.getElementById('storeheaderbutton2').click();
    }
  }
  registerheader(){
    console.log(this.title1);
    if ((this.title1!=null) || (this.title1!="") || (this.hours1==null)) {
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.workservice.storeWorkHeader(1,this.title1,this.hours1,this.observation1).then(data=>{
        const resp:any=data;
        this.headerinfo=resp.data;
        console.log("header information");
        console.log(this.headerinfo)
        swal.close();
        this.showButtonUpdated=true;
        this.hours2=this.headerinfo.hours;
        this.title2=this.headerinfo.description;
        this.observation2=this.headerinfo.observation;
        this.getWorkDetails();
      }).catch(err=>{
        this.showButtonUpdated=false;
        console.log(err);
        this.generalAlert("ha ocurrido un herror","ocurrio un error durante la ecucion","error");
      });
    }else{
      this.showButtonUpdated=false;
      this.generalAlert("ha ocurrido un herror","complete todos los campos obligatorios","error");
    }
  }

  getWorkDetails(){
    this.workservice.getSystem(this.headerinfo.id).then(data=>{
      const resp:any=data;
      console.log('carga de detalles');
      console.log(this.headerinfo.id);
      console.log(resp);
      if (resp.success==true) {
        this.maintenanceSystem = resp.data;

        for (let system of this.maintenanceSystem){
          this.getComponent(system.id);
        }
      } else {
        this.generalAlert("ha ocurrido un error","ha ocurrido un error al mostrar la informacion","error");
      }
    }).catch(error=>{
      console.log(error);
      this.generalAlert("ha ocurrido un error","ha ocurrido un error al mostrar la informacion","error");
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

 

  updateSystem(system: any){
  console.log(system)
    this.currentSystem = system;
    console.log( this.currentSystem );
    this.updatedetailform.get('updatesystem').setValue(this.currentSystem.system_description);
   document.getElementById( 'showUpdateSystem').click();

  }
  

  sendUpdateSystem(system: any){
    if ((system.updatesystem!=null)&&(system.updatesystem!="")) {
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.workservice.updateSystem(this.currentSystem.id,system.updatesystem).then(data=>{
        const resp:any=data;
        this.headerinfo=resp.data;
        console.log("header information");
        console.log(this.headerinfo);
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
          this.workservice.deleteSystems(Number(this.elementDelete.id))
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
    this.updatedetailform.get('updatesystem').setValue(this.currentSystem.description);
   document.getElementById( 'showUpdateSystem').click();

  }

  sendUpdateComponent(system: any){
    if ((system.updatecomponent!=null)&&(system.updatecomponent!="")) {
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.workservice.updateSystem(this.currentSystem.id,system.updatecomponent).then(data=>{
        const resp:any=data;
        this.headerinfo=resp.data;
        console.log("header information");
        console.log(this.headerinfo);
        this.generalAlert("Proceso completado","Proceso completado correctamente!","success");
        document.getElementById( 'updateComponentHide').click();
        this.getComponent(this.currentSystem.system_routine_id);
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

  generalAlert(title:string,message:string,type:any){
    swal({
      title:title,
      text: message,
      type: type
     });
  }

  get getParts(){
    return this.detailform.get('parts') as FormArray;
  }

  get checkForm() { return this.detailform.controls; }

  addPart(){
    console.log(this.indice);
     const control= <FormArray>this.detailform.controls['parts'];

      let lastvalue=control.at(this.indice).value;
      console.log(lastvalue.part);
        if ((((lastvalue.part)==null))||((lastvalue.part)=="")) {
          this.generalAlert('No se puede agregar','El campo parte debe contener un valor','error')
        } else {
          control.push(this.formbuilder.group({
            part:[]
          }));
          this.indice++;
        }


  }

  get getUpdateParts(){
    return this.updatedetailform.get('updateparts') as FormArray;
  }

  addUpdatePart(){
     const control= <FormArray>this.updatedetailform.controls['updateparts'];
     console.log("valor en : "+(this.updateindice-1)+" es: "+control.at(this.updateindice-1));
      let lastvalue=control.at(this.updateindice-1).value;
      console.log(lastvalue.updatepart);
        if ((((lastvalue.updatepart)==null))||((lastvalue.updatepart)=="")) {
          this.generalAlert('No se puede agregar','El campo parte debe contener un valor','error')
        } else {
          control.push(this.formbuilder.group({
            updatepart:[]
          }));
          this.updateindice++;
        }
  }

  deleteUpdatePart(index:number){
    if (this.updateindice==0) {
      this.generalAlert('No se puede borrar','debe contener almenos un valor','error');
    } else {
      const control =<FormArray>this.updatedetailform.controls['updateparts'];
      console.log("valor en : "+ index+" es: "+control.at(index));
      control.removeAt(index);
      this.updateindice--;
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
    this.workservice.storeSystem(this.headerinfo.id,this.detailform.get('system').value).then(data=>{
      const resp:any=data;
      console.log(data);
      console.log(resp);
      if (resp.success==1) {
        this.generalAlert('Proceso exitoso','Se ha guardado el detalle correctamente','success');
        this.getWorkDetails();
        this.detailform.reset();
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
    this.workservice.storeComponent(this.systemForComponent,this.componentform.get('component').value).then(data=>{
      const resp:any=data;
      console.log(data);
      console.log(resp);
      if (resp.success==1) {
        this.generalAlert('Proceso exitoso','Se ha guardado el detalle correctamente','success');
        this.getComponent(this.systemForComponent);
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


  resetCreateForm(){
    this.detailform.reset();
    for (let index = this.indice; index > 0; index--) {
      const control =<FormArray>this.detailform.controls['parts'];
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
          this.workservice.deleteWorkDetail(Number(this.elementDelete.id))
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
    this.updateindice=0;
    console.log(row);
    this.currentdetail=row;
    this.updatedetailform.get('updatesystem').setValue(this.currentdetail.system);
    this.updatedetailform.get('updatecomment').setValue(this.currentdetail.works);
    let parts=this.currentdetail.part;
    console.log(parts);
    if(parts!=null){
      let partsarray= parts;
      partsarray=partsarray.split('<br><br>');
      const control= <FormArray>this.updatedetailform.controls['updateparts'];
      if (partsarray[0]!=null) {
        control.removeAt(0);
      }
      partsarray.forEach(part => {
        if (part) {
          control.push(this.formbuilder.group({
            updatepart:[part]
          }));
          this.updateindice++;
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
    this.workservice.updateWorkDetail(this.currentdetail.id,comment,array,system).then(data=>{
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
