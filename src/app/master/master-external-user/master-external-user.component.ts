import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import { UserService } from '../../master-services/User/user.service';
import { RestService } from '../../master-services/Rest/rest.service';
import swal from 'sweetalert2';
import { UserInternalInterface } from '../../master-models/user-internal';
import { Router } from '@angular/router';

// Esta interfaz es para listar las sedes
interface UserOfficesInterface {
  idCustomer: number;
  id: number;
  officeName: string;
  status: boolean;
}

interface UserOfficesInterfaceUpdate {
  id: number;
  officeName: string;
  status: boolean;
}

 this.officesTemp = {
        id: 1,
        officeName : 'Medellin',
        status: true
       };


// Esta interfaz es para llevar rastreo de relaciones
interface UserOfficesClienteInterface {
  idClient?: number;
  idBranchs?: string;
}

interface regionalSelectInterface {// item para mostrar selccionados
  id?: number;
  code?: string,
  description?: string;
  cheked?: boolean;
}

@Component({
  selector: 'app-master-external-user',
  templateUrl: './master-external-user.component.html',
  styleUrls: ['./master-external-user.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterExternalUserComponent implements OnInit {


  myForm: FormGroup;
  myUpdateForm: FormGroup;
  mynumberForm: FormGroup;
  mytooltipForm: FormGroup;
  checkdropForm: FormGroup;
  loading: boolean;
  name: string;
  a: 'aaa';
  load = true;
  errorProfile = false;
  userInternal: UserInternalInterface;
  officesUpdated: Array <UserOfficesInterface> = [];
  userOfficeRelationShips: Array <UserOfficesInterface> = []; // Enfocado a las suscursales
  clientOfficeRelationShips: Array <UserOfficesClienteInterface> = []; // Enfocado a los clientes y sedes
  clientOfficeRelationShip: UserOfficesClienteInterface;
  clientOfficeRelationShipUpdate: UserOfficesClienteInterface;
  officesTemp: UserOfficesInterface;
  officesTempUpdate:UserOfficesInterfaceUpdate;
  userOfficeRelationShipsUpdate: Array <UserOfficesInterfaceUpdate> = [];
  submitted = false;
  submittedUpload = false;
  rowsUser: any;
  currentUser: any;
  elementDelete:  any;
  enabledUpdated = true;
  change = true;
  selectedProfileId = 0;
  selectedProfileIdUpdate = 0;
  showButtonUpdated = 0;
  customers: any;
  selectedBusinessId: any = 0;
  customerOffices: any;
  customerOfficesUpdate: any;
  idBranchOffices = [1];
  idBranchOfficesUpdate = [1];
  idUserBranchOffice : any;
  userId;
  rowsClient: any;
  currentCustomer: any;
  nameCustomer: any;
  statusTempUpdate;
  currentCustomerUpdated;

  checkAllRegional = false;
  regional = [];
  regionals: Array <regionalSelectInterface> = [];
  itemRegional:regionalSelectInterface;
  rowsRegionals: any;
  rowsRegional: any;
  selectRegional:  Array <regionalSelectInterface> = [];
  valor: any;
  regionalCustomer = []; 

  constructor(private userService: UserService, private router: Router, private restService: RestService) {
    this.loading = true;
    this. loadingData();
    this.getUser();
    const name = new FormControl('', Validators.required);
    const lastname = new FormControl('', Validators.required);
    const username = new FormControl('', Validators.required);
    const cellphone = new FormControl('');
    const telephone = new FormControl('');
    const password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    // const identification = new FormControl('', Validators.required);
    const email = new FormControl('', [Validators.required, Validators.email]);
    const profile = new FormControl('', Validators.required);
    const rpassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);
    this.myForm = new FormGroup({
      name: name,
      lastname: lastname,
      username: username,
      cellphone: cellphone,
      telephone: telephone,
      email: email,
      password: password,
      rpassword: rpassword,
      // identification: identification,
      profile: profile
    });

    const updatename = new FormControl('', Validators.required);
    const updatelastname = new FormControl('', Validators.required);
    const updateusername = new FormControl('', Validators.required);
    const updatecellphone = new FormControl('');
    const updatetelephone = new FormControl('');
    const updateemail = new FormControl('', [Validators.required, Validators.email]);
    const updateprofile = new FormControl('', Validators.required);
    this.myUpdateForm = new FormGroup({
       updatename: updatename,
       updatelastname: updatelastname,
       updateusername: updateusername,
       updatecellphone: updatecellphone,
       updatetelephone: updatetelephone,
       updateemail: updateemail,
       updateprofile: updateprofile
    });

   /* if (this.load) {
      swal({
        title: 'Sweet!',
        allowOutsideClick: false
      });
      swal.showLoading();
    }

    setTimeout(() => {
      this.load = false;
      swal.close();
      }, 10000);
    console.log('Importante verificar ');

    this.userService.createUser().then(data => {
    const resp = data;
     console.log(resp);
    });

*/
// this.getRegionals();
  }


  onChangeActive(check: any) {
    this.change = check;
    this.enabledUpdated = check;
    console.log(check);
  }

  onChangeActiveUpdated(check: any) {
    this.enabledUpdated = check;
    console.log(check);
  }

  ngOnInit() {
  }

  getUser() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.userService.getUsers().then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title:'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
         });
      } else {
        console.log(data);
        swal.close();
        this.rowsUser = resp.data;
        console.log( this.rowsUser);
        this.getRegionals();
    }
    }).catch(error => {
      swal.close();
      swal({
        title:'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
       });
      console.log(error);
    });
  }

  loadingData() {

    this.restService.getCustomer().then(data => {
      const resp: any = data;
      console.log('epa');
      console.log(data);
      this.customers = resp.data;
      swal.close();
    }).catch(error => {
      console.log(error);
    });
 }


  sendUser() {
    this.submitted = true;
   if ( !this.myForm.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.errorProfile = false;

    let active = 0;

   if(  this.change===false){
    active=1;
   }

    this.userService.createUserInternal(this.myForm.get('name').value,
    this.myForm.get('lastname').value,
    this.myForm.get('name').value + ' ' + this.myForm.get('lastname').value,
    this.myForm.get('username').value,
    this.myForm.get('cellphone').value,
    this.myForm.get('telephone').value,
    this.myForm.get('password').value,
    this.myForm.get('rpassword').value,
    this.myForm.get('email').value,
    this.myForm.get('profile').value,
    active).then(data => {
    console.log(data);
      const resp: any = data;
      console.log('resppppppppp' + JSON.stringify(resp));
      if (resp.error) {
        let msg  = '';
      if ( resp.error.message === 'The username already exists.') {
       msg = 'El usuario ya existe';
      } else {
        console.log('Falla al crear-----  '+resp.error.message)
        msg = 'El correo electrónico ya existe';
      }
        swal({
          title: msg,
          text: 'Este usuario no se puede registrar',
          type: 'error'
         });
      } else {
     swal({
      title: 'Usuario agregado',
      type: 'success'
     }).then( varAlert => {
      // this.getUser();

    console.log(data);
    this.currentUser = data;
    this.showButtonUpdated = 1;

    this.myUpdateForm.get('updatename').setValue(this.myForm.get('name').value);
    this.myUpdateForm.get('updatelastname').setValue(this.myForm.get('lastname').value);
    this.myUpdateForm.get('updateusername').setValue(this.myForm.get('username').value);
    this.myUpdateForm.get('updatecellphone').setValue(this.myForm.get('cellphone').value);
    this.myUpdateForm.get('updatetelephone').setValue(this.myForm.get('telephone').value);
    this.myUpdateForm.get('updateemail').setValue(this.myForm.get('email').value);
    this.selectedProfileIdUpdate = Number(this.myForm.get('profile').value);

    this.getRegionals();
     });
    // this.router.navigateByUrl('master');
    }
    }).catch(error => {
      console.log(error);
    });
    } else {
      this.errorProfile = true;
    }
  }

  updateUser() {
    console.log('info');
    console.log(
      this.myUpdateForm.get('updatename').value,
      this.myUpdateForm.get('updatelastname').value,
      this.myUpdateForm.get('updatename').value + ' ' + this.myUpdateForm.get('updatelastname').value,
      this.myUpdateForm.get('updateusername').value,
      this.myUpdateForm.get('updatecellphone').value,
      this.myUpdateForm.get('updatetelephone').value,
      this.myUpdateForm.get('updateemail').value,
      this.currentUser.data.id,
      this.myUpdateForm.get('updateprofile').value);
      this.submittedUpload = true;
   if ( !this.myUpdateForm.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.errorProfile = false;

    let active = 0;

   if( this.enabledUpdated===false){
    active=1;
   }

    this.userService.updateUser(
    this.myUpdateForm.get('updatename').value,
    this.myUpdateForm.get('updatelastname').value,
    this.myUpdateForm.get('updatename').value + ' ' + this.myUpdateForm.get('updatelastname').value,
    this.myUpdateForm.get('updateusername').value,
    this.myUpdateForm.get('updatecellphone').value,
    this.myUpdateForm.get('updatetelephone').value,
    this.myUpdateForm.get('updateemail').value,
    this.currentUser.data.id,
    this.myUpdateForm.get('updateprofile').value,
    active).then(data => {
      const resp: any = data;
      console.log(resp);
      if (resp.error) {
        let msg  = '';
        console.log( resp.error);
      if ( resp.error.message == 'The username already exists.') {
       msg = 'El usuario ya existe';
      }
       if(resp.error.message =='The email already exists.') {
        msg = 'El correo electrónico ya existe';
      }else{
        msg = 'ocurrio un error';
      }
        swal({
          title: msg,
          text: 'Este usuario no se puede actualizar',
          type: 'error'
         });
      } else {
     swal({
      title: 'Usuario actualizado',
      type: 'success'
     }).then(data=>{
      this.getUser();
      this.getRegionals();
     });
    // this.router.navigateByUrl('master');
    }
    }).catch(error => {
      console.log(error);
    });
    } else {
      this.errorProfile = true;
    }
  }

  getRegionals(){
    this.restService.getRegional().then(data => {
        const resp: any = data;
        console.log(resp);
        console.log('OEOEOEOEOEEO');
        console.log('---------------------------');
        this.rowsRegional = resp.data;

        console.log('información de regional');
        console.log( this.rowsRegional);
        console.log( this.rowsRegional.length);
        console.log( this.currentUser);
        this.getRegionalId(this.currentUser.data.id);
      }).catch(error => {
        console.log(error);
      });
}

  
getRegionalId( id: number){
  this.userService.getRegionalId(id).then(data => {
    const resp: any = data;
    console.log(resp);
    console.log('OEOEOEOEOEEO');
    console.log(resp.data_userRegionals);
    console.log('----------------data_customerRegionals-----------');
    this.rowsRegionals = resp.data_userRegionals;
    this.regional=[];

    
    console.log(this.rowsRegionals);
    console.log(this.rowsRegional);
    this.rowsRegional.forEach((item)=>{
      console.log(item);
      this.itemRegional={
        id: item.id,
        code: item.code,
        description: item.description,
        cheked:false
      }
      this.regionals.push(this.itemRegional);
    });
// rowsRegionals  Son las regionales del customer
// rowsRegional  Son las regionales del creadas
    
    this.rowsRegionals.forEach((value)=>{
      console.log(value.regional_id);
      console.log(value);
      let index = this.regionals.indexOf(this.regionals.find(x => x.id == value.regional_id));
      console.log(index);
      if(index!=-1){

        this.itemRegional={
          id: this.regionals[index].id,
          code: this.regionals[index].code,
          description: this.regionals[index].description,
          cheked: true
        }

        this.regionals.splice(index, 1);
        this.regionals.push(this.itemRegional);
      }
      console.log(this.regionals);
      });
        console.log(this.regional);
    });
  }


  finalRegional(){
    this.selectRegional=[];
    if(this.showButtonUpdated === 0){
      swal({
        title: 'Falla en la asignación',
        text: 'Debes crear un cliente',
        type: 'error'
       });
    }else{
      
    for (let i = 0; i < this.regionals.length; i++){
      console.log('lo encontre'+i);
      if(this.regionals[i].cheked){
        console.log(this.regionals[i].cheked);
        this.selectRegional.push(this.regionals[i]);
      }
    }
    let regionalSelec = '';
    console.log(this.currentUser);
     regionalSelec = this.currentUser.data.id;
    //  console.log(this.currentCustomerId);
  
    for (let i = 0; i < this.selectRegional.length; i++){
      regionalSelec=regionalSelec + '@' + this.selectRegional[i].id; 
    }
    console.log(this.selectRegional);
    console.log(regionalSelec);
  
    if(regionalSelec != ''){
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
   
    this.userService.technicianRegionalSelect(regionalSelec).then(data => {
      const resp: any = data;
      console.log('envio');
      console.log(resp);
      if (resp.success === false) {
        swal({
          title: 'Falla en la asignación',
          text: 'No se pudo asignar la sucursal',
          type: 'error'
         });
        }else{
          swal({
            title: 'Sucursales guardadas',
            type: 'success'
           });
        }
      }).catch(error => {
        console.log(error);
        swal.close();
        swal({
          title: 'Falla en la asignación',
          text: 'No se pudo asignar la sucursal',
          type: 'error'
         });
      });
        
      }else{
       swal({
          title: 'Se presentó un problema',
          text: 'Favor selecionar al menos una opcion.',
          type: 'error',
        });
      }
    }
  
  }

  partChangeActive(event:any, item:any){
    
    console.log('valor para editar');
    console.log(event);
    console.log(item);
    console.log(item.id);

    for (let i = 0; i < this.regionals.length; i++){
     if (this.regionals[i].id == item.id){
     console.log(item);
     console.log('lo encontre'+i);
       this.regionals[i].cheked=event.target.checked;
       console.log(this.regionals[i]);
     }
   }
  }

  checkUncheckAllPart(event:any){

    this.checkAllRegional=event.target.checked;    
      for (let i = 0; i < this.regionals.length; i++){
        console.log('lo encontre'+i);
          this.regionals[i].cheked=event.target.checked;
      }
    }

  get checkForm() { return this.myForm.controls; }

  get checkUpdateForm() { return this.myUpdateForm.controls; }

  public saveEmail(email: string): void {
   console.log('');
  }

  public handleRefusalToSetEmail(dismissMethod: string): void {
    // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
    // ... do something
  }

  openAjaxSwal() {
    swal({
      title: 'Estás seguro?',
     // text: 'Once deleted, you will not be able to recover this imaginary file!',
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    })
    .then((willDelete) => {
        if (willDelete.value) {
             swal(this.a);
             this.kilo();
        } else {
          swal('Fail');
        }
      console.log(willDelete);
    });



  }

  changeCheckUpdate(item: any) {

    console.log(item);
  }

  deleteUser(row: any) {
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
          this.userService.deleteUsers(Number(this.elementDelete.id))
          .then(data => {
            swal.showLoading();
            const resp: any = data;
            console.log(resp);

            if (resp.success === false) {
              swal({
                title: 'Este Usuario presenta problemas',
                text: 'Este Usuario no se puede eliminar',
                type: 'error'
               });
            } else {
           swal({
            title: 'Usuario eliminada',
            type: 'success'
           }).then( data => {
            this.getUser();
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

  showUpdateUser(row) {
    console.log(row);
    this.currentUser = row;
    console.log( this.currentUser );
    this.myUpdateForm.get('updatename').setValue(row.first_name);
    this.myUpdateForm.get('updatelastname').setValue(row.last_name);
    this.myUpdateForm.get('updateusername').setValue(row.username);
    this.myUpdateForm.get('updatecellphone').setValue(row.cellphone);
    this.myUpdateForm.get('updatetelephone').setValue(row.telephone);
    this.myUpdateForm.get('updateemail').setValue(row.email);
    this.myUpdateForm.get('updateprofile').setValue(row.profile_id);

    // Hay que un for y llenar el array para mostrar

    if (this.currentUser.status === '0') {
      this.enabledUpdated = true;
    } else {
      this.enabledUpdated = false;
    }
  
    document.getElementById( 'uploadUser').click();
  
  }

  selectOffices(event: any) {
    console.log(event);

    console.log(event);

        this.userOfficeRelationShips.map(function(dato){

       console.log(dato.id+'ole'+event.id);
        if(Number(dato.id) === Number(event.id)){
          if( dato.status === false){
          dato.status = true;
          console.log('hacer cambio');
          }else{
          dato.status = false;
          console.log('hacer cambio');
          }
        }
        console.log(dato);
        return dato;
      });

    console.log('Revisar cambios');
    const search = this.idBranchOffices.indexOf(event.id);
    if (search == -1) {
      this.idBranchOffices.push(event.id);
    } else {
      console.log('entro');
      const pos = this.idBranchOffices.indexOf(event.id);
      console.log(pos);
      this.idBranchOffices.splice(pos, 1);
    }
    console.log(event);
    console.log('oficinas seleccionadas');
    console.log(this.idBranchOffices);
  }


  selectOfficesUpdate(event: any) {
    console.log(event);

    console.log(event);

        this.userOfficeRelationShipsUpdate.map(function(dato){

       console.log(dato.id+'ole'+event.id);
        if(Number(dato.id) === Number(event.id)){
          if( dato.status === false){
          dato.status = true;
          console.log('hacer cambio');
          }else{
          dato.status = false;
          console.log('hacer cambio');
          }
        }
        console.log(dato);
        return dato;
      });

    console.log('Revisar cambios');
    const search = this.idBranchOfficesUpdate.indexOf(event.id);
    if (search == -1) {
      this.idBranchOfficesUpdate.push(event.id);
    } else {
      console.log('entro');
      const pos = this.idBranchOfficesUpdate.indexOf(event.id);
      console.log(pos);
      this.idBranchOfficesUpdate.splice(pos, 1);
    }
    console.log(event);
    console.log('oficinas seleccionadas');
    console.log(this.idBranchOfficesUpdate);
  }

  relationshipUserOffice() {
    console.log(this.selectedBusinessId);
   
  /* 
   this.restService.createRelationshipUserOffices(this.currentUser.data.id,   this.idBranchOffices, this.selectedBusinessId).then(data => {
     const resp: any = data;
     this.getRelationshipUserOffices();
     console.log('ole ole');
     console.log(resp);
     // this.idBranchOffices
     swal.close();
   }).catch(error => {
     console.log(error);
   });*/

   this.idBranchOffices=[1];
   console.log(this.idBranchOffices);


   for (let office of this.userOfficeRelationShips) {
    
    if( office.status === true){
    this.idBranchOffices.push(office.id);
    }

  }

    for (let i = 0; i <  this.clientOfficeRelationShips.length; i++) {
     
      if(this.clientOfficeRelationShips[i].idClient===this.selectedBusinessId){
           this.clientOfficeRelationShips.splice(i, 1);
      }
    }


 
   this.idBranchOffices.splice(0, 1);
 console.log('Oficinas definitivas');
   console.log(this.idBranchOffices);

   let itemsOffice =  this.idBranchOffices.toString();

   this.clientOfficeRelationShip = {
    idClient : this.selectedBusinessId,
    idBranchs : itemsOffice
    }

   console.log('crear relaciones');
    console.log(this.clientOfficeRelationShip);
    this.clientOfficeRelationShips.push(this.clientOfficeRelationShip);
    console.log(this.clientOfficeRelationShips);

    this.selectedBusinessId=0;
    this.userOfficeRelationShips = [];
  }


  relationshipUserOfficeUpdate() {
    console.log(this.selectedBusinessId);
   
  /* 
   this.restService.createRelationshipUserOffices(this.currentUser.data.id,   this.idBranchOffices, this.selectedBusinessId).then(data => {
     const resp: any = data;
     this.getRelationshipUserOffices();
     console.log('ole ole');
     console.log(resp);
     // this.idBranchOffices
     swal.close();
   }).catch(error => {
     console.log(error);
   });*/

   this.idBranchOfficesUpdate=[1];
   console.log(this.idBranchOfficesUpdate);


   for (let office of  this.userOfficeRelationShipsUpdate) {
    
    if( office.status === true){
    this.idBranchOfficesUpdate.push(office.id);
    }

  }
 
   this.idBranchOfficesUpdate.splice(0, 1);
 console.log('Oficinas definitivas');
   console.log(this.idBranchOfficesUpdate);

   let itemsOffice =  this.idBranchOfficesUpdate.toString();

   this.clientOfficeRelationShipUpdate = {
    idClient : this.currentCustomerUpdated,
    idBranchs : itemsOffice
    }

   console.log('crear relaciones de actualizar');
    console.log(this.clientOfficeRelationShipUpdate);
    // this.clientOfficeRelationShips.push(this.clientOfficeRelationShip);
    // console.log(this.clientOfficeRelationShips);

    let numOffices =  this.clientOfficeRelationShipUpdate.idBranchs.split(',');
    let branchOfficesNumbeUpdate=[1]; 

    if(numOffices.length>0){
      for (let branch of numOffices) {
         branchOfficesNumbeUpdate.push(Number(branch));
      }
    }

    branchOfficesNumbeUpdate.splice(0,1);
   //Borrar sedes y volver agregar
   console.log('definitivas '+ branchOfficesNumbeUpdate);
   this.deleteAllOfficesBranchUser(this.currentUser.data.id, this.currentCustomerUpdated, branchOfficesNumbeUpdate);

  /*  if(branchOfficesNumbeUpdate.length>0){
      this.restService.createRelationshipUserOffices(this.currentUser.data.id,  branchOfficesNumbeUpdate,  this.currentCustomerUpdated).then(data => {
      const resp: any = data;
      swal({
        title: 'sedes actualizadas',
        type: 'success'
       })
     // this.getRelationshipUserOffices();
      console.log('ole ole');
      console.log(resp);
      // this.idBranchOffices
      swal.close();
    }).catch(error => {
      swal({
        title: 'Error',
        text: 'Alguna de las relaciones que quieres crear, ya esta creada',
        type: 'error'
       });

      console.log(error);
    });
  }


  document.getElementById( 'updateBranchHide').click();



    this.selectedBusinessId=0;
    this.idBranchOfficesUpdate = [];*/
  }

  getCustomerOffice() {
    console.log(this.selectedBusinessId);
    this.idBranchOffices = [1];
    this.userOfficeRelationShips = [];
   this.restService.getCustomerOffice(this.selectedBusinessId).then(data => {
     const resp: any = data;
     console.log('ole ole data');
     console.log(resp);
      let idCustomer = resp.customer.id;

      this.customerOffices = resp.data_branchoffices;

      for (let customerOffice of this.customerOffices) {
        console.log('oficina');
        console.log(customerOffice);
        let resultCustomer;
        let statusTemp= false;
    if (this.clientOfficeRelationShips.length>0) {
      resultCustomer = this.clientOfficeRelationShips.filter(word => word.idClient === idCustomer);
      console.log('Vector con filtro');
      console.log(idCustomer);
      console.log(this.clientOfficeRelationShips);
      console.log(resultCustomer);

      if(resultCustomer.length>0){
        let officesBranchTemp=resultCustomer[0].idBranchs;
        officesBranchTemp = officesBranchTemp.split(',');

        console.log('Validación check oficina');
        console.log(customerOffice.id);
        

      
        // let resultBranchOffice = officesBranchTemp.indexOf((customerOffice.id).toString());
       
        for (let office of officesBranchTemp) {
         if(office===customerOffice.id.toString()){
          statusTemp=true;
         }
        }

       // console.log(resultBranchOffice);
      /*  if(resultBranchOffice===0){
          statusTemp=true;
        }*/
        console.log(officesBranchTemp);
        
      }
     
      this.officesTemp = {
        idCustomer: idCustomer,
        id: customerOffice.id,
         officeName : customerOffice.branch_name,
         status: statusTemp
      }
      this.userOfficeRelationShips.push(this.officesTemp);


    }else{
     this.officesTemp = {
         idCustomer: idCustomer,
         id: customerOffice.id,
          officeName : customerOffice.branch_name,
          status: statusTemp
       }
       this.userOfficeRelationShips.push(this.officesTemp);
      }

     }

  
     swal.close();
   }).catch(error => {
     console.log(error);
   });

  }


  goAdminUsers(){
    this.router.navigateByUrl('master/register');
  }

updateCustomerOffices(customer) {
    console.log(customer);
    this.currentCustomer = customer;

      console.log(this.selectedBusinessId);
      this.idBranchOffices = [1];


      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      this.restService.getRelationshipUserOffices(this.currentUser.data.id).then(data => {
        const resp: any = data;
        if (resp.error) {
          swal({
            title: 'Error',
            text: 'Ha ocurrido un error',
            type: 'error'
           });
        } else {
          console.log('info de userOffices');
          this.rowsClient = resp.data.customers;
          console.log('customer');
          console.log(resp.data.customers);
          swal.close();
          console.log('------------Como toma información');
          console.log( resp);

          this.idUserBranchOffice=resp.data.customers;
      //--------------------  
      this.restService.getCustomerOffice( this.currentCustomer.id).then(data => {
        const resp: any = data;
        console.log('Que paso ps');
        console.log(resp);
          
        this.customerOfficesUpdate = resp.data_branchoffices;
        console.log(this.customerOfficesUpdate);
        this.currentCustomerUpdated=resp.customer.id;
        let idbranchOfficesTemp=[1];
        this.userOfficeRelationShipsUpdate=[];
        let globalOfficeBranch:any;
        console.log(this.idUserBranchOffice);
        for (let clientOfficeUpdate of    this.idUserBranchOffice) {
          console.log(clientOfficeUpdate.branch_offices);
          for (let clientOfficeUpdateBranch of    clientOfficeUpdate.branch_offices) {
               idbranchOfficesTemp.push(clientOfficeUpdateBranch.id);
               console.log('ole importante');
               console.log(idbranchOfficesTemp);
          }
       }      
       console.log('Info ole ole ');
       console.log(this.customerOfficesUpdate);
       for (let customerOffices of   this.customerOfficesUpdate) {
        
        console.log('valor:'+ JSON.stringify(customerOffices));
       this.statusTempUpdate= false;
       for (let office of  idbranchOfficesTemp) {
         console.log('comparación de elementos');
         console.log(office+ ' '+ customerOffices.id);
        if(office===customerOffices.id){
          console.log('Entro');
          this.statusTempUpdate=true;
          break;
        }
      }
      console.log(this.statusTempUpdate);
      console.log('');
      this.officesTempUpdate = {
        id: customerOffices.id,
         officeName : customerOffices.branch_name,
         status: this.statusTempUpdate
      }  
      this.userOfficeRelationShipsUpdate.push(this.officesTempUpdate);

      console.log( this.userOfficeRelationShipsUpdate);
      }
     
 
        swal.close();
      }).catch(error => {
        console.log(error);
      });
      
       //-----------------------
      }
      }).catch(error => {
        swal.close();
        swal({
          title:'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
         });
        console.log(error);
      });

    console.log( this.currentCustomer );
    document.getElementById( 'relationShipUpdate').click();
  }

  getRelationshipUserOffices() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log('iduser'+ this.currentUser.data.id);
    this.restService.getRelationshipUserOffices(this.currentUser.data.id).then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
         });
      } else {
        console.log('info de userOffices');
        this.rowsClient = resp.data.customers;
        console.log('customer');
        console.log(resp.data.customers);
        swal.close();

        console.log( resp.data);
    }
    }).catch(error => {
      swal.close();
      swal({
        title:'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
       });
      console.log(error);
    });
  }

  public kilo() {
    console.log('kilo');
  }

  createRelationShip() {
   
  }

  closeModalRelationship() {
    document.getElementById( 'createBrandHide').click();
    // poner vector con numeros enteros  
        for (let clientOffice of this.clientOfficeRelationShips) {
     

      let numOffices =  clientOffice.idBranchs.split(',');
      let branchOfficesNumber=[1]; 

      if(numOffices.length>0){
        for (let branch of numOffices) {
          branchOfficesNumber.push(Number(branch));
        }
      }

      branchOfficesNumber.splice(0,1);

    
      if(branchOfficesNumber.length>0){
        this.restService.createRelationshipUserOffices(this.currentUser.data.id,  branchOfficesNumber, clientOffice.idClient).then(data => {
        const resp: any = data;
        this.getRelationshipUserOffices();
        console.log('ole ole');
        console.log(resp);
        // this.idBranchOffices
       // swal.close();
      }).catch(error => {
        swal({
          title: 'Error',
          text: 'Alguna de las relaciones que quieres crear, ya esta creada',
          type: 'error'
         });

        console.log(error);
      });
    }
    }

    this.officesUpdated = [];
    this.userOfficeRelationShips= []; // Enfocado a las suscursales
    this.clientOfficeRelationShips=[]; 

    /* 
   this.restService.createRelationshipUserOffices(this.currentUser.data.id,   this.idBranchOffices, this.selectedBusinessId).then(data => {
     const resp: any = data;
     this.getRelationshipUserOffices();
     console.log('ole ole');
     console.log(resp);
     // this.idBranchOffices
     swal.close();
   }).catch(error => {
     console.log(error);
   });*/

  }

  showClient() {
  if ( this.showButtonUpdated === 0) {
    swal({
      title: 'Error',
      text: 'Debes crear un usuario',
      type: 'error'
     });
  } else {
    document.getElementById( 'relationShipCustomer').click();
  }

  }


  deleteAllOfficesBranchUser(idUser:number, idCustomer:number, branchOfficesNumbeUpdate: Array<number>){
    
    this.userService.deleteOfficesBranchUser(idUser,idCustomer).then(data => {
           const resp: any = data;

           if(branchOfficesNumbeUpdate.length>0){
            this.restService.createRelationshipUserOffices(this.currentUser.data.id,  branchOfficesNumbeUpdate,  this.currentCustomerUpdated).then(data => {
            const resp: any = data;
            swal({
              title: 'Sedes actualizadas',
              type: 'success'
             })
           // this.getRelationshipUserOffices();
            console.log('ole ole');
            console.log(resp);
            // this.idBranchOffices
            swal.close();
          }).catch(error => {
            swal({
              title: 'Error',
              text: 'Alguna de las relaciones que quieres crear, ya esta creada',
              type: 'error'
             });
      
            console.log(error);
          });
        }
      
      
        document.getElementById( 'updateBranchHide').click();
      
      
      
          this.selectedBusinessId=0;
          this.idBranchOfficesUpdate = [];

         }).catch(error => {
           console.log(error);
         });
}


  deleteCustomerOffices(customer){
   console.log(customer);
  }

  }
