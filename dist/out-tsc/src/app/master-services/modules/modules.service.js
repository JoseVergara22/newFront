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
var ModulesService = /** @class */ (function () {
    function ModulesService(http, router) {
        this.http = http;
        this.router = router;
        this.apiEndPoint = environment_1.environment.apiBaseUrl;
    }
    ModulesService.prototype.getModule = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/show_module', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    ModulesService.prototype.getModuleById = function (id) {
        var _this = this;
        console.log(id);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/get_module_id/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    ModulesService.prototype.getSubModule = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/get_function_module_id/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    ModulesService.prototype.createModule = function (description, status) {
        var _this = this;
        console.log(description);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                description: description,
                status: status
            };
            _this.http.post(_this.apiEndPoint + 'api/create_module?description=' + description, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    ModulesService.prototype.createSubModule = function (description, module_id) {
        var _this = this;
        console.log(description);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                description: description,
                module_id: module_id
            };
            _this.http.post(_this.apiEndPoint + 'api/create_function_module ', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    ModulesService.prototype.updateModule = function (id, description) {
        var _this = this;
        console.log(id + ',' + description);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                description: description,
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_module/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log(error);
                resolve(error);
            });
        });
    };
    ModulesService.prototype.updateSubModule = function (id, description) {
        var _this = this;
        console.log(id + ',' + description);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                description: description,
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_function_module/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log(error);
                resolve(error);
            });
        });
    };
    ModulesService.prototype.deleteModule = function (id) {
        var _this = this;
        console.log('ole ole ole');
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            _this.http.delete(_this.apiEndPoint + 'api/delete_module_id/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    ModulesService.prototype.deleteSubModule = function (id) {
        var _this = this;
        console.log('ole ole ole');
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            _this.http.delete(_this.apiEndPoint + 'api/delete_function_module_id/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    ModulesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], ModulesService);
    return ModulesService;
}());
exports.ModulesService = ModulesService;
//# sourceMappingURL=modules.service.js.map