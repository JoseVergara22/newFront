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
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var environment_1 = require("./../../../environments/environment");
require("rxjs/add/operator/map");
var ForkliftService = /** @class */ (function () {
    function ForkliftService(http, router) {
        this.http = http;
        this.router = router;
        this.apiEndPoint = environment_1.environment.apiBaseUrl;
    }
    ForkliftService.prototype.getForklifts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/forklifts', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log("a mostrar data");
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log("error en servicio");
                resolve(error);
            });
        });
    };
    ForkliftService.prototype.getForkliftsCustomer = function (idCustomer) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/forklifts_customer/' + idCustomer, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log("a mostrar data");
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log("error en servicio");
                resolve(error);
            });
        });
    };
    ForkliftService.prototype.getForkliftsCustomerFull = function (idCustomer) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/forklifts_customer_full/' + idCustomer, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log("a mostrar data");
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log("error en servicio");
                resolve(error);
            });
        });
    };
    ForkliftService.prototype.getForkliftBranchOfficesFull = function (idCustomer) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/forklifts_branch_office_full/' + idCustomer, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log("a mostrar data");
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log("error en servicio");
                resolve(error);
            });
        });
    };
    ForkliftService.prototype.getForkliftsBranch = function (idBranch) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/forklifts_branch/' + idBranch, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log("a mostrar data");
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log("error en servicio");
                resolve(error);
            });
        });
    };
    ForkliftService.prototype.getForklift = function (id) {
        var _this = this;
        console.log('este es el id: ' + id);
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/forklifts/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log("a mostrar data");
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log("error en servicio");
                resolve(error);
            });
        });
    };
    ForkliftService.prototype.getDetailsForkliftRoutine = function (id) {
        var _this = this;
        console.log('este es el id: ' + id);
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/forklift_routine_details/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log("a mostrar data");
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log("error en servicio");
                resolve(error);
            });
        });
    };
    ForkliftService.prototype.getForkliftImage = function (id) {
        var _this = this;
        console.log('este es el id: ' + id);
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/forklift_images/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log("a mostrar data");
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log("error en servicio");
                resolve(error);
            });
        });
    };
    ForkliftService.prototype.deleteImagesForklift = function (forklift_id) {
        var _this = this;
        console.log("data to send");
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.delete(_this.apiEndPoint + 'api/delete_all_forklift_images?fork_lift_id=' + forklift_id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log("a mostrar data");
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log("error en servicio");
                console.log(error);
                resolve(error);
            });
        });
    };
    ForkliftService.prototype.deleteRoutinesForklift = function (forklift_id) {
        var _this = this;
        console.log("data to send");
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.delete(_this.apiEndPoint + 'api/forklift_routine_details?fork_lift_id=' + forklift_id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log("a mostrar data");
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log("error en servicio");
                console.log(error);
                resolve(error);
            });
        });
    };
    ForkliftService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], ForkliftService);
    return ForkliftService;
}());
exports.ForkliftService = ForkliftService;
//# sourceMappingURL=forklift.service.js.map