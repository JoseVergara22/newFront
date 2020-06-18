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
var rest_service_1 = require("../../master-services/Rest/rest.service");
var sweetalert2_1 = require("sweetalert2");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
this.officesTemp = {
    id: 1,
    officeName: 'Medellin',
    status: true
};
var MasterExternalUserUpdateComponent = /** @class */ (function () {
    function MasterExternalUserUpdateComponent(userService, router, restService, rutaActiva) {
        this.userService = userService;
        this.router = router;
        this.restService = restService;
        this.rutaActiva = rutaActiva;
        this.load = true;
        this.errorProfile = false;
        this.officesUpdated = [];
        this.userOfficeRelationShips = []; // Enfocado a las suscursales
        this.clientOfficeRelationShips = []; // Enfocado a los clientes y sedes
        this.userOfficeRelationShipsUpdate = [];
        this.submitted = false;
        this.submittedUpload = false;
        this.enabledUpdated = true;
        this.change = true;
        this.selectedProfileId = 0;
        this.selectedProfileIdUpdate = 0;
        this.showButtonUpdated = 0;
        this.selectedBusinessId = 0;
        this.idBranchOffices = [1];
        this.idBranchOfficesUpdate = [1];
        this.loading = true;
        this.currentUserIdParam = this.rutaActiva.snapshot.params.id;
        this.loadingData();
        // let idUser=285;
        this.getUser(this.currentUserIdParam);
        var name = new forms_1.FormControl('', forms_1.Validators.required);
        var lastname = new forms_1.FormControl('', forms_1.Validators.required);
        var username = new forms_1.FormControl('', forms_1.Validators.required);
        var cellphone = new forms_1.FormControl('');
        var telephone = new forms_1.FormControl('');
        var password = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]);
        // const identification = new FormControl('', Validators.required);
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
            //  identification: identification,
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
    MasterExternalUserUpdateComponent.prototype.onChangeActive = function (check) {
        this.change = check;
        this.enabledUpdated = check;
        console.log(check);
    };
    MasterExternalUserUpdateComponent.prototype.onChangeActiveUpdated = function (check) {
        this.enabledUpdated = check;
        console.log(check);
    };
    MasterExternalUserUpdateComponent.prototype.ngOnInit = function () {
    };
    MasterExternalUserUpdateComponent.prototype.getUser = function (id) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.userService.getUser(id).then(function (data) {
            console.log('info: ' + data);
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
                _this.userCurrentUpdate = resp.data;
                _this.myUpdateForm.get('updatename').setValue(_this.userCurrentUpdate.first_name);
                _this.myUpdateForm.get('updatelastname').setValue(_this.userCurrentUpdate.last_name);
                _this.myUpdateForm.get('updateusername').setValue(_this.userCurrentUpdate.username);
                _this.myUpdateForm.get('updatecellphone').setValue(_this.userCurrentUpdate.cellphone);
                _this.myUpdateForm.get('updatetelephone').setValue(_this.userCurrentUpdate.telephone);
                _this.myUpdateForm.get('updateemail').setValue(_this.userCurrentUpdate.email);
                _this.selectedProfileIdUpdate = Number(_this.userCurrentUpdate.profile_id);
                if (_this.userCurrentUpdate.active === 0) {
                    _this.enabledUpdated = true;
                }
                else {
                    _this.enabledUpdated = false;
                }
                /* this.userService.getUsersCustomerUpdate(id).then(data => {
                   const resp: any = data;
                   console.log('información de sedes y usuarios')
                   console.log(data);
                  // swal.close();
                   console.log(resp);
                 }).catch(error => {
                   console.log(error);
                 });*/
                console.log(id);
                _this.restService.getRelationshipUserOffices(id).then(function (data) {
                    var resp = data;
                    console.log('Info');
                    console.log(resp);
                    if (resp.success == false) {
                        sweetalert2_1.default({
                            titleText: 'No se encontraron sedes asociadas.'
                        });
                    }
                    else {
                        console.log('info de userOffices para update');
                        console.log(resp.data.customers);
                        if (resp.data.customers) {
                            _this.rowsClient = resp.data.customers;
                        }
                        console.log('customer');
                        console.log(resp.data);
                        sweetalert2_1.default.close();
                        console.log(resp.data);
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
                // this.userCurrentUpdate.active)
                // this.userCurrentUpdate.profile_id)
                //this.rowsUser = resp.data;
                // console.log( this.rowsUser);
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
    MasterExternalUserUpdateComponent.prototype.loadingData = function () {
        var _this = this;
        this.restService.getCustomer().then(function (data) {
            var resp = data;
            console.log('epa');
            console.log(data);
            _this.customers = resp.data;
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterExternalUserUpdateComponent.prototype.sendUser = function () {
        var _this = this;
        this.submitted = true;
        if (!this.myForm.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.errorProfile = false;
            var active = 0;
            if (this.change === false) {
                active = 1;
            }
            this.userService.createUserInternal(this.myForm.get('name').value, this.myForm.get('lastname').value, this.myForm.get('name').value + ' ' + this.myForm.get('lastname').value, this.myForm.get('username').value, this.myForm.get('cellphone').value, this.myForm.get('telephone').value, this.myForm.get('password').value, this.myForm.get('rpassword').value, this.myForm.get('email').value, this.myForm.get('profile').value, active).then(function (data) {
                console.log(data);
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
                    }).then(function (varAlert) {
                        // this.getUser();
                        console.log(data);
                        _this.currentUser = data;
                        _this.showButtonUpdated = 1;
                        _this.myUpdateForm.get('updatename').setValue(_this.myForm.get('name').value);
                        _this.myUpdateForm.get('updatelastname').setValue(_this.myForm.get('lastname').value);
                        _this.myUpdateForm.get('updateusername').setValue(_this.myForm.get('username').value);
                        _this.myUpdateForm.get('updatecellphone').setValue(_this.myForm.get('cellphone').value);
                        _this.myUpdateForm.get('updatetelephone').setValue(_this.myForm.get('telephone').value);
                        _this.myUpdateForm.get('updateemail').setValue(_this.myForm.get('email').value);
                        _this.selectedProfileIdUpdate = Number(_this.myForm.get('profile').value);
                    });
                    // this.router.navigateByUrl('master');
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            this.errorProfile = true;
        }
    };
    MasterExternalUserUpdateComponent.prototype.updateUser = function () {
        console.log('info');
        console.log(this.myUpdateForm.get('updatename').value, this.myUpdateForm.get('updatelastname').value, this.myUpdateForm.get('updatename').value + ' ' + this.myUpdateForm.get('updatelastname').value, this.myUpdateForm.get('updateusername').value, this.myUpdateForm.get('updatecellphone').value, this.myUpdateForm.get('updatetelephone').value, this.myUpdateForm.get('updateemail').value, this.currentUserIdParam, this.myUpdateForm.get('updateprofile').value);
        this.submittedUpload = true;
        if (!this.myUpdateForm.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.errorProfile = false;
            var active = 0;
            if (this.enabledUpdated === false) {
                console.log('------');
                console.log(this.enabledUpdated);
                console.log();
                active = 1;
            }
            this.userService.updateUser(this.myUpdateForm.get('updatename').value, this.myUpdateForm.get('updatelastname').value, this.myUpdateForm.get('updatename').value + ' ' + this.myUpdateForm.get('updatelastname').value, this.myUpdateForm.get('updateusername').value, this.myUpdateForm.get('updatecellphone').value, this.myUpdateForm.get('updatetelephone').value, this.myUpdateForm.get('updateemail').value, this.currentUserIdParam, this.myUpdateForm.get('updateprofile').value, active).then(function (data) {
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
                        //  this.getUser();
                    });
                    // this.router.navigateByUrl('master');
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            this.errorProfile = true;
        }
    };
    Object.defineProperty(MasterExternalUserUpdateComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterExternalUserUpdateComponent.prototype, "checkUpdateForm", {
        get: function () { return this.myUpdateForm.controls; },
        enumerable: true,
        configurable: true
    });
    MasterExternalUserUpdateComponent.prototype.saveEmail = function (email) {
        console.log('');
    };
    MasterExternalUserUpdateComponent.prototype.handleRefusalToSetEmail = function (dismissMethod) {
        // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
        // ... do something
    };
    MasterExternalUserUpdateComponent.prototype.openAjaxSwal = function () {
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
    MasterExternalUserUpdateComponent.prototype.changeCheckUpdate = function (item) {
        console.log(item);
    };
    MasterExternalUserUpdateComponent.prototype.goAdminUsers = function () {
        this.router.navigateByUrl('master/register');
    };
    MasterExternalUserUpdateComponent.prototype.deleteUser = function (row) {
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
                            // this.getUser();
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
    MasterExternalUserUpdateComponent.prototype.showUpdateUser = function (row) {
        console.log(row);
        this.currentUser = row;
        console.log(this.currentUser);
        this.myUpdateForm.get('updatename').setValue(row.first_name);
        this.myUpdateForm.get('updatelastname').setValue(row.last_name);
        this.myUpdateForm.get('updateusername').setValue(row.username);
        this.myUpdateForm.get('updatecellphone').setValue(row.cellphone);
        this.myUpdateForm.get('updatetelephone').setValue(row.telephone);
        this.myUpdateForm.get('updateemail').setValue(row.email);
        this.myUpdateForm.get('updateprofile').setValue(row.profile_id);
        // Hay que un for y llenar el array para mostrar
        if (this.currentUser.status === '0') {
            this.enabledUpdated = true;
        }
        else {
            this.enabledUpdated = false;
        }
        document.getElementById('uploadUser').click();
    };
    MasterExternalUserUpdateComponent.prototype.selectOffices = function (event) {
        console.log(event);
        console.log(event);
        this.userOfficeRelationShips.map(function (dato) {
            console.log(dato.id + 'ole' + event.id);
            if (Number(dato.id) === Number(event.id)) {
                if (dato.status === false) {
                    dato.status = true;
                    console.log('hacer cambio');
                }
                else {
                    dato.status = false;
                    console.log('hacer cambio');
                }
            }
            console.log(dato);
            return dato;
        });
        console.log('Revisar cambios');
        var search = this.idBranchOffices.indexOf(event.id);
        if (search == -1) {
            this.idBranchOffices.push(event.id);
        }
        else {
            console.log('entro');
            var pos = this.idBranchOffices.indexOf(event.id);
            console.log(pos);
            this.idBranchOffices.splice(pos, 1);
        }
        console.log(event);
        console.log('oficinas seleccionadas');
        console.log(this.idBranchOffices);
    };
    MasterExternalUserUpdateComponent.prototype.selectOfficesUpdate = function (event) {
        console.log(event);
        console.log(event);
        this.userOfficeRelationShipsUpdate.map(function (dato) {
            console.log(dato.id + 'ole' + event.id);
            if (Number(dato.id) === Number(event.id)) {
                if (dato.status === false) {
                    dato.status = true;
                    console.log('hacer cambio');
                }
                else {
                    dato.status = false;
                    console.log('hacer cambio');
                }
            }
            console.log(dato);
            return dato;
        });
        console.log('Revisar cambios');
        var search = this.idBranchOfficesUpdate.indexOf(event.id);
        if (search == -1) {
            this.idBranchOfficesUpdate.push(event.id);
        }
        else {
            console.log('entro');
            var pos = this.idBranchOfficesUpdate.indexOf(event.id);
            console.log(pos);
            this.idBranchOfficesUpdate.splice(pos, 1);
        }
        console.log(event);
        console.log('oficinas seleccionadas');
        console.log(this.idBranchOfficesUpdate);
    };
    MasterExternalUserUpdateComponent.prototype.relationshipUserOffice = function () {
        console.log(this.selectedBusinessId);
        /*
         this.restService.createRelationshipUserOffices(this.currentUser.data.id,   this.idBranchOffices, this.selectedBusinessId).then(data => {
           const resp: any = data;
           this.getRelationshipUserOffices();
           console.log('ole ole');
           console.log(resp);
           // this.idBranchOffices
           swal.close();
         }).catch(error => {
           console.log(error);
         });*/
        this.idBranchOffices = [1];
        console.log(this.idBranchOffices);
        for (var _i = 0, _a = this.userOfficeRelationShips; _i < _a.length; _i++) {
            var office = _a[_i];
            if (office.status === true) {
                this.idBranchOffices.push(office.id);
            }
        }
        for (var i = 0; i < this.clientOfficeRelationShips.length; i++) {
            if (this.clientOfficeRelationShips[i].idClient === this.selectedBusinessId) {
                this.clientOfficeRelationShips.splice(i, 1);
            }
        }
        this.idBranchOffices.splice(0, 1);
        console.log('Oficinas definitivas');
        console.log(this.idBranchOffices);
        var itemsOffice = this.idBranchOffices.toString();
        this.clientOfficeRelationShip = {
            idClient: this.selectedBusinessId,
            idBranchs: itemsOffice
        };
        console.log('crear relaciones');
        console.log(this.clientOfficeRelationShip);
        this.clientOfficeRelationShips.push(this.clientOfficeRelationShip);
        console.log(this.clientOfficeRelationShips);
        this.selectedBusinessId = 0;
        this.userOfficeRelationShips = [];
    };
    MasterExternalUserUpdateComponent.prototype.relationshipUserOfficeUpdate = function () {
        console.log(this.selectedBusinessId);
        /*
         this.restService.createRelationshipUserOffices(this.currentUser.data.id,   this.idBranchOffices, this.selectedBusinessId).then(data => {
           const resp: any = data;
           this.getRelationshipUserOffices();
           console.log('ole ole');
           console.log(resp);
           // this.idBranchOffices
           swal.close();
         }).catch(error => {
           console.log(error);
         });*/
        this.idBranchOfficesUpdate = [1];
        console.log(this.idBranchOfficesUpdate);
        for (var _i = 0, _a = this.userOfficeRelationShipsUpdate; _i < _a.length; _i++) {
            var office = _a[_i];
            if (office.status === true) {
                this.idBranchOfficesUpdate.push(office.id);
            }
        }
        this.idBranchOfficesUpdate.splice(0, 1);
        console.log('Oficinas definitivas');
        console.log(this.idBranchOfficesUpdate);
        var itemsOffice = this.idBranchOfficesUpdate.toString();
        this.clientOfficeRelationShipUpdate = {
            idClient: this.currentCustomerUpdated,
            idBranchs: itemsOffice
        };
        console.log('crear relaciones de actualizar');
        console.log(this.clientOfficeRelationShipUpdate);
        // this.clientOfficeRelationShips.push(this.clientOfficeRelationShip);
        // console.log(this.clientOfficeRelationShips);
        var numOffices = this.clientOfficeRelationShipUpdate.idBranchs.split(',');
        var branchOfficesNumbeUpdate = [1];
        if (numOffices.length > 0) {
            for (var _b = 0, numOffices_1 = numOffices; _b < numOffices_1.length; _b++) {
                var branch = numOffices_1[_b];
                branchOfficesNumbeUpdate.push(Number(branch));
            }
        }
        branchOfficesNumbeUpdate.splice(0, 1);
        //Borrar sedes y volver agregar
        console.log('definitivas ' + branchOfficesNumbeUpdate);
        this.deleteAllOfficesBranchUser(this.currentUserIdParam, this.currentCustomerUpdated, branchOfficesNumbeUpdate);
        /*  if(branchOfficesNumbeUpdate.length>0){
            this.restService.createRelationshipUserOffices(this.currentUser.data.id,  branchOfficesNumbeUpdate,  this.currentCustomerUpdated).then(data => {
            const resp: any = data;
            swal({
              title: 'Sedes actualizadas',
              type: 'success'
             })
           // this.getRelationshipUserOffices();
            console.log('ole ole');
            console.log(resp);
            // this.idBranchOffices
            swal.close();
          }).catch(error => {
            swal({
              title: 'Error',
              text: 'Alguna de las relaciones que quieres crear, ya esta creada',
              type: 'error'
             });
      
            console.log(error);
          });
        }
      
      
        document.getElementById( 'updateBranchHide').click();
      
      
      
          this.selectedBusinessId=0;
          this.idBranchOfficesUpdate = [];*/
    };
    MasterExternalUserUpdateComponent.prototype.getCustomerOffice = function () {
        var _this = this;
        console.log(this.selectedBusinessId);
        this.idBranchOffices = [1];
        this.userOfficeRelationShips = [];
        this.restService.getCustomerOffice(this.selectedBusinessId).then(function (data) {
            var resp = data;
            console.log('ole ole data');
            console.log(resp);
            var idCustomer = resp.customer.id;
            _this.customerOffices = resp.data_branchoffices;
            for (var _i = 0, _a = _this.customerOffices; _i < _a.length; _i++) {
                var customerOffice = _a[_i];
                console.log('oficina');
                console.log(customerOffice);
                var resultCustomer = void 0;
                var statusTemp = false;
                if (_this.clientOfficeRelationShips.length > 0) {
                    resultCustomer = _this.clientOfficeRelationShips.filter(function (word) { return word.idClient === idCustomer; });
                    console.log('Vector con filtro');
                    console.log(idCustomer);
                    console.log(_this.clientOfficeRelationShips);
                    console.log(resultCustomer);
                    if (resultCustomer.length > 0) {
                        var officesBranchTemp = resultCustomer[0].idBranchs;
                        officesBranchTemp = officesBranchTemp.split(',');
                        console.log('Validación check oficina');
                        console.log(customerOffice.id);
                        // let resultBranchOffice = officesBranchTemp.indexOf((customerOffice.id).toString());
                        for (var _b = 0, officesBranchTemp_1 = officesBranchTemp; _b < officesBranchTemp_1.length; _b++) {
                            var office = officesBranchTemp_1[_b];
                            if (office === customerOffice.id.toString()) {
                                statusTemp = true;
                            }
                        }
                        // console.log(resultBranchOffice);
                        /*  if(resultBranchOffice===0){
                            statusTemp=true;
                          }*/
                        console.log(officesBranchTemp);
                    }
                    _this.officesTemp = {
                        idCustomer: idCustomer,
                        id: customerOffice.id,
                        officeName: customerOffice.branch_name,
                        status: statusTemp
                    };
                    _this.userOfficeRelationShips.push(_this.officesTemp);
                }
                else {
                    _this.officesTemp = {
                        idCustomer: idCustomer,
                        id: customerOffice.id,
                        officeName: customerOffice.branch_name,
                        status: statusTemp
                    };
                    _this.userOfficeRelationShips.push(_this.officesTemp);
                }
            }
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterExternalUserUpdateComponent.prototype.updateCustomerOffices = function (customer) {
        var _this = this;
        console.log('Importante información ');
        console.log(customer);
        this.currentCustomer = customer;
        //console.log(this.selectedBusinessId);
        this.idBranchOffices = [1];
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.restService.getRelationshipUserOffices(this.currentUserIdParam).then(function (data) {
            var resp = data;
            if (resp.error) {
                sweetalert2_1.default({
                    title: 'Error',
                    text: 'Ha ocurrido un error',
                    type: 'error'
                });
            }
            else {
                console.log('info de userOffices');
                _this.rowsClient = resp.data.customers;
                console.log('customer');
                console.log(resp.data.customers);
                sweetalert2_1.default.close();
                console.log('------------Como toma información');
                console.log(resp);
                _this.idUserBranchOffice = resp.data.customers;
                //--------------------  
                _this.restService.getCustomerOffice(_this.currentCustomer.id).then(function (data) {
                    var resp = data;
                    console.log('Que paso ps');
                    console.log(resp);
                    _this.customerOfficesUpdate = resp.data_branchoffices;
                    console.log(_this.customerOfficesUpdate);
                    _this.currentCustomerUpdated = resp.customer.id;
                    var idbranchOfficesTemp = [1];
                    _this.userOfficeRelationShipsUpdate = [];
                    var globalOfficeBranch;
                    console.log(_this.idUserBranchOffice);
                    for (var _i = 0, _a = _this.idUserBranchOffice; _i < _a.length; _i++) {
                        var clientOfficeUpdate = _a[_i];
                        console.log(clientOfficeUpdate.branch_offices);
                        for (var _b = 0, _c = clientOfficeUpdate.branch_offices; _b < _c.length; _b++) {
                            var clientOfficeUpdateBranch = _c[_b];
                            idbranchOfficesTemp.push(clientOfficeUpdateBranch.id);
                            console.log('ole importante');
                            console.log(idbranchOfficesTemp);
                        }
                    }
                    console.log('Info ole ole ');
                    console.log(_this.customerOfficesUpdate);
                    for (var _d = 0, _e = _this.customerOfficesUpdate; _d < _e.length; _d++) {
                        var customerOffices = _e[_d];
                        console.log('valor:' + JSON.stringify(customerOffices));
                        _this.statusTempUpdate = false;
                        for (var _f = 0, idbranchOfficesTemp_1 = idbranchOfficesTemp; _f < idbranchOfficesTemp_1.length; _f++) {
                            var office = idbranchOfficesTemp_1[_f];
                            console.log('comparación de elementos');
                            console.log(office + ' ' + customerOffices.id);
                            if (office === customerOffices.id) {
                                console.log('Entro');
                                _this.statusTempUpdate = true;
                                break;
                            }
                        }
                        console.log(_this.statusTempUpdate);
                        console.log('');
                        _this.officesTempUpdate = {
                            id: customerOffices.id,
                            officeName: customerOffices.branch_name,
                            status: _this.statusTempUpdate
                        };
                        _this.userOfficeRelationShipsUpdate.push(_this.officesTempUpdate);
                        console.log(_this.userOfficeRelationShipsUpdate);
                    }
                    sweetalert2_1.default.close();
                }).catch(function (error) {
                    console.log(error);
                });
                //-----------------------
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
        console.log(this.currentCustomer);
        document.getElementById('relationShipUpdate').click();
    };
    MasterExternalUserUpdateComponent.prototype.getRelationshipUserOffices = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        console.log('iduser' + this.currentUserIdParam);
        this.restService.getRelationshipUserOffices(this.currentUserIdParam).then(function (data) {
            var resp = data;
            if (resp.error) {
                sweetalert2_1.default({
                    title: 'Error',
                    text: 'Ha ocurrido un error',
                    type: 'error'
                });
            }
            else {
                console.log('info de userOffices');
                _this.rowsClient = resp.data.customers;
                console.log('customer');
                console.log(resp.data.customers);
                sweetalert2_1.default.close();
                console.log(resp.data);
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
    MasterExternalUserUpdateComponent.prototype.kilo = function () {
        console.log('kilo');
    };
    MasterExternalUserUpdateComponent.prototype.createRelationShip = function () {
    };
    MasterExternalUserUpdateComponent.prototype.closeModalRelationship = function () {
        var _this = this;
        document.getElementById('createBrandHide').click();
        // poner vector con numeros enteros  
        for (var _i = 0, _a = this.clientOfficeRelationShips; _i < _a.length; _i++) {
            var clientOffice = _a[_i];
            var numOffices = clientOffice.idBranchs.split(',');
            var branchOfficesNumber = [1];
            if (numOffices.length > 0) {
                for (var _b = 0, numOffices_2 = numOffices; _b < numOffices_2.length; _b++) {
                    var branch = numOffices_2[_b];
                    branchOfficesNumber.push(Number(branch));
                }
            }
            branchOfficesNumber.splice(0, 1);
            if (branchOfficesNumber.length > 0) {
                this.restService.createRelationshipUserOffices(this.currentUserIdParam, branchOfficesNumber, clientOffice.idClient).then(function (data) {
                    var resp = data;
                    _this.getRelationshipUserOffices();
                    console.log('ole ole');
                    console.log(resp);
                    // this.idBranchOffices
                    // swal.close();
                }).catch(function (error) {
                    sweetalert2_1.default({
                        title: 'Error',
                        text: 'Alguna de las relaciones que quieres crear, ya esta creada',
                        type: 'error'
                    });
                    console.log(error);
                });
            }
        }
        this.officesUpdated = [];
        this.userOfficeRelationShips = []; // Enfocado a las suscursales
        this.clientOfficeRelationShips = [];
        /*
       this.restService.createRelationshipUserOffices(this.currentUser.data.id,   this.idBranchOffices, this.selectedBusinessId).then(data => {
         const resp: any = data;
         this.getRelationshipUserOffices();
         console.log('ole ole');
         console.log(resp);
         // this.idBranchOffices
         swal.close();
       }).catch(error => {
         console.log(error);
       });*/
    };
    MasterExternalUserUpdateComponent.prototype.showClient = function () {
        /*if ( this.showButtonUpdated === 0) {
          swal({
            title: 'Error',
            text: 'Debes crear un usuario',
            type: 'error'
           });
        } else {*/
        document.getElementById('relationShipCustomer').click();
        //}
    };
    MasterExternalUserUpdateComponent.prototype.deleteAllOfficesBranchUser = function (idUser, idCustomer, branchOfficesNumbeUpdate) {
        var _this = this;
        this.userService.deleteOfficesBranchUser(idUser, idCustomer).then(function (data) {
            var resp = data;
            if (branchOfficesNumbeUpdate.length > 0) {
                _this.restService.createRelationshipUserOffices(idUser, branchOfficesNumbeUpdate, _this.currentCustomerUpdated).then(function (data) {
                    var resp = data;
                    sweetalert2_1.default({
                        title: 'Sedes actualizadas',
                        type: 'success'
                    });
                    // this.getRelationshipUserOffices();
                    console.log('ole ole');
                    console.log(resp);
                    // this.idBranchOffices
                    sweetalert2_1.default.close();
                }).catch(function (error) {
                    sweetalert2_1.default({
                        title: 'Error',
                        text: 'Alguna de las relaciones que quieres crear, ya esta creada',
                        type: 'error'
                    });
                    console.log(error);
                });
            }
            document.getElementById('updateBranchHide').click();
            _this.selectedBusinessId = 0;
            _this.idBranchOfficesUpdate = [];
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterExternalUserUpdateComponent.prototype.deleteCustomerOffices = function (customer) {
        var _this = this;
        console.log(customer);
        this.userService.deleteOfficesBranchUser(this.currentUserIdParam, customer.id).then(function (data) {
            var resp = data;
            console.log('Parametros para borrar');
            console.log(_this.currentUserIdParam, customer.id);
            console.log('respuesta de info');
            console.log(resp);
            _this.restService.getRelationshipUserOffices(_this.currentUserIdParam).then(function (data) {
                var resp = data;
                console.log('Info');
                console.log(resp);
                if (resp.error) {
                    sweetalert2_1.default({
                        title: 'Error',
                        text: 'Ha ocurrido un error',
                        type: 'error'
                    });
                }
                else {
                    console.log('info de userOffices para update');
                    console.log(resp.data.customers);
                    if (resp.data.customers) {
                        _this.rowsClient = resp.data.customers;
                    }
                    sweetalert2_1.default({
                        title: 'Relación eliminada',
                        text: 'Se ha eliminado correctamente',
                        type: 'success'
                    });
                    console.log('customer');
                    console.log(resp.data);
                    console.log(resp.data);
                }
            }).catch(function (error) {
                sweetalert2_1.default({
                    title: 'Error',
                    text: 'Ha ocurrido un error',
                    type: 'error'
                });
                console.log(error);
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterExternalUserUpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-master-external-user-update',
            templateUrl: './master-external-user-update.component.html',
            styleUrls: ['./master-external-user-update.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_2.Router, rest_service_1.RestService, router_1.ActivatedRoute])
    ], MasterExternalUserUpdateComponent);
    return MasterExternalUserUpdateComponent;
}());
exports.MasterExternalUserUpdateComponent = MasterExternalUserUpdateComponent;
//# sourceMappingURL=master-external-user-update.component.js.map