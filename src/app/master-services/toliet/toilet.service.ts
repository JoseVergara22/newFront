import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { identifierName } from '@angular/compiler';

@Injectable()
export class ToiletService {

  apiEndPoint = environment.apiBaseUrl;
  constructor(private http: HttpClient, private router: Router) { }


  createToilet(description: string, code:string){
    console.log('ole ole ole');
    console.log(description +', '+ code);
    return new Promise(resolve => {
      const headers = new HttpHeaders();
      headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); 
      headers.append('Content-Type', 'application/json');
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      const postParams = {
        code: code,
        description: description
      };
      console.log(postParams)
      this.http.post(this.apiEndPoint+'api/create_regionals', postParams, httpOptions)
        .map(res => res).subscribe(data => {
          resolve(data);
        }, error => {
          resolve(error);
        });
    });
  }
  
  updateToilet(id:number, description:string, code:string){
    console.log("en servicio");
    console.log(id);
    console.log(description);
    console.log(code);
  
      return new Promise(resolve => {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
            'Accept': 'application/json'
          })
        };
        const postParams = {
          code: code,
          description: description
        };
        this.http.patch(this.apiEndPoint+'api/update_regional/'+ id, postParams, httpOptions)
          .map(res => res).subscribe(data => {
            resolve(data);
          }, error => {
            resolve(error);
          });
      });
  }
  
    deleteToliet(id:number){
      console.log('ole ole ole');
      console.log(id);
      return new Promise(resolve => {
        const headers = new HttpHeaders();
        headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); 
        headers.append('Content-Type', 'application/json');
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
            'Accept': 'application/json'
          })
        };
        const postParams = {
        };
        this.http.delete(this.apiEndPoint+'api/delete_regionals_id/'+ id, httpOptions)
          .map(res => res).subscribe(data => {
            resolve(data);
          }, error => {
            resolve(error);
          });
      });
    }
  
    getToilet(){
      return new Promise(resolve => {
        const headers = new HttpHeaders();
        headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); 
        headers.append('Content-Type', 'application/json');
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
            'Accept': 'application/json'
          })
        };
        this.http.get(this.apiEndPoint+'api/show_regionals_all', httpOptions)
          .map(res => res).subscribe(data => {
            console.log(data);
            resolve(data);
          }, error => {
            resolve(error);
          });
      });
    }
}
