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
var rest_service_1 = require("../../master-services/Rest/rest.service");
var router_1 = require("@angular/router");
var sweetalert2_1 = require("sweetalert2");
var forms_1 = require("@angular/forms");
var MasterCostCenterComponent = /** @class */ (function () {
    function MasterCostCenterComponent(restService, router) {
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
        var regionals = new forms_1.FormControl('', forms_1.Validators.required);
        var codeUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var descriptionUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var regionalsUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            code: code,
            description: description,
            regionals: regionals,
        });
        this.myFormUpdate = new forms_1.FormGroup({
            codeUpdate: codeUpdate,
            descriptionUpdate: descriptionUpdate,
            regionalsUpdate: regionalsUpdate,
        });
    }
    MasterCostCenterComponent.prototype.getRegionals = function () {
        var _this = this;
        this.restService.getRegional().then(function (data) {
            var resp = data;
            console.log(resp);
            _this.regionals = resp.data;
            sweetalert2_1.default.close();
        });
    };
    MasterCostCenterComponent.prototype.changeValue = function () {
        console.log('valor');
        console.log(this.selectedRegionalUpdate);
        console.log('valor');
        //this.getCosrCentersById(this.regionals.id);
    };
    MasterCostCenterComponent.prototype.sendCostCenter = function () {
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
                this.restService.createCostCenter(this.myForm.get('description').value.toUpperCase(), this.myForm.get('code').value, this.selectedRegional.id)
                    .then(function (data) {
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este centro de costos ya esta registrado',
                            text: 'Este centro de costos no se pudo registrar',
                            type: 'error'
                        });
                    }
                    else {
                        _this.idConstCenter = resp.data.id;
                        console.log('Cambio');
                        document.getElementById('createCostCenterHide').click();
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Centro de costos agregada',
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
    MasterCostCenterComponent.prototype.updateCostCenter = function (row) {
        console.log(row);
        this.currentCostCenter = row;
        console.log(this.currentCostCenter);
        this.myFormUpdate.get('descriptionUpdate').setValue(row.description);
        this.myFormUpdate.get('codeUpdate').setValue(row.code);
        this.idCostCenter = row.id;
        document.getElementById('updateCostCenter').click();
        this.getRegionals();
        this.selectedRegionalUpdate = row.regional_id;
        console.log(this.selectedRegionalUpdate);
    };
    MasterCostCenterComponent.prototype.updateCostCenters = function () {
        var _this = this;
        console.log('Ole ole ole kakaakkaka');
        console.log(this.codeUpdate);
        console.log(this.descriptionUpdate);
        console.log(this.selectedRegionalUpdate);
        console.log(this.selectedRegional);
        if (Number(this.selectedRegionalUpdate) !== 0) {
            this.submittedUpdated = true;
            if (!this.myFormUpdate.invalid) {
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                console.log('kakakaka');
                this.restService.updatCostCenters(Number(this.idCostCenter), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(), this.myFormUpdate.get('codeUpdate').value, this.selectedRegionalUpdate)
                    .then(function (data) {
                    var resp = data;
                    console.log(JSON.stringify(resp));
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Falla en la actualizacion',
                            text: 'Este centor de costos no se pudo actualizar',
                            type: 'error'
                        });
                    }
                    else {
                        console.log('Cambio');
                        document.getElementById('updateCostCenterHide').click();
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Centro de costos actualizado.',
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
    MasterCostCenterComponent.prototype.deleteCostCenters = function (brand) {
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
                _this.restService.deleteCostCenter(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este centro de costos presenta problemas',
                            text: 'Este centro de costos no se puede eliminar',
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
    MasterCostCenterComponent.prototype.updateFilter = function (event) {
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
    MasterCostCenterComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.restService.getCostCenter().then(function (data) {
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
    MasterCostCenterComponent.prototype.ngOnInit = function () {
    };
    MasterCostCenterComponent.prototype.blockAgents = function (vadr) {
        console.log(vadr);
    };
    Object.defineProperty(MasterCostCenterComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterCostCenterComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    MasterCostCenterComponent = __decorate([
        core_1.Component({
            selector: 'app-master-cost-center',
            templateUrl: './master-cost-center.component.html',
            styleUrls: ['./master-cost-center.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router])
    ], MasterCostCenterComponent);
    return MasterCostCenterComponent;
}());
exports.MasterCostCenterComponent = MasterCostCenterComponent;
//# sourceMappingURL=master-cost-center.component.js.map