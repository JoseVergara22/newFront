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
var sweetalert2_1 = require("sweetalert2");
var forms_1 = require("@angular/forms");
var rest_service_1 = require("../../master-services/Rest/rest.service");
var router_1 = require("@angular/router");
var MasterSubCostCenterComponent = /** @class */ (function () {
    function MasterSubCostCenterComponent(restService, router) {
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
        this.selectedCostCenter = 0;
        this.currentCostCenter = 0;
        this.submittedUpdated = false;
        this.descriptionUpdate = '';
        this.selectedRegional = 0;
        this.loadingData();
        var code = new forms_1.FormControl('', forms_1.Validators.required);
        var description = new forms_1.FormControl('', forms_1.Validators.required);
        var costCenter = new forms_1.FormControl('', forms_1.Validators.required);
        var codeUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var descriptionUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var costCenterUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            code: code,
            description: description,
            costCenter: costCenter,
        });
        this.myFormUpdate = new forms_1.FormGroup({
            codeUpdate: codeUpdate,
            descriptionUpdate: descriptionUpdate,
            costCenterUpdate: costCenterUpdate,
        });
    }
    MasterSubCostCenterComponent.prototype.getRegionals = function () {
        var _this = this;
        this.restService.getRegional().then(function (data) {
            var resp = data;
            console.log(resp);
            _this.regionals = resp.data;
            sweetalert2_1.default.close();
        });
    };
    MasterSubCostCenterComponent.prototype.changeValue = function () {
        console.log('valor');
        console.log(this.selectedCostCenterUpdate);
        console.log('valor');
    };
    MasterSubCostCenterComponent.prototype.getCostCenter = function () {
        var _this = this;
        this.restService.getCostCenter().then(function (data) {
            var resp = data;
            console.log(resp);
            _this.costCenter = resp.data;
            sweetalert2_1.default.close();
        });
    };
    MasterSubCostCenterComponent.prototype.sendCostCenter = function () {
        var _this = this;
        console.log('Ole ole ole');
        console.log(this.code);
        console.log(this.description);
        console.log(this.selectedCostCenter);
        if (Number(this.selectedCostCenter) !== 0) {
            this.submitted = true;
            if (!this.myForm.invalid) {
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                this.restService.createSubCostCenter(this.myForm.get('description').value.toUpperCase(), this.myForm.get('code').value, this.selectedCostCenter.id)
                    .then(function (data) {
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este sub centro de costos ya esta registrado',
                            text: 'Este sub centro de costos no se pudo registrar',
                            type: 'error'
                        });
                    }
                    else {
                        _this.idSubConstCenter = resp.data.id;
                        console.log('Cambio');
                        document.getElementById('createSubCostCenterHide').click();
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Sub centro de costos agregado',
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
    MasterSubCostCenterComponent.prototype.updateSubCostCenter = function (row) {
        console.log(row);
        this.currentCostCenter = row;
        console.log(this.currentCostCenter);
        this.myFormUpdate.get('descriptionUpdate').setValue(row.description);
        this.myFormUpdate.get('codeUpdate').setValue(row.code);
        document.getElementById('updateSubCostCenter').click();
        this.getCostCenter();
        this.selectedCostCenterUpdate = row.costCenter_id;
        console.log(this.selectedCostCenterUpdate);
    };
    MasterSubCostCenterComponent.prototype.updateSubCostCenters = function () {
        var _this = this;
        console.log('Ole ole ole kakaakkaka');
        console.log(this.codeUpdate);
        console.log(this.descriptionUpdate);
        console.log(this.selectedCostCenterUpdate);
        if (Number(this.selectedCostCenterUpdate) !== 0) {
            this.submittedUpdated = true;
            if (!this.myFormUpdate.invalid) {
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                console.log('kakakaka');
                this.restService.updatSubCostCenters(Number(this.idSubConstCenter), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(), this.myFormUpdate.get('codeUpdate').value, this.selectedCostCenterUpdate)
                    .then(function (data) {
                    var resp = data;
                    console.log(JSON.stringify(resp));
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Falla en la actualizacion',
                            text: 'Este sub centro de costos no se pudo actualizar',
                            type: 'error'
                        });
                    }
                    else {
                        console.log('Cambio');
                        document.getElementById('modalUpdateSubCostCenter').click();
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Sub centro de costos actualizada.',
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
    MasterSubCostCenterComponent.prototype.deleteSubCostCenters = function (brand) {
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
                _this.restService.deleteSubCostCenter(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este sub centro de costos presenta problemas',
                            text: 'Este sub centro de costos no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Centro de costos eliminado',
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
    MasterSubCostCenterComponent.prototype.updateFilter = function (event) {
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
    MasterSubCostCenterComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.restService.getSubCostCenter().then(function (data) {
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
    MasterSubCostCenterComponent.prototype.ngOnInit = function () {
    };
    MasterSubCostCenterComponent.prototype.blockAgents = function (vadr) {
        console.log(vadr);
    };
    Object.defineProperty(MasterSubCostCenterComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterSubCostCenterComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    MasterSubCostCenterComponent = __decorate([
        core_1.Component({
            selector: 'app-master-sub-cost-center',
            templateUrl: './master-sub-cost-center.component.html',
            styleUrls: ['./master-sub-cost-center.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router])
    ], MasterSubCostCenterComponent);
    return MasterSubCostCenterComponent;
}());
exports.MasterSubCostCenterComponent = MasterSubCostCenterComponent;
//# sourceMappingURL=master-sub-cost-center.component.js.map