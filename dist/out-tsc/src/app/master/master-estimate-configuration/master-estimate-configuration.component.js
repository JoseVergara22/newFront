"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rest_service_1 = require("../../master-services/Rest/rest.service");
var estimate_service_1 = require("../../master-services/estimate/estimate.service");
var sweetalert2_1 = require("sweetalert2");
var router_1 = require("@angular/router");
var MasterEstimateConfigurationComponent = /** @class */ (function () {
    function MasterEstimateConfigurationComponent(restService, router, estimateService) {
        this.restService = restService;
        this.router = router;
        this.estimateService = estimateService;
        this.submitted = false;
        this.a = 5;
        this.switchCreate = true;
        this.switchUpdate = true;
        this.change = true;
        this.active = false;
        this.inactive = false;
        this.enabledUpdated = false;
        this.filterIndicatorText = false;
        this.filterIndicatorCheck = false;
        this.exam = {
            'active': 1,
            'constant': 0,
            'create_at': "2019-12-09 15:13:29",
            'description': "Usar TRM",
            'estimate_countries_id': 3
        };
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
        var description = new forms_1.FormControl('', forms_1.Validators.required);
        var descriptionUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            description: description
        });
        this.myFormUpdate = new forms_1.FormGroup({
            descriptionUpdate: descriptionUpdate
        });
    }
    MasterEstimateConfigurationComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.restService.getBrands().then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.rowsClient = resp.data;
            _this.rowStatic = resp.data;
            _this.rowsTemp = resp.data;
            console.log(_this.rowsClient);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterEstimateConfigurationComponent.prototype.showShippingCountriesConfig = function (country_id) {
        var _this = this;
        this.estimateService.showShippingCountriesDhlConfig(country_id).then(function (data) {
            var resp = data;
            console.log(data);
            if (country_id === 2) {
                _this.formulaEstimateCuntriesUsa = resp.data;
                console.log('------------');
                console.log(_this.formulaEstimateCuntriesUsa);
                console.log('-----------');
                _this.showFormulaEstimateCuntriesUsa();
            }
            if (country_id === 3) {
                _this.formulaEstimateCuntriesEsp = resp.data;
                _this.showFormulaEstimateCuntriesEsp();
            }
            if (country_id === 4) {
                _this.formulaEstimateCountriesBel = resp.data;
                console.log('informacion de belgica ' + _this.formulaEstimateCountriesBel);
                _this.showFormulaEstimateCuntriesBel();
            }
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterEstimateConfigurationComponent.prototype.showFormulaEstimateCuntriesUsa = function () {
        this.formulaUsaOne = this.formulaEstimateCuntriesUsa[0];
        this.formulaUsaTwo = this.formulaEstimateCuntriesUsa[1];
        this.formulaUsaThird = this.formulaEstimateCuntriesUsa[2];
        this.formulaUsaOnePrice = this.formulaEstimateCuntriesUsa[0].price;
        this.formulaUsaOneManagementVariables = this.formulaEstimateCuntriesUsa[0].management_variables;
        this.formulaUsaOneTariff = this.formulaEstimateCuntriesUsa[0].tariff;
        this.formulaUsaSecondPrice = this.formulaEstimateCuntriesUsa[1].price;
        this.formulaUsaSecondManagementVariables = this.formulaEstimateCuntriesUsa[1].management_variables;
        this.formulaUsaSecondTariff = this.formulaEstimateCuntriesUsa[1].tariff;
        this.formulaUsaThirdPrice = this.formulaEstimateCuntriesUsa[2].price;
        this.formulaUsaThirdManagementVariables = this.formulaEstimateCuntriesUsa[2].management_variables;
        this.formulaUsaThirdTariff = this.formulaEstimateCuntriesUsa[2].tariff;
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
    };
    MasterEstimateConfigurationComponent.prototype.showFormulaEstimateCuntriesEsp = function () {
        this.formulaEspOne = this.formulaEstimateCuntriesEsp[0];
        this.formulaEspTwo = this.formulaEstimateCuntriesEsp[1];
        this.formulaEspThird = this.formulaEstimateCuntriesEsp[2];
        this.formulaEspOnePrice = this.formulaEstimateCuntriesEsp[0].price;
        this.formulaEspOneManagementVariables = this.formulaEstimateCuntriesEsp[0].management_variables;
        this.formulaEspOneTariff = this.formulaEstimateCuntriesEsp[0].tariff;
        this.formulaEspSecondPrice = this.formulaEstimateCuntriesEsp[1].price;
        this.formulaEspSecondManagementVariables = this.formulaEstimateCuntriesEsp[1].management_variables;
        this.formulaEspSecondTariff = this.formulaEstimateCuntriesEsp[1].tariff;
        this.formulaEspThirdPrice = this.formulaEstimateCuntriesEsp[2].price;
        this.formulaEspThirdManagementVariables = this.formulaEstimateCuntriesEsp[2].management_variables;
        this.formulaEspThirdTariff = this.formulaEstimateCuntriesEsp[2].tariff;
    };
    MasterEstimateConfigurationComponent.prototype.showFormulaEstimateCuntriesBel = function () {
        this.formulaBelOne = this.formulaEstimateCountriesBel[0];
        this.formulaBelTwo = this.formulaEstimateCountriesBel[1];
        this.formulaBelThird = this.formulaEstimateCountriesBel[2];
        this.formulaBelOnePrice = this.formulaEstimateCountriesBel[0].price;
        this.formulaBelOneManagementVariables = this.formulaEstimateCountriesBel[0].management_variables;
        this.formulaBelOneTariff = this.formulaEstimateCountriesBel[0].tariff;
        this.formulaBelSecondPrice = this.formulaEstimateCountriesBel[1].price;
        this.formulaBelSecondManagementVariables = this.formulaEstimateCountriesBel[1].management_variables;
        this.formulaBelSecondTariff = this.formulaEstimateCountriesBel[1].tariff;
        this.formulaBelThirdPrice = this.formulaEstimateCountriesBel[2].price;
        this.formulaBelThirdManagementVariables = this.formulaEstimateCountriesBel[2].management_variables;
        this.formulaBelThirdTariff = this.formulaEstimateCountriesBel[2].tariff;
    };
    //  showVariableEstimateConfig
    MasterEstimateConfigurationComponent.prototype.showVariableEstimateConfig = function () {
        var _this = this;
        this.estimateService.showVariableEstimateConfig().then(function (data) {
            var resp = data;
            console.log(data);
            _this.maximumLimit = resp.data[0].constant; //1
            _this.clientMargin = resp.data[1].constant; //2
            _this.thirdService = resp.data[2].constant; //3
            _this.nationalService = resp.data[3].constant; //4
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterEstimateConfigurationComponent.prototype.updateEstimateConfig = function () {
    };
    MasterEstimateConfigurationComponent.prototype.getTrmCurrent = function () {
        var _this = this;
        console.log('oleole');
        this.estimateService.showTrmCurrent().then(function (data) {
            var resp = data;
            console.log('---trm----');
            console.log(data);
            var trm;
            try {
                trm = resp.data.value;
            }
            catch (error) {
                trm = resp.result.value;
            }
            //  let trm = resp.data.value;
            console.log(trm);
            trm = trm.toString().replace('.', ',');
            var trmSecondPart = trm.substring(1);
            var trmFirtsPart = trm.substring(0, 1);
            _this.trmGeneral = trmFirtsPart + '.' + trmSecondPart;
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterEstimateConfigurationComponent.prototype.getConfigUsa = function () {
        var _this = this;
        this.estimateService.showConfigTrm(2).then(function (data) {
            var resp = data;
            console.log('Info de USA');
            console.log(data);
            sweetalert2_1.default.close();
            _this.configUsa = resp.data;
            _this.optionOneUsa = _this.configUsa[0];
            _this.optionSecondUsa = _this.configUsa[1];
            _this.optionThirdUsa = _this.configUsa[2];
            if (_this.optionOneUsa.active === 1) {
                console.log('Entro en 1');
                _this.radioSelectedUsa = 1;
            }
            if (_this.optionSecondUsa.active === 1) {
                console.log('Entro en 2');
                _this.radioSelectedUsa = 2;
            }
            if (_this.optionThirdUsa.active === 1) {
                console.log('Entro en 3');
                _this.radioSelectedUsa = 3;
            }
            _this.trmConstant = _this.optionSecondUsa.constant;
            _this.trmPlusConstant = _this.optionThirdUsa.constant;
            // this.rowsClient = resp.data;
            // this.rowStatic =  resp.data;
            // this.rowsTemp = resp.data;
            // console.log( this.rowsClient);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterEstimateConfigurationComponent.prototype.getConfigEsp = function () {
        var _this = this;
        this.estimateService.showConfigTrm(3).then(function (data) {
            var resp = data;
            console.log('Info de USA');
            console.log(data);
            sweetalert2_1.default.close();
            _this.configEsps = resp.data;
            // this.optionOneEsp= this.configEsps[0];
            _this.itemEsp = _this.configEsps[1];
            _this.constantEsp = _this.itemEsp.constant;
            // this.optionThirdEsp= this.configEsps[2];
            // this.rowsClient = resp.data;
            // this.rowStatic =  resp.data;
            // this.rowsTemp = resp.data;
            // console.log( this.rowsClient);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterEstimateConfigurationComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        if (val === '') {
            console.log('vacio');
            this.filterIndicatorText = false;
            this.rowsTemp = this.rowStatic;
        }
        // this.filterIndicatorCheck = true;
        if (this.inactive === true || this.active === true) {
            this.rowsTemp = this.rowsTempCheck;
        }
        var temp = this.rowsTemp.filter(function (d) {
            return d.description.toLowerCase().indexOf(val) !== -1 || !val;
        });
        if (val !== '') {
            this.filterIndicatorText = true;
            this.rowsTempText = temp;
        }
        // update the rows
        this.rowsClient = temp;
    };
    MasterEstimateConfigurationComponent.prototype.updateFilterActiveInactive = function (active) {
        var val = active;
        // filter our data
        if (this.filterIndicatorText === true) {
            this.rowsTemp = this.rowsTempText;
        }
        else {
            console.log('vacio por este lado');
            this.rowsTemp = this.rowStatic;
        }
        var temp = this.rowsTemp.filter(function (d) {
            return d.status.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        if (this.inactive === true || this.active === true) {
            this.rowsTempCheck = temp;
            this.filterIndicatorCheck = true;
        }
        this.rowsClient = temp;
    };
    MasterEstimateConfigurationComponent.prototype.onChangeCreate = function (check) {
        this.change = check;
        console.log(check);
    };
    MasterEstimateConfigurationComponent.prototype.onChangeUpdate = function (check) {
        this.switchUpdate = check;
        this.enabledUpdated = check;
        console.log(check);
    };
    MasterEstimateConfigurationComponent.prototype.onChangeActive = function (d) {
        var indice;
        if (this.active === false) {
            this.active = true;
            if (this.inactive === true) {
                indice = '';
            }
            else {
                indice = '0';
            }
            this.updateFilterActiveInactive(indice);
        }
        else {
            this.active = false;
            if (this.inactive === true) {
                indice = '1';
            }
            else {
                indice = '';
            }
            this.updateFilterActiveInactive(indice);
        }
    };
    MasterEstimateConfigurationComponent.prototype.onChangeInactive = function (d) {
        var indice;
        if (this.inactive === false) {
            this.inactive = true;
            if (this.active === true) {
                indice = '';
            }
            else {
                indice = '1';
            }
            this.updateFilterActiveInactive(indice);
        }
        else {
            this.inactive = false;
            if (this.active === true) {
                indice = '0';
            }
            else {
                indice = '';
            }
            this.updateFilterActiveInactive(indice);
        }
    };
    MasterEstimateConfigurationComponent.prototype.updateBrand = function (brand) {
        console.log(brand);
        this.currentBrand = brand;
        console.log(this.currentBrand);
        this.myFormUpdate.get('descriptionUpdate').setValue(brand.description);
        if (this.currentBrand.status === '0') {
            this.enabledUpdated = true;
        }
        else {
            this.enabledUpdated = false;
        }
        document.getElementById('uploadBrand').click();
    };
    MasterEstimateConfigurationComponent.prototype.sendBrand = function () {
        var _this = this;
        console.log(localStorage.getItem('token'));
        this.submitted = true;
        if (!this.myForm.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var statusTemp = 0;
            if (this.enabledUpdated === true) {
                statusTemp = 0;
            }
            else {
                statusTemp = 1;
            }
            this.restService.createBrand(this.myForm.get('description').value.toUpperCase(), statusTemp).then(function (data) {
                var resp = data;
                console.log(resp);
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Esta marca ya esta registrada',
                        text: 'Esta marca no se puede registrar',
                        type: 'error'
                    });
                }
                else {
                    _this.myForm.get('description').setValue('');
                    /*swal({
                     title: 'Marca agregada',
                     type: 'success'
                    });*/
                    //   this.router.navigateByUrl('master/registerBrand');
                    document.getElementById('createBrandHide').click();
                    _this.loadingData();
                    sweetalert2_1.default({
                        title: 'Marca agregada',
                        type: 'success'
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    MasterEstimateConfigurationComponent.prototype.sendUpdateBrand = function () {
        var _this = this;
        console.log(this.myFormUpdate.get('descriptionUpdate'));
        console.log(localStorage.getItem('token'));
        this.submitted = true;
        if (!this.myFormUpdate.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var statusTemp = 1;
            if (this.enabledUpdated === true) {
                statusTemp = 0;
            }
            else {
                statusTemp = 1;
            }
            console.log(this.myFormUpdate.get('descriptionUpdate').value.toUpperCase() + ' ' + statusTemp);
            this.restService.updateBrand(Number(this.currentBrand.id), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(), statusTemp)
                .then(function (data) {
                var resp = data;
                console.log(resp);
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Esta marca ya esta actualizada',
                        text: 'Esta marca no se puede actualizar',
                        type: 'error'
                    });
                }
                else {
                    // this.router.navigateByUrl('master/registerBrand');
                    document.getElementById('updateBrandHide').click();
                    _this.loadingData();
                    sweetalert2_1.default({
                        title: 'Marca actualizada',
                        type: 'success'
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    Object.defineProperty(MasterEstimateConfigurationComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterEstimateConfigurationComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    MasterEstimateConfigurationComponent.prototype.deleteBrand = function (brand) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Estás seguro de eliminar este elemento?',
            // text: 'Once deleted, you will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: 'No',
            confirmButtonText: 'Si'
        })
            .then(function (willDelete) {
            if (willDelete.value) {
                _this.elementDelete = brand;
                console.log(brand);
                console.log(_this.elementDelete);
                sweetalert2_1.default.showLoading();
                _this.restService.deleteBrand(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Esta marca presenta problemas',
                            text: 'Esta marca no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        // this.router.navigateByUrl('master/registerBrand');
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Marca eliminada',
                            type: 'success'
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                console.log(_this.elementDelete.id);
            }
            else {
                // swal('Fail');
            }
            console.log(willDelete);
        });
    };
    MasterEstimateConfigurationComponent.prototype.selectUsa = function () {
        console.log(this.radioSelectedUsa);
    };
    MasterEstimateConfigurationComponent.prototype.updateConfigurationTrm = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        var token = localStorage.getItem('username');
        console.log(token);
        var optionOneUsaActive = 0;
        var optionSecondUsaActive = 0;
        var optionThirdUsaActive = 0;
        var logTrm = 'user=' + token + '&&';
        if (this.radioSelectedUsa === 1) {
            optionOneUsaActive = 1;
            logTrm = logTrm + 'configuration=TRM DINAMICA&&value=' + this.changeFormatDecimal(this.trmGeneral) + '&&';
        }
        if (this.radioSelectedUsa === 2) {
            optionSecondUsaActive = 1;
            logTrm = logTrm + 'configuration=TRM FIJA&&value=' + this.trmConstant + '&&';
        }
        if (this.radioSelectedUsa === 3) {
            optionThirdUsaActive = 1;
            logTrm = logTrm + 'configuration=TRM DINAMICA+VALOR&&value=' + this.trmPlusConstant + '&&';
        }
        if (this.constantEsp != this.itemEsp.constant) {
            logTrm = logTrm + 'ingresar_constante&&=' + this.constantEsp;
        }
        console.log(logTrm);
        this.trmCofiguration = this.optionOneUsa.id + '@' + 0 + '@' + optionOneUsaActive + '@' + this.optionSecondUsa.id + '@' + this.trmConstant + '@' +
            optionSecondUsaActive + '@' + this.optionThirdUsa.id + '@' + this.trmPlusConstant + '@' +
            optionThirdUsaActive + '@' + 5 + '@' + this.constantEsp + '@' + 1;
        console.log(this.trmCofiguration);
        this.estimateService.updateConfigTrmFull(this.trmCofiguration).then(function (data) {
            var resp = data;
            console.log(data);
            _this.restService.registerLog(logTrm).then(function (data) {
                var resp = data;
                console.log(data);
                sweetalert2_1.default({
                    title: 'Actualización con exito',
                    type: 'success'
                });
            }).catch(function (error) {
                console.log(error);
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterEstimateConfigurationComponent.prototype.changeFormatDecimal = function (price) {
        console.log('price');
        console.log(price);
        try {
            var priceTempStr = price.toString();
            priceTempStr = priceTempStr.split('.').join('');
            var priceTemp = priceTempStr.replace(',', '.');
            console.log('precio decimal --- ' + priceTemp);
            return priceTemp;
        }
        catch (error) {
            console.log('error--- ' + error);
        }
    };
    MasterEstimateConfigurationComponent.prototype.updateConfigurationVariables = function () {
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.variablesConfiguration = this.variablesConfiguration = 1 + '@' + this.maximumLimit + '@' + 2 + '@'
            + this.clientMargin + '@' + 3 + '@' + this.thirdService + '@' + 4 + '@' + this.nationalService;
        console.log(this.trmCofiguration);
        this.estimateService.updateConfigVariablesFull(this.variablesConfiguration).then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default({
                title: 'Actualización con exito',
                type: 'success'
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterEstimateConfigurationComponent.prototype.updateFormulasConfiguration = function () {
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.formulasConfiguration = this.formulaUsaOne.id + '@' + this.formulaUsaOnePrice + '@' + this.formulaUsaOneManagementVariables + '@' + this.formulaUsaOneTariff + '@' +
            this.formulaUsaTwo.id + '@' + this.formulaUsaSecondPrice + '@' + this.formulaUsaSecondManagementVariables + '@' + this.formulaUsaSecondTariff + '@' +
            this.formulaUsaThird.id + '@' + this.formulaUsaThirdPrice + '@' + this.formulaUsaThirdManagementVariables + '@' + this.formulaUsaThirdTariff + '@' +
            this.formulaEspOne.id + '@' + this.formulaEspOnePrice + '@' + this.formulaEspOneManagementVariables + '@' + this.formulaEspOneTariff + '@' +
            this.formulaEspTwo.id + '@' + this.formulaEspSecondPrice + '@' + this.formulaEspSecondManagementVariables + '@' + this.formulaEspSecondTariff + '@' +
            this.formulaEspThird.id + '@' + this.formulaEspThirdPrice + '@' + this.formulaEspThirdManagementVariables + '@' + this.formulaEspThirdTariff + '@' +
            this.formulaBelOne.id + '@' + this.formulaBelOnePrice + '@' + this.formulaBelOneManagementVariables + '@' + this.formulaBelOneTariff + '@' +
            this.formulaBelTwo.id + '@' + this.formulaBelSecondPrice + '@' + this.formulaBelSecondManagementVariables + '@' + this.formulaBelSecondTariff + '@' +
            this.formulaBelThird.id + '@' + this.formulaBelThirdPrice + '@' + this.formulaBelThirdManagementVariables + '@' + this.formulaBelThirdTariff;
        /*=1+'@'+this.maximumLimit+'@'+2+'@'
        +this.clientMargin+'@'+3+'@'+this.thirdService+'@'+4+'@'+this.nationalService;*/
        console.log(this.formulasConfiguration);
        this.estimateService.updateConfigFormulasFull(this.formulasConfiguration).then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default({
                title: 'Actualización con exito',
                type: 'success'
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterEstimateConfigurationComponent.prototype.selectEsp = function () {
        // console.log(this.radioSelectedEsp);
    };
    MasterEstimateConfigurationComponent.prototype.ngOnInit = function () {
    };
    MasterEstimateConfigurationComponent.prototype.blockAgents = function (vadr) {
        console.log(vadr);
    };
    MasterEstimateConfigurationComponent = __decorate([
        core_1.Component({
            selector: 'app-master-estimate-configuration',
            templateUrl: './master-estimate-configuration.component.html',
            styleUrls: ['./master-estimate-configuration.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router,
            estimate_service_1.EstimateService])
    ], MasterEstimateConfigurationComponent);
    return MasterEstimateConfigurationComponent;
}());
exports.MasterEstimateConfigurationComponent = MasterEstimateConfigurationComponent;
//# sourceMappingURL=master-estimate-configuration.component.js.map