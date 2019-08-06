import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import { UserService } from '../../master-services/User/user.service';
import swal from 'sweetalert2';
import { UserInternalInterface } from '../../master-models/user-internal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-user-register',
  templateUrl: './master-user-register.component.html',
  styleUrls: ['./master-user-register.component.scss']
})
export class MasterUserRegisterComponent implements OnInit {
  myForm: FormGroup;
  mynumberForm: FormGroup;
  mytooltipForm: FormGroup;
  checkdropForm: FormGroup;
  loading: boolean;
  name: string;
  a: 'aaa';
  load = true;
  errorProfile = false;
  userInternal: UserInternalInterface;
  submitted = false;

  constructor(private userService: UserService, private router: Router) {
    this.loading = true;

    const name = new FormControl('', Validators.required);
    const lastname = new FormControl('', Validators.required);
    const username = new FormControl('', Validators.required);
    const cellphone = new FormControl('');
    const telephone = new FormControl('');
    const password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    const identification = new FormControl('', Validators.required);
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
      identification: identification,
      profile: profile
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
  }

  ngOnInit() {
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
    this.userService.createUserInternal(this.myForm.get('name').value,
    this.myForm.get('lastname').value,
    this.myForm.get('name').value + ' ' + this.myForm.get('lastname').value,
    this.myForm.get('username').value,
    this.myForm.get('cellphone').value,
    this.myForm.get('telephone').value,
    this.myForm.get('password').value,
    this.myForm.get('rpassword').value,
    this.myForm.get('email').value,
    this.myForm.get('profile').value).then(data => {
      const resp: any = data;
      if (resp.error) {
        let msg  = '';
      if ( resp.error.message === 'The username already exists.') {
       msg = 'El usuario ya existe';
      } else {
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
     });
     this.router.navigateByUrl('master');
    }
    }).catch(error => {
      console.log(error);
    });
    } else {
      this.errorProfile = true;
    }
  }

  get checkForm() { return this.myForm.controls; }

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

  public kilo() {
    console.log('kilo');
  }

  }
