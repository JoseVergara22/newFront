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
var HorometroService = /** @class */ (function () {
    function HorometroService(http, router) {
        this.http = http;
        this.router = router;
        this.apiEndPoint = environment_1.environment.apiBaseUrl;
    }
    HorometroService.prototype.getForklift = function () {
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
                console.log(error);
                resolve(error);
            });
        });
    };
    HorometroService.prototype.updateForklift = function (id, serie, customer_id, branch_offices_id, description, brand_id, model_id, machine_id, tyre_id, fuel_id, h_current) {
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
            var patchParams = {
                serie: serie,
                customer_id: customer_id,
                branch_offices_id: branch_offices_id,
                description: description,
                brand_id: brand_id,
                model_id: model_id,
                machine_id: machine_id,
                tyre_id: tyre_id,
                fuel_id: fuel_id,
                h_current: h_current
            };
            _this.http.patch(_this.apiEndPoint + 'api/forklifts/' + id, patchParams, httpOptions)
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
    HorometroService.prototype.updateHorometer = function (id, h_current) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var patchParams = {
                h_current: h_current
            };
            _this.http.patch(_this.apiEndPoint + 'api/updateHorometer/' + id, patchParams, httpOptions)
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
    HorometroService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], HorometroService);
    return HorometroService;
}());
exports.HorometroService = HorometroService;
//# sourceMappingURL=horometro.service.js.map