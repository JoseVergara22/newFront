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

  showButtonUpdated:boolean;
  detailform: FormGroup;
  updatedetailform: FormGroup;
  headerinfo:any;
  submitted = false;
  indice:number=0;
  updateindice:number=0;
  rowsWorkDetails: any;
  elementDelete:any;
  currentdetail:any;
  name: any;
  constructor(
    private workservice: WorkService,
    private router: Router,
    private activatedroute: ActivatedRoute,
    private formbuilder:FormBuilder
  ) {

    this.showButtonUpdated=false;
    const system = new FormControl('',Validators.required);
    const work = new FormControl('',Validators.required);
    const comment = new FormControl('');
    this.detailform= this.formbuilder.group({
      system:system,
      parts:this.formbuilder.array([
        this.formbuilder.group({
          part:['']
        })
      ]),
      work:work,
      comment:comment
    });


    const updatesystem = new FormControl('',Validators.required);
    const updatework = new FormControl('',Validators.required);
    const updatecomment = new FormControl('');
    this.updatedetailform= this.formbuilder.group({
      updatesystem:updatesystem,
      updateparts:this.formbuilder.array([
        this.formbuilder.group({
          updatepart:['']
        })
      ]),
      updatework:updatework,
      updatecomment:updatecomment
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
    this.workservice.getWorksDetails(this.headerinfo.id).then(data=>{
      const resp:any=data;
      console.log('carga de detalles');
      console.log(this.headerinfo.id);
      console.log(resp);
      if (resp.success==true) {
        const details=resp.data.routine_works;
        console.log(details);
        this.rowsWorkDetails=details;
      } else {
        this.generalAlert("ha ocurrido un error","ha ocurrido un error al mostrar la informacion","error");
      }
    }).catch(error=>{
      console.log(error);
      this.generalAlert("ha ocurrido un error","ha ocurrido un error al mostrar la informacion","error");
    });
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

  deletePart(index:number){
    if (this.indice==0) {
      this.generalAlert('No se puede borrar','debe contener almenos un valor','error')
    } else {
      const control =<FormArray>this.detailform.controls['parts'];
      control.removeAt(index);
      this.indice--;
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
    const parts=formValue.parts;
    const system=formValue.system;
    const comment=formValue.comment;
    console.log(system);
    console.log(comment);
    console.log("parte");
    console.log(parts[0].part);
    if ((parts[0].part!=null)&&(parts[0].part!="")&&(comment!=null)&&(comment!="")&&(system!=null)&&(system!="")) {
      console.log((parts));
    let array=""
    parts.forEach(part => {
      if(part.part!=null){
        array+=part.part+"<br><br>";
      }
    });
    console.log(array);
    this.workservice.storeWorkDetail(this.headerinfo.id,comment,array,system).then(data=>{
      const resp:any=data;
      console.log(data);
      console.log(resp);
      if (resp.success==1) {
        this.generalAlert('Proceso exitoso','Se ha guardado el detalle correctamente','success');
        this.getWorkDetails();
        this.resetCreateForm();
        document.getElementById('storageDetailHide').click();
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
    const parts=formValue.updateparts;
    const system=formValue.updatesystem;
    const comment=formValue.updatecomment;
    console.log(system);
    console.log(comment);
    console.log("parte");
    console.log(parts[0].updatepart);
    if ((parts[0].updatepart!=null)&&(parts[0].updatepart!="")&&(comment!=null)&&(comment!="")&&(system!=null)&&(system!="")) {
      console.log((parts));
      let array=""
      parts.forEach(part => {
        if(part.updatepart!=null){
          array+=part.updatepart+"<br><br>";
        }
    });
    console.log(array);
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
