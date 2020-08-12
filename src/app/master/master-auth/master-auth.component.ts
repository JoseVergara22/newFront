import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserService } from '../../master-services/User/user.service';


@Component({
  selector: 'app-master-auth',
  templateUrl: './master-auth.component.html',
  styleUrls: ['./master-auth.component.scss']
})
export class MasterAuthComponent implements OnInit {
  isMobile: boolean;
  myForm: FormGroup;
  submitted = false;



  constructor(private userService: UserService, private router: Router) {
    this.isMobile = false;
    const email = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);
    this.myForm = new FormGroup({
      email: email,
      password: password
    });
  }


  ngOnInit() {
    /*if (screen.width < 780) {
      this.isMobile = true;
    }*/
  }


  get checkForm() { return this.myForm.controls; }



  doLogin() {
    console.log('ole ole');
    this.submitted = true;
    if ( !this.myForm.invalid) {
     swal({
       title: 'Validando información ...',
       allowOutsideClick: false
     });
     swal.showLoading();
     this.userService.generateToken(this.myForm.get('email').value,
      this.myForm.get('password').value).then(data => {
       const resp: any = data;

       console.log(resp);
       if (resp.error) {
        let msg  = '';
      if ( resp.error === 'The user credentials were incorrect.') {
       msg = 'Usuario/Correo electrónico o Contraseña incorrecta';
      }
        swal({
          title: msg,
          text: 'Oops problemas para ingresar',
          type: 'error'
         });
      } else {
     console.log('ole ole ole ');
     console.log(resp);
     localStorage.setItem('token_user', resp.access_token);
    // localStorage.setItem('email', this.myForm.get('email').value);
     swal.close();
    // console.log('Miralo ps' + localStorage.getItem('token'));
     
    
    this.userService.getUserInformation(this.myForm.get('email').value)
    .then(data => {
      const resp: any = data;
      //console.log('data user: '+ JSON.stringify(resp.data[0].profile_id));
      localStorage.setItem('profile', resp.data[0].profile_id);
      localStorage.setItem('email', resp.data[0].email);
      localStorage.setItem('username', resp.data[0].username);
      localStorage.setItem('userid', resp.data[0].id);
      localStorage.setItem('user', resp.data[0]);
      console.log('------------------');
      console.log(resp.data[0].status);
      console.log('------------------');
      if(Number(resp.data[0].profile_id)===4){
        swal({
          title:'Importante',
          text: 'Usted tiene perfil de técnico, no tiene permiso para entrar a la plataforma web, solo a la aplicación.',
          type: 'warning'
        });
      }else{
        if(Number(resp.data[0].status)===0){
          this.router.navigateByUrl('resetPasswordLogin'); // es poner la pagina para cambiar la contraseña
        
          }else{
            this.router.navigateByUrl('master');
          }
      }
   
    }).catch(error => {
      console.log(error);
    });

    
   




    }
     }).catch(error => {
       console.log(error);
     });
     } else {
       console.log('error');
     }
   }

  doLogin2() {
    this.router.navigateByUrl('master');
  }



}
