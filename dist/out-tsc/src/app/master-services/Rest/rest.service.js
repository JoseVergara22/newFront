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
var RestService = /** @class */ (function () {
    function RestService(http, router) {
        this.http = http;
        this.router = router;
        this.apiEndPoint = environment_1.environment.apiBaseUrl;
    }
    RestService.prototype.getUser = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    };
    RestService.prototype.createUserInternal = function (firstName, lastName, name, username, cellphone, telephone, password, rpassword, email, profileId) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            var postParams = {
                first_name: firstName,
                last_name: lastName,
                name: name,
                cellphone: cellphone,
                telephone: telephone,
                email: email,
                password: password,
                c_password: rpassword,
                username: username,
                profile_id: profileId
            };
            _this.http.post(_this.apiEndPoint + 'api/auth/signup', postParams)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log('error al registro');
                resolve(error);
            });
        });
    };
    RestService.prototype.createRelationshipUserOffices = function (id_user, ids_branch_offices, id_customer) {
        var _this = this;
        console.log(id_user);
        console.log(ids_branch_offices);
        console.log(id_customer);
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
                id_user: id_user,
                ids_branch_offices: ids_branch_offices,
                id_customer: id_customer
            };
            _this.http.post(_this.apiEndPoint + 'api/branch_offices_users', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log('error al registro');
                resolve(error);
            });
        });
    };
    RestService.prototype.getRelationshipUserOffices = function (idUser) {
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
            _this.http.get(_this.apiEndPoint + 'api/branch_offices_users?id_user=' + idUser, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createBrand = function (description, status) {
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
            var postParams = {
                description: description,
                status: status
            };
            _this.http.post(_this.apiEndPoint + 'api/brands', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updateBrand = function (id, description, status) {
        var _this = this;
        console.log('ole ole ole');
        console.log(status);
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
            _this.http.patch(_this.apiEndPoint + 'api/brands/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteBrand = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(status);
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
            _this.http.delete(_this.apiEndPoint + 'api/brands/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteOffice = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(status);
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
            _this.http.delete(_this.apiEndPoint + 'api/branch_offices/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createCustomer = function (business_name, type_document_id, document_id, telephone, address, status, margin_price, payment_condition_id, city_id, department_id) {
        var _this = this;
        console.log(business_name + ',' + type_document_id + ',' + document_id + ',' + telephone +
            ',' + address + ',' + status + ',' + margin_price + ',' + payment_condition_id + ',' + city_id + ',' + department_id);
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
                business_name: business_name,
                type_document_id: type_document_id,
                document_id: document_id,
                telephone: telephone,
                address: address,
                status: status,
                price_margin: margin_price,
                payment_condition_id: payment_condition_id,
                city_id: city_id,
                department_id: department_id
            };
            _this.http.post(_this.apiEndPoint + 'api/customers ', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createCustomerNewCustomer = function (business_name, type_document_id, document_id, telephone, address, status, margin_price, payment_condition_id, city_id, department_id, regional_id) {
        var _this = this;
        console.log(business_name + ',' + type_document_id + ',' + document_id + ',' + telephone +
            ',' + address + ',' + status + ',' + margin_price + ',' + payment_condition_id + ',' + city_id + ',' + department_id + ',' + regional_id);
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
                business_name: business_name,
                type_document_id: type_document_id,
                document_id: document_id,
                telephone: telephone,
                address: address,
                status: status,
                price_margin: margin_price,
                payment_condition_id: payment_condition_id,
                city_id: city_id,
                department_id: department_id,
                regional_id: regional_id
            };
            _this.http.post(_this.apiEndPoint + 'api/create_customer_new_regional', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updateCustomer = function (id, business_name, type_document_id, document_id, telephone, address, status, margin_price, payment_condition_id, city_id, department_id) {
        var _this = this;
        console.log(id + ',' + business_name + ',' + type_document_id + ',' + document_id + ',' + telephone +
            ',' + address + ',' + status + ',' + margin_price + ',' + payment_condition_id + ',' + city_id + ',' + department_id);
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
                business_name: business_name,
                type_document_id: type_document_id,
                document_id: document_id,
                telephone: telephone,
                address: address,
                status: status,
                price_margin: margin_price,
                payment_condition_id: payment_condition_id,
                city_id: city_id,
                department_id: department_id
            };
            _this.http.patch(_this.apiEndPoint + 'api/customers/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log(error);
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteCustomer = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(status);
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
            _this.http.delete(_this.apiEndPoint + 'api/customers/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createforklift = function (serie, customer_id, branch_offices_id, description, status, brand_id, model_id, machine_id, tyre_id, tyre_forward, tyre_sback, fuel_id, routine_id, tonne, mastil_izado, mastil_contract, h_initial, h_current, alarm, observation) {
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
            var postParams = {
                /* serie: serie,
                 customer_id: customer_id,
                 branch_offices_id: branch_offices_id,
                 description: description,
                 brand_id: brand_id,
                 status: status,
                 model_id: model_id,
                 machine_id: machine_id,
                 tyre_id: tyre_id,
                 fuel_id: fuel_id*/
                serie: serie,
                customer_id: customer_id,
                branch_offices_id: branch_offices_id,
                description: description,
                status: status,
                brand_id: brand_id,
                model_id: model_id,
                machine_id: machine_id,
                tyre_id: tyre_id,
                tyre_forward: tyre_forward,
                tyre_sback: tyre_sback,
                fuel_id: fuel_id,
                routine_id: routine_id,
                tonne: tonne,
                mastil_izado: mastil_izado,
                mastil_contract: mastil_contract,
                h_initial: h_initial,
                h_current: h_current,
                alarm: alarm,
                observation: observation
            };
            console.log('tonne-----------' + tonne);
            _this.http.post(_this.apiEndPoint + 'api/forklifts', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updateforklift = function (idForlift, serie, customer_id, branch_offices_id, description, status, brand_id, model_id, machine_id, tyre_id, tyre_forward, tyre_sback, fuel_id, routine_id, tonne, mastil_izado, mastil_contract, h_initial, h_current, alarm, observation) {
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
            var postParams = {
                /* serie: serie,
                 customer_id: customer_id,
                 branch_offices_id: branch_offices_id,
                 description: description,
                 brand_id: brand_id,
                 status: status,
                 model_id: model_id,
                 machine_id: machine_id,
                 tyre_id: tyre_id,
                 fuel_id: fuel_id*/
                serie: serie,
                customer_id: customer_id,
                branch_offices_id: branch_offices_id,
                description: description,
                status: status,
                brand_id: brand_id,
                model_id: model_id,
                machine_id: machine_id,
                tyre_id: tyre_id,
                tyre_forward: tyre_forward,
                tyre_sback: tyre_sback,
                fuel_id: fuel_id,
                routine_id: routine_id,
                tonne: tonne,
                mastil_izado: mastil_izado,
                mastil_contract: mastil_contract,
                h_initial: h_initial,
                h_current: h_current,
                alarm: alarm,
                observation: observation
            };
            _this.http.patch(_this.apiEndPoint + 'api/forklifts/' + idForlift, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createTyre = function (description, status) {
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
            var postParams = {
                description: description,
                status: status
            };
            _this.http.post(_this.apiEndPoint + 'api/tyres', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updateTyre = function (id, description, status) {
        var _this = this;
        console.log('ole ole ole');
        console.log(status);
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
            _this.http.patch(_this.apiEndPoint + 'api/tyres/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteTyre = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(status);
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
            _this.http.delete(_this.apiEndPoint + 'api/tyres/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createModel = function (description, brand, status) {
        var _this = this;
        console.log(description + ',' + brand + ',' + status);
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
                brand_id: brand,
                status: status
            };
            _this.http.post(_this.apiEndPoint + 'api/models', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updateModel = function (id, description, brand, status) {
        var _this = this;
        console.log(id + ',' + description + ',' + brand + ',' + status);
        console.log(status);
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
            var patchParams = {
                description: description,
                brand_id: brand,
                status: status
            };
            _this.http.patch(_this.apiEndPoint + 'api/models/' + id, patchParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createFuel = function (description, type, status) {
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
            var postParams = {
                description: description,
                type: type,
                status: status
            };
            _this.http.post(_this.apiEndPoint + 'api/fuels', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updateFuel = function (id, description, type, status) {
        var _this = this;
        console.log(id + ',' + description + ',' + type + ',' + status);
        console.log(status);
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
                type: type,
                status: status
            };
            _this.http.patch(_this.apiEndPoint + 'api/fuels/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteFuel = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(status);
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
            _this.http.delete(_this.apiEndPoint + 'api/fuels/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteModel = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(status);
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
            _this.http.delete(_this.apiEndPoint + 'api/models/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createMachine = function (description, status) {
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
            var postParams = {
                description: description,
                status: status
            };
            _this.http.post(_this.apiEndPoint + 'api/machines', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updateMachine = function (id, description, status) {
        var _this = this;
        console.log('ole ole ole');
        if (!status) {
            status = 0;
        }
        console.log('id:' + id + "desc:" + description + "status:" + status);
        console.log(localStorage.getItem('token_user'));
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
            var patchParams = {
                description: description,
                status: status
            };
            _this.http.patch(_this.apiEndPoint + 'api/machines/' + id, patchParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log('error en el servicio');
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteMachine = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(status);
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
            _this.http.delete(_this.apiEndPoint + 'api/machines/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createPayCondition = function (description, day, status) {
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
            var postParams = {
                description: description,
                day: day,
                status: status
            };
            _this.http.post(_this.apiEndPoint + 'api/payment_conditions', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updatePayCondition = function (id, description, day, status) {
        var _this = this;
        console.log('ole ole ole');
        console.log(status);
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
                day: day,
                status: status
            };
            _this.http.patch(_this.apiEndPoint + 'api/payment_conditions/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.deletePayCondition = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(status);
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.delete(_this.apiEndPoint + 'api/payment_conditions/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log("mostrar data");
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log("error en el servicio");
                resolve(error);
            });
        });
    };
    // --------
    RestService.prototype.getTypeDocuments = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/type_documents', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createTypeDocument = function (description, status) {
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
            var postParams = {
                description: description,
                status: status
            };
            _this.http.post(_this.apiEndPoint + 'api/type_documents', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log("datos");
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log("error en el servicio");
                resolve(error);
            });
        });
    };
    RestService.prototype.updateTypeDocument = function (id, description, status) {
        var _this = this;
        console.log('ole ole ole');
        console.log(status);
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
            _this.http.patch(_this.apiEndPoint + 'api/type_documents/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteTypeDocument = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(status);
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
            _this.http.delete(_this.apiEndPoint + 'api/type_documents/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getDepartments = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/departments', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getCities = function (idDepartamento) {
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
            _this.http.get(_this.apiEndPoint + 'api/cities/' + idDepartamento, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    // ---------
    RestService.prototype.getPriceList = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/price_list', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    // -----------
    RestService.prototype.getBrands = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/brands', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getFuels = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/fuels', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getTyres = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/tyres', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getModels = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/models', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getBrandModels = function (id) {
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
            _this.http.get(_this.apiEndPoint + 'api/brands_model/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    // --------------------------
    RestService.prototype.getPaymentConditions = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/payment_conditions', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    // ------
    RestService.prototype.getMachines = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/machines', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.generateToken = function (email, password) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                })
            };
            //  let options = new RequestOptions({ headers: headers });
            var postParams = {
                grant_type: 'password',
                client_id: '1',
                client_secret: 'TyG8pFzcGI7nTIt31FzFCwnvF0E8t70OSAIyrwWT',
                username: email,
                password: password,
                scope: '*'
            };
            //  alert (postParams.toString());
            _this.http.post(_this.apiEndPoint + 'oauth/token', postParams)
                .map(function (res) { return res; })
                .subscribe(function (data) {
                var ole = data;
                console.log('respuesta: ' + JSON.stringify(ole));
                resolve(data);
            }, function (error) {
                alert(error);
                console.log(error);
            });
        });
    };
    RestService.prototype.getMastersThird = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/show_masters', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    //---------------------------------------------------------------------------Cost center
    RestService.prototype.getSpecificCostCenter = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(id);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            _this.http.get(_this.apiEndPoint + 'api/get_cost_centers_id/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updatCostCenters = function (id, description, code, regional) {
        var _this = this;
        console.log("en servicio");
        console.log(id);
        console.log(description);
        console.log(code);
        console.log(regional);
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                id: id,
                description: description,
                code: code,
                regionals_id: regional
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_cost_centers/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteCostCenter = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(id);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            _this.http.delete(_this.apiEndPoint + 'api/delete_cost_centers_id/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createCostCenter = function (description, code, regional_id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(description + ', ' + code + ', ' + regional_id);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                regionals_id: regional_id,
                code: code,
                description: description
            };
            _this.http.post(_this.apiEndPoint + 'api/create_cost_centers', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getCostCenterSettlement = function (idRegional) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/get_cost_centers_regionals_id?idRegional=' + idRegional, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getCostCenter = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.post(_this.apiEndPoint + 'api/show_cost_centers', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getRegionalCostCenter = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/get_cost_centers_regionals_id', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    //----------------------------------------------------------------------------Technicians
    RestService.prototype.getMastersTechnicians = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/show_masters', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getSpecificTechnician = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(id);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            _this.http.get(_this.apiEndPoint + 'api/get_technicians_id/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createTechnicians = function (name, document, cellphone) {
        var _this = this;
        console.log('ole ole ole');
        console.log(name + ', ' + document + ', ' + cellphone);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                name: name,
                document: document,
                cellphone: cellphone
            };
            _this.http.post(_this.apiEndPoint + 'api/create_technicians', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updateTechnian = function (id, name, document, cellphone) {
        var _this = this;
        console.log("en servicio");
        console.log(id);
        console.log(document);
        console.log(cellphone);
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                id: id,
                name: name,
                document: document,
                cellphone: cellphone,
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_technicians/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteTechnician = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(id);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            _this.http.delete(_this.apiEndPoint + 'api/delete_technicians_id/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getTechnicians = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.post(_this.apiEndPoint + 'api/show_technicians', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    //-------------------------------------------------------------------------Regional
    RestService.prototype.getSpecificRegional = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(id);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            _this.http.get(_this.apiEndPoint + 'api/get_regioanl_id/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createRegional = function (description, code) {
        var _this = this;
        console.log('ole ole ole');
        console.log(description + ', ' + code);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                code: code,
                description: description
            };
            console.log(postParams);
            _this.http.post(_this.apiEndPoint + 'api/create_regionals', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updateRegional = function (id, description, code) {
        var _this = this;
        console.log("en servicio");
        console.log(id);
        console.log(description);
        console.log(code);
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                code: code,
                description: description
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_regional/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteRegional = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(id);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            _this.http.delete(_this.apiEndPoint + 'api/delete_regionals_id/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getRegional = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/show_regionals_all', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getRegionalAll = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/show_regionals_all', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getRegionalCustomer = function (idCustomer) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/get_customer_regionals_id?idCustomer=' + idCustomer, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    //---------------------------------------------------------------------SubCostCentrt
    RestService.prototype.createSubCostCenter = function (description, code, costCenter_id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(description + ', ' + code);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                code: code,
                description: description,
                cost_center_id: costCenter_id
            };
            _this.http.post(_this.apiEndPoint + 'api/create_sub_cost_centers', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updatSubCostCenters = function (id, description, code, costCenter) {
        var _this = this;
        console.log("en servicio");
        console.log(id);
        console.log(description);
        console.log(code);
        console.log(costCenter);
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                id: id,
                description: description,
                code: code,
                cost_center_id: costCenter
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_sub_cost_centers/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteSubCostCenter = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(id);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            _this.http.delete(_this.apiEndPoint + 'api/delete_sub_cost_centers_id/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getSubCostCenter = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.post(_this.apiEndPoint + 'api/show_sub_cost_centers', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    //---------------------------------------------------------------Warehouses
    RestService.prototype.createWarehouses = function (description, code, regional_id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(description + ', ' + code + ', ' + regional_id);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                code: code,
                description: description,
                regionals_id: regional_id
            };
            console.log(postParams);
            _this.http.post(_this.apiEndPoint + 'api/create_warehouses', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updatWarehouses = function (id, description, code, regional) {
        var _this = this;
        console.log("en servicio");
        console.log(id);
        console.log(description);
        console.log(code);
        console.log(regional);
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                id: id,
                description: description,
                code: code,
                regionals_id: regional
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_warehouses/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteWarehouses = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(id);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            _this.http.delete(_this.apiEndPoint + 'api/delete_warehouses_id/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getWarehouses = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.post(_this.apiEndPoint + 'api/show_warehouses', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getWarehousesSettlement = function (regionalId) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/get_warehouses_regional_id?idRegional=' + regionalId, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    //---------------------------------------------------------------CustomerRegional
    RestService.prototype.customerRegionalSelect = function (details) {
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
            var postParams = {
                regional: details
            };
            _this.http.post(_this.apiEndPoint + 'api/create_customer_regionals', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getRegionalId = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(id);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            _this.http.get(_this.apiEndPoint + 'api/get_customer_regionals_id?idCustomer=' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    //---------------------------------------------------------------Rest salidas
    RestService.prototype.getCustomers = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/get_customer', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getOffice = function (idCustomer) {
        var _this = this;
        console.log(idCustomer);
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
            _this.http.get(_this.apiEndPoint + 'api/get_branch_office/' + idCustomer, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getForkLift = function (idOffice) {
        var _this = this;
        console.log(idOffice);
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
            _this.http.get(_this.apiEndPoint + 'api/get_fork_lift/' + idOffice, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getTechnician = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/get_technician', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getReferences = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/show_reference_warehouses_out', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getDescriptions = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/show_description_warehouses_out', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getControls = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/show_control_warehouses_out', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getEstimates = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/show_order_number_warehouses_out', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getSettlements = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/show_settlement_warehouses_out', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getInvoices = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/show_invoice_warehouses_out', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.showWarehouseOutFilter = function (paramsFilter) {
        var _this = this;
        console.log(paramsFilter);
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
            _this.http.get(_this.apiEndPoint + 'api/get_show_warehouse_out?' + paramsFilter, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createWarehousesOut = function (idCustomer, idTechnician, idBranchOffice, quantity, reference, description, control, unitCost, total, forkliftText, ordenNumber, comsumtion, observation) {
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
            var postParams = {
                customer_id: idCustomer,
                technician_id: idTechnician,
                branch_office_id: idBranchOffice,
                quantity: quantity,
                reference: reference,
                description: description,
                control: control,
                unit_cost: unitCost,
                total: total,
                forklift_text: forkliftText,
                //forklift_id: forkliftId,
                orden_number: ordenNumber,
                // settlement_text: settlementText,
                //invoice_text: invoiceText,
                comsumtion: comsumtion,
                observation: observation,
            };
            _this.http.post(_this.apiEndPoint + 'api/create_warehouses_out', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updateWarehouseOut = function (id, idCustomer, idTechnician, idBranchOffice, quantity, reference, description, control, unitCost, total, ordenNumber, comsumtion, observation) {
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
            var postParams = {
                customer_id: idCustomer,
                technician_id: idTechnician,
                branch_office_id: idBranchOffice,
                quantity: quantity,
                reference: reference,
                description: description,
                control: control,
                unit_cost: unitCost,
                total: total,
                //forklift_text: forkliftText,
                //forklift_id: forkliftId,
                orden_number: ordenNumber,
                // settlement_text: settlementText,
                //invoice_text: invoiceText,
                comsumtion: comsumtion,
                observation: observation,
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_warehouses_out/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.deleteWarehousesOut = function (id) {
        var _this = this;
        console.log('ole ole ole');
        console.log(id);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            _this.http.delete(_this.apiEndPoint + 'api/delete_warehouses_out_id/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getWarehousesOut = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user')));
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.post(_this.apiEndPoint + 'api/show_warehouses_out', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    //---------------------------------------------------------------Customer
    RestService.prototype.getCustomer = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/customers', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getRegionalCustomers = function (idRegional) {
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
            _this.http.get(_this.apiEndPoint + 'api/show_customers_regional/' + idRegional, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getSpecificCustomer = function (id) {
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
            _this.http.get(_this.apiEndPoint + 'api/customers/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getCustomerOffice = function (idCustomer) {
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
            _this.http.get(_this.apiEndPoint + 'api/customers_branchoffice/' + idCustomer, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.getOffices = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/branch_offices', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.createOffice = function (customer_id, branch_name, address, telephone, status, city_id, department_id) {
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
            var postParams = {
                customer_id: customer_id,
                branch_name: branch_name,
                address: address,
                telephone: telephone,
                city_id: city_id,
                department_id: department_id,
                status: status
            };
            _this.http.post(_this.apiEndPoint + 'api/branch_offices ', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.updateOffice = function (id, customer_id, branch_name, address, telephone, status, city_id, department_id) {
        var _this = this;
        console.log("en servicio");
        console.log(id);
        console.log(customer_id);
        console.log(branch_name);
        console.log(address);
        console.log(telephone);
        console.log(status);
        console.log(city_id);
        console.log(department_id);
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                customer_id: customer_id,
                branch_name: branch_name,
                address: address,
                telephone: telephone,
                city_id: city_id,
                department_id: department_id,
                status: status
            };
            _this.http.patch(_this.apiEndPoint + 'api/branch_offices/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.showLogFilter = function (paramsFilter) {
        var _this = this;
        console.log(paramsFilter);
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
            _this.http.get(_this.apiEndPoint + 'api/get_log?' + paramsFilter, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.registerLog = function (params) {
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
            _this.http.post(_this.apiEndPoint + 'api/create_log?' + params, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RestService.prototype.testToken = function (token) {
        var _this = this;
        return new Promise(function (resolve) {
            console.log(token);
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (token)); // 'Bearer ' +
            headers.append('Accept', 'application/json');
            // headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + (token),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            //  alert (postParams.toString());
            _this.http.post('http://13.58.95.191/api/details', postParams, httpOptions)
                .map(function (res) { return res; })
                .subscribe(function (data) {
                console.log('respuesta: ' + JSON.stringify(data));
                resolve(data);
            }, function (error) {
                //  alert(error);
                console.log(error);
            });
        });
    };
    RestService.prototype.createUser2 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            var postParams = {
                name: 'Alfoneso',
                //  lastname: lastname,
                user: 'Alfoneso1234',
                //  cellphone: cellphone,
                //  telephone: telephone,
                password: '123456',
                password_confirmation: '123456',
                email: 'jason@98egmail.com',
                profile_id: 2
            };
            _this.http.post('http://3.14.127.210/api/registrar', postParams)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log('error=' + error);
            });
        });
    };
    RestService.prototype.addProducto = function () {
        try {
            console.log('ole ole');
            var json = {
                'user': 'edtisdddonrfs1120',
                'email': 'edistoddnr1@outlook.com',
                'password': 'phpcdeveloper',
                'password_confirmation': 'phpcdeveloper',
                'profile_id': 2
            };
            var params = 'json=' + json;
            // Establecemos cabeceras
            var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            return this.http.post(this.apiEndPoint + 'api/registrar', params, { headers: headers });
        }
        catch (error) {
            console.log(error);
        }
    };
    RestService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], RestService);
    return RestService;
}());
exports.RestService = RestService;
//# sourceMappingURL=rest.service.js.map