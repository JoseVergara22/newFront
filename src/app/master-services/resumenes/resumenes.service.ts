import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable()
export class ResumenesService {

  apiEndPoint = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router) { }

  showFilter(paramsFilter: string) { // Falta implementar desde el backend
    return new Promise(resolve => {
      const headers = new HttpHeaders();
      headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
      headers.append('Content-Type', 'application/json');
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      console.log(paramsFilter);
      this.http.get(this.apiEndPoint+'api/get_forklift_full?' + paramsFilter, httpOptions)
        .map(res => res).subscribe(data => {
          console.log(data);
          resolve(data);
        }, error => {
          resolve(error);
          console.log(error)
        });
    });
  }

  storePreventive(id_forklift:number,customer_id:number,brach_id:number,id_rutines:string,technician_id: any, date:string){
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      const postParams = {
        routines: id_rutines,
        forklift_id: id_forklift,
        technicians_id: technician_id,
        brach_id: brach_id,
        cutomer_id: customer_id,
        date: date
      };
      console.log(postParams);
      
      this.http.post(this.apiEndPoint+'api/create_preventive', postParams, httpOptions)
      .map(res => res).subscribe(data => {
        console.log("a mostrar data");
      console.log(data);
      resolve(data);
      }, error => {
        console.log("error en servicio");
                resolve(error);
        });
    });
  }
}
