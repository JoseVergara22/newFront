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
var router_2 = require("@angular/router");
var MasterUpdateCustomerComponent = /** @class */ (function () {
    function MasterUpdateCustomerComponent(restService, router, uploadService, rutaActiva) {
        this.restService = restService;
        this.router = router;
        this.uploadService = uploadService;
        this.rutaActiva = rutaActiva;
        this.currentCustomerId = 0;
        this.opcionSeleccionado = 0;
        this.check = false;
        this.enable = false;
        this.submitted = false;
        this.submittedUpdated = false;
        this.submittedOffice = false;
        this.submittedOfficeUpdated = false;
        this.enabledCreated = true;
        this.enabledCreatedOffice = true;
        this.enabledUpdated = true;
        this.showButtonUpdated = 0;
        this.selectedValue = 0;
        this.switchCreate = true;
        this.switchUpdate = true;
        this.selectedTypeDocumentId = 0;
        this.selectedPriceListId = 0;
        this.selectedPaymentConditionId = 0;
        this.selectedDepartmentId = 0;
        this.selectedCityId = 0;
        this.selectedDepartmentOfficeId = 0;
        this.selectedCityOfficeId = 0;
        this.selectedDepartmentOfficeIdUpdate = 0;
        this.selectedCityOfficeIdUpdate = 0;
        this.selectedTypeDocumentIdUpdate = 0;
        this.selectedPriceListIdUpdate = 0;
        this.selectedPaymentConditionIdUpdate = 0;
        this.selectedDepartmentIdUpdate = 0;
        this.selectedCityIdUpdate = 0;
        this.checkAllRegional = false;
        this.regional = [];
        this.regionals = [];
        this.selectRegional = [];
        this.regionalCustomer = [];
        this.getMasters(0);
        // this.getOffices();
        this.getRegionals();
        this.currentCustomerId = this.rutaActiva.snapshot.params.id;
        this.getOffices(this.currentCustomerId);
        //    this.getRegionalId(this.currentCustomerId);
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
        //  const priceListIdUpdate  = new FormControl('', Validators.required);
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
    MasterUpdateCustomerComponent.prototype.getRegionals = function () {
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
            _this.getRegionalId(_this.currentCustomerId);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterUpdateCustomerComponent.prototype.getRegionalId = function (id) {
        var _this = this;
        this.restService.getRegionalId(id).then(function (data) {
            var resp = data;
            console.log(resp);
            console.log('OEOEOEOEOEEO');
            console.log(resp.data_customerRegionals);
            console.log('----------------data_customerRegionals-----------');
            _this.rowsRegionals = resp.data_customerRegionals;
            _this.regional = [];
            console.log(_this.rowsRegionals);
            console.log(_this.rowsRegional);
            _this.rowsRegional.forEach(function (item) {
                console.log(item);
                _this.itemRegional = {
                    id: item.id,
                    code: item.code,
                    description: item.description,
                    cheked: false
                };
                _this.regionals.push(_this.itemRegional);
            });
            // rowsRegionals  Son las regionales del customer
            // rowsRegional  Son las regionales del creadas
            _this.rowsRegionals.forEach(function (value) {
                console.log(value.regional_id);
                var index = _this.regionals.indexOf(_this.regionals.find(function (x) { return x.id == value.regional_id; }));
                console.log(index);
                if (index != -1) {
                    _this.itemRegional = {
                        id: _this.regionals[index].id,
                        code: _this.regionals[index].code,
                        description: _this.regionals[index].description,
                        cheked: true
                    };
                    _this.regionals.splice(index, 1);
                    _this.regionals.push(_this.itemRegional);
                }
                console.log(_this.regionals);
            });
            console.log(_this.regional);
        });
    };
    MasterUpdateCustomerComponent.prototype.checkUncheckAllPart = function (event) {
        this.checkAllRegional = event.target.checked;
        for (var i = 0; i < this.regionals.length; i++) {
            console.log('lo encontre' + i);
            this.regionals[i].cheked = event.target.checked;
        }
    };
    MasterUpdateCustomerComponent.prototype.partChangeActive = function (event, item) {
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
    MasterUpdateCustomerComponent.prototype.finalRegional = function () {
        this.selectRegional = [];
        for (var i = 0; i < this.regionals.length; i++) {
            console.log('lo encontre' + i);
            if (this.regionals[i].cheked) {
                console.log(this.regionals[i].cheked);
                this.selectRegional.push(this.regionals[i]);
            }
        }
        var regionalSelec = '';
        regionalSelec = this.currentCustomerId;
        console.log(regionalSelec);
        console.log(this.currentCustomerId);
        for (var i = 0; i < this.selectRegional.length; i++) {
            regionalSelec = regionalSelec + '@' + this.selectRegional[i].id;
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
                        text: 'Este cliente no se pudo actualizar',
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
    MasterUpdateCustomerComponent.prototype.ngOnInit = function () {
    };
    MasterUpdateCustomerComponent.prototype.ngAfterContentInit = function () {
        this.getCustomer(this.currentCustomerId);
    };
    MasterUpdateCustomerComponent.prototype.updateBrand = function (brand) {
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
        this.selectedDepartmentOfficeIdUpdate = this.currentOffice.department_id;
        if (this.currentOffice.status == 0) {
            this.enabledCreatedOfficeUpdate = true;
        }
        else {
            this.enabledCreatedOfficeUpdate = false;
        }
        this.getCitiesOfficeUpdate();
        this.selectedCityOfficeIdUpdate = this.currentOffice.city_id;
        document.getElementById('uploadBrand').click();
    };
    MasterUpdateCustomerComponent.prototype.upload = function () {
        var file = this.selectedFiles.item(0);
        var uuid = angular2_uuid_1.UUID.UUID();
        console.log(uuid);
        console.log(file.name + '' + file.type);
        var extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
        console.log(extension);
        this.uploadService.uploadFile(file);
    };
    MasterUpdateCustomerComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
        console.log(this.selectedFiles);
    };
    MasterUpdateCustomerComponent.prototype.ChangingValue = function () {
        this.selectedTypeDocumentIdUpdate = this.selectedTypeDocumentId.id;
        //  this.selectedPriceListIdUpdate = this.selectedPriceListId.id;
        this.selectedPaymentConditionIdUpdate = this.selectedPaymentConditionId.id;
        this.selectedDepartmentIdUpdate = this.selectedDepartmentId.id;
        this.selectedCityIdUpdate = this.selectedCityId.id;
        console.log(this.selectedTypeDocumentIdUpdate);
    };
    MasterUpdateCustomerComponent.prototype.getCitiesOffice = function (val) {
        var _this = this;
        console.log(val);
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
    MasterUpdateCustomerComponent.prototype.getCitiesOfficeUpdate = function () {
        var _this = this;
        // console.log(this.opcionSeleccionado);
        this.selectedCityOfficeIdUpdate = 0;
        console.log('oleole23' + this.selectedDepartmentOfficeIdUpdate);
        this.restService.getCities(this.selectedDepartmentOfficeIdUpdate).then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.citiesOfficeUpdate = resp.data;
            console.log(_this.cities);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterUpdateCustomerComponent.prototype.getCities = function (val) {
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
    MasterUpdateCustomerComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.restService.getSpecificCustomer(id).then(function (data) {
            var resp = data.data;
            console.log("datosfffffffff");
            console.log(resp);
            _this.customer = resp;
            console.log("importar datos");
            console.log(resp.telephone);
            _this.myFormUpdate.get('typeDocumentIdUpdate').setValue(resp.type_document_id);
            _this.myFormUpdate.get('documentIdUpdate').setValue(resp.document_id);
            _this.myFormUpdate.get('businessNameUpdate').setValue(resp.business_name);
            _this.myFormUpdate.get('telephoneUpdate').setValue(resp.telephone);
            _this.myFormUpdate.get('addressUpdate').setValue(resp.address);
            _this.myFormUpdate.get('priceMarginUpdate').setValue(resp.price_margin);
            //  this.myFormUpdate.get('priceListIdUpdate').setValue(resp.price_list_id);
            _this.myFormUpdate.get('paymentConditionIdUpdate').setValue(resp.payment_condition_id);
            _this.myFormUpdate.get('departmentIdUpdate').setValue(resp.department_id);
            if (resp.status == 0) {
                _this.enabledCreatedOfficeUpdate = true;
            }
            else {
                _this.enabledCreatedOfficeUpdate = false;
            }
            _this.getCitiesOfficeUpdate();
            _this.getCitiesUpdate();
        }).catch(function (error) {
            _this.messageError();
            console.log(error);
        });
    };
    MasterUpdateCustomerComponent.prototype.getCitiesUpdate = function () {
        var _this = this;
        // console.log(this.opcionSeleccionado);
        this.selectedCityIdUpdate = 0;
        console.log("id:" + (Number(this.selectedDepartmentIdUpdate)));
        this.restService.getCities(Number(this.selectedDepartmentIdUpdate)).then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.cities = resp.data;
            console.log(_this.cities);
            _this.myFormUpdate.get('cityIdUpdate').setValue(_this.customer.city_id);
            console.log("se asigno");
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterUpdateCustomerComponent.prototype.messageError = function () {
        sweetalert2_1.default({
            title: 'Debe crear un cliente',
            text: 'Luego de crear el cliente, puedes crear sedes',
            type: 'error'
        });
    };
    MasterUpdateCustomerComponent.prototype.updatedCustomer = function () {
        var _this = this;
        console.log(this.showButtonUpdated);
        console.log('Ole ole ole kakaakkaka');
        console.log(this.selectedTypeDocumentIdUpdate);
        console.log(this.selectedPaymentConditionIdUpdate);
        console.log(this.selectedDepartmentIdUpdate);
        console.log(this.selectedCityIdUpdate);
        // console.log(this.selectedPriceListIdUpdate);
        console.log(this.enabledCreatedOfficeUpdate);
        if (Number(this.selectedTypeDocumentIdUpdate) !== 0 && Number(this.selectedPaymentConditionIdUpdate) !== 0
            && Number(this.selectedDepartmentIdUpdate) !== 0
            && Number(this.selectedCityIdUpdate) !== 0) {
            this.submittedUpdated = true;
            if (!this.myFormUpdate.invalid) {
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                var statusTemp = 1;
                console.log(this.switchUpdate);
                if (this.enabledCreatedOfficeUpdate) {
                    statusTemp = 0;
                }
                console.log('kakakaka');
                this.restService.updateCustomer(Number(this.customer.id), this.myFormUpdate.get('businessNameUpdate').value.toUpperCase(), this.selectedTypeDocumentIdUpdate, this.myFormUpdate.get('documentIdUpdate').value, this.myFormUpdate.get('telephoneUpdate').value, this.myFormUpdate.get('addressUpdate').value, statusTemp, this.myFormUpdate.get('priceMarginUpdate').value, this.selectedPaymentConditionIdUpdate, this.selectedCityIdUpdate, this.selectedDepartmentIdUpdate)
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
    /*onChangeCreated(check: any) {
      this.switchUpdate = check;
      this.enabledCreated = check;
      this.enabledUpdated = this.enabledCreated ;
        }
    
    
    
    onChangeCreated(check: any) {
      this.switchUpdate = check;
      this.enabledCreated = check;
      this.enabledUpdated = this.enabledCreated ;
        }*/
    MasterUpdateCustomerComponent.prototype.onChangeCreated = function (check) {
        // this.switchUpdate = check;
        this.enabledCreated = check;
        // this.enabledUpdated = this.enabledCreated ;
    };
    MasterUpdateCustomerComponent.prototype.onChangeCreatedOfficeUpdate = function (check) {
        console.log(check);
        this.enabledCreatedOfficeUpdate = check;
    };
    MasterUpdateCustomerComponent.prototype.onChangeCreatedOffice = function (check) {
        this.enabledCreatedOffice = check;
    };
    MasterUpdateCustomerComponent.prototype.onChangeUpdated = function (check) {
        //  this.switchUpdate = check;
        this.enabledUpdated = check;
    };
    MasterUpdateCustomerComponent.prototype.getMasters = function (indice) {
        var _this = this;
        // console.log(this.opcionSeleccionado);
        this.restService.getMastersThird().then(function (data) {
            var resp = data;
            _this.dataMasters = data;
            _this.paymentConditions = _this.dataMasters.payment_condition;
            _this.typeDocuments = _this.dataMasters.documents;
            _this.departments = _this.dataMasters.department;
            //  this.priceList = this.dataMasters.price_list;
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
    MasterUpdateCustomerComponent.prototype.getOffices = function (idCustomer) {
        var _this = this;
        // console.log(this.opcionSeleccionado);
        this.restService.getCustomerOffice(idCustomer).then(function (data) {
            console.log('que mas ps');
            var resp = data;
            console.log(resp);
            _this.dataOffices = resp.data_branchoffices;
            console.log('Importante ver la info');
            console.log(_this.dataOffices);
            // this.selectedTypeDocumentIdUpdate = resp.customer.type_document_id;
            // this.selectedPriceListIdUpdate = resp.customer.price_list_id;
            // this.selectedPaymentConditionIdUpdate = resp.customer.payment_condition_id;
            // this.selectedDepartmentIdUpdate = resp.customer.department_id;
            // this.selectedCityIdUpdate = resp.data_branchoffices.city_id;
            console.log("antes de consulta " + resp.data_branchoffices[0].department_id);
            //   this.dataOffices = this.dataOffices.data;
            console.log('master');
            sweetalert2_1.default.close();
            // this.cities = resp.data;
            console.log(_this.dataOffices);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterUpdateCustomerComponent.prototype.deleteBrand = function (brand) {
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
                    _this.getOffices(_this.currentCustomerId);
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
    MasterUpdateCustomerComponent.prototype.onChange = function (d) {
        console.log('jajaja');
        console.log(d);
    };
    MasterUpdateCustomerComponent.prototype.preview = function (files) {
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
    MasterUpdateCustomerComponent.prototype.updatedOffice = function () {
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
            if (Number(this.selectedDepartmentOfficeIdUpdate) !== 0 && Number(this.selectedCityOfficeIdUpdate) !== 0) {
                this.submittedOffice = true;
                console.log(this.myFormCreateOffice.errors);
                if (!this.myFormUpdateOffice.invalid) {
                    sweetalert2_1.default({
                        title: 'Validando información ...',
                        allowOutsideClick: false
                    });
                    sweetalert2_1.default.showLoading();
                    var statusTemp = 0;
                    console.log(this.switchUpdate);
                    if (this.enabledCreatedOfficeUpdate === false) {
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
                                title: 'Sede Actualizada',
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
    MasterUpdateCustomerComponent.prototype.sendOffice = function () {
        var _this = this;
        try {
            console.log('Ole ole ole');
            console.log('Como fue');
            console.log(this.selectedDepartmentOfficeId.id + ',' + this.selectedCityOfficeId.id);
            console.log(this.myFormCreateOffice.get('nameOffice').hasError('required'));
            console.log(this.myFormCreateOffice.get('telephoneOffice').hasError('required'));
            console.log(this.myFormCreateOffice.get('departmentOffice').hasError('required'));
            console.log(this.myFormCreateOffice.get('citytOffice').hasError('required'));
            console.log(this.myFormCreateOffice.get('addressOffice').hasError('required'));
            console.log(this.myFormCreateOffice.get('addressOffice').errors);
            console.log(this.selectedDepartmentOfficeId);
            console.log(this.selectedCityOfficeId);
            if (Number(this.selectedDepartmentOfficeId) !== 0 && Number(this.selectedCityOfficeId) !== 0) {
                console.log('Paso a donde no debia');
                console.log('Paso a donde no debia');
                console.log('Paso a donde no debia');
                console.log('Paso a donde no debia');
                console.log('Paso a donde no debia');
                this.submittedOffice = true;
                console.log(this.myFormCreateOffice.errors);
                console.log(this.myFormCreateOffice.invalid);
                console.log('---------------');
                if (!this.myFormCreateOffice.invalid) {
                    sweetalert2_1.default({
                        title: 'Validando información ...',
                        allowOutsideClick: false
                    });
                    sweetalert2_1.default.showLoading();
                    var statusTemp = 0;
                    console.log(this.enabledCreatedOffice);
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
    MasterUpdateCustomerComponent.prototype.goAdminCustomer = function () {
        this.router.navigateByUrl('master/customers');
    };
    Object.defineProperty(MasterUpdateCustomerComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterUpdateCustomerComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterUpdateCustomerComponent.prototype, "checkFormOffice", {
        get: function () { return this.myFormCreateOffice.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterUpdateCustomerComponent.prototype, "checkFormOfficeUpdate", {
        get: function () { return this.myFormUpdateOffice.controls; },
        enumerable: true,
        configurable: true
    });
    MasterUpdateCustomerComponent = __decorate([
        core_1.Component({
            selector: 'app-master-update-customer',
            templateUrl: './master-update-customer.component.html',
            styleUrls: ['./master-update-customer.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router, upload_service_1.UploadService,
            router_2.ActivatedRoute])
    ], MasterUpdateCustomerComponent);
    return MasterUpdateCustomerComponent;
}());
exports.MasterUpdateCustomerComponent = MasterUpdateCustomerComponent;
//# sourceMappingURL=master-update-customer.component.js.map