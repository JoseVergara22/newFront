import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHeaderResponse} from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private router: Router ) { }

  createUserInternal( firstName: string,
    lastName: string,
    name: string,
    username: string,
    cellphone: string,
    telephone: string,
    password: string,
    rpassword: string,
    email: string,
    profileId: number) {
return new Promise(resolve => {
      const headers = new HttpHeaders();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');

      const postParams = {
        first_name: firstName,
        last_name: lastName,
        name: name,
        cellphone: cellphone,
        telephone: telephone,
        email: email,
        password: password,
        c_password: rpassword,
        username: username,
        profile_id: profileId
      };
this.http.post('http://34.207.70.171/api/auth/signup', postParams)
.map(res => res).subscribe(data => {
resolve(data);
}, error => {
          resolve(error);
  });
});
    }

    updateUser( firstName: string,
      lastName: string,
      name: string,
      username: string,
      cellphone: string,
      telephone: string,
      email: string,
      id:number,
      profileId: number) {
        return new Promise(resolve => {
          console.log('entra en el servicio');
          console.log(firstName,
            lastName,
            name,
            username,
            cellphone,
            telephone,
            email,
            id,
            profileId);
          const headers = new HttpHeaders();
          headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
          headers.append('Content-Type', 'application/json');
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
              'Accept': 'application/json'
            })
          };
        
              const patchParams = {
                first_name: firstName,
                last_name: lastName,
                name: name,
                cellphone: cellphone,
                telephone: telephone,
                email: email,
                username: username,
                profile_id: profileId
              };
              console.log('pasa los headers ');
        this.http.patch('http://34.207.70.171/api/users/' + id, patchParams, httpOptions)
        .map(res => res).subscribe(data => {
          console.log('retorna data');
          console.log(data);
           resolve(data);
          }, error => {
            console.log('retorna error');
            console.log(error);
                    resolve(error);
            });
        });
      }


    getUsers() {
      return new Promise(resolve => {
        const headers = new HttpHeaders();
        headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
        headers.append('Content-Type', 'application/json');
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
            'Accept': 'application/json'
          })
        };
        
        this.http.get('http://34.207.70.171/api/users', httpOptions)
        .map(res => res).subscribe(data => {
        console.log(data);
        resolve(data);
        }, error => {
                  resolve(error);
          });
      });
    }

    deleteUsers(id:number) {
      return new Promise(resolve => {
        const headers = new HttpHeaders();
        headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
        headers.append('Content-Type', 'application/json');
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
            'Accept': 'application/json'
          })
        };
        
        this.http.delete('http://34.207.70.171/api/users/' + id, httpOptions)
        .map(res => res).subscribe(data => {
        console.log(data);
        resolve(data);
        }, error => {
                  resolve(error);
          });
      });
    }


    generateToken( email: string,
      password: string) {
      return new Promise(resolve => {
      const headers = new HttpHeaders();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');

      const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Accept': 'application/json'
            })
          };
         //  let options = new RequestOptions({ headers: headers });

      const postParams = {
       grant_type: 'password',
             client_id: '1',
             client_secret: 'TyG8pFzcGI7nTIt31FzFCwnvF0E8t70OSAIyrwWT',
             username: email,
             password: password,
             scope: '*'
           };
         //  alert (postParams.toString());
           this.http.post('http://34.207.70.171/oauth/token', postParams)
             .map(res => res)
             .subscribe(data => {
               const ole =  data;
               console.log('respuesta: '  +  JSON.stringify(ole));
               resolve(data);
             }, error => {
              resolve(error);
             });
         });
          }

}


