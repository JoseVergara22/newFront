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
var rest_service_1 = require("../../master-services/Rest/rest.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var MasterRegionalsComponent = /** @class */ (function () {
    function MasterRegionalsComponent(restService, router) {
        this.restService = restService;
        this.router = router;
        this.active = false;
        this.inactive = false;
        this.filterIndicatorText = false;
        this.change = true;
        this.submitted = false;
        this.enabledCreated = true;
        this.switchUpdate = true;
        this.showButtonUpdated = 0;
        this.submittedUpdated = false;
        this.descriptionUpdate = '';
        this.description = '';
        this.filterIndicatorCheck = false;
        this.loadingData();
        var code = new forms_1.FormControl('', forms_1.Validators.required);
        var description = new forms_1.FormControl('', forms_1.Validators.required);
        var codeUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var descriptionUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            code: code,
            description: description,
        });
        this.myFormUpdate = new forms_1.FormGroup({
            codeUpdate: codeUpdate,
            descriptionUpdate: descriptionUpdate
        });
    }
    MasterRegionalsComponent.prototype.updateReg = function (row) {
        console.log(row);
        this.currentRegional = row;
        console.log(this.currentRegional);
        this.myFormUpdate.get('descriptionUpdate').setValue(row.description);
        this.myFormUpdate.get('codeUpdate').setValue(row.code);
        this.enabledUpdated = true;
        document.getElementById('updateReg').click();
    };
    MasterRegionalsComponent.prototype.sendRegional = function () {
        var _this = this;
        console.log('Ole ole ole');
        console.log(this.code);
        console.log(this.description);
        if (!this.myForm.invalid) {
            this.submitted = true;
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var statusTemp = 0;
            console.log(this.switchUpdate);
            if (this.enabledCreated === false) {
                statusTemp = 1;
            }
            this.restService.createRegional(this.myForm.get('description').value.toUpperCase(), this.myForm.get('code').value)
                .then(function (data) {
                var resp = data;
                console.log(resp);
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Esta sucursal ya esta registrada',
                        text: 'Esta sucursal no se pudo registrar',
                        type: 'error'
                    });
                }
                else {
                    _this.idRegionalCreate = resp.data.id;
                    console.log('Cambio');
                    document.getElementById('createRegionalHide').click();
                    _this.loadingData();
                    sweetalert2_1.default({
                        title: 'Sucursal agregada',
                        type: 'success'
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            sweetalert2_1.default({
                title: 'Debe seleccionar todos los campos obligatorios',
                text: 'Debe seleccionar todos los campos obligatorios',
                type: 'error'
            });
        }
    };
    MasterRegionalsComponent.prototype.updatedRegional = function () {
        var _this = this;
        console.log('Ole ole ole kakaakkaka');
        console.log(this.codeUpdate);
        console.log(this.descriptionUpdate);
        if (!this.myFormUpdate.invalid) {
            this.submittedUpdated = true;
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var statusTemp = 1;
            console.log(this.switchUpdate);
            if (this.enabledCreatedOfficeUpdate) {
                statusTemp = 0;
            }
            console.log('kakakaka');
            this.restService.updateRegional(Number(this.currentRegional.id), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(), this.myFormUpdate.get('codeUpdate').value)
                .then(function (data) {
                var resp = data;
                console.log(JSON.stringify(resp));
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Falla en la actualizacion',
                        text: 'Esta sucursal no se pudo actualizar',
                        type: 'error'
                    });
                }
                else {
                    console.log('Cambio');
                    document.getElementById('updateBrandHide').click();
                    _this.loadingData();
                    sweetalert2_1.default({
                        title: 'Sucursal actualizada.',
                        type: 'success'
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            sweetalert2_1.default({
                title: 'Debe seleccionar todos los campos obligatorios',
                text: 'Debe seleccionar todos los campos obligatorios',
                type: 'error'
            });
        }
    };
    MasterRegionalsComponent.prototype.deleteRegional = function (brand) {
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
                _this.restService.deleteRegional(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Esta sucursal presenta problemas',
                            text: 'Esta sucursal no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Reigonal eliminado',
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
    MasterRegionalsComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        if (val === '') {
            console.log('vacio');
            this.filterIndicatorText = false;
            this.rowsTemp = this.rowStatic;
        }
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
        this.rowsClient = temp;
    };
    MasterRegionalsComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.restService.getRegional().then(function (data) {
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
    MasterRegionalsComponent.prototype.ngOnInit = function () {
    };
    MasterRegionalsComponent.prototype.blockAgents = function (vadr) {
        console.log(vadr);
    };
    Object.defineProperty(MasterRegionalsComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterRegionalsComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    MasterRegionalsComponent = __decorate([
        core_1.Component({
            selector: 'app-master-regionals',
            templateUrl: './master-regionals.component.html',
            styleUrls: ['./master-regionals.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router])
    ], MasterRegionalsComponent);
    return MasterRegionalsComponent;
}());
exports.MasterRegionalsComponent = MasterRegionalsComponent;
//# sourceMappingURL=master-regionals.component.js.map