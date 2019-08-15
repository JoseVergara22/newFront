import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NewService } from '../../master-services/new/new.service';

import { RestService } from '../../master-services/Rest/rest.service';
import { UploadService } from '../../master-services/services/upload.service';
import { UUID } from 'angular2-uuid';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-master-create-slider',
  templateUrl: './master-create-slider.component.html',
  styleUrls: ['./master-create-slider.component.scss']
})
export class MasterCreateSliderComponent implements OnInit {

  imgURL: any;
  public imagePath;
  public newImagePath;
  myForm: FormGroup;
  public message: string;
  public newMessage: string;
  submitted = false;
  newinfo :any;
  imageinfo:any;
  s3info:any;
  selectedFiles: FileList;
  newSelectedFiles: FileList;
  rowsClientN: any;
  rowsTempN: any;
  rowStaticN: any;
  rowsClientI: any;
  rowsTempI: any;
  rowStaticI: any;
  currentNew:any;
  myFormUpdate: FormGroup;
  elementDelete: any;
  lastimage:any;
  enabledUpdated = false;
  newImgURL: any;
  constructor(private newsevice: NewService, 
              private router: Router,
              private uploadService: UploadService) {
    this.loadingData();

    const title = new FormControl('', Validators.required);
    const subtitle = new FormControl('', Validators.required);
    const image = new FormControl('', Validators.required);
    const active = new FormControl(true);
    const description = new FormControl('', Validators.required);

    this.myForm = new FormGroup({
      title: title,
      subtitle: subtitle,
      description: description,
      image:image,
      active:active
    });

    const titleUpdate = new FormControl('', Validators.required);
    const subtitleUpdate = new FormControl('', Validators.required);
    const imageUpdate = new FormControl();
    const activeUpdate = new FormControl(true);
    const descriptionUpdate = new FormControl('', Validators.required);


    this.myFormUpdate = new FormGroup({
      titleUpdate: titleUpdate,
      subtitleUpdate: subtitleUpdate,
      descriptionUpdate: descriptionUpdate,
      imageUpdate:imageUpdate,
      activeUpdate:activeUpdate
    });

   }

  ngOnInit() {
  }
  
  ngAfterContentInit (){
  }

  
  loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.newsevice.getNews().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.rowsClientN = resp.data;
      this.rowStaticN =  resp.data;
      this.rowsTempN = resp.data;
      console.log( this.rowsClientN);

      this.newsevice.getNewsImages().then(data => {
        const resp: any = data;
        console.log(data);
        swal.close();
        this.rowsClientI = resp.data;
        this.rowStaticI =  resp.data;
        this.rowsTempI = resp.data;
        console.log( this.rowsClientI);
      }).catch(error => {
        swal.close();
        console.log(error);
        swal({
          type: 'error',
          title: 'oops a currido un error',
          text:'se ha presentado un error al cargar la informacion',
          allowOutsideClick: false
        });
      });

    }).catch(error => {
      swal.close();
      console.log(error);
      swal({
        type: 'error',
        title: 'oops a currido un error',
        text:'se ha presentado un error al cargar la informacion',
        allowOutsideClick: false
      });
    });
   }

  async upload() {
    const file = this.selectedFiles.item(0);
    const uuid = UUID.UUID();
    console.log(uuid);
    console.log(file.name + '' + file.type);
    const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
    console.log(extension);
    this.uploadService.uploadFile(file).then(res=>{
      console.log('s3info'+JSON.stringify(res));
      this.s3info=res;
      console.log(this.s3info);
      this.insertNew();
    }).catch(error=> {
      console.log(error);
      swal({
        type: 'error',
        title: 'oops a currido un error',
        text:'se ha presentado un error al subir la imagen',
        allowOutsideClick: false
      });
    });
    }

    insertNew(){
      console.log(localStorage.getItem('token'));
      console.log(
        'title:'+this.myForm.controls.title.value,'subtitle:'+this.myForm.controls.subtitle.value,'text:'+this.myForm.controls.description.value,'status:'+this.myForm.controls.active.value);
       console.log(localStorage.getItem('token'));
      this.newsevice.createNew(this.myForm.controls.title.value,this.myForm.controls.subtitle.value,this.myForm.controls.description.value,this.myForm.controls.active.value)
      .then(resp=>{
        this.newinfo= resp;
        if(this.newinfo.success !=true ){
          console.log(resp);
          console.log('error al insertar');
          swal.close();
          swal({
            type: 'error',
            title: 'oops a currido un error',
            text:'se ha presentado un error al guardar la noticia',
            allowOutsideClick: false
          });
        }else{
          console.log(resp);
          console.log('se inserto correctamente');
          this.insertNewImage();
        }
      }).catch(error=> {
        console.log(error);
        swal.close();
        swal({
          type: 'error',
          title: 'oops a currido un error',
          text:'se ha presentado un error al guardar la noticia',
          allowOutsideClick: false
        });
      });
    }

    insertNewImage(){
      console.log(
        'id_new:'+this.newinfo.data.id,'url:'+this.s3info.Location,'name:'+this.s3info.ETag,
        'bucked:'+this.s3info.Bucket,'description:'+this.s3info.Location);
       console.log(localStorage.getItem('token'));
      this.newsevice.createNewImage(this.newinfo.data.id,this.s3info.Location,this.s3info.ETag,this.s3info.Bucket,this.s3info.Location)
      .then(resp=>{
        this.imageinfo=resp;
        if (this.imageinfo.success==true) {
          console.log(resp);
          console.log('se inserto correctamente');
          swal.close();
          swal({
            type: 'success',
            title: 'Se ha guardado la noticia',
            text:'la noticia ha guardado correctamente',
            allowOutsideClick: false
          });
        } else {
          console.log(resp);
          console.log('ocurrio un error');
          swal.close();
          swal({
            type: 'error',
            title: 'oops a currido un error',
            text:'se ha presentado un error al guardar la imagen',
            allowOutsideClick: false
          });
        }
      }).catch(error=> {
        console.log(error);
        swal.close();
        swal({
          type: 'error',
          title: 'oops a currido un error',
          text:'se ha presentado un error al guardar la imagen',
          allowOutsideClick: false
        });
      });
    }

  preview(files,event) {
    if (files.length === 0) {
      return console.log('jaja');
    }
  
  
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
  }

  newPreview(files,event) {
    if (files.length === 0) {
      return console.log('no image');
    }
  
  
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.newMessage = 'Only images are supported.';
      return;
    }

    this.newSelectedFiles = event.target.files;
    console.log(this.newSelectedFiles);

    const reader = new FileReader();
    this.newImagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.newImgURL = reader.result;
    }
  }

  get checkForm() { return this.myForm.controls; }

  createNew() {
    swal.showLoading();
    this.submitted = true;
    console.log(this.myForm.controls);
    if ( !this.myForm.invalid) {
      this.upload();
     } else {
      document.getElementById( 'updateNewHide').click();
      swal.close();
      swal({
        title: 'alerta',
        text:'complete los campos sombreados',
        allowOutsideClick: false
      });
     }
   }
   
   deleteNew(row: any) {
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
           this.newsevice.deleteNew(Number(this.elementDelete.id))
           .then(data => {
             swal.showLoading();
             const resp: any = data;
             console.log(resp);
 
             if (resp.success === false) {
               swal({
                 title: 'Esta noticia presenta problemas',
                 text: 'Esta noticia no se puede eliminar',
                 type: 'error'
                });
             } else {
            this.loadingData();
            swal({
             title: 'noticia eliminada',
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
 

   get checkFormUpdate() { return this.myFormUpdate.controls; }

   showUpdateNew(row) {
    this.newImgURL=null;
    console.log(row);
    this.currentNew = row;
    this.lastimage=this.currentNew.image_url;
    console.log(this.lastimage);
    console.log( this.currentNew );
    this.myFormUpdate.get('titleUpdate').setValue(row.title);
    this.myFormUpdate.get('subtitleUpdate').setValue(row.subtitle);
    this.myFormUpdate.get('descriptionUpdate').setValue(row.text);
    this.myFormUpdate.get('imageUpdate').setValue(row.image);
    this.myFormUpdate.get('activeUpdate').setValue(row.status);
    if (this.currentNew.status === '0') {
      this.enabledUpdated = true;
    } else {
      this.enabledUpdated = false;
    }
  
    document.getElementById( 'uploadNew').click();
  
  }

  updateNew() {
    console.log(this.myFormUpdate.get('descriptionUpdate'));
    console.log(localStorage.getItem('token'));
    this.submitted = true;
   if ( !this.myFormUpdate.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let statusTemp = 1;
    if (this.enabledUpdated === true) {
      statusTemp = 0;
    } else {
      statusTemp = 1;
    }
    console.log('id'+this.currentNew.id,
    'titulo:'+this.myFormUpdate.controls.titleUpdate.value,
    'subtitulo:'+this.myFormUpdate.controls.subtitleUpdate.value,
    'text:'+this.myFormUpdate.controls.descriptionUpdate.value,
    'status:'+this.myFormUpdate.controls.activeUpdate.value);
    this.newsevice.updateNew(Number(this.currentNew.id), this.myFormUpdate.controls.titleUpdate.value,this.myFormUpdate.controls.subtitleUpdate.value,this.myFormUpdate.controls.descriptionUpdate.value,this.myFormUpdate.controls.activeUpdate.value)
    .then(data => {

      if (this.newImgURL==null) {

        console.log('entra a actualizar imagen');
        const resp: any = data;
        console.log(resp);
        if (resp.success === false) {
          document.getElementById( 'updateNewHide').click();
          swal.close();
          swal({
            title: 'oops ocurrio un error al actualizar',
            text: 'Esta noticia no se puede actualizar',
            type: 'error'
           });
        } else { 
          document.getElementById( 'updateNewHide').click();
          swal.close();
       // this.router.navigateByUrl('master/registerBrand');
       document.getElementById( 'updateNewHide').click();
       swal({
        title: 'Noticia actualizada',
        type: 'success'
       });
        this.router.navigateByUrl('createSlider');
      }

      } else {

        this.updateImage();
      }

    }).catch(error => {
      document.getElementById( 'updateNewHide').click();
      swal.close();
      console.log(error);
      swal({
        title: 'oops ocurrio un error al actualizar',
        text: 'Esta noticia no se puede actualizar',
        type: 'error'
       });
    });
    }else{
      swal({
        title: 'Debe actualizar por lo menos un campo',
        type: 'error'
       });
    }
  }

  updateImagedb(){
    console.log(
      'id_new:'+this.currentNew.id,'url:'+this.s3info.Location,'name:'+this.s3info.ETag,
      'bucked:'+this.s3info.Bucket,'description:'+this.s3info.Location);
     console.log(localStorage.getItem('token'));
    this.newsevice.updateImage(this.currentNew.image_id,this.currentNew.id,this.s3info.Location,this.s3info.ETag,this.s3info.Bucket,this.s3info.Location)
    .then(resp=>{
      this.imageinfo=resp;
      if (this.imageinfo.success==true) {
        console.log(resp);
        console.log('se inserto correctamente');
        document.getElementById( 'updateNewHide').click();
        swal.close();
        swal({
          type: 'success',
          title: 'Se ha guardado la noticia',
          text:'la noticia ha guardado correctamente',
          allowOutsideClick: false
        }).then((willRefresh) => {
          this.router.navigateByUrl('createSlider');
        });
      } else {
        console.log(resp);
        document.getElementById( 'updateNewHide').click();
        console.log('ocurrio un error');
        swal.close();
        swal({
          type: 'error',
          title: 'oops a currido un error',
          text:'se ha presentado un error al guardar la imagen',
          allowOutsideClick: false
        });
      }
    }).catch(error=> {
      console.log(error);
      document.getElementById( 'updateNewHide').click();
      swal.close();
      swal({
        type: 'error',
        title: 'oops a currido un error',
        text:'se ha presentado un error al guardar la imagen',
        allowOutsideClick: false
      });
    });
  }

  async updateImage() {
    const file = this.newSelectedFiles.item(0);
    const uuid = UUID.UUID();
    console.log(uuid);
    console.log(file.name + '' + file.type);
    const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
    console.log(extension);
    this.uploadService.uploadFile(file).then(res=>{
      console.log('s3info'+JSON.stringify(res));
      this.s3info=res;
      console.log(this.s3info);
      this.updateImagedb();
    }).catch(error=> {
      console.log(error);
      swal({
        type: 'error',
        title: 'oops a currido un error',
        text:'se ha presentado un error al subir la imagen',
        allowOutsideClick: false
      });
    });
    }


}
