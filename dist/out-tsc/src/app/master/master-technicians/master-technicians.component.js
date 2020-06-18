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
var MasterTechniciansComponent = /** @class */ (function () {
    function MasterTechniciansComponent(restService, router, rutaActiva) {
        this.restService = restService;
        this.router = router;
        this.rutaActiva = rutaActiva;
        this.active = false;
        this.inactive = false;
        this.filterIndicatorText = false;
        this.change = true;
        this.filterIndicatorCheck = false;
        this.submitted = false;
        this.check = false;
        this.enable = false;
        this.enabledCreated = true;
        this.currentTechnicianId = 0;
        this.selectedTypeDocumentId = 0;
        this.submittedUpdated = false;
        this.switchUpdate = true;
        this.selectedTypeDocumentIdUpdate = 0;
        this.currentTechnician = 0;
        this.loadingData();
        var name = new forms_1.FormControl('', forms_1.Validators.required);
        var document = new forms_1.FormControl('', forms_1.Validators.required);
        var cellphone = new forms_1.FormControl('');
        var nameUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var documentUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var cellphoneUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            name: name,
            document: document,
            cellphone: cellphone,
        });
        this.myFormUpdate = new forms_1.FormGroup({
            nameUpdate: nameUpdate,
            documentUpdate: documentUpdate,
            cellphoneUpdate: cellphoneUpdate,
        });
    }
    MasterTechniciansComponent.prototype.updateTech = function (row) {
        console.log(row);
        this.currentTechnician = row;
        console.log(this.currentTechnician);
        this.myFormUpdate.get('documentUpdate').setValue(row.document);
        this.myFormUpdate.get('nameUpdate').setValue(row.name);
        this.myFormUpdate.get('cellphoneUpdate').setValue(row.cellphone);
        this.idTechnician = row.id;
        console.log(this.idTechnician);
        this.enabledUpdated = true;
        document.getElementById('updateTech').click();
    };
    MasterTechniciansComponent.prototype.updatedTechnician = function () {
        var _this = this;
        console.log('Ole ole ole kakaakkaka');
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
            this.restService.updateTechnian(Number(this.idTechnician), this.myFormUpdate.get('nameUpdate').value.toUpperCase(), this.myFormUpdate.get('documentUpdate').value, this.myFormUpdate.get('cellphoneUpdate').value)
                .then(function (data) {
                var resp = data;
                console.log(JSON.stringify(resp));
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Falla en la actualización',
                        text: 'Este tecnico no se pudo actualizar',
                        type: 'error'
                    });
                }
                else {
                    console.log('Cambio');
                    document.getElementById('updatTechnicianHide').click();
                    _this.loadingData();
                    sweetalert2_1.default({
                        title: 'Tecnico actualizado',
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
    MasterTechniciansComponent.prototype.sendTechnicians = function () {
        var _this = this;
        console.log('Ole ole ole');
        this.submitted = true;
        if (!this.myForm.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var statusTemp = 0;
            if (this.enabledCreated === false) {
                statusTemp = 1;
            }
            this.restService.createTechnicians(this.myForm.get('name').value.toUpperCase(), this.myForm.get('document').value, this.myForm.get('cellphone').value)
                .then(function (data) {
                var resp = data;
                console.log(resp);
                console.log('id technian' + resp.data.id);
                _this.currentTechnicianId = resp.data.id;
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Este tecnico ya esta registrado',
                        text: 'Este tecnico no se puede registrar',
                        type: 'error'
                    });
                }
                else {
                    _this.idtechnicanCreated = resp.data.id;
                    console.log('creo');
                    document.getElementById('createTechnicianHide').click();
                    _this.loadingData();
                    sweetalert2_1.default({
                        title: 'Tecnico agregado',
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
    MasterTechniciansComponent.prototype.deleteTechnicians = function (brand) {
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
                _this.restService.deleteTechnician(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este cliente presenta problemas',
                            text: 'Este tecnico no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Tecnico eliminado',
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
    MasterTechniciansComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.restService.getTechnicians().then(function (data) {
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
    MasterTechniciansComponent.prototype.updateFilter = function (event) {
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
            return d.business_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        if (val !== '') {
            this.filterIndicatorText = true;
            this.rowsTempText = temp;
        }
        // update the rows
        this.rowsClient = temp;
    };
    MasterTechniciansComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MasterTechniciansComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterTechniciansComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    MasterTechniciansComponent = __decorate([
        core_1.Component({
            selector: 'app-master-technicians',
            templateUrl: './master-technicians.component.html',
            styleUrls: ['./master-technicians.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router,
            router_1.ActivatedRoute])
    ], MasterTechniciansComponent);
    return MasterTechniciansComponent;
}());
exports.MasterTechniciansComponent = MasterTechniciansComponent;
//# sourceMappingURL=master-technicians.component.js.map