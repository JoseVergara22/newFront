import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../../environments/environment';
import 'rxjs/add/operator/map';
import { integer } from 'aws-sdk/clients/cloudfront';


@Injectable()
export class SettlementService {

  apiEndPoint = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router) { }

  showSettlementConsecutive() { // Falta implementar desde el backend
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
      this.http.get(this.apiEndPoint+'api/settlement_consecutive', httpOptions)
        .map(res => res).subscribe(data => {
          console.log(data);
          resolve(data);
        }, error => {
          resolve(error);
        });
    });
  }

  createEstimate(settlement_consecutive: number, customer_id: number, customer_document: string,
    department_id: number, city_id: number, contact: string,
    telephone: string, observation: string, total: number, email:string, status:number,
    regional_id: number, cost_center_id:number,warehouse_id:number, estimate_order:number) {
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

//payment_method: payment_method,
//guaranty: guaranty,
//validity: validity,

console.log( localStorage.getItem('userid'));
const postParams = {
elaborate_user_id:  localStorage.getItem('userid'),
settlement_consecutive: settlement_consecutive,
customer_id: customer_id,
customer_document: customer_document,
department_id: department_id,
city_id: city_id,
contact: contact,
telephone: telephone,
observation: observation,
total: total,
email:email,
status:status,
regional_id: regional_id,
cost_center_id: cost_center_id,
warehouse_id: warehouse_id,
estimate_order: estimate_order
};


this.http.post(this.apiEndPoint+'api/create_settlement', postParams, httpOptions)
.map(res => res).subscribe(data => {

resolve(data);
}, error => {
resolve(error);
});
});
}


updateConsecutive() {
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
    this.http.patch(this.apiEndPoint+'api/update_settlement_consecutive',postParams, httpOptions)
      .map(res => res).subscribe(data => {
        resolve(data);
      }, error => {
        resolve(error);
      });
  });
}

getSettlemetSpecific(id:number) { // Falta implementar desde el backend
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
    this.http.get(this.apiEndPoint+'api/settlements/'+ id, httpOptions)
      .map(res => res).subscribe(data => {
        console.log(data);
        resolve(data);
      }, error => {
        resolve(error);
      });
  });
}

updateSettlement(id:number, customer_id: number, customer_document: string,
  department_id: number, city_id: number, contact: string, telephone: string, observation: string,
   regional_id: number, cost_center_id: number, warehouse_id:number, estimate_order:string) {
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
    const patchParams = {
    customer_id: customer_id,
    customer_document: customer_document,
    department_id: department_id,
    city_id: city_id,
    contact: contact,
    telephone: telephone,
    observation: observation,
    regional_id: regional_id,
    cost_center_id: cost_center_id,
    warehouse_id: warehouse_id,
    estimate_order: estimate_order
    };
this.http.patch(this.apiEndPoint+'api/update_settlement/'+id, patchParams, httpOptions)
.map(res => res).subscribe(data => {
resolve(data);
}, error => {
resolve(error);
});
});
}


getSettlementDetails(idSettlement:number) {
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
    this.http.get(this.apiEndPoint+'api/settlement_details_general/'+idSettlement, httpOptions)
      .map(res => res).subscribe(data => {
        console.log(data);
        resolve(data);
      }, error => {
        resolve(error);
      });
  });
}

getSettlementDetailsWorkforce(idSettlement:number) {
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
    this.http.get(this.apiEndPoint+'api/settlement_details_general_workforce/'+idSettlement, httpOptions)
      .map(res => res).subscribe(data => {
        console.log(data);
        resolve(data);
      }, error => {
        resolve(error);
      });
  });
}

getSettlementDetailsParts(idSettlement:number) {
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
    this.http.get(this.apiEndPoint+'api/settlement_details_general_parts/'+idSettlement, httpOptions)
      .map(res => res).subscribe(data => {
        console.log(data);
        resolve(data);
      }, error => {
        resolve(error);
      });
  });
}

getSettlementDetailsCustomer(idSettlement:number) {
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
    this.http.get(this.apiEndPoint+'api/settlement_details_general_customer/'+idSettlement, httpOptions)
      .map(res => res).subscribe(data => {
        console.log(data);
        resolve(data);
      }, error => {
        resolve(error);
      });
  });
}

createScheduleSettlement(params: string) {
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
    const postParams = {
    params: params
    };
    this.http.post(this.apiEndPoint+'api/scheduled_settlement', postParams, httpOptions)
    .map(res => res).subscribe(data => {
    resolve(data);
    }, error => {
    resolve(error);
    });
    });
  }

  updateScheduleSettlement(params: string) {
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
      params: params
      };
      this.http.patch(this.apiEndPoint+'api/update_scheduled_settlement', patchParams, httpOptions)
      .map(res => res).subscribe(data => {
      resolve(data);
      }, error => {
      resolve(error);
      });
      });
    }

    getScheduleSettlementCustomer(idSettlement:number) {
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
        this.http.get(this.apiEndPoint+'api/get_scheldule_settlements_customer/'+idSettlement, httpOptions)
          .map(res => res).subscribe(data => {
            console.log(data);
            resolve(data);
          }, error => {
            resolve(error);
          });
      });
    }

    getSettlementEstimateCustomer(idCustomer:number, numberPage:number) {
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
        this.http.get(this.apiEndPoint+'api/settlement_estimate_customer?customer_id='+idCustomer+'&&page='+numberPage, httpOptions)
          .map(res => res).subscribe(data => {
            console.log(data);
            resolve(data);
          }, error => {
            resolve(error);
          });
      });
    }

    getSettlementEstimateForklift(idCustomer:number) {
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
        this.http.get(this.apiEndPoint+'api/settlement_estimate_forklift?customer_id='+idCustomer, httpOptions)
          .map(res => res).subscribe(data => {
            console.log(data);
            resolve(data);
          }, error => {
            resolve(error);
          });
      });
    }

    getSettlementCodes() { // Falta implementar desde el backend
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
        this.http.get(this.apiEndPoint+'api/codes_settlement', httpOptions)
          .map(res => res).subscribe(data => {
            console.log(data);
            resolve(data);
          }, error => {
            resolve(error);
          });
      });
    }

    getRegionalSubCenterCost(regionalId: number) { // Falta implementar desde el backend
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
        this.http.get(this.apiEndPoint+'api/get_sub_cost_centers_id/'+regionalId, httpOptions)
          .map(res => res).subscribe(data => {
            console.log(data);
            resolve(data);
          }, error => {
            resolve(error);
          });
      });
    }
    

    copyEstimateToSettlement(settlementId: number, estimateItems:Array<Number>) {
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
        const postParams = {
          settlement_id: settlementId,
          details_id:estimateItems
        };
        this.http.post(this.apiEndPoint+'api/copy_estimate_settlement', postParams, httpOptions)
        .map(res => res).subscribe(data => {
        resolve(data);
        }, error => {
        resolve(error);
        });
        });
      }

      createSettlementDetails(settlement_id: number, code: string, description: string,
        quantity: number, unit_cost: number, price_list: number, price_suggest: number, weight: number,
        price: number, subtotal: number, delivery: number, total: string,
        status: number, type_service: number, weight_type: number, subcenter_id: number, discount: number, fullCode:string) {
        console.log('info de detalle');
        console.log(settlement_id+'-'+ code+'-'+ description+'-'+
          quantity+'-'+ unit_cost+'-'+ price_list+'-'+ price_suggest+'-'+
          price+'-'+ delivery+'-'+ total+'-'+
          status)
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
    settlement_id: settlement_id,
    subcost_center_id: subcenter_id,
    discount: discount,
    code: code,
    full_code:fullCode,
    description: description,
    quantity: quantity,
    unit_cost: unit_cost,
    price_list: price_list,
    price_suggest: price_suggest,
    weight:weight,
    price: price,
    subtotal: subtotal,
    delivery: delivery,
    total: total,
    status:status,
    type_service:type_service,
    weight_type:weight_type
    };
    this.http.post(this.apiEndPoint+'api/create_settlement_detail', postParams, httpOptions)
    .map(res => res).subscribe(data => {
    resolve(data);
    }, error => {
    resolve(error);
    });
    });
    }

  createSettlementDetailsCustomer(settlement_id: number, code: string, description: string,
      quantity: number, unit_cost: number, price_suggest: number, weight: number,
      price: number, subtotal: number, delivery: number, total: string,
      status: number, subcenter_id: number, discount: number, fullCode:string) {
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
  settlement_id: settlement_id,
  subcost_center_id: subcenter_id,
  discount: discount,
  code: code,
  full_code:fullCode,
  description: description,
  quantity: quantity,
  unit_cost: unit_cost,
  price_suggest: price_suggest,
  weight:weight,
  price: price,
  subtotal: subtotal,
  delivery: delivery,
  total: total,
  status:status,
  };
  this.http.post(this.apiEndPoint+'api/create_settlement_detail_customer', postParams, httpOptions)
  .map(res => res).subscribe(data => {
  resolve(data);
  }, error => {
  resolve(error);
  });
  });
  }


    // Organizar api de actualizacion;
    updateSettlementDetails(settlement_id: number, code: string, description: string,
      quantity: number, unit_cost: number, price_list: number, price_suggest: number, weight: number,
      price: number, subtotal: number, delivery: number, total: string,
      status: number, type_service: number, weight_type: number, subcenter_id: number, discount: number, fullCode:string) {
      console.log('info de detalle');
  
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
  const patchParams = {
  code: code,
  description: description,
  quantity: quantity,
  unit_cost: unit_cost,
  price_list: price_list,
  price_suggest: price_suggest,
  weight:weight,
  price: price,
  subtotal: subtotal,
  delivery: delivery,
  total: total,
  status:status,
  type_service:type_service,
  weight_type:weight_type,
  subcost_center_id: subcenter_id,
  discount: discount,
  full_code:fullCode,
  };
  this.http.patch(this.apiEndPoint+'api/update_settlement_details/'+settlement_id, patchParams, httpOptions)
  .map(res => res).subscribe(data => {
  console.log('respuesta');
  resolve(data);
  }, error => {
  resolve(error);
  });
  });
  }






}
