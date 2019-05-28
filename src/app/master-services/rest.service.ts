import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHeaderResponse} from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class RestService {

  constructor(private http: HttpClient, private router: Router ) { }


  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  createUser( dear: string,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string) {
     return new Promise(resolve => {
       const headers = new HttpHeaders();
       headers.append('Accept', 'application/json');
       headers.append('Content-Type', 'application/json');
       const postParams = {
         dear: dear,
         first_name: first_name,
         last_name: last_name,
         name: first_name + ' ' + last_name,
         email: email,
         password: password,
         c_password: password,
         username: username
       };
       this.http.post('http://13.58.95.191/api/register', postParams)
         .map(res => res).subscribe(data => {
           resolve(data);
         }, error => {
           console.log(error);
         });
     });
    }

    generateToken( email: string,
     password: string) {
     return new Promise(resolve => {
     const headers = new HttpHeaders();
     headers.append('Accept', 'application/json');
     headers.append('Content-Type', 'application/json');
   //  let options = new RequestOptions({ headers: headers });

     const postParams = {
       grant_type: 'password',
       client_id: '1',
       client_secret: 'uMoZA0GDnjZlq2GB9sHcLSZ9af65JFSwPxmH2TUg',
       username: email,
       password: password,
       scope: '*'
     };
   //  alert (postParams.toString());
     this.http.post('http://13.58.95.191/oauth/token', postParams)
       .map(res => res)
       .subscribe(data => {
         // console.log('respuesta: '  +  JSON.stringify(this.ole));
         resolve(data);
       }, error => {
       //  alert(error);
         console.log(error);
       });
   });
    }

    testToken(token: any) {
     return new Promise(resolve => {
     console.log(token);
     const headers = new HttpHeaders();
     headers.append('Authorization', 'Bearer ' + (token)); // 'Bearer ' +
     headers.append('Accept', 'application/json');
     // headers.append('Content-Type', 'application/json');
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Authorization': 'Bearer ' + (token),
         'Accept': 'application/json'
       })
     };
     const postParams = {
     //  Authorization: 'Bearer ' + token,
      // Accept: 'application/json'
     };

   //  alert (postParams.toString());
     this.http.post('http://13.58.95.191/api/details', postParams, httpOptions)
       .map(res => res)
       .subscribe(data => {
         // console.log('respuesta: '  + JSON.stringify(data));
         resolve(data);
       }, error => {
       //  alert(error);
         console.log(error);
       });
   });
    }

}
