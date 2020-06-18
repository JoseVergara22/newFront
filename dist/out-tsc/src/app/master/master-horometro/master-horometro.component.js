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
var horometro_service_1 = require("../../master-services/horometro/horometro.service");
var forklift_service_1 = require("../../master-services/Forklift/forklift.service");
var sweetalert2_1 = require("sweetalert2");
var router_1 = require("@angular/router");
var MasterHorometroComponent = /** @class */ (function () {
    function MasterHorometroComponent(restService, router, forkliftService, horometroservice) {
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
        this.forkliftService = forkliftService;
        this.horometroservice = horometroservice;
        this.submitted = false;
        this.a = 5;
        this.switchCreate = true;
        this.switchUpdate = true;
        this.change = true;
        this.active = false;
        this.inactive = false;
        this.enabledUpdated = false;
        // ejemplo
        this.filterIndicatorText = false;
        this.filterIndicatorCheck = false;
        this.selectedBusinessId = 0;
        this.selectedOfficeId = 0;
        this.customerOffices = 0;
        this.horometroCurrent = 0;
        this.loadingData();
        this.getCustomers();
        var horometroUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        this.myFormUpdate = new forms_1.FormGroup({
            horometroUpdate: horometroUpdate
        });
    }
    ;
    MasterHorometroComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.forkliftService.getForklifts().then(function (data) {
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
    MasterHorometroComponent.prototype.updateFilter = function (event) {
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
            return d.brand_description.toLowerCase().indexOf(val) !== -1 || !val;
        });
        if (val !== '') {
            this.filterIndicatorText = true;
            this.rowsTempText = temp;
        }
        // update the rows
        this.rowsClient = temp;
    };
    MasterHorometroComponent.prototype.updateFilterActiveInactive = function (active) {
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
    MasterHorometroComponent.prototype.getCustomers = function () {
        var _this = this;
        this.restService.getCustomer().then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.customers = resp.data;
            // this.rowsClient = resp.data;
            // this.rowStatic =  resp.data;
            // this.rowsTemp = resp.data;
            // console.log( this.rowsClient);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterHorometroComponent.prototype.getCustomersForklift = function (idCustomer) {
        var _this = this;
        this.forkliftService.getForkliftsCustomer(idCustomer).then(function (data) {
            var resp = data;
            console.log('forklifts');
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
    MasterHorometroComponent.prototype.getBranchOfficeForklift = function (idBranch) {
        var _this = this;
        this.forkliftService.getForkliftsBranch(idBranch).then(function (data) {
            var resp = data;
            console.log('forklifts branch');
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
    MasterHorometroComponent.prototype.getCustomerOffice = function () {
        var _this = this;
        console.log(this.selectedBusinessId);
        this.getCustomersForklift(this.selectedBusinessId);
        this.restService.getCustomerOffice(this.selectedBusinessId).then(function (data) {
            var resp = data;
            console.log('ole ole');
            console.log(resp);
            _this.customerOffices = resp.data_branchoffices;
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterHorometroComponent.prototype.getOfficeForklift = function () {
        this.getBranchOfficeForklift(this.selectedOfficeId);
    };
    MasterHorometroComponent.prototype.onChangeCreate = function (check) {
        this.change = check;
        console.log(check);
    };
    MasterHorometroComponent.prototype.onChangeUpdate = function (check) {
        this.switchUpdate = check;
        this.enabledUpdated = check;
        console.log(check);
    };
    MasterHorometroComponent.prototype.onChangeActive = function (d) {
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
    MasterHorometroComponent.prototype.onChangeInactive = function (d) {
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
    MasterHorometroComponent.prototype.updateForklift = function (forklift) {
        console.log(forklift);
        this.router.navigateByUrl('maintenance/forkliftUpdate/' + forklift.id);
    };
    Object.defineProperty(MasterHorometroComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    MasterHorometroComponent.prototype.sendForklift = function () {
        this.router.navigateByUrl('/maintenance/registerForklift');
    };
    MasterHorometroComponent.prototype.ngOnInit = function () {
    };
    MasterHorometroComponent.prototype.blockAgents = function (vadr) {
        console.log(vadr);
    };
    MasterHorometroComponent.prototype.updateHorometro = function (row) {
        this.currentrow = row;
        this.horometroCurrent = row.h_current;
        document.getElementById('uploadHorometro').click();
    };
    MasterHorometroComponent.prototype.updatehorometroCurrent = function (valor, row) {
        var _this = this;
        console.log(this.myFormUpdate.get('horometroUpdate'));
        this.submitted = true;
        if (!this.myFormUpdate.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.horometroservice.updateHorometer(this.currentrow.id, this.myFormUpdate.get('horometroUpdate').value)
                .then(function (data) {
                var resp = data;
                console.log(resp);
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Error',
                        text: 'Este horometro no se puede actualizar',
                        type: 'error'
                    });
                }
                else {
                    document.getElementById('createBrandHide').click();
                    _this.loadingData();
                    sweetalert2_1.default({
                        title: 'Horometro actualizado',
                        type: 'success'
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MasterHorometroComponent.prototype, "horometroCurrent", void 0);
    MasterHorometroComponent = __decorate([
        core_1.Component({
            selector: 'app-master-horometro',
            templateUrl: './master-horometro.component.html',
            styleUrls: ['./master-horometro.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router, forklift_service_1.ForkliftService, horometro_service_1.HorometroService])
    ], MasterHorometroComponent);
    return MasterHorometroComponent;
}());
exports.MasterHorometroComponent = MasterHorometroComponent;
//# sourceMappingURL=master-horometro.component.js.map