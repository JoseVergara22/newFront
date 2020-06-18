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
var router_1 = require("@angular/router");
var MasterChangePasswordComponent = /** @class */ (function () {
    function MasterChangePasswordComponent(userService, activatedroute, router) {
        this.userService = userService;
        this.activatedroute = activatedroute;
        this.router = router;
        /*this.userService.findToken(this.activatedroute.paramMap.subscribe(data=>{
          this.tokeninfo=data;
        })
        ).then(data=>{
          const resp:any=data;
          if (resp.error) {
            swal.close();
            swal({
              title:'Error',
              text: 'Ha ocurrido un error',
              type: 'error'
             });
          } else {
            swal.close();
            swal({
              title:'Realizado correctamente',
              text: 'Se ha cambiado sucontraseña correctamente!',
              type: 'success'
             });
          }
          console.log(resp);
        }).catch(error=>{
          swal.close();
          swal({
            title:'Error',
            text: 'Ha ocurrido un error',
            type: 'error'
          });
          console.log(error);
        })*/
    }
    MasterChangePasswordComponent.prototype.ngOnInit = function () {
    };
    MasterChangePasswordComponent.prototype.changePassword = function (password, confirmpassword) {
        alert(localStorage.getItem('email'));
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
            this.userService.changePassword(localStorage.getItem('email'), password, confirmpassword, "").then(function (data) {
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
    };
    MasterChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-master-change-password',
            templateUrl: './master-change-password.component.html',
            styleUrls: ['./master-change-password.component.scss']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], MasterChangePasswordComponent);
    return MasterChangePasswordComponent;
}());
exports.MasterChangePasswordComponent = MasterChangePasswordComponent;
//# sourceMappingURL=master-change-password.component.js.map