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
var rest_service_1 = require("../../master-services/Rest/rest.service");
var sweetalert2_1 = require("sweetalert2");
var router_1 = require("@angular/router");
var upload_service_1 = require("../../master-services/services/upload.service");
var angular2_uuid_1 = require("angular2-uuid");
var MasterRegisterThirdComponent = /** @class */ (function () {
    function MasterRegisterThirdComponent(restService, router, uploadService) {
        this.restService = restService;
        this.router = router;
        this.uploadService = uploadService;
        this.currentCustomerId = 0;
        this.currentUpdateCustomerId = 0;
        this.opcionSeleccionado = 0;
        this.check = false;
        this.enable = false;
        this.submitted = false;
        this.submittedUpdated = false;
        this.submittedOffice = false;
        this.submittedOfficeUpdated = false;
        this.enabledCreated = true;
        this.enabledCreatedOffice = true;
        this.enabledCreatedOfficeUpdate = true;
        this.enabledUpdated = true;
        this.showButtonUpdated = 0;
        this.selectedValue = 0;
        this.switchCreate = true;
        this.switchUpdate = true;
        this.selectedTypeDocumentId = 0;
        // selectedPriceListId: any = 0;
        this.selectedPaymentConditionId = 0;
        this.selectedDepartmentId = 0;
        this.selectedCityId = 0;
        this.selectedDepartmentOfficeId = 0;
        this.selectedCityOfficeId = 0;
        this.selectedDepartmentOfficeIdUpdate = 0;
        this.selectedCityOfficeIdUpdate = 0;
        this.selectedTypeDocumentIdUpdate = 0;
        // selectedPriceListIdUpdate: any = 0;
        this.selectedPaymentConditionIdUpdate = 0;
        this.selectedDepartmentIdUpdate = 0;
        this.selectedCityIdUpdate = 0;
        this.checkAllRegional = false;
        this.regionals = [];
        this.selectRegional = [];
        this.getMasters(0);
        // this.getOffices();
        this.getRegionals();
        console.log(this.currentCustomerId);
        var businessName = new forms_1.FormControl('', forms_1.Validators.required);
        var typeDocumentId = new forms_1.FormControl('', forms_1.Validators.required);
        var documentId = new forms_1.FormControl('', forms_1.Validators.required);
        var telephone = new forms_1.FormControl('');
        var address = new forms_1.FormControl('', forms_1.Validators.required);
        var priceMargin = new forms_1.FormControl('', forms_1.Validators.required);
        // const priceListId = new FormControl('', Validators.required);
        var paymentConditionId = new forms_1.FormControl('', forms_1.Validators.required);
        var departmentId = new forms_1.FormControl('', forms_1.Validators.required);
        var cityId = new forms_1.FormControl('', forms_1.Validators.required);
        var businessNameUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var typeDocumentIdUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var documentIdUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var telephoneUpdate = new forms_1.FormControl('');
        var addressUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var priceMarginUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        // const priceListIdUpdate  = new FormControl('', Validators.required);
        var paymentConditionIdUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var departmentIdUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var cityIdUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var nameOffice = new forms_1.FormControl('', forms_1.Validators.required);
        var telephoneOffice = new forms_1.FormControl('');
        var departmentOffice = new forms_1.FormControl('', forms_1.Validators.required);
        var citytOffice = new forms_1.FormControl('', forms_1.Validators.required);
        var addressOffice = new forms_1.FormControl('', forms_1.Validators.required);
        var nameOfficeUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var telephoneOfficeUpdate = new forms_1.FormControl('');
        var departmentOfficeUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var citytOfficeUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var addressOfficeUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        this.myFormCreateOffice = new forms_1.FormGroup({
            nameOffice: nameOffice,
            telephoneOffice: telephoneOffice,
            departmentOffice: departmentOffice,
            citytOffice: citytOffice,
            addressOffice: addressOffice
        });
        this.myFormUpdateOffice = new forms_1.FormGroup({
            nameOfficeUpdate: nameOfficeUpdate,
            telephoneOfficeUpdate: telephoneOfficeUpdate,
            departmentOfficeUpdate: departmentOfficeUpdate,
            citytOfficeUpdate: citytOfficeUpdate,
            addressOfficeUpdate: addressOfficeUpdate
        });
        this.myForm = new forms_1.FormGroup({
            businessName: businessName,
            typeDocumentId: typeDocumentId,
            documentId: documentId,
            telephone: telephone,
            address: address,
            priceMargin: priceMargin,
            paymentConditionId: paymentConditionId,
            departmentId: departmentId,
            cityId: cityId
        });
        this.myFormUpdate = new forms_1.FormGroup({
            businessNameUpdate: businessNameUpdate,
            typeDocumentIdUpdate: typeDocumentIdUpdate,
            documentIdUpdate: documentIdUpdate,
            telephoneUpdate: telephoneUpdate,
            addressUpdate: addressUpdate,
            priceMarginUpdate: priceMarginUpdate,
            paymentConditionIdUpdate: paymentConditionIdUpdate,
            departmentIdUpdate: departmentIdUpdate,
            cityIdUpdate: cityIdUpdate
        });
    }
    MasterRegisterThirdComponent.prototype.getRegionals = function () {
        var _this = this;
        this.restService.getRegional().then(function (data) {
            var resp = data;
            console.log(resp);
            console.log('OEOEOEOEOEEO');
            console.log('---------------------------');
            _this.rowsRegional = resp.data;
            console.log('información de regional');
            console.log(_this.rowsRegional);
            console.log(_this.rowsRegional.length);
            _this.regionals = [];
            _this.rowsRegional.forEach(function (item) {
                console.log(item);
                _this.itemRegional = {
                    id: item.id,
                    code: item.code,
                    description: item.description
                };
                _this.regionals.push(_this.itemRegional);
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterRegisterThirdComponent.prototype.checkUncheckAllPart = function (event) {
        this.checkAllRegional = event.target.checked;
        for (var i = 0; i < this.regionals.length; i++) {
            console.log('lo encontre' + i);
            this.regionals[i].cheked = event.target.checked;
        }
    };
    MasterRegisterThirdComponent.prototype.partChangeActive = function (event, item) {
        console.log('valor para editar');
        console.log(event);
        console.log(item);
        console.log(item.id);
        for (var i = 0; i < this.regionals.length; i++) {
            if (this.regionals[i].id == item.id) {
                console.log(item);
                console.log('lo encontre' + i);
                this.regionals[i].cheked = event.target.checked;
                console.log(this.regionals[i]);
            }
        }
    };
    MasterRegisterThirdComponent.prototype.finalRegional = function () {
        this.selectRegional = [];
        for (var i = 0; i < this.regionals.length; i++) {
            console.log('lo encontre' + i);
            if (this.regionals[i].cheked) {
                this.selectRegional.push(this.regionals[i]);
            }
        }
        var regionalSelec = '';
        regionalSelec = this.idCustomerCreated + '@';
        console.log(regionalSelec);
        console.log(this.idCustomerCreated);
        for (var i = 0; i < this.selectRegional.length; i++) {
            regionalSelec = regionalSelec + this.selectRegional[i].id + '@';
        }
        console.log(this.selectRegional);
        console.log(regionalSelec);
        if (regionalSelec != '') {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.restService.customerRegionalSelect(regionalSelec).then(function (data) {
                var resp = data;
                console.log('envio');
                console.log(resp);
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Falla en la actualizacion',
                        text: 'Este cliente no se pudo registrar',
                        type: 'error'
                    });
                }
                else {
                    sweetalert2_1.default({
                        title: 'Sucursales guardadas',
                        type: 'success'
                    });
                }
            }).catch(function (error) {
                console.log(error);
                sweetalert2_1.default.close();
            });
        }
        else {
            sweetalert2_1.default({
                title: 'Se presentó un problema',
                text: 'Favor selecionar al menos una opcion.',
                type: 'error',
            });
        }
    };
    MasterRegisterThirdComponent.prototype.ngOnInit = function () {
    };
    MasterRegisterThirdComponent.prototype.updateBrand = function (brand) {
        console.log(brand);
        this.currentOffice = brand;
        console.log(this.currentOffice);
        if (this.currentOffice.status === '0') {
            this.enabledUpdated = true;
        }
        else {
            this.enabledUpdated = false;
        }
        this.myFormUpdateOffice.get('nameOfficeUpdate').setValue(this.currentOffice.branch_name);
        this.myFormUpdateOffice.get('telephoneOfficeUpdate').setValue(this.currentOffice.telephone);
        this.myFormUpdateOffice.get('addressOfficeUpdate').setValue(this.currentOffice.address);
        this.selectedDepartmentOfficeIdUpdate = 1;
        this.getCitiesOfficeUpdate(1);
        this.selectedCityOfficeIdUpdate = 3;
        document.getElementById('uploadBrand').click();
    };
    MasterRegisterThirdComponent.prototype.upload = function () {
        var file = this.selectedFiles.item(0);
        var uuid = angular2_uuid_1.UUID.UUID();
        console.log(uuid);
        console.log(file.name + '' + file.type);
        var extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
        console.log(extension);
        this.uploadService.uploadFile(file);
    };
    MasterRegisterThirdComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
        console.log(this.selectedFiles);
    };
    MasterRegisterThirdComponent.prototype.ChangingValue = function () {
        this.selectedTypeDocumentIdUpdate = this.selectedTypeDocumentId.id;
        // this.selectedPriceListIdUpdate = this.selectedPriceListId.id;
        this.selectedPaymentConditionIdUpdate = this.selectedPaymentConditionId.id;
        this.selectedDepartmentIdUpdate = this.selectedDepartmentId.id;
        this.selectedCityIdUpdate = this.selectedCityId.id;
        console.log(this.selectedTypeDocumentIdUpdate);
    };
    MasterRegisterThirdComponent.prototype.getCitiesOffice = function () {
        var _this = this;
        // console.log(this.opcionSeleccionado);
        this.selectedCityOfficeId = 0;
        this.restService.getCities(Number(this.selectedDepartmentOfficeId.id)).then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.citiesOffice = resp.data;
            console.log(_this.cities);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterRegisterThirdComponent.prototype.getCitiesOfficeUpdate = function (val) {
        var _this = this;
        // console.log(this.opcionSeleccionado);
        this.selectedCityOfficeIdUpdate = 0;
        console.log('oleole');
        this.restService.getCities(Number(val)).then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.citiesOfficeUpdate = resp.data;
            console.log(_this.cities);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterRegisterThirdComponent.prototype.getCities = function (val) {
        var _this = this;
        // console.log(this.opcionSeleccionado);
        this.selectedCityId = 0;
        this.restService.getCities(Number(this.selectedDepartmentId.id)).then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.cities = resp.data;
            console.log(_this.cities);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterRegisterThirdComponent.prototype.getCitiesUpdate = function (val) {
        var _this = this;
        // console.log(this.opcionSeleccionado);
        this.selectedCityIdUpdate = 0;
        this.restService.getCities(Number(this.selectedDepartmentIdUpdate)).then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.cities = resp.data;
            console.log(_this.cities);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterRegisterThirdComponent.prototype.sendCustomer = function () {
        var _this = this;
        console.log('Ole ole ole');
        console.log(this.selectedTypeDocumentId);
        console.log(this.selectedPaymentConditionId);
        console.log(this.selectedDepartmentId);
        console.log(this.selectedCityId);
        // console.log(this.selectedPriceListId);
        if (Number(this.selectedTypeDocumentId) !== 0 && Number(this.selectedPaymentConditionId) !== 0
            && Number(this.selectedDepartmentId) !== 0 && Number(this.selectedCityId) !== 0) {
            this.submitted = true;
            if (!this.myForm.invalid) {
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                var statusTemp = 0;
                console.log(this.switchUpdate);
                if (this.enabledCreated === false) {
                    statusTemp = 1;
                }
                console.log(this.selectedPaymentConditionId.id);
                this.restService.createCustomer(this.myForm.get('businessName').value.toUpperCase(), this.selectedTypeDocumentId.id, this.myForm.get('documentId').value, this.myForm.get('telephone').value, this.myForm.get('address').value, statusTemp, this.myForm.get('priceMargin').value, this.selectedPaymentConditionId.id, this.selectedCityId.id, this.selectedDepartmentId.id)
                    .then(function (data) {
                    var resp = data;
                    console.log(resp);
                    console.log('id customer' + resp.data.id);
                    _this.currentCustomerId = resp.data.id;
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este tercero ya esta registrado',
                            text: 'Este tercero no se puede registrar',
                            type: 'error'
                        });
                    }
                    else {
                        _this.selectedTypeDocumentIdUpdate = _this.selectedTypeDocumentId.id;
                        // this.selectedPriceListIdUpdate = this.selectedPriceListId.id;
                        _this.selectedPaymentConditionIdUpdate = _this.selectedPaymentConditionId.id;
                        _this.selectedDepartmentIdUpdate = _this.selectedDepartmentId.id;
                        _this.selectedCityIdUpdate = _this.selectedCityId.id;
                        _this.getMasters(1);
                        // this.getOffices();
                        _this.showButtonUpdated = 1;
                        console.log('oleole');
                        console.log(_this.myForm.get('documentId').value);
                        _this.myFormUpdate.get('documentIdUpdate').setValue(_this.myForm.get('documentId').value);
                        _this.myFormUpdate.get('businessNameUpdate').setValue(_this.myForm.get('businessName').value.toUpperCase());
                        _this.myFormUpdate.get('telephoneUpdate').setValue(_this.myForm.get('telephone').value);
                        _this.myFormUpdate.get('addressUpdate').setValue(_this.myForm.get('address').value);
                        _this.idCustomerCreated = resp.data.id;
                        console.log('Cambio');
                        /*swal({
                         title: 'tercero agregada',
                         type: 'success'
                        });*/
                        //   this.router.navigateByUrl('master/registerBrand');
                        // document.getElementById( 'createBrandHide').click();
                        // this.loadingData();
                        sweetalert2_1.default({
                            title: 'Tercero agregado',
                            type: 'success'
                        });
                        _this.router.navigateByUrl('master/customersUpdate/' + _this.idCustomerCreated);
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
        else {
            sweetalert2_1.default({
                title: 'Debe seleccionar todos los campos obligatorios',
                text: 'Debe seleccionar todos los campos obligatorios',
                type: 'error'
            });
        }
    };
    MasterRegisterThirdComponent.prototype.sendOffice = function () {
        var _this = this;
        try {
            console.log('Ole ole ole');
            /*console.log('Ole ole ole');
            console.log(this.selectedTypeDocumentId);
            console.log(this.selectedPaymentConditionId);
            console.log(this.selectedDepartmentId);
            console.log(this.selectedCityId);
            console.log(this.selectedPriceListId);*/
            console.log(this.selectedDepartmentOfficeId.id + ',' + this.selectedCityOfficeId.id);
            console.log(this.myFormCreateOffice.get('nameOffice').hasError('required'));
            console.log(this.myFormCreateOffice.get('telephoneOffice').hasError('required'));
            console.log(this.myFormCreateOffice.get('departmentOffice').hasError('required'));
            console.log(this.myFormCreateOffice.get('citytOffice').hasError('required'));
            console.log(this.myFormCreateOffice.get('addressOffice').hasError('required'));
            console.log(this.myFormCreateOffice.get('addressOffice').errors);
            console.log('aqui');
            if (Number(this.selectedDepartmentOfficeId.id) !== 0 && Number(this.selectedCityOfficeId.id) !== 0) {
                this.submittedOffice = true;
                console.log('paso y no podia pasar');
                console.log('paso y no podia pasar');
                console.log('paso y no podia pasar');
                console.log(this.myFormCreateOffice.errors);
                console.log('oleole');
                console.log(this.myFormCreateOffice.invalid);
                if (!this.myFormCreateOffice.invalid) {
                    sweetalert2_1.default({
                        title: 'Validando información ...',
                        allowOutsideClick: false
                    });
                    sweetalert2_1.default.showLoading();
                    var statusTemp = 0;
                    console.log(this.switchUpdate);
                    if (this.enabledCreatedOffice === false) {
                        statusTemp = 1;
                    }
                    console.log('llego');
                    this.restService.createOffice(this.currentCustomerId, this.myFormCreateOffice.get('nameOffice').value.toUpperCase(), this.myFormCreateOffice.get('addressOffice').value, this.myFormCreateOffice.get('telephoneOffice').value, statusTemp, this.selectedCityOfficeId.id, this.selectedDepartmentOfficeId.id)
                        .then(function (data) {
                        var resp = data;
                        console.log(resp);
                        if (resp.success === false) {
                            sweetalert2_1.default({
                                title: 'Esta sede ya esta registrada',
                                text: 'Esta sede no se puede registrar',
                                type: 'error'
                            });
                        }
                        else {
                            // this.getMasters(1);
                            //  this.getOffices();
                            /*swal({
                             title: 'sede agregada',
                             type: 'success'
                            });*/
                            //   this.router.navigateByUrl('master/registerBrand');
                            // document.getElementById( 'createBrandHide').click();
                            // this.loadingData();
                            _this.myFormCreateOffice.reset();
                            document.getElementById('createBrandHide').click();
                            _this.getOffices(_this.currentCustomerId);
                            sweetalert2_1.default({
                                title: 'Sede agregada',
                                type: 'success'
                            });
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            }
            else {
                console.log('llegod');
                sweetalert2_1.default({
                    title: 'Debe seleccionar todos los campos obligatorios',
                    text: 'Debe seleccionar todos los campos obligatorios',
                    type: 'error'
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    MasterRegisterThirdComponent.prototype.messageError = function () {
        sweetalert2_1.default({
            title: 'Debe crear un cliente',
            text: 'Luego de crear el cliente, puedes crear sedes',
            type: 'error'
        });
    };
    MasterRegisterThirdComponent.prototype.updatedOffice = function (oficcerow) {
        this.currentUpdateOffice = oficcerow;
        console.log("cosa a actualizar");
        console.log(this.currentUpdateOffice);
        try {
            if (Number(this.selectedDepartmentOfficeIdUpdate) !== 0 && Number(this.selectedCityOfficeIdUpdate) !== 0) {
                this.submittedOfficeUpdated = true;
                if (!this.myFormUpdateOffice.invalid) {
                    sweetalert2_1.default({
                        title: 'Validando información ...',
                        allowOutsideClick: false
                    });
                    sweetalert2_1.default.showLoading();
                    var statusTemp = 0;
                    if (this.switchUpdate === true) {
                        statusTemp = 0;
                    }
                    else {
                        statusTemp = 1;
                    }
                    this.restService.updateOffice(this.currentUpdateOffice.id, 25, this.myFormUpdateOffice.get('nameOfficeUpdate').value.toUpperCase(), this.myFormUpdateOffice.get('addressOfficeUpdate').value, this.myFormUpdateOffice.get('telephoneOfficeUpdate').value, statusTemp, this.selectedCityOfficeIdUpdate, this.selectedDepartmentOfficeIdUpdate)
                        .then(function (data) {
                        var resp = data;
                        console.log(resp);
                        if (resp.success === false) {
                            sweetalert2_1.default({
                                title: 'Este tercero ya esta registrado',
                                text: 'Este tercero no se puede registrar',
                                type: 'error'
                            });
                        }
                        else {
                            sweetalert2_1.default({
                                title: 'Tercero agregado',
                                type: 'success'
                            });
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            }
            else {
                console.log('llegod');
                sweetalert2_1.default({
                    title: 'Debe seleccionar todos los campos obligatorios',
                    text: 'Debe seleccionar todos los campos obligatorios',
                    type: 'error'
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    MasterRegisterThirdComponent.prototype.updatedOfficePro = function () {
        var _this = this;
        console.log("datos a actualizar");
        console.log(this.currentOffice.id);
        console.log(this.currentCustomerId);
        console.log(this.myFormUpdateOffice.get('nameOfficeUpdate').value);
        console.log(this.myFormUpdateOffice.get('telephoneOfficeUpdate').value);
        console.log(this.myFormUpdateOffice.get('addressOfficeUpdate').value);
        console.log(this.selectedDepartmentOfficeIdUpdate);
        console.log(this.selectedCityOfficeIdUpdate);
        try {
            if (Number(this.selectedDepartmentOfficeIdUpdate.id) !== 0 && Number(this.selectedCityOfficeIdUpdate.id) !== 0) {
                this.submittedOffice = true;
                console.log('paso y no podia pasar');
                console.log('paso y no podia pasar');
                console.log('paso y no podia pasar');
                console.log(this.myFormCreateOffice.errors);
                if (!this.myFormUpdateOffice.invalid) {
                    sweetalert2_1.default({
                        title: 'Validando información ...',
                        allowOutsideClick: false
                    });
                    sweetalert2_1.default.showLoading();
                    var statusTemp = 0;
                    console.log(this.switchUpdate);
                    if (this.switchUpdate === true) {
                        statusTemp = 0;
                    }
                    else {
                        statusTemp = 1;
                    }
                    console.log('llego');
                    this.restService.updateOffice(this.currentOffice.id, this.currentCustomerId, this.myFormUpdateOffice.get('nameOfficeUpdate').value.toUpperCase(), this.myFormUpdateOffice.get('addressOfficeUpdate').value, this.myFormUpdateOffice.get('telephoneOfficeUpdate').value, statusTemp, this.selectedCityOfficeIdUpdate, this.selectedDepartmentOfficeIdUpdate)
                        .then(function (data) {
                        var resp = data;
                        console.log(resp);
                        if (resp.success === false) {
                            sweetalert2_1.default({
                                title: 'Esta sede ya esta registrada',
                                text: 'Esta sede no se puede registrar',
                                type: 'error'
                            });
                        }
                        else {
                            _this.myFormCreateOffice.reset();
                            document.getElementById('createBrandHide').click();
                            _this.getOffices(_this.currentCustomerId);
                            document.getElementById('updateBrandHide').click();
                            sweetalert2_1.default({
                                title: 'Sede Actualizado',
                                type: 'success'
                            });
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            }
            else {
                console.log('llegod');
                sweetalert2_1.default({
                    title: 'Debe seleccionar todos los campos obligatorios',
                    text: 'Debe seleccionar todos los campos obligatorios',
                    type: 'error'
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    MasterRegisterThirdComponent.prototype.updatedCustomer = function () {
        var _this = this;
        console.log(this.showButtonUpdated);
        console.log('Ole ole ole kakaakkaka');
        console.log(this.selectedTypeDocumentIdUpdate);
        console.log(this.selectedPaymentConditionIdUpdate);
        console.log(this.selectedDepartmentIdUpdate);
        console.log(this.selectedCityIdUpdate);
        // console.log(this.selectedPriceListIdUpdate);
        if (Number(this.selectedTypeDocumentIdUpdate) !== 0 && Number(this.selectedPaymentConditionIdUpdate) !== 0
            && Number(this.selectedDepartmentIdUpdate) !== 0 && Number(this.selectedCityIdUpdate) !== 0) {
            this.submittedUpdated = true;
            if (!this.myFormUpdate.invalid) {
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                var statusTemp = 0;
                console.log(this.switchUpdate);
                if (this.switchUpdate === false) {
                    statusTemp = 1;
                }
                console.log('kakakaka');
                this.restService.updateCustomer(Number(this.idCustomerCreated), this.myFormUpdate.get('businessNameUpdate').value.toUpperCase(), this.selectedTypeDocumentIdUpdate, this.myFormUpdate.get('documentIdUpdate').value, this.myFormUpdate.get('telephoneUpdate').value, this.myFormUpdate.get('addressUpdate').value, statusTemp, this.myFormUpdate.get('priceMarginUpdate').value, this.selectedPaymentConditionIdUpdate, this.selectedCityIdUpdate, this.selectedDepartmentIdUpdate)
                    .then(function (data) {
                    var resp = data;
                    console.log(JSON.stringify(resp));
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este tercero ya esta registrado',
                            text: 'Este tercero no se puede registrar',
                            type: 'error'
                        });
                    }
                    else {
                        _this.getMasters(1);
                        // this.getOffices();
                        console.log('Cambio');
                        /*swal({
                         title: 'tercero agregada',
                         type: 'success'
                        });*/
                        //   this.router.navigateByUrl('master/registerBrand');
                        // document.getElementById( 'createBrandHide').click();
                        // this.loadingData();
                        sweetalert2_1.default({
                            title: 'Tercero agregado',
                            type: 'success'
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
        else {
            sweetalert2_1.default({
                title: 'Debe seleccionar todos los campos obligatorios',
                text: 'Debe seleccionar todos los campos obligatorios',
                type: 'error'
            });
        }
    };
    MasterRegisterThirdComponent.prototype.onChangeCreated = function (check) {
        // this.switchUpdate = check;
        this.enabledCreated = check;
        // this.enabledUpdated = this.enabledCreated ;
    };
    MasterRegisterThirdComponent.prototype.onChangeCreatedOfficeUpdate = function (check) {
        this.enabledCreatedOfficeUpdate = check;
    };
    MasterRegisterThirdComponent.prototype.onChangeCreatedOffice = function (check) {
        this.enabledCreatedOffice = check;
    };
    MasterRegisterThirdComponent.prototype.onChangeUpdated = function (check) {
        this.switchUpdate = check;
        this.enabledUpdated = check;
    };
    MasterRegisterThirdComponent.prototype.getMasters = function (indice) {
        var _this = this;
        // console.log(this.opcionSeleccionado);
        this.restService.getMastersThird().then(function (data) {
            var resp = data;
            console.log('Info de getMaster');
            console.log('---------------------');
            console.log(resp);
            _this.dataMasters = data;
            _this.paymentConditions = _this.dataMasters.payment_condition;
            _this.typeDocuments = _this.dataMasters.documents;
            _this.departments = _this.dataMasters.department;
            _this.priceList = _this.dataMasters.price_list;
            _this.selectedTypeDocumentIdUpdate = _this.dataMasters.documents;
            //  this.selectedPriceListIdUpdate = this.dataMasters.price_list;
            _this.selectedPaymentConditionIdUpdate = _this.dataMasters.payment_condition;
            _this.selectedDepartmentIdUpdate = _this.dataMasters.department;
            //this.selectedCityIdUpdate: any = 0;
            console.log('master');
            console.log(data);
            sweetalert2_1.default.close();
            /* if (indice === 1) {
     
               console.log('oleole2');
               console.log(this.selectedTypeDocumentId);
               console.log(this.selectedTypeDocumentId.id);
               this.selectedTypeDocumentIdUpdate = '3'; // String(this.selectedTypeDocumentId.id);
               this.selectedPriceListIdUpdate = this.selectedPriceListId;
               this.selectedPaymentConditionIdUpdate = this.selectedPaymentConditionId;
               this.selectedDepartmentIdUpdate = this.selectedDepartmentId;
               this.selectedCityIdUpdate = this.selectedCityIdUpdate;
             }*/
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterRegisterThirdComponent.prototype.getOffices = function (idCustomer) {
        var _this = this;
        // console.log(this.opcionSeleccionado);
        this.restService.getCustomerOffice(idCustomer).then(function (data) {
            console.log('que mas ps');
            var resp = data;
            console.log(resp);
            _this.dataOffices = resp.data_branchoffices;
            //   this.dataOffices = this.dataOffices.data;
            console.log('master');
            sweetalert2_1.default.close();
            // this.cities = resp.data;
            console.log(_this.dataOffices);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterRegisterThirdComponent.prototype.deleteBrand = function (brand) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Estás seguro de eliminar este elemento?',
            // text: 'Once deleted, you will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: 'No',
            confirmButtonText: 'Si'
        })
            .then(function (willDelete) {
            if (willDelete.value) {
                _this.elementDelete = brand;
                console.log(brand);
                console.log(_this.elementDelete);
                sweetalert2_1.default.showLoading();
                _this.restService.deleteOffice(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Esta marca presenta problemas',
                            text: 'Esta marca no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        // this.router.navigateByUrl('master/registerBrand');
                        sweetalert2_1.default({
                            title: 'Marca eliminada',
                            type: 'success'
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
            else {
                // swal('Fail');
            }
            console.log(willDelete);
        });
    };
    MasterRegisterThirdComponent.prototype.onChange = function (d) {
        console.log('jajaja');
        console.log(d);
    };
    MasterRegisterThirdComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0) {
            return console.log('jaja');
        }
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = 'Only images are supported.';
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    MasterRegisterThirdComponent.prototype.goAdminCustomer = function () {
        this.router.navigateByUrl('master/customers');
    };
    Object.defineProperty(MasterRegisterThirdComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterRegisterThirdComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterRegisterThirdComponent.prototype, "checkFormOffice", {
        get: function () { return this.myFormCreateOffice.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterRegisterThirdComponent.prototype, "checkFormOfficeUpdate", {
        get: function () { return this.myFormUpdateOffice.controls; },
        enumerable: true,
        configurable: true
    });
    MasterRegisterThirdComponent = __decorate([
        core_1.Component({
            selector: 'app-master-register-third',
            templateUrl: './master-register-third.component.html',
            styleUrls: ['./master-register-third.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router, upload_service_1.UploadService])
    ], MasterRegisterThirdComponent);
    return MasterRegisterThirdComponent;
}());
exports.MasterRegisterThirdComponent = MasterRegisterThirdComponent;
//# sourceMappingURL=master-register-third.component.js.map