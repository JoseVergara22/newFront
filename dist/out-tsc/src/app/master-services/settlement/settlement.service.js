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
var SettlementService = /** @class */ (function () {
    function SettlementService(http, router) {
        this.http = http;
        this.router = router;
        this.apiEndPoint = environment_1.environment.apiBaseUrl;
    }
    SettlementService.prototype.showSettlementConsecutive = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/settlement_consecutive', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.createSettlement = function (settlement_consecutive, customer_id, customer_document, department_id, city_id, contact, telephone, observation, total, email, status, regional_id, cost_center_id, warehouse_id, estimate_order, branch_office_id, forklift_id, forklift_text) {
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
            //payment_method: payment_method,
            //guaranty: guaranty,
            //validity: validity,
            console.log('oficina ' + branch_office_id);
            console.log(localStorage.getItem('userid'));
            var postParams = {
                elaborate_user_id: localStorage.getItem('userid'),
                settlement_consecutive: settlement_consecutive,
                customer_id: customer_id,
                customer_document: customer_document,
                department_id: department_id,
                city_id: city_id,
                contact: contact,
                telephone: telephone,
                observation: observation,
                total: total,
                email: email,
                status: status,
                regional_id: regional_id,
                cost_center_id: cost_center_id,
                warehouse_id: warehouse_id,
                estimate_order: estimate_order,
                branch_office_id: branch_office_id,
                forklift_id: forklift_id,
                forklift_text: forklift_text
            };
            _this.http.post(_this.apiEndPoint + 'api/create_settlement', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.updateConsecutive = function () {
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
            var postParams = {};
            _this.http.patch(_this.apiEndPoint + 'api/update_settlement_consecutive', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getSettlemetSpecific = function (id) {
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
            _this.http.get(_this.apiEndPoint + 'api/settlements/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getValidationDifference = function (settlement_id) {
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
            _this.http.get(_this.apiEndPoint + 'api/total_comparison?settlement_id=' + settlement_id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.updateSettlement = function (id, customer_id, customer_document, department_id, city_id, contact, telephone, observation, regional_id, cost_center_id, warehouse_id, estimate_order, branch_office_id, forklift_id, forklift_text) {
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
            var patchParams = {
                customer_id: customer_id,
                customer_document: customer_document,
                department_id: department_id,
                city_id: city_id,
                contact: contact,
                telephone: telephone,
                observation: observation,
                regional_id: regional_id,
                cost_center_id: cost_center_id,
                warehouse_id: warehouse_id,
                estimate_order: estimate_order,
                branch_office_id: branch_office_id,
                forklift_id: forklift_id,
                forklift_text: forklift_text
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_settlement/' + id, patchParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.updateSettlementDetailWorkforce = function (settlement_detail_id, code, service, quantity, hour_value, subtotal, delivery, total, status, type_service, subcenter_id, discount, fullCode) {
        var _this = this;
        console.log('info de detalle');
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
                code: code,
                quantity: quantity,
                service: service,
                hour_value: hour_value,
                subtotal: subtotal,
                delivery: delivery,
                total: total,
                status: status,
                type_service: type_service,
                subcost_center_id: subcenter_id,
                discount: discount,
                full_code: fullCode,
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_settlement_details/' + settlement_detail_id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.updateSettlementDetailCustomer = function (settlement_detail_customer_id, code, service, quantity, hour_value, subtotal, delivery, total, status, type_service, subcenter_id, discount, fullCode) {
        var _this = this;
        console.log('info de detalle');
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
                code: code,
                quantity: quantity,
                service: service,
                price: hour_value,
                subtotal: subtotal,
                delivery: delivery,
                total: total,
                status: status,
                subcost_center_id: subcenter_id,
                discount: discount,
                full_code: fullCode,
            };
            console.log('este es el id ' + settlement_detail_customer_id);
            _this.http.patch(_this.apiEndPoint + 'api/update_settlement_details_customer/' + settlement_detail_customer_id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getSettlementDetails = function (idSettlement) {
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
            _this.http.get(_this.apiEndPoint + 'api/settlement_details_general/' + idSettlement, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.createEmailsSettlement = function (settlement_id, subject, comment, check_hide_code, params) {
        var _this = this;
        console.log(params);
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
                settlement_id: settlement_id,
                subject: subject,
                comment: comment,
                check_hide_code: check_hide_code,
                params: params
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_emails_settlement', patchParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getSettlementDetailFiles = function (idSettlement) {
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
            console.log('idsettlement ' + idSettlement);
            _this.http.get(_this.apiEndPoint + 'api/get_idsettlement_files?settlement_id=' + idSettlement + '&type=0', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.deleteSettlementFile = function (id) {
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
            _this.http.delete(_this.apiEndPoint + 'api/delete_settlement_file/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.createSettlementFile = function (settlement_id, bucket, url, type, nameFile) {
        var _this = this;
        console.log('info de detalle');
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
                settlement_id: settlement_id,
                bucket: bucket,
                url: url,
                type: type,
                name: nameFile
            };
            _this.http.post(_this.apiEndPoint + 'api/create_settlement_file', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getSettlementDetailsWorkforce = function (idSettlement) {
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
            _this.http.get(_this.apiEndPoint + 'api/settlement_details_general_workforce/' + idSettlement, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getSettlementDetailsParts = function (idSettlement) {
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
            _this.http.get(_this.apiEndPoint + 'api/settlement_details_general_parts/' + idSettlement, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getSettlementEmails = function (idSettlement) {
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
            _this.http.get(_this.apiEndPoint + 'api/get_settlement_emails_client/' + idSettlement, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.deleteSettlementDetail = function (id) {
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
            _this.http.delete(_this.apiEndPoint + 'api/delete_settlement_details/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.deleteSettlementDetailCustomer = function (id) {
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
            _this.http.delete(_this.apiEndPoint + 'api/delete_settlement_details_customer/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getSettlementDetailsCustomer = function (idSettlement) {
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
            _this.http.get(_this.apiEndPoint + 'api/settlement_details_general_customer/' + idSettlement, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.createScheduleSettlement = function (params) {
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
            console.log(localStorage.getItem('userid'));
            var postParams = {
                params: params
            };
            _this.http.post(_this.apiEndPoint + 'api/scheduled_settlement', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.updateScheduleSettlement = function (params) {
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
            console.log(localStorage.getItem('userid'));
            var patchParams = {
                params: params
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_scheduled_settlement', patchParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getScheduleSettlementCustomer = function (idSettlement) {
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
            _this.http.get(_this.apiEndPoint + 'api/get_scheldule_settlements_customer/' + idSettlement, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getSettlementEstimateCustomer = function (idCustomer, idBranchOffice, numberPage) {
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
            _this.http.get(_this.apiEndPoint + 'api/settlement_estimate_customer?customer_id=' + idCustomer + '&&branch_office_id=' + idBranchOffice + '&&page=' + numberPage, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getSettlementEstimateForklift = function (idCustomer, idBranchOffice) {
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
            console.log(idCustomer + '-' + idBranchOffice);
            _this.http.get(_this.apiEndPoint + 'api/settlement_estimate_forklift?customer_id=' + idCustomer + '&&branch_office_id=' + idBranchOffice, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getSettlementEstimateCopyClient = function (idSettlement) {
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
            _this.http.get(_this.apiEndPoint + 'api/settlement_estimate_copy_client?settlement_id=' + idSettlement, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getSettlementCodes = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/codes_settlement', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getRegionalSubCenterCost = function (regionalId) {
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
            _this.http.get(_this.apiEndPoint + 'api/get_sub_cost_centers_id/' + regionalId, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.copyEstimateToSettlement = function (settlementId, estimateItems) {
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
            console.log(localStorage.getItem('userid'));
            console.log(settlementId, estimateItems);
            var postParams = {
                settlement_id: settlementId,
                details_id: estimateItems
            };
            console.log(postParams);
            _this.http.post(_this.apiEndPoint + 'api/copy_estimate_settlement', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.copySettlementCustomer = function (settlementId, estimateItems) {
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
            console.log(localStorage.getItem('userid'));
            console.log(settlementId, estimateItems);
            var postParams = {
                settlement_id: settlementId,
                details_id: estimateItems
            };
            _this.http.post(_this.apiEndPoint + 'api/copy_estimate_settlement_customer', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.createSettlementDetails = function (settlement_id, code, description, quantity, unit_cost, price_list, price_suggest, weight, price, subtotal, delivery, total, status, type_service, weight_type, subcenter_id, discount, fullCode) {
        var _this = this;
        console.log('info de detalle');
        console.log(settlement_id + '-' + code + '-' + description + '-' +
            quantity + '-' + unit_cost + '-' + price_list + '-' + price_suggest + '-' +
            price + '-' + delivery + '-' + total + '-' +
            status);
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
                settlement_id: settlement_id,
                subcost_center_id: subcenter_id,
                discount: discount,
                code: code,
                full_code: fullCode,
                description: description,
                quantity: quantity,
                unit_cost: unit_cost,
                price_list: price_list,
                price_suggest: price_suggest,
                weight: weight,
                price: price,
                subtotal: subtotal,
                delivery: delivery,
                total: total,
                status: status,
                type_service: type_service,
                weight_type: weight_type
            };
            _this.http.post(_this.apiEndPoint + 'api/create_settlement_detail', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.createSettlementDetailWorkforce = function (settlement_id, code, description, quantity, hour_value, subtotal, delivery, total, status, type_service, subcenter_id, discount, fullCode) {
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
                settlement_id: settlement_id,
                subcost_center_id: subcenter_id,
                discount: discount,
                code: code,
                full_code: fullCode,
                service: description,
                quantity: quantity,
                hour_value: hour_value,
                subtotal: subtotal,
                delivery: delivery,
                total: total,
                status: status,
                type_service: type_service,
            };
            _this.http.post(_this.apiEndPoint + 'api/create_settlement_detail', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.createSettlementDetailsCustomer = function (settlement_id, code, description, quantity, unit_cost, price, subtotal, delivery, total, status, subcenter_id, discount, fullCode) {
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
                settlement_id: settlement_id,
                subcost_center_id: subcenter_id,
                discount: discount,
                code: code,
                full_code: fullCode,
                description: description,
                quantity: quantity,
                unit_cost: unit_cost,
                price: price,
                subtotal: subtotal,
                delivery: delivery,
                total: total,
                status: status,
            };
            _this.http.post(_this.apiEndPoint + 'api/create_settlement_detail_customer', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    // Organizar api de actualizacion;
    SettlementService.prototype.updateSettlementDetails = function (settlement_id, code, description, quantity, unit_cost, price_list, price_suggest, weight, price, subtotal, delivery, total, status, type_service, weight_type, subcenter_id, discount, fullCode) {
        var _this = this;
        console.log('info de detalle');
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
                code: code,
                description: description,
                quantity: quantity,
                unit_cost: unit_cost,
                price_list: price_list,
                price_suggest: price_suggest,
                weight: weight,
                price: price,
                subtotal: subtotal,
                delivery: delivery,
                total: total,
                status: status,
                type_service: type_service,
                weight_type: weight_type,
                subcost_center_id: subcenter_id,
                discount: discount,
                full_code: fullCode,
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_settlement_details/' + settlement_id, patchParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log('respuesta');
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getWarehouese = function (id) {
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
            _this.http.get(_this.apiEndPoint + 'api/get_warehouses_regional_id?idRegional=' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getSubCostCenter = function (id) {
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
            _this.http.get(_this.apiEndPoint + 'api/get_subcost_centers_center_id?idRegional=' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.getCostCenter = function (id) {
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
            _this.http.get(_this.apiEndPoint + 'api/get_cost_centers_regionals_id?idRegional=' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    /*showSettlementFilter(paramsFilter: string) {
                          console.log()
                          return new Promise(resolve => {
                            const headers = new HttpHeaders();
                            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
                            headers.append('Content-Type', 'application/json');
                            const httpOptions = {
                              headers: new HttpHeaders({
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                                'Accept': 'application/json'
                              })
                            };
                            this.http.get(this.apiEndPoint+'api/get_settlement?' + paramsFilter, httpOptions)
                              .map(res => res).subscribe(data => {
                                console.log(data);
                                resolve(data);
                              }, error => {
                                resolve(error);
                              });
                          });
    }*/
    SettlementService.prototype.showSettlementFilter = function (paramsFilter) {
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
            _this.http.get(_this.apiEndPoint + 'api/get_settlement?' + paramsFilter, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.assingInvoice = function (invoice, id) {
        var _this = this;
        console.log(invoice);
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
            var postParams = {
                invoice: invoice,
                id: id
            };
            console.log(postParams);
            _this.http.post(_this.apiEndPoint + 'api/assign_invoice', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.sendSettlementEmailAmazon = function (idUser, idCustomer, idEstimate, info, comment, subject) {
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
            console.log('id_user=' + idUser + '&id_customer=' + idCustomer
                + '&id_estimate=' + idEstimate + '&info=' + info + '&comment=' + comment + '&subject=' + subject);
            console.log(' ingreso al correo sobre el info' + info);
            var postParams = {
                id_user: idUser,
                id_estimate: idEstimate,
                info: info,
                id_customer: idCustomer,
                subject: subject,
                comment: comment
            };
            _this.http.get(_this.apiEndPoint + 'api/send_amazon_mail_settlement?id_user=' + idUser + '&id_customer=' + idCustomer
                + '&id_estimate=' + idEstimate + '&info=' + info + '&comment=' + comment + '&subject=' + subject, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log(error.error.error);
                console.log(JSON.stringify(error));
                resolve(error);
            });
        });
    };
    SettlementService.prototype.updateSettlementStatus = function (id, status) {
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
                status: status
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_settlement_status/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    //Nombre original de este metodo es createSettlementFiles se le agrega uns S
    // por duplicidad de nombre al hacer pull
    SettlementService.prototype.createSettlementFiles = function (estimate_id, bucket, url, type, nameFile) {
        var _this = this;
        console.log('info de detalle');
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
                estimate_id: estimate_id,
                bucket: bucket,
                url: url,
                type: type,
                name: nameFile
            };
            _this.http.post(_this.apiEndPoint + 'api/create_settlement_file', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService.prototype.totalComparisonSettlement = function (settlement_id) {
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
                settlement_id: settlement_id,
            };
            _this.http.get(_this.apiEndPoint + 'api/total_comparison?settlement_id=' + settlement_id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    SettlementService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], SettlementService);
    return SettlementService;
}());
exports.SettlementService = SettlementService;
//# sourceMappingURL=settlement.service.js.map