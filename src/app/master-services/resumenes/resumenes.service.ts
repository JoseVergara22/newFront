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

  storePreventive(id_forklift:number,customer_id:number,brach_id:number,id_rutines:string,technician_id: any, consecutive:number, date:string){
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      const postParams = {
        forklift_id: id_forklift,
        customer_id: customer_id,
        branch_id: brach_id,
        routines: id_rutines,
        technicians_id: technician_id,
        consecutive: consecutive,
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

  storeChecklist(checklists_id:number,customer_id:number,brach_id:number,checklists:string,technician_id: any, consecutive:number, date:string){
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      const postParams = {
        forklift_id: checklists_id,
        customer_id: customer_id,
        branch_id: brach_id,
        checklists: checklists,
        technicians_id: technician_id,
        consecutive: consecutive,
        date: date
      };
      console.log(postParams);
      
      this.http.post(this.apiEndPoint+'api/create_forklift_checklist', postParams, httpOptions)
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

  storeCorrective(forkliftId:number,customer_id:number,brach_id:number,observation:string,technician_id: any, consecutive:number, date:string){
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      const postParams = {
        forklift_id: forkliftId,
        customer_id: customer_id,
        branch_id: brach_id,
        observation: observation,
        technicians_id: technician_id,
        consecutive: consecutive,
        date: date
      };
      console.log(postParams);
      
      this.http.post(this.apiEndPoint+'api/create_corrective', postParams, httpOptions)
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

  getWorkForkliftPreventive(id:number){
    console.log(id);
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      
      this.http.get(this.apiEndPoint+'api/show_preventive/'+id, httpOptions)
      .map(res => res).subscribe(data => {
        console.log("a mostrar data");
      console.log(data);
      resolve(data);
      }, error => {
        console.log("error en servicio");
        console.log(error);
                resolve(error);
        });
    });
  }

  getWorkForkliftPreventiveLast(id:number){
    console.log(id);
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      
      this.http.get(this.apiEndPoint+'api/show_preventive_last/'+id, httpOptions)
      .map(res => res).subscribe(data => {
        console.log("a mostrar data");
      console.log(data);
      resolve(data);
      }, error => {
        console.log("error en servicio");
        console.log(error);
                resolve(error);
        });
    });
  }

  getWorkForkliftPreventiveFilter(id:number,fromdate:string,to_date:string){
    console.log(id);
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      console.log('from_date='+fromdate+'&to_date='+to_date);
      this.http.get(this.apiEndPoint+'api/show_preventive_filter/'+id+'?from_date='+fromdate+'&to_date='+to_date, httpOptions)
      .map(res => res).subscribe(data => {
        console.log("a mostrar data");
      console.log(data);
      resolve(data);
      }, error => {
        console.log("error en servicio");
        console.log(error);
                resolve(error);
        });
    });
  }

  getWorkForkliftCorrective(id:number){
    console.log(id);
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      
      this.http.get(this.apiEndPoint+'api/show_corrective/'+id, httpOptions)
      .map(res => res).subscribe(data => {
        console.log("a mostrar data");
      console.log(data);
      resolve(data);
      }, error => {
        console.log("error en servicio");
        console.log(error);
                resolve(error);
        });
    });
  }

  getWorkForkliftCorrectiveLast(id:number){
    console.log(id);
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      
      this.http.get(this.apiEndPoint+'api/show_corrective_last/'+id, httpOptions)
      .map(res => res).subscribe(data => {
        console.log("a mostrar data");
      console.log(data);
      resolve(data);
      }, error => {
        console.log("error en servicio");
        console.log(error);
                resolve(error);
        });
    });
  }

  getWorkForkliftCorrectiveFilter(id:number,fromdate:string,to_date:string){
    console.log(id);
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      
      this.http.get(this.apiEndPoint+'api/show_corrective_filter/'+id+'?from_date='+fromdate+'&to_date='+to_date, httpOptions)
      .map(res => res).subscribe(data => {
        console.log("a mostrar data");
      console.log(data);
      resolve(data);
      }, error => {
        console.log("error en servicio");
        console.log(error);
                resolve(error);
        });
    });
  }

  getWorkForkliftChecklist(id:number){
    console.log(id);
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      
      this.http.get(this.apiEndPoint+'api/show_checklist/'+id, httpOptions)
      .map(res => res).subscribe(data => {
        console.log("a mostrar data");
      console.log(data);
      resolve(data);
      }, error => {
        console.log("error en servicio");
        console.log(error);
                resolve(error);
        });
    });
  }
  
  getWorkForkliftChecklistLast(id:number){
    console.log(id);
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      
      this.http.get(this.apiEndPoint+'api/show_checklist_last/'+id, httpOptions)
      .map(res => res).subscribe(data => {
        console.log("a mostrar data");
      console.log(data);
      resolve(data);
      }, error => {
        console.log("error en servicio");
        console.log(error);
                resolve(error);
        });
    });
  }

  getWorkForkliftChecklistFilter(id:number,fromdate:string,to_date:string){
    console.log(id);
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
          'Accept': 'application/json'
        })
      };
      
      this.http.get(this.apiEndPoint+'api/show_checklist_filter/'+id+'?from_date='+fromdate+'&to_date='+to_date, httpOptions)
      .map(res => res).subscribe(data => {
        console.log("a mostrar data");
      console.log(data);
      resolve(data);
      }, error => {
        console.log("error en servicio");
        console.log(error);
                resolve(error);
        });
    });
  }

  updatePreventive(forklift_id:number,customer_id:number,branch_id:number,id_rutines:string,technician_id: any,date: string,newDate: string) {
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
    console.log( localStorage.getItem('userid'));
    const patchParams = {
        forklift_id: forklift_id,
        customer_id:customer_id,
        branch_offices_id:branch_id,
        routines: id_rutines,
        technicians_id: technician_id,
        date: date,
        newDate: newDate
    };
    console.log(patchParams);
    this.http.patch(this.apiEndPoint+'api/update_rutine_preventive', patchParams, httpOptions)
      .map(res => res).subscribe(data => {
        resolve(data);
      }, error => {
        resolve(error);
      });
    });
  }

  updateChecklist(forklift_id:number,customer_id:number,branch_id:number,id_checklist:string,technician_id: any,date: string,newDate: string) {
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
    console.log( localStorage.getItem('userid'));
    const patchParams = {
        forklift_id: forklift_id,
        customer_id:customer_id,
        branch_offices_id:branch_id,
        checklist: id_checklist,
        technicians_id: technician_id,
        date: date,
        newDate: newDate
    };
    console.log(patchParams);
    this.http.patch(this.apiEndPoint+'api/update_rutine_checklist', patchParams, httpOptions)
      .map(res => res).subscribe(data => {
        resolve(data);
      }, error => {
        resolve(error);
      });
    });
  }

  updateCorrective(id: number,forklift_id:number,observation:string,technician_id: any,date: string) {
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
    console.log( localStorage.getItem('userid'));
    const patchParams = {
        forklift_id: forklift_id,
        observation:observation,
        technicians_id: technician_id,
        date: date,
    };
    console.log(patchParams);
    this.http.patch(this.apiEndPoint+'api/update_rutine_corrective/'+id, patchParams, httpOptions)
      .map(res => res).subscribe(data => {
        resolve(data);
      }, error => {
        resolve(error);
      });
    });
  }

  deletePreventive(forklift_id: number,routines: string,technicians_id: string) {
    console.log('ole ole ole');
    console.log(forklift_id);
    console.log(routines);
    console.log(technicians_id);
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
      const postParams = {
      };
      console.log('forklift_id='+forklift_id+'&routines='+routines+'&technicians_id='+technicians_id);
      this.http.delete(this.apiEndPoint+'api/delete_preventive?forklift_id='+forklift_id+'&routines='+routines+'&technicians_id='+technicians_id, httpOptions)
        .map(res => res).subscribe(data => {
          resolve(data);
        }, error => {
          resolve(error);
        });
    });
  }

  deleteChecklist(forklift_id: number,checklist: string,technicians_id: string) {
    console.log('ole ole ole');
    console.log(status);
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
      const postParams = {
      };
      this.http.delete(this.apiEndPoint+'api/delete_checklist?checklist='+checklist+'&technicians_id='+technicians_id, httpOptions)
        .map(res => res).subscribe(data => {
          resolve(data);
        }, error => {
          resolve(error);
        });
    });
  }

  deleteCorrective(id: number,) {
    console.log('ole ole ole');
    console.log(status);
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
      const postParams = {
      };
      this.http.delete(this.apiEndPoint+'api/delete_corrective/' + id, httpOptions)
        .map(res => res).subscribe(data => {
          resolve(data);
        }, error => {
          resolve(error);
        });
    });
  }

  updateConsecutivePreventive() {
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
      const postParams = {
      };
      this.http.patch(this.apiEndPoint+'api/update_preventive_consecutive',postParams, httpOptions)
        .map(res => res).subscribe(data => {
          resolve(data);
        }, error => {
          resolve(error);
        });
    });
  }

  showPreventiveConsecutive() { // Falta implementar desde el backend
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
      this.http.get(this.apiEndPoint+'api/get_preventive_consecutive', httpOptions)
        .map(res => res).subscribe(data => {
          console.log(data);
          resolve(data);
        }, error => {
          resolve(error);
        });
    });
  }

  updateConsecutiveChecklist() {
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
      const postParams = {
      };
      this.http.patch(this.apiEndPoint+'api/update_checklist_consecutive',postParams, httpOptions)
        .map(res => res).subscribe(data => {
          resolve(data);
        }, error => {
          resolve(error);
        });
    });
  }

  showChecklisteConsecutive() { // Falta implementar desde el backend
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
      this.http.get(this.apiEndPoint+'api/get_checklist_consecutive', httpOptions)
        .map(res => res).subscribe(data => {
          console.log(data);
          resolve(data);
        }, error => {
          resolve(error);
        });
    });
  }

  updateConsecutiveCorrective() {
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
      const postParams = {
      };
      this.http.patch(this.apiEndPoint+'api/update_corrective_consecutive',postParams, httpOptions)
        .map(res => res).subscribe(data => {
          resolve(data);
        }, error => {
          resolve(error);
        });
    });
  }

  showCorrectiveConsecutive() { // Falta implementar desde el backend
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
      this.http.get(this.apiEndPoint+'api/get_corrective_consecutive', httpOptions)
        .map(res => res).subscribe(data => {
          console.log(data);
          resolve(data);
        }, error => {
          resolve(error);
        });
    });
  }

}
