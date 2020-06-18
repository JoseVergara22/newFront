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
var MasterResetPasswordLoginComponent = /** @class */ (function () {
    function MasterResetPasswordLoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isMobile = false;
        this.email = "";
        this.cansend = false;
    }
    MasterResetPasswordLoginComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('user');
        this.userId = localStorage.getItem('userid');
        this.username = localStorage.getItem('username');
        /* swal({
           title: 'Procesando información ...',
           allowOutsideClick: false
         });
         swal.showLoading();*/
        if (screen.width < 780) {
            this.isMobile = true;
        }
        /*  this.activatedroute.paramMap.subscribe(data=>{
            this.tokeninfo=data.get('token');
            console.log(this.tokeninfo);
          });
          this.userService.findToken(this.tokeninfo).then(data=>{
            swal.close();
            if(data=="Este token de restablecimiento de contraseña no es válido."){
              swal({
                title:'Token no valido',
                text: 'Este token de restablecimiento de contraseña no es válido.!',
                type: 'error'
               });
            }else{
              this.info=data;
              console.log(this.info.email);
              this.cansend=true;
            }
          }).catch(err=>{
            console.log('error en consumo servicio');
            swal.close();
            swal({
              title:'Error',
              text: 'Ha ocurrido un error',
              type: 'error'
             });
          });*/
    };
    MasterResetPasswordLoginComponent.prototype.restartPassword = function () {
    };
    MasterResetPasswordLoginComponent.prototype.sendRecoveryEmail = function (email) {
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
    MasterResetPasswordLoginComponent.prototype.changePassword = function (password, confirmpassword) {
        var _this = this;
        this.user = localStorage.getItem('user');
        //  if (this.cansend==true) {
        sweetalert2_1.default({
            title: 'Procesando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        console.log(password + '-' + confirmpassword);
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
            this.userService.changePasswordLogin(this.userId, password).then(function (data) {
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
        /*} else {
          swal({
            title:'Token no valido',
            text: 'Este token de restablecimiento de contraseña no es válido.!',
            type: 'error'
           });
        }*/
    };
    MasterResetPasswordLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-master-reset-password-login',
            templateUrl: './master-reset-password-login.component.html',
            styleUrls: ['./master-reset-password-login.component.scss']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router])
    ], MasterResetPasswordLoginComponent);
    return MasterResetPasswordLoginComponent;
}());
exports.MasterResetPasswordLoginComponent = MasterResetPasswordLoginComponent;
//# sourceMappingURL=master-reset-password-login.component.js.map