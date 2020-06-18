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
var WorkService = /** @class */ (function () {
    function WorkService(http, router) {
        this.http = http;
        this.router = router;
        this.apiEndPoint = environment_1.environment.apiBaseUrl;
    }
    WorkService.prototype.getWorks = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/routines', httpOptions)
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
    WorkService.prototype.getWorksDetails = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/routines/' + id, httpOptions)
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
    WorkService.prototype.getSystem = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/get_system/' + id, httpOptions)
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
    WorkService.prototype.getComponent = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/get_component/' + id, httpOptions)
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
    WorkService.prototype.getPart = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/get_part/' + id, httpOptions)
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
    WorkService.prototype.deleteSystems = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.delete(_this.apiEndPoint + 'api/delete_system/' + id, httpOptions)
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
    WorkService.prototype.deleteComponents = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.delete(_this.apiEndPoint + 'api/delete_component/' + id, httpOptions)
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
    WorkService.prototype.deleteParts = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.delete(_this.apiEndPoint + 'api/delete_part/' + id, httpOptions)
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
    WorkService.prototype.deleteWorkDetail = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.delete(_this.apiEndPoint + 'api/routine_works/' + id, httpOptions)
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
    WorkService.prototype.deleteWorkHeader = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.delete(_this.apiEndPoint + 'api/routines/' + id, httpOptions)
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
    WorkService.prototype.storeWorkHeader = function (status, description, hours, observation) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                status: status,
                description: description,
                hours: hours,
                observation: observation
            };
            console.log(postParams);
            _this.http.post(_this.apiEndPoint + 'api/routines', postParams, httpOptions)
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
    WorkService.prototype.getHeaderWorkInfo = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/routines/' + id, httpOptions)
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
    WorkService.prototype.updateWorkHeader = function (id, status, description, hours, observation) {
        var _this = this;
        console.log("data to send");
        console.log("id " + id);
        console.log("status " + status);
        console.log("description " + description);
        console.log("hours " + hours);
        console.log("observation " + observation);
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var patchParams = {
                description: description,
                status: status,
                hours: hours,
                observation: observation
            };
            _this.http.patch(_this.apiEndPoint + 'api/routines/' + id, patchParams, httpOptions)
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
    WorkService.prototype.storeWorkDetail = function (id_rutines, comment, parts, system) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                id_routine: id_rutines,
                works: comment,
                part: parts,
                system: system,
                status: 0
            };
            _this.http.post(_this.apiEndPoint + 'api/routine_works', postParams, httpOptions)
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
    WorkService.prototype.storeSystem = function (id_rutines, description) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                preventive_id: id_rutines,
                description: description
            };
            _this.http.post(_this.apiEndPoint + 'api/create_system', postParams, httpOptions)
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
    WorkService.prototype.updateWorkDetail = function (id, comment, parts, system) {
        var _this = this;
        console.log("en servicio");
        console.log(parts);
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                works: comment,
                part: parts,
                system: system,
                status: 0
            };
            _this.http.patch(_this.apiEndPoint + 'api/routine_works/' + id, postParams, httpOptions)
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
    WorkService.prototype.updateSystem = function (id, system) {
        var _this = this;
        console.log("en servicio");
        console.log();
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                description: system,
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_system/' + id, postParams, httpOptions)
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
    WorkService.prototype.updateComponets = function (id, component) {
        var _this = this;
        console.log("en servicio");
        console.log();
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                description: component,
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_component/' + id, postParams, httpOptions)
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
    WorkService.prototype.storeComponent = function (system_id, description) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                system_id: system_id,
                description: description
            };
            _this.http.post(_this.apiEndPoint + 'api/create_component', postParams, httpOptions)
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
    WorkService.prototype.storeParts = function (component_id, description, work, supplice, parameter) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                component_id: component_id,
                description: description,
                work: work,
                supplice: supplice,
                parameter: parameter
            };
            console.log(postParams);
            _this.http.post(_this.apiEndPoint + 'api/create_parts', postParams, httpOptions)
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
    WorkService.prototype.updatePart = function (id, description, work, supplice, parameter) {
        var _this = this;
        console.log("en servicio");
        console.log();
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                description: description,
                work: work,
                supplice: supplice,
                parameter: parameter,
            };
            _this.http.patch(_this.apiEndPoint + 'api/update_part/' + id, postParams, httpOptions)
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
    WorkService.prototype.storeWorkDetailForklift = function (id_rutines, id_forklift, date) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                id_routines: id_rutines,
                id_forklift: id_forklift,
                date: date,
                status: 0
            };
            _this.http.post(_this.apiEndPoint + 'api/routine_details', postParams, httpOptions)
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
    WorkService.prototype.storeImageForklift = function (id_forklift, name) {
        var _this = this;
        console.log(id_forklift);
        console.log(name);
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                fork_lift_id: id_forklift,
                name: name
            };
            _this.http.post(_this.apiEndPoint + 'api/image_forklift', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log("a mostrar data");
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log(error);
                resolve(error);
            });
        });
    };
    WorkService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], WorkService);
    return WorkService;
}());
exports.WorkService = WorkService;
//# sourceMappingURL=work.service.js.map