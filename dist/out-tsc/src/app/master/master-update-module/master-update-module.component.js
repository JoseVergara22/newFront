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
var sweetalert2_1 = require("sweetalert2");
var modules_service_1 = require("../../master-services/modules/modules.service");
var router_1 = require("@angular/router");
var MasterUpdateModuleComponent = /** @class */ (function () {
    function MasterUpdateModuleComponent(moduleService, router, rutaActiva) {
        this.moduleService = moduleService;
        this.router = router;
        this.rutaActiva = rutaActiva;
        this.submittedUpdated = false;
        this.currentModelId = 0;
        this.submitted = false;
        this.enabledCreated = true;
        this.currentModelId = this.rutaActiva.snapshot.params.id;
        console.log(this.currentModelId);
        this.loadingData(this.currentModelId);
        var descriptionUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var descriptionUpdateSub = new forms_1.FormControl('', forms_1.Validators.required);
        var descriptionSub = new forms_1.FormControl('', forms_1.Validators.required);
        this.myFormUpdateSubModules = new forms_1.FormGroup({
            descriptionUpdateSub: descriptionUpdateSub,
        });
        this.myFormUpdate = new forms_1.FormGroup({
            descriptionUpdate: descriptionUpdate,
        });
        this.myFormSubModules = new forms_1.FormGroup({
            descriptionSub: descriptionSub,
        });
    }
    MasterUpdateModuleComponent.prototype.loadingData = function (Id) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.moduleService.getModuleById(Id).then(function (data) {
            var resp = data;
            console.log(data);
            _this.description = resp.data[0].description;
            _this.getSubModules(Id);
            sweetalert2_1.default.close();
            console.log(_this.description);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterUpdateModuleComponent.prototype.getSubModules = function (idModule) {
        var _this = this;
        // console.log(this.opcionSeleccionado);
        this.moduleService.getSubModule(idModule).then(function (data) {
            console.log('que mas ps');
            var resp = data;
            console.log(resp);
            _this.dataSubModule = resp.data;
            console.log('Importante ver la info');
            console.log(_this.dataSubModule);
            //   this.dataOffices = this.dataOffices.data;
            console.log('master');
            sweetalert2_1.default.close();
            // this.cities = resp.data;
            console.log(_this.dataSubModule);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterUpdateModuleComponent.prototype.sendSubModule = function () {
        var _this = this;
        console.log('Ole ole ole');
        this.submitted = true;
        if (!this.myFormSubModules.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var statusTemp = 0;
            if (this.enabledCreated === false) {
                statusTemp = 1;
            }
            this.moduleService.createSubModule(this.myFormSubModules.get('descriptionSub').value.toUpperCase(), this.currentModelId)
                .then(function (data) {
                var resp = data;
                console.log(resp);
                console.log('id customer' + resp.data.id);
                _this.currentSubModule = resp.data.id;
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Este SubModulo ya esta registrado',
                        text: 'Este SubModulo no se puede registrar',
                        type: 'error'
                    });
                }
                else {
                    sweetalert2_1.default({
                        title: 'SubModulo agregado',
                        type: 'success'
                    });
                    _this.myFormSubModules.reset();
                    document.getElementById('updateBrandHide').click();
                    _this.getSubModules(_this.currentModelId);
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            sweetalert2_1.default({
                title: 'Debe llenar el campo obligatorio',
                text: 'Debe llenar el campo obligatorio',
                type: 'error'
            });
        }
    };
    MasterUpdateModuleComponent.prototype.updatedCustomer = function () {
        console.log('Ole ole ole kakaakkaka');
        // console.log(this.selectedPriceListIdUpdate);
        console.log(this.enabledCreatedOfficeUpdate);
        this.submittedUpdated = true;
        if (!this.myFormUpdate.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var statusTemp = 1;
            if (this.enabledCreatedOfficeUpdate) {
                statusTemp = 0;
            }
            console.log('kakakaka');
            this.moduleService.updateModule(Number(this.currentModelId), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase())
                .then(function (data) {
                var resp = data;
                console.log(JSON.stringify(resp));
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Falla en la actualizacion',
                        text: 'No se pudo actualizar el Modulo',
                        type: 'error'
                    });
                }
                else {
                    sweetalert2_1.default({
                        title: 'Modulo Actualizado',
                        type: 'success'
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            sweetalert2_1.default({
                title: 'Debe llenar el campo obligatorio',
                text: 'Debe llenar el campo obligatorio',
                type: 'error'
            });
        }
    };
    MasterUpdateModuleComponent.prototype.updateBrand = function (row) {
        console.log(row);
        this.currentSubModule = row;
        console.log(this.currentSubModule);
        if (this.currentSubModule.status === '0') {
            this.enabledUpdated = true;
        }
        else {
            this.enabledUpdated = false;
        }
        this.myFormUpdateSubModules.get('descriptionUpdateSub').setValue(this.currentSubModule.description);
        if (this.currentSubModule.status == 0) {
            this.enabledCreatedOfficeUpdate = true;
        }
        else {
            this.enabledCreatedOfficeUpdate = false;
        }
        document.getElementById('uploadSubModule').click();
    };
    MasterUpdateModuleComponent.prototype.sendUpdateSubModule = function () {
        var _this = this;
        console.log('Ole ole ole kakaakkaka');
        // console.log(this.selectedPriceListIdUpdate);
        console.log(this.enabledCreatedOfficeUpdate);
        this.submittedUpdated = true;
        if (!this.myFormUpdateSubModules.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var statusTemp = 1;
            if (this.enabledCreatedOfficeUpdate) {
                statusTemp = 0;
            }
            console.log('kakakaka');
            this.moduleService.updateSubModule(Number(this.currentModelId), this.myFormUpdateSubModules.get('descriptionUpdateSub').value.toUpperCase())
                .then(function (data) {
                var resp = data;
                console.log(JSON.stringify(resp));
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Falla en la actualizacion',
                        text: 'No se pudo actualizar el SubModulo',
                        type: 'error'
                    });
                }
                else {
                    document.getElementById('updateSubmoduleHide').click();
                    sweetalert2_1.default({
                        title: 'SubModulo Actualizado',
                        type: 'success'
                    });
                    _this.myFormUpdateSubModules.reset();
                    _this.getSubModules(_this.currentSubModule.id);
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            sweetalert2_1.default({
                title: 'Debe llenar el campo obligatorio',
                text: 'Debe llenar el campo obligatorio',
                type: 'error'
            });
        }
    };
    MasterUpdateModuleComponent.prototype.deleteSubModulo = function (row) {
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
                _this.elementDelete = row;
                console.log(row);
                console.log(_this.elementDelete);
                sweetalert2_1.default.showLoading();
                _this.moduleService.deleteSubModule(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    _this.getSubModules(_this.currentModelId);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este submodulo presenta problemas',
                            text: 'Este submodulo no se pudo eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        // this.router.navigateByUrl('master/registerBrand');
                        sweetalert2_1.default({
                            title: 'Submodulo eliminado',
                            type: 'success'
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
            else {
                // swal('Fail');
            }
            console.log(willDelete);
        });
    };
    MasterUpdateModuleComponent.prototype.blockAgents = function (vadr) {
        console.log(vadr);
    };
    MasterUpdateModuleComponent.prototype.onChangeCreatedOfficeUpdate = function (check) {
        console.log(check);
        this.enabledCreatedOfficeUpdate = check;
    };
    Object.defineProperty(MasterUpdateModuleComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterUpdateModuleComponent.prototype, "checkFormSubModules", {
        get: function () { return this.myFormSubModules.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterUpdateModuleComponent.prototype, "checkFormUpdateSubModules", {
        get: function () { return this.myFormUpdateSubModules.controls; },
        enumerable: true,
        configurable: true
    });
    MasterUpdateModuleComponent.prototype.ngOnInit = function () {
    };
    MasterUpdateModuleComponent = __decorate([
        core_1.Component({
            selector: 'app-master-update-module',
            templateUrl: './master-update-module.component.html',
            styleUrls: ['./master-update-module.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [modules_service_1.ModulesService, router_1.Router, router_1.ActivatedRoute])
    ], MasterUpdateModuleComponent);
    return MasterUpdateModuleComponent;
}());
exports.MasterUpdateModuleComponent = MasterUpdateModuleComponent;
//# sourceMappingURL=master-update-module.component.js.map