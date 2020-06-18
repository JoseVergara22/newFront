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
var router_1 = require("@angular/router");
var sweetalert2_1 = require("sweetalert2");
var modules_service_1 = require("../../master-services/modules/modules.service");
var MasterModuleComponent = /** @class */ (function () {
    function MasterModuleComponent(moduleService, router) {
        this.moduleService = moduleService;
        this.router = router;
        this.submitted = false;
        this.filterIndicatorText = false;
        this.filterIndicatorCheck = false;
        this.active = false;
        this.inactive = false;
        this.loadingData();
    }
    MasterModuleComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.moduleService.getModule().then(function (data) {
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
    MasterModuleComponent.prototype.updateFilter = function (event) {
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
    MasterModuleComponent.prototype.onChangeActive = function (d) {
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
    MasterModuleComponent.prototype.onChangeInactive = function (d) {
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
    MasterModuleComponent.prototype.updateFilterActiveInactive = function (active) {
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
    MasterModuleComponent.prototype.sendCustomer = function () {
        this.router.navigateByUrl('maintenance/moduleRegister');
    };
    MasterModuleComponent.prototype.updateBrand = function (row) {
        this.router.navigateByUrl('maintenance/moduleUpdate/' + row.id);
    };
    MasterModuleComponent.prototype.deleteCustomer = function (row) {
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
                _this.moduleService.deleteModule(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este cliente presenta problemas',
                            text: 'Este cliente no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        // this.router.navigateByUrl('master/registerBrand');
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'Cliente eliminado',
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
    MasterModuleComponent.prototype.blockAgents = function (vadr) {
        console.log(vadr);
    };
    MasterModuleComponent.prototype.ngOnInit = function () {
    };
    MasterModuleComponent = __decorate([
        core_1.Component({
            selector: 'app-master-module',
            templateUrl: './master-module.component.html',
            styleUrls: ['./master-module.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [modules_service_1.ModulesService, router_1.Router])
    ], MasterModuleComponent);
    return MasterModuleComponent;
}());
exports.MasterModuleComponent = MasterModuleComponent;
//# sourceMappingURL=master-module.component.js.map