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
var work_service_1 = require("../../master-services/Work/work.service");
var sweetalert2_1 = require("sweetalert2");
var router_1 = require("@angular/router");
var MasterWorkDashboardComponent = /** @class */ (function () {
    function MasterWorkDashboardComponent(workService, router) {
        this.workService = workService;
        this.router = router;
        this.getWorks();
    }
    MasterWorkDashboardComponent.prototype.ngOnInit = function () {
    };
    MasterWorkDashboardComponent.prototype.getWorks = function () {
        var _this = this;
        this.workService.getWorks().then(function (data) {
            var resp = data;
            if (resp.error) {
                sweetalert2_1.default({
                    title: 'Error',
                    text: 'Ha ocurrido un error',
                    type: 'error'
                });
            }
            else {
                console.log(data);
                _this.rowsWork = resp.data;
                console.log(_this.rowsWork);
            }
        }).catch(function (error) {
            sweetalert2_1.default({
                title: 'Error',
                text: 'Ha ocurrido un error',
                type: 'error'
            });
            console.log(error);
        });
    };
    MasterWorkDashboardComponent.prototype.redirecttodetails = function () {
        this.router.navigateByUrl('maintenance/work_details');
    };
    MasterWorkDashboardComponent.prototype.goToTpdateView = function (workrow) {
        console.log(workrow.description);
        this.router.navigateByUrl('maintenance/work_detailsUpdate/' + workrow.description);
    };
    MasterWorkDashboardComponent.prototype.deleteWorkHeader = function (workrow) {
        var _this = this;
        sweetalert2_1.default({
            title: "Confirmacion",
            text: "esta seguro que desea borrar este elemento?",
            cancelButtonText: "No",
            confirmButtonText: "Si",
            showCancelButton: true,
            showConfirmButton: true
        }).then(function (goingtodelete) {
            if (goingtodelete.value) {
                _this.loader();
                _this.rowtodelete = workrow;
                console.log(_this.rowtodelete);
                _this.workService.deleteWorkHeader(_this.rowtodelete.id).then(function (data) {
                    var resp = data;
                    if (resp.success == false) {
                        _this.generalAlert('Error', 'ocurrio un error durante el procesado', "error");
                    }
                    else {
                        _this.generalAlert('Rutina eliminada', 'Rutina eliminada correctamente', 'success');
                        _this.getWorks();
                    }
                }).catch(function (err) {
                    console.log(err);
                    _this.generalAlert('Error', 'ocurrio un error durante el procesado', "error");
                });
            }
            else {
                console.log("proceso cancelado");
            }
        });
    };
    MasterWorkDashboardComponent.prototype.generalAlert = function (title, text, type) {
        sweetalert2_1.default({
            title: title,
            text: text,
            type: type
        });
    };
    MasterWorkDashboardComponent.prototype.loader = function () {
        sweetalert2_1.default({
            title: "procesando informacion",
            allowEscapeKey: false,
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
    };
    MasterWorkDashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-master-work-dashboard',
            templateUrl: './master-work-dashboard.component.html',
            styleUrls: ['./master-work-dashboard.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [work_service_1.WorkService,
            router_1.Router])
    ], MasterWorkDashboardComponent);
    return MasterWorkDashboardComponent;
}());
exports.MasterWorkDashboardComponent = MasterWorkDashboardComponent;
//# sourceMappingURL=master-work-dashboard.component.js.map