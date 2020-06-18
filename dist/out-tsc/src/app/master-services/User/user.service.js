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
require("rxjs/add/operator/map");
var environment_1 = require("./../../../environments/environment");
var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.apiEndPoint = environment_1.environment.apiBaseUrl;
        this.apiClientId = environment_1.environment.clientId;
        this.apiClientSecret = environment_1.environment.clientSecret;
    }
    UserService.prototype.createUserInternal = function (firstName, lastName, name, username, cellphone, telephone, password, rpassword, email, profileId, active) {
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
                profile_id: profileId,
                active: active
            };
            _this.http.post(_this.apiEndPoint + 'api/auth/signup', postParams)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    UserService.prototype.updateUser = function (firstName, lastName, name, username, cellphone, telephone, email, id, profileId, active) {
        var _this = this;
        return new Promise(function (resolve) {
            console.log('entra en el servicio');
            console.log(active);
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
                first_name: firstName,
                last_name: lastName,
                name: name,
                cellphone: cellphone,
                telephone: telephone,
                email: email,
                username: username,
                profile_id: profileId,
                active: active
            };
            console.log('pasa los headers ');
            _this.http.patch(_this.apiEndPoint + 'api/users/' + id, patchParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log('retorna data');
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log('retorna error');
                console.log(error);
                resolve(error);
            });
        });
    };
    UserService.prototype.findToken = function (token) {
        var _this = this;
        return new Promise(function (resolve) {
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/auth/password/find/' + token, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                if (error.error.message == "Este token de restablecimiento de contraseña no es válido.") {
                    resolve("Este token de restablecimiento de contraseña no es válido.");
                }
                else {
                    console.log(error);
                    resolve(error);
                }
            });
        });
    };
    UserService.prototype.getUsers = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/users', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    UserService.prototype.getUser = function (id) {
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
            _this.http.get(_this.apiEndPoint + 'api/users/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    UserService.prototype.getUserInformation = function (email) {
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
            _this.http.get(_this.apiEndPoint + 'api/user_information?email=' + email, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    UserService.prototype.changePassword = function (email, password, token, rpassword) {
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
                email: email,
                status: 1,
                password: password,
                c_password: rpassword,
                token: token
            };
            console.log(postParams);
            _this.http.post(_this.apiEndPoint + 'api/auth/password/reset', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log('error servicio');
                console.log(error);
                resolve(error);
            });
        });
    };
    /* changePasswordLogin(idUser: number, password: string) {
       return new Promise(resolve => {
 
         const httpOptions = {
           headers: new HttpHeaders({
             'Content-Type':  'application/json',
             'Accept': 'application/json'
           })
         };
         const patchParams = {
           password:password,
         };
         console.log(patchParams);
         this.http.patch(this.apiEndPoint+'api/change_password/changePassword/'+idUser,patchParams, httpOptions)
         .map(res => res).subscribe(data => {
         console.log(data);
         resolve(data);
         }, error => {
             console.log('error servicio');
             console.log(error);
             resolve(error);
           
           });
       });
     }*/
    UserService.prototype.changePasswordLogin = function (idUser, password) {
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
                password: password,
            };
            _this.http.patch(_this.apiEndPoint + 'api/change_password/changePassword/' + idUser, patchParams, httpOptions)
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
    UserService.prototype.getUsersCustomer = function () {
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
            _this.http.get(_this.apiEndPoint + 'api/all_branch_offices_users', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    UserService.prototype.getUsersCustomerUpdate = function (idUser) {
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
    UserService.prototype.createUserCustomer = function (id_user, id_customer, ids_branch_offices) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            var postParams = {
                id_user: id_user,
                ids_branch_offices: ids_branch_offices
            };
            _this.http.post(_this.apiEndPoint + 'api/branch_offices_users', postParams)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log('ingreso');
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log('error al registro');
                resolve(error);
            });
        });
    };
    UserService.prototype.recoveryPassword = function (email) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            // headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                email: email
            };
            _this.http.post(_this.apiEndPoint + 'api/auth/password/create', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log('error servicio');
                if (error.error.message == "No podemos encontrar un usuario con esa dirección de correo electrónico.") {
                    resolve("No podemos encontrar un usuario con esa dirección de correo electrónico.");
                }
                else {
                    console.log(error);
                    resolve(error);
                }
            });
        });
    };
    UserService.prototype.deleteUsers = function (id) {
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
            _this.http.delete(_this.apiEndPoint + 'api/users/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    UserService.prototype.generateToken = function (email, password) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            /*
              */
            console.log(_this.apiClientId);
            console.log(_this.apiClientSecret);
            console.log(email);
            console.log(password);
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                })
            };
            //  let options = new RequestOptions({ headers: headers });
            var postParams = {
                grant_type: 'password',
                client_id: _this.apiClientId,
                client_secret: _this.apiClientSecret,
                username: email,
                password: password,
                scope: '*'
            };
            //  alert (postParams.toString());
            console.log('llamando el servicio');
            console.log(_this.apiEndPoint);
            _this.http.post(_this.apiEndPoint + 'oauth/token', postParams)
                .map(function (res) { return res; })
                .subscribe(function (data) {
                var ole = data;
                console.log('respuesta: ' + JSON.stringify(ole));
                resolve(data);
            }, function (error) {
                console.log('este es el error');
                console.log(error);
                resolve(error);
            });
        });
    };
    UserService.prototype.deleteOfficesBranchUser = function (idUser, idCustomer) {
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
            _this.http.delete(_this.apiEndPoint + 'api/delete_all_branch_offices_users?id_user=' + idUser + '&id_customer=' + idCustomer, httpOptions)
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
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map