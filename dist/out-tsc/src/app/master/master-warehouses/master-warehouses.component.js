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
var router_1 = require("@angular/router");
var sweetalert2_1 = require("sweetalert2");
var MasterWarehousesComponent = /** @class */ (function () {
    function MasterWarehousesComponent(restService, router) {
        this.restService = restService;
        this.router = router;
        this.active = false;
        this.inactive = false;
        this.filterIndicatorText = false;
        this.change = true;
        this.filterIndicatorCheck = false;
        this.submitted = false;
        this.enabledCreated = true;
        this.switchUpdate = true;
        this.showButtonUpdated = 0;
        this.description = '';
        this.selectedRegional = 0;
        this.currentCostCenter = 0;
        this.submittedUpdated = false;
        this.descriptionUpdate = '';
        this.loadingData();
        var code = new forms_1.FormControl('', forms_1.Validators.required);
        var description = new forms_1.FormControl('', forms_1.Validators.required);
        var regional = new forms_1.FormControl('', forms_1.Validators.required);
        var codeUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var descriptionUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var regionalUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            code: code,
            description: description,
            regional: regional,
        });
        this.myFormUpdate = new forms_1.FormGroup({
            codeUpdate: codeUpdate,
            descriptionUpdate: descriptionUpdate,
            regionalUpdate: regionalUpdate,
        });
    }
    MasterWarehousesComponent.prototype.getRegionals = function () {
        var _this = this;
        this.restService.getRegional().then(function (data) {
            var resp = data;
            console.log(resp);
            _this.regionals = resp.data;
            console.log(_this.regionals);
            sweetalert2_1.default.close();
        });
    };
    MasterWarehousesComponent.prototype.getRegionalCostCenter = function (regionalsId) {
        var _this = this;
        this.restService.getRegional().then(function (data) {
            var resp = data;
            console.log(resp);
            _this.regionals = resp.data;
            _this.selectedRegionalUpdate = regionalsId;
            console.log(_this.regionals);
            sweetalert2_1.default.close();
        });
    };
    MasterWarehousesComponent.prototype.sendWarehouses = function () {
        var _this = this;
        console.log('Ole ole ole');
        console.log(this.code);
        console.log(this.description);
        console.log(this.selectedRegional);
        if (Number(this.selectedRegional) !== 0) {
            this.submitted = true;
            if (!this.myForm.invalid) {
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                this.restService.createWarehouses(this.myForm.get('description').value.toUpperCase(), this.myForm.get('code').value, this.selectedRegional.id)
                    .then(function (data) {
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Esta bodega ya esta registrada',
                            text: 'Esta bodega no se pudo registrar',
                            type: 'error'
                        });
                    }
                    else {
                        console.log('Cambio');
                        console.log(resp.data.id);
                        document.getElementById('createWarehousesHide').click();
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Bodega agregada',
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
                title: 'Debe seleccionar todos los campos obligatorios',
                text: 'Debe seleccionar todos los campos obligatorios',
                type: 'error'
            });
        }
    };
    MasterWarehousesComponent.prototype.updateWare = function (row) {
        console.log(row);
        this.currentCostCenter = row;
        console.log(this.currentCostCenter);
        this.myFormUpdate.get('descriptionUpdate').setValue(row.description);
        this.myFormUpdate.get('codeUpdate').setValue(row.code);
        this.idConstCenter = row.id;
        document.getElementById('updateWarehouses').click();
        this.getRegionalCostCenter(row.regionals_id);
        // this.selectedRegionalUpdate = row.regionals_id;
        console.log(this.selectedRegionalUpdate);
    };
    MasterWarehousesComponent.prototype.changeValue = function () {
        console.log('valor');
        console.log(this.selectedRegionalUpdate);
        console.log('valor');
        //this.getCosrCentersById(this.regionals.id);
    };
    MasterWarehousesComponent.prototype.updateWarehouses = function () {
        var _this = this;
        console.log('Ole ole ole kakaakkaka');
        console.log(this.codeUpdate);
        console.log(this.descriptionUpdate);
        console.log(this.selectedRegionalUpdate);
        console.log(this.selectedRegionalUpdate.id);
        console.log(Number(this.selectedRegionalUpdate));
        if (this.selectedRegionalUpdate.id !== 0) {
            this.submittedUpdated = true;
            if (!this.myFormUpdate.invalid) {
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                console.log('kakakaka');
                this.restService.updatWarehouses(Number(this.idConstCenter), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(), this.myFormUpdate.get('codeUpdate').value, this.selectedRegionalUpdate.id)
                    .then(function (data) {
                    var resp = data;
                    console.log(JSON.stringify(resp));
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Falla en la actualizacion',
                            text: 'Esta bodega no se pudo actualizar',
                            type: 'error'
                        });
                    }
                    else {
                        console.log('Cambio');
                        document.getElementById('updateWarehousesHide').click();
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Bodega actualizada.',
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
                title: 'Debe seleccionar todos los campos obligatorios',
                text: 'Debe seleccionar todos los campos obligatorios',
                type: 'error'
            });
        }
    };
    MasterWarehousesComponent.prototype.deleteWarehoueses = function (brand) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Estás seguro de eliminar este elemento?',
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
                _this.restService.deleteWarehouses(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Esta bodega presenta problemas',
                            text: 'Esta bodega no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Bodega eliminado',
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
    MasterWarehousesComponent.prototype.updateFilter = function (event) {
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
    MasterWarehousesComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.restService.getWarehouses().then(function (data) {
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
    MasterWarehousesComponent.prototype.ngOnInit = function () {
    };
    MasterWarehousesComponent.prototype.blockAgents = function (vadr) {
        console.log(vadr);
    };
    Object.defineProperty(MasterWarehousesComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterWarehousesComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    MasterWarehousesComponent = __decorate([
        core_1.Component({
            selector: 'app-master-warehouses',
            templateUrl: './master-warehouses.component.html',
            styleUrls: ['./master-warehouses.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router])
    ], MasterWarehousesComponent);
    return MasterWarehousesComponent;
}());
exports.MasterWarehousesComponent = MasterWarehousesComponent;
//# sourceMappingURL=master-warehouses.component.js.map