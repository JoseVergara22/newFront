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
var sweetalert2_1 = require("sweetalert2");
var router_1 = require("@angular/router");
var MasterPaymentConditionComponent = /** @class */ (function () {
    function MasterPaymentConditionComponent(restService, router) {
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
        this.submitted = false;
        this.a = 5;
        this.switchCreate = true;
        this.switchUpdate = true;
        this.change = true;
        this.active = false;
        this.inactive = false;
        this.enabledcreated = true;
        this.filterIndicatorText = false;
        this.filterIndicatorCheck = false;
        this.loadingData();
        var description = new forms_1.FormControl('', forms_1.Validators.required);
        var day = new forms_1.FormControl('', forms_1.Validators.required);
        var descriptionUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var dayUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            description: description,
            day: day
        });
        this.myFormUpdate = new forms_1.FormGroup({
            descriptionUpdate: descriptionUpdate,
            dayUpdate: dayUpdate
        });
    }
    MasterPaymentConditionComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.restService.getPaymentConditions().then(function (data) {
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
    MasterPaymentConditionComponent.prototype.updateFilter = function (event) {
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
    MasterPaymentConditionComponent.prototype.updateFilterActiveInactive = function (active) {
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
    MasterPaymentConditionComponent.prototype.onChangeCreate = function (check) {
        this.enabledcreated = check;
        console.log(check);
    };
    MasterPaymentConditionComponent.prototype.onChangeUpdate = function (check) {
        this.enabledUpdated = check;
        console.log(check);
    };
    MasterPaymentConditionComponent.prototype.onChangeActive = function (d) {
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
    MasterPaymentConditionComponent.prototype.onChangeInactive = function (d) {
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
    MasterPaymentConditionComponent.prototype.updateBrand = function (brand) {
        console.log(brand);
        this.currentBrand = brand;
        console.log(this.currentBrand);
        this.myFormUpdate.get('descriptionUpdate').setValue(brand.description);
        this.myFormUpdate.get('dayUpdate').setValue(brand.day);
        if (this.currentBrand.status === '0') {
            this.enabledUpdated = true;
        }
        else {
            this.enabledUpdated = false;
        }
        document.getElementById('uploadBrand').click();
    };
    MasterPaymentConditionComponent.prototype.sendBrand = function () {
        var _this = this;
        console.log(this.myForm.get('day').value);
        console.log(this.myForm.get('description').value);
        this.submitted = true;
        if (!this.myForm.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var statusTemp = 1;
            if (this.enabledcreated) {
                statusTemp = 0;
            }
            this.restService.createPayCondition(this.myForm.get('description').value.toUpperCase(), Number(this.myForm.get('day').value), statusTemp).then(function (data) {
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
    MasterPaymentConditionComponent.prototype.sendUpdateBrand = function () {
        var _this = this;
        console.log(this.myFormUpdate.get('descriptionUpdate'));
        this.submitted = true;
        if (!this.myFormUpdate.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var statusTemp = 1;
            if (this.enabledUpdated) {
                statusTemp = 0;
            }
            console.log(this.myFormUpdate.get('dayUpdate').value);
            this.restService.updatePayCondition(Number(this.currentBrand.id), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(), Number(this.myFormUpdate.get('dayUpdate').value), statusTemp)
                .then(function (data) {
                var resp = data;
                console.log(resp);
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Error',
                        text: 'Este metodo de pago no se puede actualizar',
                        type: 'error'
                    });
                }
                else {
                    // this.router.navigateByUrl('master/registerBrand');
                    document.getElementById('updateBrandHide').click();
                    _this.loadingData();
                    sweetalert2_1.default({
                        title: 'Metodo de pago actualizado',
                        type: 'success'
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            sweetalert2_1.default({
                title: 'Error',
                text: 'Este metodo de pago no se puede actualizar',
                type: 'error'
            });
        }
    };
    Object.defineProperty(MasterPaymentConditionComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterPaymentConditionComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    MasterPaymentConditionComponent.prototype.deleteBrand = function (brand) {
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
                console.log(_this.elementDelete);
                sweetalert2_1.default.showLoading();
                _this.restService.deletePayCondition(Number(_this.elementDelete.id))
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
    MasterPaymentConditionComponent.prototype.ngOnInit = function () {
    };
    MasterPaymentConditionComponent.prototype.blockAgents = function (vadr) {
        console.log(vadr);
    };
    MasterPaymentConditionComponent = __decorate([
        core_1.Component({
            selector: 'app-master-payment-condition',
            templateUrl: './master-payment-condition.component.html',
            styleUrls: ['./master-payment-condition.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router])
    ], MasterPaymentConditionComponent);
    return MasterPaymentConditionComponent;
}());
exports.MasterPaymentConditionComponent = MasterPaymentConditionComponent;
//# sourceMappingURL=master-payment-condition.component.js.map