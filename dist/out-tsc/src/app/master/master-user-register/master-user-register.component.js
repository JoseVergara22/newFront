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
var ng2_validation_1 = require("ng2-validation");
var user_service_1 = require("../../master-services/User/user.service");
var sweetalert2_1 = require("sweetalert2");
var router_1 = require("@angular/router");
var MasterUserRegisterComponent = /** @class */ (function () {
    function MasterUserRegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.load = true;
        this.errorProfile = false;
        this.submitted = false;
        this.enabledUpdated = false;
        this.loading = true;
        this.getUser();
        //this.getUserCustomer();
        var name = new forms_1.FormControl('', forms_1.Validators.required);
        var lastname = new forms_1.FormControl('', forms_1.Validators.required);
        var username = new forms_1.FormControl('', forms_1.Validators.required);
        var cellphone = new forms_1.FormControl('');
        var telephone = new forms_1.FormControl('');
        var password = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]);
        var identification = new forms_1.FormControl('', forms_1.Validators.required);
        var email = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        var profile = new forms_1.FormControl('', forms_1.Validators.required);
        var rpassword = new forms_1.FormControl('', [forms_1.Validators.required, ng2_validation_1.CustomValidators.equalTo(password)]);
        this.myForm = new forms_1.FormGroup({
            name: name,
            lastname: lastname,
            username: username,
            cellphone: cellphone,
            telephone: telephone,
            email: email,
            password: password,
            rpassword: rpassword,
            identification: identification,
            profile: profile
        });
        var updatename = new forms_1.FormControl('', forms_1.Validators.required);
        var updatelastname = new forms_1.FormControl('', forms_1.Validators.required);
        var updateusername = new forms_1.FormControl('', forms_1.Validators.required);
        var updatecellphone = new forms_1.FormControl('');
        var updatetelephone = new forms_1.FormControl('');
        var updateemail = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        var updateprofile = new forms_1.FormControl('', forms_1.Validators.required);
        this.myUpdateForm = new forms_1.FormGroup({
            updatename: updatename,
            updatelastname: updatelastname,
            updateusername: updateusername,
            updatecellphone: updatecellphone,
            updatetelephone: updatetelephone,
            updateemail: updateemail,
            updateprofile: updateprofile
        });
        /* if (this.load) {
           swal({
             title: 'Sweet!',
             allowOutsideClick: false
           });
           swal.showLoading();
         }
     
         setTimeout(() => {
           this.load = false;
           swal.close();
           }, 10000);
         console.log('Importante verificar ');
     
         this.userService.createUser().then(data => {
         const resp = data;
          console.log(resp);
         });
     
     */
    }
    MasterUserRegisterComponent.prototype.ngOnInit = function () {
    };
    MasterUserRegisterComponent.prototype.getUser = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.userService.getUsers().then(function (data) {
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
                sweetalert2_1.default.close();
                _this.rowsUser = resp.data;
                console.log(_this.rowsUser);
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
    MasterUserRegisterComponent.prototype.getUserCustomer = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.userService.getUsersCustomer().then(function (data) {
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
                sweetalert2_1.default.close();
                _this.rowsUser = resp.data;
                console.log(_this.rowsUser);
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
    MasterUserRegisterComponent.prototype.sendUser = function () {
        var _this = this;
        this.submitted = true;
        if (!this.myForm.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.errorProfile = false;
            this.userService.createUserInternal(this.myForm.get('name').value, this.myForm.get('lastname').value, this.myForm.get('name').value + ' ' + this.myForm.get('lastname').value, this.myForm.get('username').value, this.myForm.get('cellphone').value, this.myForm.get('telephone').value, this.myForm.get('password').value, this.myForm.get('rpassword').value, this.myForm.get('email').value, this.myForm.get('profile').value, 0).then(function (data) {
                var resp = data;
                if (resp.error) {
                    var msg = '';
                    if (resp.error.message === 'The username already exists.') {
                        msg = 'El usuario ya existe';
                    }
                    else {
                        msg = 'El correo electrónico ya existe';
                    }
                    sweetalert2_1.default({
                        title: msg,
                        text: 'Este usuario no se puede registrar',
                        type: 'error'
                    });
                }
                else {
                    sweetalert2_1.default({
                        title: 'Usuario agregado',
                        type: 'success'
                    }).then(function (data) {
                        _this.getUser();
                    });
                    _this.router.navigateByUrl('master');
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            this.errorProfile = true;
        }
    };
    MasterUserRegisterComponent.prototype.updateUser = function () {
        var _this = this;
        console.log('info');
        console.log(this.myUpdateForm.get('updatename').value, this.myUpdateForm.get('updatelastname').value, this.myUpdateForm.get('updatename').value + ' ' + this.myUpdateForm.get('updatelastname').value, this.myUpdateForm.get('updateusername').value, this.myUpdateForm.get('updatecellphone').value, this.myUpdateForm.get('updatetelephone').value, this.myUpdateForm.get('updateemail').value, this.currentUser.id, this.myUpdateForm.get('updateprofile').value);
        this.submitted = true;
        if (!this.myUpdateForm.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.errorProfile = false;
            this.userService.updateUser(this.myUpdateForm.get('updatename').value, this.myUpdateForm.get('updatelastname').value, this.myUpdateForm.get('updatename').value + ' ' + this.myUpdateForm.get('updatelastname').value, this.myUpdateForm.get('updateusername').value, this.myUpdateForm.get('updatecellphone').value, this.myUpdateForm.get('updatetelephone').value, this.myUpdateForm.get('updateemail').value, this.currentUser.id, this.myUpdateForm.get('updateprofile').value, 0).then(function (data) {
                var resp = data;
                console.log(resp);
                if (resp.error) {
                    var msg = '';
                    console.log(resp.error);
                    if (resp.error.message == 'The username already exists.') {
                        msg = 'El usuario ya existe';
                    }
                    if (resp.error.message == 'The email already exists.') {
                        msg = 'El correo electrónico ya existe';
                    }
                    else {
                        msg = 'ocurrio un error';
                    }
                    sweetalert2_1.default({
                        title: msg,
                        text: 'Este usuario no se puede actualizar',
                        type: 'error'
                    });
                }
                else {
                    sweetalert2_1.default({
                        title: 'Usuario actualizado',
                        type: 'success'
                    }).then(function (data) {
                        _this.getUser();
                    });
                    _this.router.navigateByUrl('master');
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            this.errorProfile = true;
        }
    };
    Object.defineProperty(MasterUserRegisterComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterUserRegisterComponent.prototype, "checkUpdateForm", {
        get: function () { return this.myUpdateForm.controls; },
        enumerable: true,
        configurable: true
    });
    MasterUserRegisterComponent.prototype.saveEmail = function (email) {
        console.log('');
    };
    MasterUserRegisterComponent.prototype.handleRefusalToSetEmail = function (dismissMethod) {
        // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
        // ... do something
    };
    MasterUserRegisterComponent.prototype.openAjaxSwal = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Estás seguro?',
            // text: 'Once deleted, you will not be able to recover this imaginary file!',
            type: 'warning',
            showConfirmButton: true,
            showCancelButton: true
        })
            .then(function (willDelete) {
            if (willDelete.value) {
                sweetalert2_1.default(_this.a);
                _this.kilo();
            }
            else {
                sweetalert2_1.default('Fail');
            }
            console.log(willDelete);
        });
    };
    MasterUserRegisterComponent.prototype.deleteUser = function (row) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Estás seguro de eliminar este elemento?',
            type: 'warning',
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: 'No',
            confirmButtonText: 'Si'
        })
            .then(function (willDelete) {
            sweetalert2_1.default.showLoading();
            if (willDelete.value) {
                _this.elementDelete = row;
                console.log(row);
                console.log(_this.elementDelete);
                _this.userService.deleteUsers(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este Usuario presenta problemas',
                            text: 'Este Usuario no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        sweetalert2_1.default({
                            title: 'Usuario eliminada',
                            type: 'success'
                        }).then(function (data) {
                            _this.getUser();
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                console.log(_this.elementDelete.id);
            }
            else {
                // swal('Fail');
            }
            console.log(willDelete);
        });
    };
    MasterUserRegisterComponent.prototype.showUpdateUser = function (row) {
        /*  console.log(row);
          this.currentUser = row;
          console.log( this.currentUser );
          this.myUpdateForm.get('updatename').setValue(row.first_name);
          this.myUpdateForm.get('updatelastname').setValue(row.last_name);
          this.myUpdateForm.get('updateusername').setValue(row.username);
          this.myUpdateForm.get('updatecellphone').setValue(row.cellphone);
          this.myUpdateForm.get('updatetelephone').setValue(row.telephone);
          this.myUpdateForm.get('updateemail').setValue(row.email);
          this.myUpdateForm.get('updateprofile').setValue(row.profile_id);
          if (this.currentUser.status === '0') {
            this.enabledUpdated = true;
          } else {
            this.enabledUpdated = false;
          }
      
          document.getElementById( 'uploadUser').click();*/
        console.log(row);
        this.router.navigateByUrl('maintenance/externalUserUpdate/' + row.id);
    };
    MasterUserRegisterComponent.prototype.createdUser = function () {
        this.router.navigateByUrl('maintenance/externalUser');
    };
    MasterUserRegisterComponent.prototype.kilo = function () {
        console.log('kilo');
    };
    MasterUserRegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-master-user-register',
            templateUrl: './master-user-register.component.html',
            styleUrls: ['./master-user-register.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], MasterUserRegisterComponent);
    return MasterUserRegisterComponent;
}());
exports.MasterUserRegisterComponent = MasterUserRegisterComponent;
//# sourceMappingURL=master-user-register.component.js.map