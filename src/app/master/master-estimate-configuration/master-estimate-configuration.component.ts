import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../../master-services/Rest/rest.service';
import { EstimateService } from '../../master-services/estimate/estimate.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-master-estimate-configuration',
  templateUrl: './master-estimate-configuration.component.html',
  styleUrls: ['./master-estimate-configuration.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterEstimateConfigurationComponent implements OnInit {
  myForm: FormGroup;
  myFormUpdate: FormGroup;
  submitted = false;
  rowsClient: any;
  rowsTemp: any;
  rowStatic: any;
  rows: any;
  a: any = 5;
  kilo: any;
  elementDelete: any;

  switchCreate = true;
  switchUpdate = true;
  change = true;
  active = false;
  inactive = false;
  enabledUpdated = false;
  configUsa:any;
  configEsps:any;

  filterIndicatorText = false;
  filterIndicatorCheck = false;

  rowsTempCheck: any;
  rowsTempText: any;

  currentBrand: any;
  radioSelectedUsa:any;
  itemEsp:any;
  constantEsp:any;

  activeConfigUsa:any;
  trmGeneral:any;

  exam={
    'active': 1,
    'constant': 0,
    'create_at': "2019-12-09 15:13:29",
    'description': "Usar TRM",
    'estimate_countries_id': 3
  }
  optionOneUsa:any;
  optionSecondUsa:any;
  optionThirdUsa:any;

  maximumLimit:any;
  clientMargin:any;
  thirdService:any;
  nationalService:any;

  optionOneEsp:any;
  optionSecondEsp:any;
  optionThirdEsp:any;
  IsChecked:true;


  formulaEstimateCuntriesUsa:any;
  formulaEstimateCuntriesEsp:any;
  formulaEstimateCountriesBel:any;

  trmCofiguration:string;
  variablesConfiguration:string;
  formulasConfiguration:string;

  trmConstant;
  trmPlusConstant;

  formulaUsaOne:any;
  formulaUsaTwo:any;
  formulaUsaThird:any;

  formulaEspOne:any;
  formulaEspTwo:any;
  formulaEspThird:any;

  formulaBelOne:any;
  formulaBelTwo:any;
  formulaBelThird:any;

  formulaUsaOnePrice:any;
  formulaUsaOneManagementVariables:any;
  formulaUsaOneTariff:any;
  formulaUsaSecondPrice:any;
  formulaUsaSecondManagementVariables:any;
  formulaUsaSecondTariff:any;
  formulaUsaThirdPrice:any;
  formulaUsaThirdManagementVariables:any;
  formulaUsaThirdTariff:any;

  formulaEspOnePrice:any;
  formulaEspOneManagementVariables:any;
  formulaEspOneTariff:any;
  formulaEspSecondPrice:any;
  formulaEspSecondManagementVariables:any;
  formulaEspSecondTariff:any;
  formulaEspThirdPrice:any;
  formulaEspThirdManagementVariables:any;
  formulaEspThirdTariff:any;

  formulaBelOnePrice:any;
  formulaBelOneManagementVariables:any;
  formulaBelOneTariff:any;
  formulaBelSecondPrice:any;
  formulaBelSecondManagementVariables:any;
  formulaBelSecondTariff:any;
  formulaBelThirdPrice:any;
  formulaBelThirdManagementVariables:any;
  formulaBelThirdTariff:any;

  constructor(private restService: RestService, private router: Router,
              private estimateService:EstimateService) {
  /*  swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.restService.getBrands().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.rowsClient = resp.data;
      this.rowStatic =  resp.data;
      this.rowsTemp = resp.data;
      console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });*/
   // this.optionSecondUsa=this.exam;
    this.loadingData();
    this.getConfigUsa();
    this.getConfigEsp();


    // formulas de los paises
    this.showShippingCountriesConfig(2);
    this.showShippingCountriesConfig(3);
    this.showShippingCountriesConfig(4);


    this.showVariableEstimateConfig();

    this.getTrmCurrent();

    // Este es el active

    const description = new FormControl('', Validators.required);
    const descriptionUpdate = new FormControl('', Validators.required);


    this.myForm = new FormGroup({
      description: description
    });

    this.myFormUpdate = new FormGroup({
      descriptionUpdate: descriptionUpdate
    });
   }


   loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.restService.getBrands().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.rowsClient = resp.data;
      this.rowStatic =  resp.data;
      this.rowsTemp = resp.data;
      console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
   }

   showShippingCountriesConfig(country_id:number){
    this.estimateService.showShippingCountriesDhlConfig(country_id).then(data => {
      const resp: any = data;
      console.log(data);

      if(country_id===2){
        this.formulaEstimateCuntriesUsa=resp.data; 
        console.log('------------');
        console.log(this.formulaEstimateCuntriesUsa);
        console.log('-----------');
        this.showFormulaEstimateCuntriesUsa();
      }

      if(country_id===3){
        this.formulaEstimateCuntriesEsp=resp.data;
        this.showFormulaEstimateCuntriesEsp();
      }

      if(country_id===4){
        this.formulaEstimateCountriesBel=resp.data;
        this. showFormulaEstimateCuntriesBel();
      }
   
      swal.close();
    }).catch(error => {
      console.log(error);
    });
  }

  showFormulaEstimateCuntriesUsa(){
    this.formulaUsaOne = this.formulaEstimateCuntriesUsa[0];
    this.formulaUsaTwo =  this.formulaEstimateCuntriesUsa[1];
    this.formulaUsaThird =  this.formulaEstimateCuntriesUsa[2];

    this.formulaUsaOnePrice = this.formulaEstimateCuntriesUsa[0].price;
    this.formulaUsaOneManagementVariables = this.formulaEstimateCuntriesUsa[0].management_variables;
    this.formulaUsaOneTariff = this.formulaEstimateCuntriesUsa[0].tariff;
    this.formulaUsaSecondPrice = this.formulaEstimateCuntriesUsa[1].price;
    this.formulaUsaSecondManagementVariables = this.formulaEstimateCuntriesUsa[1].management_variables;
    this.formulaUsaSecondTariff =  this.formulaEstimateCuntriesUsa[1].tariff; 
    this.formulaUsaThirdPrice = this.formulaEstimateCuntriesUsa[2].price;
    this.formulaUsaThirdManagementVariables  = this.formulaEstimateCuntriesUsa[2].management_variables;
    this.formulaUsaThirdTariff =  this.formulaEstimateCuntriesUsa[2].tariff; 

    /*
    this.formulaEspOnePrice
    this.formulaEspOneManagement_variables
    this.formulaEspOneTariff
    this.formulaEspSecondPrice
    this.formulaEspSecondManagement_variables
    this.formulaEspSecondTariff
    this.formulaEspThirdPrice
    this.formulaEspThirdManagement_variables
    this.formulaEspThirdTariff

    this.formulaBelOnePrice
    this.formulaBelOneManagement_variables
    this.formulaBelOneTariff
    this.formulaBelSecondPrice
    this.formulaBelSecondManagement_variables
    this.formulaBelSecondTariff
    this.formulaBelThirdPrice
    this.formulaBelThirdManagement_variables
    this.formulaBelThirdTariff
   */
  }


  showFormulaEstimateCuntriesEsp(){
    this.formulaEspOne = this.formulaEstimateCuntriesEsp[0];
    this.formulaEspTwo =  this.formulaEstimateCuntriesEsp[1];
    this.formulaEspThird =  this.formulaEstimateCuntriesEsp[2];

    this.formulaEspOnePrice = this.formulaEstimateCuntriesEsp[0].price;
    this.formulaEspOneManagementVariables = this.formulaEstimateCuntriesEsp[0].management_variables;
    this.formulaEspOneTariff = this.formulaEstimateCuntriesEsp[0].tariff;
    this.formulaEspSecondPrice = this.formulaEstimateCuntriesEsp[1].price;
    this.formulaEspSecondManagementVariables = this.formulaEstimateCuntriesEsp[1].management_variables;
    this.formulaEspSecondTariff =  this.formulaEstimateCuntriesEsp[1].tariff; 
    this.formulaEspThirdPrice = this.formulaEstimateCuntriesEsp[2].price;
    this.formulaEspThirdManagementVariables  = this.formulaEstimateCuntriesEsp[2].management_variables;
    this.formulaEspThirdTariff =  this.formulaEstimateCuntriesEsp[2].tariff; 
  }


  showFormulaEstimateCuntriesBel(){
   
    this.formulaBelOne = this. formulaEstimateCountriesBel[0];
    this.formulaBelTwo =  this. formulaEstimateCountriesBel[1];
    this.formulaBelThird =  this. formulaEstimateCountriesBel[2];

    this.formulaBelOnePrice = this. formulaEstimateCountriesBel[0].price;
    this.formulaBelOneManagementVariables = this. formulaEstimateCountriesBel[0].management_variables;
    this.formulaBelOneTariff = this. formulaEstimateCountriesBel[0].tariff;
    this.formulaBelSecondPrice = this. formulaEstimateCountriesBel[1].price;
    this.formulaBelSecondManagementVariables = this. formulaEstimateCountriesBel[1].management_variables;
    this.formulaBelSecondTariff =  this. formulaEstimateCountriesBel[1].tariff; 
    this.formulaBelThirdPrice = this. formulaEstimateCountriesBel[2].price;
    this.formulaBelThirdManagementVariables  = this. formulaEstimateCountriesBel[2].management_variables;
    this.formulaBelThirdTariff =  this. formulaEstimateCountriesBel[2].tariff; 
  }

//  showVariableEstimateConfig
showVariableEstimateConfig(){
  this.estimateService.showVariableEstimateConfig().then(data => {
    const resp: any = data;
    console.log(data);
    
    this.maximumLimit= resp.data[0].constant;//1
    this.clientMargin=  resp.data[1].constant;//2
    this.thirdService=  resp.data[2].constant;//3
    this.nationalService=  resp.data[3].constant;//4

    swal.close();
  }).catch(error => {
    console.log(error);
  });
}

updateEstimateConfig(){

}

getTrmCurrent() {
  console.log('oleole');
  this.estimateService.showTrmCurrent().then(data => {
    const resp: any = data;
    console.log('---trm----');
    console.log(data);
    let trm = resp.data.value;
    console.log(trm);
    trm = trm.toString().replace('.',',');
    let trmSecondPart =trm.substring(1);
    let trmFirtsPart = trm.substring(0, 1);
    this.trmGeneral= trmFirtsPart+'.'+trmSecondPart;
    swal.close();
  }).catch(error => {
    console.log(error);
  });
}


   getConfigUsa() {
    this.estimateService.showConfigTrm(2).then(data => {
      const resp: any = data;
      console.log('Info de USA');
      console.log(data);
      swal.close();
      this.configUsa  = resp.data;
      this.optionOneUsa= this.configUsa[0];
      this.optionSecondUsa= this.configUsa[1];
      this.optionThirdUsa= this.configUsa[2];


      if(this.optionOneUsa.active===1){
        console.log('Entro en 1');
        this.radioSelectedUsa=1;
      }
      if(this.optionSecondUsa.active===1){
        console.log('Entro en 2');
        this.radioSelectedUsa=2;
      }
      if(this.optionThirdUsa.active===1){
        console.log('Entro en 3');
        this.radioSelectedUsa=3;
      }

      this.trmConstant=  this.optionSecondUsa.constant;
      this.trmPlusConstant=  this.optionThirdUsa.constant;
      // this.rowsClient = resp.data;
      // this.rowStatic =  resp.data;
      // this.rowsTemp = resp.data;
      // console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
   }

   getConfigEsp() {
    this.estimateService.showConfigTrm(3).then(data => {
      const resp: any = data;
      console.log('Info de USA');
      console.log(data);
      swal.close();
      this.configEsps  = resp.data;
      // this.optionOneEsp= this.configEsps[0];
      this.itemEsp= this.configEsps[1];
      this.constantEsp=this.itemEsp.constant;
      // this.optionThirdEsp= this.configEsps[2];

      // this.rowsClient = resp.data;
      // this.rowStatic =  resp.data;
      // this.rowsTemp = resp.data;
      // console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
   }

   updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data

    if (val === '') {
      console.log('vacio');
      this.filterIndicatorText = false;
      this.rowsTemp = this.rowStatic;
    }

    // this.filterIndicatorCheck = true;
    if (this.inactive === true ||  this.active === true) {
      this.rowsTemp = this.rowsTempCheck;
    }
    const temp = this.rowsTemp.filter(function(d) {
      return d.description.toLowerCase().indexOf(val) !== -1 || !val;
    });

    if (val !== '') {
      this.filterIndicatorText = true;
      this.rowsTempText = temp;
    }

    // update the rows
    this.rowsClient = temp;

  }


  updateFilterActiveInactive(active: string) {
    const val = active;

    // filter our data

    if (this.filterIndicatorText === true) {
      this.rowsTemp = this.rowsTempText;
    } else {
      console.log('vacio por este lado');
      this.rowsTemp = this.rowStatic;
    }

    const temp = this.rowsTemp.filter(function(d) {
      return d.status.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows

    if (this.inactive === true ||  this.active === true) {
      this.rowsTempCheck = temp;
      this.filterIndicatorCheck = true;
    }

    this.rowsClient = temp;
  }


  onChangeCreate(check: any) {
   this.change = check;
    console.log(check);
  }

  onChangeUpdate(check: any) {
    this.switchUpdate = check;
    this.enabledUpdated = check;

    console.log(check);
  }

  onChangeActive(d) {
    let indice;
    if (this.active === false ) {
      this.active = true;
      if (this.inactive === true ) {
        indice = '';
      } else {
        indice = '0';
      }
      this.updateFilterActiveInactive(indice);
    } else {
      this.active = false;
      if (this.inactive === true ) {
        indice = '1';
      } else {
        indice = '';
      }
      this.updateFilterActiveInactive(indice);
    }
  }


  onChangeInactive(d) {
    let indice;
    if (this.inactive === false ) {
      this.inactive = true;
      if (this.active === true ) {
        indice = '';
      } else {
        indice = '1';
      }
      this.updateFilterActiveInactive(indice);
    } else {
      this.inactive = false;
      if (this.active === true ) {
        indice = '0';
      } else {
        indice = '';
      }
      this.updateFilterActiveInactive(indice);
    }
  }

updateBrand(brand) {
  console.log(brand);
  this.currentBrand = brand;
  console.log( this.currentBrand );
  this.myFormUpdate.get('descriptionUpdate').setValue(brand.description);
  if (this.currentBrand.status === '0') {
    this.enabledUpdated = true;
  } else {
    this.enabledUpdated = false;
  }

  document.getElementById( 'uploadBrand').click();

}

   sendBrand() {
    console.log(localStorage.getItem('token'));
    this.submitted = true;
   if ( !this.myForm.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let statusTemp = 0;
    if (this.enabledUpdated === true) {
      statusTemp = 0;
    } else {
      statusTemp = 1;
    }
    this.restService.createBrand(this.myForm.get('description').value.toUpperCase(), statusTemp).then(data => {
      const resp: any = data;
      console.log(resp);
      if (resp.success === false) {
        swal({
          title: 'Esta marca ya esta registrada',
          text: 'Esta marca no se puede registrar',
          type: 'error'
         });
      } else {
        this.myForm.get('description').setValue('');
     /*swal({
      title: 'Marca agregada',
      type: 'success'
     });*/
   //   this.router.navigateByUrl('master/registerBrand');

   document.getElementById( 'createBrandHide').click();
   this.loadingData();
   swal({
    title: 'Marca agregada',
    type: 'success'
   });
    }
    }).catch(error => {
      console.log(error);
    });
    }
  }

  sendUpdateBrand() {
    console.log(this.myFormUpdate.get('descriptionUpdate'));
    console.log(localStorage.getItem('token'));
    this.submitted = true;
   if ( !this.myFormUpdate.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let statusTemp = 1;
    if (this.enabledUpdated === true) {
      statusTemp = 0;
    } else {
      statusTemp = 1;
    }
    console.log(this.myFormUpdate.get('descriptionUpdate').value.toUpperCase() + ' ' + statusTemp);
    this.restService.updateBrand(Number(this.currentBrand.id), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(), statusTemp)
    .then(data => {
      const resp: any = data;
      console.log(resp);
      if (resp.success === false) {
        swal({
          title: 'Esta marca ya esta actualizada',
          text: 'Esta marca no se puede actualizar',
          type: 'error'
         });
      } else {
     // this.router.navigateByUrl('master/registerBrand');
     document.getElementById( 'updateBrandHide').click();
     this.loadingData();
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


  deleteBrand(brand: any) {
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
          this.elementDelete = brand;
          console.log(brand);
          console.log(    this.elementDelete);
          swal.showLoading();
          this.restService.deleteBrand(Number(this.elementDelete.id))
          .then(data => {
            swal.showLoading();
            const resp: any = data;
            console.log(resp);

            if (resp.success === false) {
              swal({
                title: 'Esta marca presenta problemas',
                text: 'Esta marca no se puede eliminar',
                type: 'error'
               });
            } else {
           // this.router.navigateByUrl('master/registerBrand');
           this.loadingData();
           swal({
            title: 'Marca eliminada',
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


  selectUsa(){
    console.log(this.radioSelectedUsa);
  }

  updateConfigurationTrm(){
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let optionOneUsaActive=0;
    let optionSecondUsaActive=0;
    let optionThirdUsaActive=0;

    if(this.radioSelectedUsa===1){
      optionOneUsaActive=1;
    }
    if(this.radioSelectedUsa===2){
      optionSecondUsaActive=1;
    }
    if(this.radioSelectedUsa===3){
      optionThirdUsaActive=1;
    }

    this.trmCofiguration= this.optionOneUsa.id+'@'+0+'@'+optionOneUsaActive+'@'+this.optionSecondUsa.id+'@'+this.trmConstant+'@'+
                          optionSecondUsaActive+'@'+ this.optionThirdUsa.id+'@'+this.trmPlusConstant+'@'+
                          optionThirdUsaActive+'@'+5+'@'+this.constantEsp+'@'+1;
                          
    console.log(this.trmCofiguration);

    this.estimateService.updateConfigTrmFull(this.trmCofiguration).then(data => {
      const resp: any = data;
      console.log(data);
      swal({
        title: 'Actualización con exito',
        type: 'success'
       });
    }).catch(error => {
      console.log(error);
    });
  }


  updateConfigurationVariables(){
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.variablesConfiguration=  this.variablesConfiguration=1+'@'+this.maximumLimit+'@'+2+'@'
    +this.clientMargin+'@'+3+'@'+this.thirdService+'@'+4+'@'+this.nationalService;
                          
    console.log(this.trmCofiguration);

    this.estimateService.updateConfigVariablesFull(this.variablesConfiguration).then(data => {
      const resp: any = data;
      console.log(data);
      swal({
        title: 'Actualización con exito',
        type: 'success'
       });
    }).catch(error => {
      console.log(error);
    });
  }


  updateFormulasConfiguration(){
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    
    this.formulasConfiguration = this.formulaUsaOne.id+'@'+this.formulaUsaOnePrice+'@'+ this.formulaUsaOneManagementVariables+'@'+this.formulaUsaOneTariff+'@'+
    this.formulaUsaTwo.id+'@'+this.formulaUsaSecondPrice+'@'+ this.formulaUsaSecondManagementVariables+'@'+this.formulaUsaSecondTariff+'@'+
    this.formulaUsaThird.id+'@'+this.formulaUsaThirdPrice+'@'+ this.formulaUsaThirdManagementVariables+'@'+this.formulaUsaThirdTariff+'@'+
    this.formulaEspOne.id+'@'+this.formulaEspOnePrice+'@'+ this.formulaEspOneManagementVariables+'@'+this.formulaEspOneTariff+'@'+
    this.formulaEspTwo.id+'@'+this.formulaEspSecondPrice+'@'+ this.formulaEspSecondManagementVariables+'@'+this.formulaEspSecondTariff+'@'+
    this.formulaEspThird.id+'@'+this.formulaEspThirdPrice+'@'+ this.formulaEspThirdManagementVariables+'@'+this.formulaEspThirdTariff+'@'+
    this.formulaEspOne.id+'@'+this.formulaBelOnePrice+'@'+ this.formulaBelOneManagementVariables+'@'+this.formulaBelOneTariff+'@'+
    this.formulaBelTwo.id+'@'+this.formulaBelSecondPrice+'@'+ this.formulaBelSecondManagementVariables+'@'+this.formulaBelSecondTariff+'@'+
    this.formulaBelThird.id+'@'+this.formulaBelThirdPrice+'@'+ this.formulaBelThirdManagementVariables+'@'+this.formulaBelThirdTariff;                           
    
    /*=1+'@'+this.maximumLimit+'@'+2+'@'
    +this.clientMargin+'@'+3+'@'+this.thirdService+'@'+4+'@'+this.nationalService;*/
                          
    console.log(this.formulasConfiguration);

    this.estimateService.updateConfigFormulasFull(this.formulasConfiguration).then(data => {
      const resp: any = data;
      console.log(data);
      swal({
        title: 'Actualización con exito',
        type: 'success'
       });
    }).catch(error => {
      console.log(error);
    });
  }


  selectEsp(){
   // console.log(this.radioSelectedEsp);
  }

  ngOnInit() {
  }

  blockAgents( vadr: any) {
   console.log(vadr);
  }

}