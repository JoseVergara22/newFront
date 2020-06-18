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
var MasterEstimateCountriesComponent = /** @class */ (function () {
    function MasterEstimateCountriesComponent(restService, router, estimateService) {
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
        this.restService = restService;
        this.router = router;
        this.estimateService = estimateService;
        this.submitted = false;
        this.submittedUpdate = false;
        this.a = 5;
        this.switchCreate = true;
        this.switchUpdate = true;
        this.change = true;
        this.active = false;
        this.inactive = false;
        this.enabledUpdated = false;
        this.filterIndicatorText = false;
        this.filterIndicatorCheck = false;
        this.loadingData();
        var name = new forms_1.FormControl('', forms_1.Validators.required);
        var money = new forms_1.FormControl('', forms_1.Validators.required);
        var nameUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var moneyUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            name: name,
            money: money
        });
        this.myFormUpdate = new forms_1.FormGroup({
            nameUpdate: nameUpdate,
            moneyUpdate: moneyUpdate
        });
    }
    MasterEstimateCountriesComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.estimateService.getEstimateCountries().then(function (data) {
            var resp = data;
            console.log('ciudades');
            console.log(data);
            _this.rowsClient = resp.data;
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterEstimateCountriesComponent.prototype.sendCountry = function () {
        var _this = this;
        console.log(localStorage.getItem('token'));
        this.submitted = true;
        if (!this.myForm.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.estimateService.createEstimateCountries(this.myForm.get('name').value.toUpperCase(), this.myForm.get('money').value.toUpperCase()).then(function (data) {
                var resp = data;
                console.log(resp);
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Este país ya esta registrado',
                        text: 'Este país no se puede registrar',
                        type: 'error'
                    });
                }
                else {
                    _this.myForm.get('name').setValue('');
                    _this.myForm.get('money').setValue('');
                    /*swal({
                     title: 'Marca agregada',
                     type: 'success'
                    });*/
                    //   this.router.navigateByUrl('master/registerBrand');
                    document.getElementById('createCountryHide').click();
                    _this.loadingData();
                    sweetalert2_1.default({
                        title: 'País agregado',
                        type: 'success'
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    MasterEstimateCountriesComponent.prototype.sendUpdateCountry = function () {
        var _this = this;
        this.submittedUpdate = true;
        if (!this.myFormUpdate.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.estimateService.updateEstimateCountries(Number(this.currentCountry.id), this.myFormUpdate.get('nameUpdate').value.toUpperCase(), this.myFormUpdate.get('moneyUpdate').value.toUpperCase())
                .then(function (data) {
                var resp = data;
                console.log(resp);
                if (resp.error) {
                    sweetalert2_1.default({
                        title: 'Esta país ya esta registrado',
                        text: 'Este país no se puede actualizar',
                        type: 'error'
                    });
                }
                else {
                    // this.router.navigateByUrl('master/registerBrand');
                    document.getElementById('updateCountryHide').click();
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
    Object.defineProperty(MasterEstimateCountriesComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterEstimateCountriesComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    MasterEstimateCountriesComponent.prototype.updateCountry = function (estimateCountry) {
        console.log(estimateCountry);
        this.currentCountry = estimateCountry;
        console.log(this.currentCountry);
        this.myFormUpdate.get('nameUpdate').setValue(estimateCountry.name);
        this.myFormUpdate.get('moneyUpdate').setValue(estimateCountry.money);
        document.getElementById('uploadCountry').click();
    };
    MasterEstimateCountriesComponent.prototype.deleteCountry = function (country) {
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
                _this.elementDelete = country;
                console.log(country);
                console.log(_this.elementDelete);
                sweetalert2_1.default.showLoading();
                _this.estimateService.deleteEstimateCountries(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este país presenta problemas',
                            text: 'Este país no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        // this.router.navigateByUrl('master/registerBrand');
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'País eliminada',
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
    MasterEstimateCountriesComponent.prototype.ngOnInit = function () {
    };
    MasterEstimateCountriesComponent.prototype.blockAgents = function (vadr) {
        console.log(vadr);
    };
    MasterEstimateCountriesComponent = __decorate([
        core_1.Component({
            selector: 'app-master-estimate-countries',
            templateUrl: './master-estimate-countries.component.html',
            styleUrls: ['./master-estimate-countries.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router, estimate_service_1.EstimateService])
    ], MasterEstimateCountriesComponent);
    return MasterEstimateCountriesComponent;
}());
exports.MasterEstimateCountriesComponent = MasterEstimateCountriesComponent;
//# sourceMappingURL=master-estimate-countries.component.js.map