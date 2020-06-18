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
var user_service_1 = require("../../master-services/User/user.service");
var sweetalert2_1 = require("sweetalert2");
var MasterForgetPasswordComponent = /** @class */ (function () {
    function MasterForgetPasswordComponent(userService) {
        this.userService = userService;
        this.isMobile = false;
        this.email = "";
    }
    MasterForgetPasswordComponent.prototype.ngOnInit = function () {
        if (screen.width < 780) {
            this.isMobile = true;
        }
    };
    MasterForgetPasswordComponent.prototype.sendRecoveryEmail = function (email) {
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
    MasterForgetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-master-forget-password',
            templateUrl: './master-forget-password.component.html',
            styleUrls: ['./master-forget-password.component.scss']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], MasterForgetPasswordComponent);
    return MasterForgetPasswordComponent;
}());
exports.MasterForgetPasswordComponent = MasterForgetPasswordComponent;
//# sourceMappingURL=master-forget-password.component.js.map