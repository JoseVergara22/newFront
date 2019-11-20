import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../../master-services/Rest/rest.service';
import { EstimateService } from '../../master-services/estimate/estimate.service';

import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-estimate-customer',
  templateUrl: './master-estimate-customer.component.html',
  styleUrls: ['./master-estimate-customer.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterEstimateCustomerComponent implements OnInit {
  myForm: FormGroup;
  myFormUpdate: FormGroup;
  submitted = false;
  submittedUpdate = false;
  rowsClient: any;
  rowsTemp: any;
  rowStatic: any;
  rows: any;
  a: any = 5;
  kilo: any;
  elementDelete: any;
  freightGeneral;

  switchCreate = true;
  switchUpdate = true;
  change = true;
  active = false;
  inactive = false;
  enabledUpdated = false;

  filterIndicatorText = false;
  filterIndicatorCheck = false;

  rowsTempCheck: any;
  rowsTempText: any;

  currentCountry: any;
  selectedEstimateCountryId :any=0;
  estimateCountries: any;
 
  currentCountryText:any;

  quantity = 1;
  unitCost  = 0;
  weight  = 0;
  weightTypeList  = 0;
  priceList  = 0;
  suggestedPrice  = 0;
  price  = 0;
  subtotal  = 0;
  code='';
  description='';

  managementVariables=0;
  finalWeight=0;
  showShippingCountriesDhlFilter: any;
  operationItemResult=0;
  conditionValidation=0;
  salePrice=0;
  costTotalGlobal=0;
  costPesosGlobal=0;
  
  constructor(private restService: RestService, private router: Router, private estimateService: EstimateService) {
  console.log('------------------');
    this.showShippingCountriesDhlInitial();
    // this.showCountryWeight();

    this.loadingData();

    const weight = new FormControl('', Validators.required);
    const price = new FormControl('', Validators.required);
    

    const weightUpdate = new FormControl('', Validators.required);
    const priceUpdate = new FormControl('', Validators.required);


    this.myForm = new FormGroup({
      weight: weight,
      price:price
    });

    this.myFormUpdate = new FormGroup({
      weightUpdate: weightUpdate,
      priceUpdate:priceUpdate
    });
   }


   loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.estimateService.getEstimateCountries().then(data => {
      const resp: any = data;
      this.estimateCountries = resp.data;
      swal.close();
    }).catch(error => {
      console.log(error);
    });

    
   }

   sendPriceCountries() {
    console.log(localStorage.getItem('token'));
    this.submitted = true;
   if ( !this.myForm.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();


    this.estimateService.createPriceCountries(Number(this.selectedEstimateCountryId.id),
                                              this.myForm.get('weight').value.toUpperCase(),
                                      this.myForm.get('price').value.toUpperCase()).then(data => {
      const resp: any = data;
      console.log(resp);
      if (resp.success === false) {
        swal({
          title: 'Este peso ya esta registrado',
          text: 'Este peso no se puede registrar',
          type: 'error'
         });
      } else {
        this.myForm.get('weight').setValue('');
        this.myForm.get('price').setValue('');
     /*swal({
      title: 'Marca agregada',
      type: 'success'
     });*/
   //   this.router.navigateByUrl('master/registerBrand');

   document.getElementById( 'createCountryHide').click();
   this.ChangingValue();
   swal({
    title: 'País agregado',
    type: 'success'
   });
    }
    }).catch(error => {
      console.log(error);
    });
    }
  }

  ChangingValue(){
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log('--------------');
    this.currentCountryText= this.selectedEstimateCountryId.name;
    console.log('-----*******---------');
    console.log( this.currentCountryText);
    console.log(this.selectedEstimateCountryId.id);
    this.estimateService.getPriceDhlCountry(Number(this.selectedEstimateCountryId.id)).then(data => {
      const resp: any = data;
      console.log(data);
      this.rowsClient = resp.data;
      swal.close();
    }).catch(error => {
      console.log(error);
    });
  }

  sendUpdatePriceCountries() {
    this.submittedUpdate = true;
   if ( !this.myFormUpdate.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log('-----------------');
    console.log(Number(this.currentCountry.id)+'-'+ Number(this.myFormUpdate.get('weightUpdate').value)+'-'+Number(this.myFormUpdate.get('priceUpdate').value));
    console.log('----------------------');
    this.estimateService.updatePriceCountries(Number(this.currentCountry.id),
    Number(this.myFormUpdate.get('weightUpdate').value),
    Number(this.myFormUpdate.get('priceUpdate').value))
    .then(data => {
      const resp: any = data;
      console.log(resp);
      if (resp.error) {
        swal({
          title: 'Esta país ya esta registrado',
          text: 'Este país no se puede actualizar',
          type: 'error'
         });
      } else {
     // this.router.navigateByUrl('master/registerBrand');
     document.getElementById( 'updateCountryHide').click();
     this.ChangingValue();
     swal({
      title: 'Marca actualizada',
      type: 'success'
     });
    }
    }).catch(error => {
      console.log(error);
    });
    }
  }

  get checkForm() { return this.myForm.controls; }
  get checkFormUpdate() { return this.myFormUpdate.controls; }



  updatePriceCountry(estimatePriceCountry) {
    console.log(estimatePriceCountry);
    this.currentCountry = estimatePriceCountry;
    console.log( this.currentCountry );
    this.myFormUpdate.get('weightUpdate').setValue(estimatePriceCountry.weight);
    this.myFormUpdate.get('priceUpdate').setValue(estimatePriceCountry.price);
    document.getElementById( 'uploadCountry').click();
  }
  deletePriceCountry(country: any) {
    swal({
      title: 'Estás seguro de eliminar este elemento?',
     // text: 'Once deleted, you will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Si'

    })
    .then((willDelete) => {
        if (willDelete.value) {
          this.elementDelete = country;
          console.log(country);
          console.log(    this.elementDelete);
          swal.showLoading();
          this.estimateService.deletePriceCountries(Number(this.elementDelete.id))
          .then(data => {
            swal.showLoading();
            const resp: any = data;
            console.log(resp);

            if (resp.success === false) {
              swal({
                title: 'Este peso presenta problemas',
                text: 'Este peso no se puede eliminar',
                type: 'error'
               });
            } else {
           // this.router.navigateByUrl('master/registerBrand');
           this.ChangingValue();
           swal({
            title: 'Peso eliminada',
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

  calculateFreight(weight: number, price: number) {

    if(this.weightTypeList==1){
    weight=weight*2;
    }

weight=weight*this.quantity;
price=price*this.quantity;

let vInput = weight;
let b = Math.trunc(vInput);
let c = vInput%b;
let result=0;

if( c>0){
  if(c>0.50){
    result=b+1;
  }else{
    result=b+0.50;
  }
}else{
   result=b;
}

console.log(c);
console.log(b);
console.log(result); // Este es el valor redondeado;

// Precio<1000usd && Peso<45k
// Precio>=1000 usd  && Precio <1999 && Peso<45
// Precio>=2000 || Peso>45

  console.log('peso: '+result+' precio: '+price);



if ( price < 1000 && result < 45) {
  this.conditionValidation = 1;

} else if (price >= 1000   && price < 1999 && result < 45) {
  this.conditionValidation = 2;

} else if (price >= 2000 || result >=45) {
  this.conditionValidation = 3;
}

console.log('condición final: '+this.conditionValidation);
this.finalWeight=result;
this.showShippingCountriesDhl(this.conditionValidation,this.priceList, result);




console.log('Importante informacion: '+ this.conditionValidation);

//Consumir api para cargar shipping_price_ranges
//Consumir DHL

//Hacer vista de configuración
//Consumo de api, para el TRM



 }


  ngOnInit() {
  }

  blockAgents( vadr: any) {
   console.log(vadr);
  }

  showShippingCountriesDhlInitial(){
    this.estimateService.showShippingCountriesDhl().then(data => {
      const resp: any = data;
      console.log(data);
    this.showShippingCountriesDhlFilter=resp.data;
      swal.close();
    }).catch(error => {
      console.log(error);
    });
  }



showShippingCountriesDhl(conditionValidation:number ,country:number,weight: number){
  console.log(conditionValidation);
  console.log(country);
   let priceTemp=0;
  
for (let item of  this.showShippingCountriesDhlFilter) {
console.log(country+'-'+item.estimate_countries_id+'-'+item.conexion_id_validation_front+'-'+conditionValidation);
    if(item.estimate_countries_id==country && item.conexion_id_validation_front==conditionValidation){
      priceTemp=item.price;
      this.managementVariables=item.management_variables;
      console.log('-----');
      console.log('--------Entro');
    }

    }

    if(priceTemp==0){
    console.log('Toca buscar el valor en tabla');
    this.showCountryWeight(country,weight);

    }else{
      console.log('este es el valor: '+priceTemp);
      this.freightGeneral=priceTemp;
       console.log( this.freightGeneral);
        this.finalOperation();
    }


   }


  showCountryWeight(country:number, weight: number){

    console.log('-------ole ole---'+weight);
    this.estimateService.showCountryWeight(country, weight).then(data => {
      const resp: any = data;
      console.log(data);
       this.freightGeneral = resp.data[0].price;
       console.log( this.freightGeneral);
       this.finalOperation();
      swal.close();
    }).catch(error => {
      console.log(error);
    });
  }

  calculateFreightValues(){
    console.log(this.unitCost+'-'+ this.weight+'-'+ this.weightTypeList+'-'+  this.priceList);
    if(this.unitCost!==0 && this.weight!==0 && this.weightTypeList!==0 && this.priceList!==0 && this.quantity!==0){
      this.calculateFreight(this.weight, this.unitCost);
    }
    console.log(this.weight);
  }

  
finalOperation(){

  //Variables necesarias para  el calculo
  // this.freightGeneral  this.managementVariables this.finalWeight
  console.log('Ingreso hasta aquí');
   let drivingCost=0;

  if(this.conditionValidation==3){
    drivingCost=this.managementVariables;
   
  }else{
    drivingCost=this.unitCost*Number(this.managementVariables);
  }

  let operationFreight=0;
  if(this.conditionValidation==2){
     operationFreight = this.freightGeneral;
  }else{
     operationFreight = this.freightGeneral*this.finalWeight;
  }

  console.log('driving '+drivingCost);
  // let operationFreight = this.freightGeneral*this.finalWeight;
  console.log('operation '+ this.freightGeneral);

  this.costTotalGlobal=  Number(this.unitCost) +  Number(operationFreight) +  Number(drivingCost);
  console.log(this.costTotalGlobal);
  console.log('Costo total '+ this.unitCost+'-'+operationFreight+'-'+drivingCost);
 
  let dolar=3500; //llamar api medata
  let costPesos=this.costTotalGlobal*dolar;
  this.costPesosGlobal= costPesos;
  let margin=0.20; // llamar api para cada usuario y configurar clientes que no existan
  this.salePrice=costPesos/(1-margin);
}

}
