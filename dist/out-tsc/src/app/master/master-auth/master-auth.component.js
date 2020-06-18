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
var forms_1 = require("@angular/forms");
var sweetalert2_1 = require("sweetalert2");
var router_1 = require("@angular/router");
var user_service_1 = require("../../master-services/User/user.service");
var MasterAuthComponent = /** @class */ (function () {
    function MasterAuthComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
        this.isMobile = false;
        var email = new forms_1.FormControl('', forms_1.Validators.required);
        var password = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            email: email,
            password: password
        });
    }
    MasterAuthComponent.prototype.ngOnInit = function () {
        /*if (screen.width < 780) {
          this.isMobile = true;
        }*/
    };
    Object.defineProperty(MasterAuthComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    MasterAuthComponent.prototype.doLogin = function () {
        var _this = this;
        console.log('ole ole');
        this.submitted = true;
        if (!this.myForm.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.userService.generateToken(this.myForm.get('email').value, this.myForm.get('password').value).then(function (data) {
                var resp = data;
                console.log(resp);
                if (resp.error) {
                    var msg = '';
                    if (resp.error === 'The user credentials were incorrect.') {
                        msg = 'Usuario/Correo electrónico o Contraseña incorrecta';
                    }
                    sweetalert2_1.default({
                        title: msg,
                        text: 'Oops problemas para ingresar',
                        type: 'error'
                    });
                }
                else {
                    console.log('ole ole ole ');
                    console.log(resp);
                    localStorage.setItem('token_user', resp.access_token);
                    // localStorage.setItem('email', this.myForm.get('email').value);
                    sweetalert2_1.default.close();
                    // console.log('Miralo ps' + localStorage.getItem('token'));
                    _this.userService.getUserInformation(_this.myForm.get('email').value)
                        .then(function (data) {
                        var resp = data;
                        //console.log('data user: '+ JSON.stringify(resp.data[0].profile_id));
                        localStorage.setItem('profile', resp.data[0].profile_id);
                        localStorage.setItem('email', resp.data[0].email);
                        localStorage.setItem('username', resp.data[0].username);
                        localStorage.setItem('userid', resp.data[0].id);
                        localStorage.setItem('user', resp.data[0]);
                        console.log('------------------');
                        console.log(resp.data[0].status);
                        console.log('------------------');
                        if (Number(resp.data[0].status) === 0) {
                            _this.router.navigateByUrl('resetPasswordLogin'); // es poner la pagina para cambiar la contraseña
                        }
                        else {
                            _this.router.navigateByUrl('master');
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            console.log('error');
        }
    };
    MasterAuthComponent.prototype.doLogin2 = function () {
        this.router.navigateByUrl('master');
    };
    MasterAuthComponent = __decorate([
        core_1.Component({
            selector: 'app-master-auth',
            templateUrl: './master-auth.component.html',
            styleUrls: ['./master-auth.component.scss']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], MasterAuthComponent);
    return MasterAuthComponent;
}());
exports.MasterAuthComponent = MasterAuthComponent;
//# sourceMappingURL=master-auth.component.js.map