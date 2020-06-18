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
var MasterModelComponent = /** @class */ (function () {
    function MasterModelComponent(restService, router) {
        this.restService = restService;
        this.router = router;
        this.submitted = false;
        this.a = 5;
        this.switchCreate = true;
        this.switchUpdate = true;
        this.change = true;
        this.active = false;
        this.inactive = false;
        this.enabledUpdated = false;
        this.enabledCreated = true;
        this.filterIndicatorText = false;
        this.filterIndicatorCheck = false;
        this.selectedValueTemp = '0';
        this.loadingData();
        var description = new forms_1.FormControl('', forms_1.Validators.required);
        var descriptionUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var type = new forms_1.FormControl('', forms_1.Validators.required);
        var typeUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            description: description,
            type: type
        });
        this.myFormUpdate = new forms_1.FormGroup({
            descriptionUpdate: descriptionUpdate,
            typeUpdate: typeUpdate
        });
    }
    MasterModelComponent.prototype.loadingBrand = function () {
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
            _this.brands = resp.data;
            console.log(_this.brands);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterModelComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.restService.getModels().then(function (data) {
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
    MasterModelComponent.prototype.updateFilter = function (event) {
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
    MasterModelComponent.prototype.updateFilterActiveInactive = function (active) {
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
    MasterModelComponent.prototype.onChangeCreate = function (check) {
        this.change = check;
        if (this.change) {
            this.currentstatus = 1;
        }
        else {
            this.currentstatus = 0;
        }
        console.log(this.currentstatus);
        console.log(check);
    };
    MasterModelComponent.prototype.onChangeUpdate = function (check) {
        this.enabledUpdated = check;
        console.log(check);
    };
    MasterModelComponent.prototype.ChangingValue = function () {
        console.log(this.selectedValue);
        this.selectedValueTemp = this.selectedValue;
        console.log(this.selectedValueTemp);
        console.log(this.selectedValue);
    };
    MasterModelComponent.prototype.ChangingValue2 = function () {
        this.selectedValueUpdate = this.selectedValue;
        console.log(this.selectedValueTemp + 'ole');
        console.log(this.selectedValue);
    };
    MasterModelComponent.prototype.onChangeActive = function (d) {
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
    MasterModelComponent.prototype.onChangeInactive = function (d) {
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
    MasterModelComponent.prototype.updateFuel = function (fuel) {
        this.currentmachine = fuel;
        console.log(fuel);
        this.currentFuel = fuel;
        console.log(this.currentFuel);
        this.myFormUpdate.get('descriptionUpdate').setValue(this.currentFuel.model);
        this.currentupdatestatus = this.currentmachine.status;
        if (this.currentFuel.status === '0') {
            this.enabledUpdated = true;
        }
        else {
            this.enabledUpdated = false;
        }
        this.currentupdatestatus = this.currentmachine.status;
        document.getElementById('uploadBrand').click();
        this.loadingBrand();
        console.log(fuel.brand_id);
        this.selectedUpdate = String(fuel.brand_id); // String(fuel.brand_id) ;
    };
    MasterModelComponent.prototype.sendModel = function () {
        var _this = this;
        if (this.selectedValue !== '0') {
            this.submitted = true;
            if (!this.myForm.invalid) {
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                var statusTemp = 0;
                console.log(this.enabledCreated);
                if (this.enabledCreated === true) {
                    statusTemp = 0;
                }
                else {
                    statusTemp = 1;
                }
                this.restService.createModel(this.myForm.get('description').value.toUpperCase(), Number(this.selectedValue.id), statusTemp)
                    .then(function (data) {
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Esta modelo ya esta registrada',
                            text: 'Esta modelo no se puede registrar',
                            type: 'error'
                        });
                    }
                    else {
                        _this.myForm.get('description').setValue('');
                        _this.selectedValue = '0';
                        /*swal({
                         title: 'Modelo agregada',
                         type: 'success'
                        });*/
                        //   this.router.navigateByUrl('master/registerBrand');
                        document.getElementById('createBrandHide').click();
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Modelo agregado',
                            type: 'success'
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
        else {
            sweetalert2_1.default({
                title: 'Por favor seleccionar un tipo',
                text: 'Debe seleccionar un tipo',
                type: 'error'
            });
        }
    };
    MasterModelComponent.prototype.onChangeSelect = function () {
        this.selectedValueTemp = '0';
        this.selectedValue = '0';
        console.log('cambio');
        this.enabledCreated = true;
        this.loadingBrand();
    };
    MasterModelComponent.prototype.sendUpdateUpdate = function () {
        var _this = this;
        if (Number(this.selectedUpdate) !== 0) {
            console.log(this.myFormUpdate.get('descriptionUpdate'));
            console.log(this.change);
            this.submitted = true;
            if (!this.myFormUpdate.invalid) {
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                var description = this.myFormUpdate.get('descriptionUpdate').value.toUpperCase();
                var status_1 = 1;
                if (this.enabledUpdated) {
                    status_1 = 0;
                }
                console.log(description);
                this.restService.updateModel(this.currentmachine.id, description, Number(this.selectedUpdate), status_1)
                    .then(function (data) {
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Esta modelo ya esta actualizado',
                            text: 'Esta modelo no se puede actualizar',
                            type: 'error'
                        });
                    }
                    else {
                        // this.router.navigateByUrl('master/registerBrand');
                        document.getElementById('updateBrandHide').click();
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Modelo actualizado',
                            type: 'success'
                        });
                    }
                }).catch(function (error) {
                    console.log("error en el consumo");
                    console.log(error);
                });
            }
        }
        else {
            sweetalert2_1.default({
                title: 'Por favor seleccionar un tipo',
                text: 'Debe seleccionar un tipo',
                type: 'error'
            });
        }
    };
    Object.defineProperty(MasterModelComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterModelComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    MasterModelComponent.prototype.deleteBrand = function (fuel) {
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
                _this.elementDelete = fuel;
                console.log(fuel);
                console.log(_this.elementDelete);
                sweetalert2_1.default.showLoading();
                _this.restService.deleteModel(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este modelo presenta problemas',
                            text: 'Este modelo no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        // this.router.navigateByUrl('master/registerBrand');
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Modelo eliminado',
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
    MasterModelComponent.prototype.ngOnInit = function () {
    };
    MasterModelComponent.prototype.blockAgents = function (vadr) {
        console.log(vadr);
    };
    MasterModelComponent = __decorate([
        core_1.Component({
            selector: 'app-master-model',
            templateUrl: './master-model.component.html',
            styleUrls: ['./master-model.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router])
    ], MasterModelComponent);
    return MasterModelComponent;
}());
exports.MasterModelComponent = MasterModelComponent;
//# sourceMappingURL=master-model.component.js.map