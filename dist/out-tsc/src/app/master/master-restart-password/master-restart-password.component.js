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
var user_service_1 = require("../../master-services/User/user.service");
var sweetalert2_1 = require("sweetalert2");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MasterRestartPasswordComponent = /** @class */ (function () {
    function MasterRestartPasswordComponent(userService, activatedroute, router) {
        this.userService = userService;
        this.activatedroute = activatedroute;
        this.router = router;
        this.isMobile = false;
        this.email = "";
        this.cansend = false;
    }
    MasterRestartPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Procesando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        if (screen.width < 780) {
            this.isMobile = true;
        }
        this.activatedroute.paramMap.subscribe(function (data) {
            _this.tokeninfo = data.get('token');
            console.log(_this.tokeninfo);
        });
        this.userService.findToken(this.tokeninfo).then(function (data) {
            sweetalert2_1.default.close();
            if (data == "Este token de restablecimiento de contraseña no es válido.") {
                sweetalert2_1.default({
                    title: 'Token no valido',
                    text: 'Este token de restablecimiento de contraseña no es válido.!',
                    type: 'error'
                });
            }
            else {
                _this.info = data;
                console.log(_this.info.email);
                _this.cansend = true;
            }
        }).catch(function (err) {
            console.log('error en consumo servicio');
            sweetalert2_1.default.close();
            sweetalert2_1.default({
                title: 'Error',
                text: 'Ha ocurrido un error',
                type: 'error'
            });
        });
    };
    MasterRestartPasswordComponent.prototype.restartPassword = function () {
    };
    MasterRestartPasswordComponent.prototype.sendRecoveryEmail = function (email) {
        sweetalert2_1.default({
            title: 'Procesando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.email = email;
        this.userService.recoveryPassword(this.email).then(function (data) {
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
                if (data == "No podemos encontrar un usuario con esa dirección de correo electrónico.") {
                    sweetalert2_1.default.close();
                    sweetalert2_1.default({
                        title: 'Correo no encontrado',
                        text: 'No podemos encontrar un usuario con esa dirección de correo electrónico.!',
                        type: 'error'
                    });
                }
                else {
                    sweetalert2_1.default.close();
                    sweetalert2_1.default({
                        title: 'Realizado correctamente',
                        text: 'Hemos enviado su enlace de restablecimiento de contraseña por correo electrónico!',
                        type: 'success'
                    });
                }
            }
        }).catch(function (error) {
            sweetalert2_1.default.close();
            sweetalert2_1.default({
                title: 'Error',
                text: 'Ha ocurrido un error',
                type: 'error'
            });
            console.log(error);
        });
    };
    MasterRestartPasswordComponent.prototype.changePassword = function (password, confirmpassword) {
        var _this = this;
        if (this.cansend == true) {
            sweetalert2_1.default({
                title: 'Procesando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            if (password != confirmpassword) {
                sweetalert2_1.default.close();
                sweetalert2_1.default({
                    title: "error",
                    text: "las contraseñas no coinciden.",
                    type: "error",
                    allowOutsideClick: false
                });
            }
            else {
                // email:string,password:string,token:string,rpassword:string
                this.userService.changePassword(this.info.email, password, this.tokeninfo, confirmpassword).then(function (data) {
                    var resp = data;
                    if (resp.error) {
                        sweetalert2_1.default.close();
                        sweetalert2_1.default({
                            title: 'Error',
                            text: 'Ha ocurrido un error',
                            type: 'error'
                        });
                    }
                    else {
                        sweetalert2_1.default.close();
                        sweetalert2_1.default({
                            title: 'Realizado correctamente',
                            text: 'Se ha cambiado sucontraseña correctamente!',
                            type: 'success'
                        });
                        _this.router.navigateByUrl('masterauth');
                    }
                    console.log(resp);
                }).catch(function (error) {
                    sweetalert2_1.default.close();
                    sweetalert2_1.default({
                        title: 'Error',
                        text: 'Ha ocurrido un error',
                        type: 'error'
                    });
                    console.log(error);
                });
            }
        }
        else {
            sweetalert2_1.default({
                title: 'Token no valido',
                text: 'Este token de restablecimiento de contraseña no es válido.!',
                type: 'error'
            });
        }
    };
    MasterRestartPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-master-restart-password',
            templateUrl: './master-restart-password.component.html',
            styleUrls: ['./master-restart-password.component.scss']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], MasterRestartPasswordComponent);
    return MasterRestartPasswordComponent;
}());
exports.MasterRestartPasswordComponent = MasterRestartPasswordComponent;
//# sourceMappingURL=master-restart-password.component.js.map