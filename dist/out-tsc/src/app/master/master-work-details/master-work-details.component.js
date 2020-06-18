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
var work_service_1 = require("../../master-services/Work/work.service");
var sweetalert2_1 = require("sweetalert2");
var router_1 = require("@angular/router");
var MasterWorkDetailsComponent = /** @class */ (function () {
    function MasterWorkDetailsComponent(workservice, router, activatedroute, formbuilder) {
        this.workservice = workservice;
        this.router = router;
        this.activatedroute = activatedroute;
        this.formbuilder = formbuilder;
        this.submitted = false;
        this.indice = 0;
        this.updateindice = 0;
        this.showButtonUpdated = false;
        //system
        var system = new forms_1.FormControl('', forms_1.Validators.required);
        this.detailform = new forms_1.FormGroup({
            system: system
        });
        var updatesystem = new forms_1.FormControl('', forms_1.Validators.required);
        this.updatedetailform = new forms_1.FormGroup({
            updatesystem: updatesystem
        });
        //component
        var component = new forms_1.FormControl('', forms_1.Validators.required);
        this.componentform = new forms_1.FormGroup({
            component: component
        });
        var updatecomponent = new forms_1.FormControl('', forms_1.Validators.required);
        this.updatecomponentform = new forms_1.FormGroup({
            updatecomponent: updatecomponent
        });
        //part
        var partdescription = new forms_1.FormControl('', forms_1.Validators.required);
        var partwork = new forms_1.FormControl('', forms_1.Validators.required);
        var partsupplice = new forms_1.FormControl('', forms_1.Validators.required);
        var partparameter = new forms_1.FormControl('', forms_1.Validators.required);
        this.partform = new forms_1.FormGroup({
            partdescription: partdescription,
            partwork: partwork,
            partsupplice: partsupplice,
            partparameter: partparameter
        });
        var partupdatedescription = new forms_1.FormControl('', forms_1.Validators.required);
        var partupdatework = new forms_1.FormControl('', forms_1.Validators.required);
        var partupdatesupplice = new forms_1.FormControl('', forms_1.Validators.required);
        var partupdateparameter = new forms_1.FormControl('', forms_1.Validators.required);
        this.updatepartform = new forms_1.FormGroup({
            partupdatedescription: partupdatedescription,
            partupdatework: partupdatework,
            partupdatesupplice: partupdatesupplice,
            partupdateparameter: partupdateparameter
        });
    }
    MasterWorkDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.paramMap.subscribe(function (data) {
            _this.name = data.get('name');
            console.log(_this.name);
            if (_this.name) {
                _this.hours1 = 0;
                _this.title1 = _this.name;
                _this.observation1 = "nada";
            }
        });
    };
    MasterWorkDetailsComponent.prototype.ngAfterContentInit = function () {
        if (this.name) {
            document.getElementById('storeheaderbutton2').click();
        }
    };
    MasterWorkDetailsComponent.prototype.registerheader = function () {
        var _this = this;
        console.log(this.title1);
        if ((this.title1 != null) || (this.title1 != "") || (this.hours1 == null)) {
            sweetalert2_1.default({
                title: 'Obteniendo información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.workservice.storeWorkHeader(1, this.title1, this.hours1, this.observation1).then(function (data) {
                var resp = data;
                _this.headerinfo = resp.data;
                console.log("header information");
                console.log(_this.headerinfo);
                sweetalert2_1.default.close();
                _this.showButtonUpdated = true;
                _this.hours2 = _this.headerinfo.hours;
                _this.title2 = _this.headerinfo.description;
                _this.observation2 = _this.headerinfo.observation;
                _this.getWorkDetails();
            }).catch(function (err) {
                _this.showButtonUpdated = false;
                console.log(err);
                _this.generalAlert("ha ocurrido un herror", "ocurrio un error durante la ecucion", "error");
            });
        }
        else {
            this.showButtonUpdated = false;
            this.generalAlert("ha ocurrido un herror", "complete todos los campos obligatorios", "error");
        }
    };
    MasterWorkDetailsComponent.prototype.getWorkDetails = function () {
        var _this = this;
        this.workservice.getSystem(this.headerinfo.id).then(function (data) {
            var resp = data;
            console.log('carga de detalles');
            console.log(_this.headerinfo.id);
            console.log(resp);
            if (resp.success == true) {
                _this.maintenanceSystem = resp.data;
                for (var _i = 0, _a = _this.maintenanceSystem; _i < _a.length; _i++) {
                    var system = _a[_i];
                    _this.getComponent(system.id);
                }
            }
            else {
                _this.generalAlert("ha ocurrido un error", "ha ocurrido un error al mostrar la informacion", "error");
            }
        }).catch(function (error) {
            console.log(error);
            _this.generalAlert("ha ocurrido un error", "ha ocurrido un error al mostrar la informacion", "error");
        });
    };
    MasterWorkDetailsComponent.prototype.getComponent = function (id) {
        var _this = this;
        this.workservice.getComponent(id).then(function (data) {
            var resp = data;
            console.log('carga de componentes');
            console.log(resp);
            if (resp.success == true) {
                _this.componentSystem = resp.data;
                console.log(_this.componentSystem);
                for (var _i = 0, _a = _this.componentSystem; _i < _a.length; _i++) {
                    var com = _a[_i];
                    _this.getPart(com.id);
                }
            }
            else {
                _this.generalAlert("ha ocurrido un error", "ha ocurrido un error al mostrar la informacion", "error");
            }
        }).catch(function (error) {
            console.log(error);
            _this.generalAlert("ha ocurrido un error", "ha ocurrido un error al mostrar la informacion", "error");
        });
    };
    MasterWorkDetailsComponent.prototype.getPart = function (id) {
        var _this = this;
        this.workservice.getPart(id).then(function (data) {
            var resp = data;
            console.log('carga de partes');
            console.log(resp);
            if (resp.success == true) {
                _this.dataPart = resp.data;
                console.log(_this.dataPart);
            }
            else {
                _this.generalAlert("ha ocurrido un error", "ha ocurrido un error al mostrar la informacion", "error");
            }
        }).catch(function (error) {
            console.log(error);
            _this.generalAlert("ha ocurrido un error", "ha ocurrido un error al mostrar la informacion", "error");
        });
    };
    MasterWorkDetailsComponent.prototype.updateSystem = function (system) {
        console.log(system);
        this.currentSystem = system;
        console.log(this.currentSystem);
        this.updatedetailform.get('updatesystem').setValue(this.currentSystem.system_description);
        document.getElementById('showUpdateSystem').click();
    };
    MasterWorkDetailsComponent.prototype.sendUpdateSystem = function (system) {
        var _this = this;
        if ((system.updatesystem != null) && (system.updatesystem != "")) {
            sweetalert2_1.default({
                title: 'Obteniendo información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.workservice.updateSystem(this.currentSystem.id, system.updatesystem).then(function (data) {
                var resp = data;
                _this.headerinfo = resp.data;
                console.log("header information");
                console.log(_this.headerinfo);
                _this.generalAlert("Proceso completado", "Proceso completado correctamente!", "success");
                document.getElementById('updateDetailHide').click();
                _this.getWorkDetails();
            }).catch(function (err) {
                console.log(err);
                _this.generalAlert("ha ocurrido un herror", "ocurrio un error durante la ecucion", "error");
            });
        }
        else {
            this.generalAlert("ha ocurrido un herror", "complete todos los campos obligatorios", "error");
        }
    };
    MasterWorkDetailsComponent.prototype.deleteSystem = function (item) {
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
                _this.elementDelete = item;
                console.log(item);
                console.log(_this.elementDelete);
                sweetalert2_1.default.showLoading();
                _this.workservice.deleteSystems(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este peso presenta problemas',
                            text: 'Este peso no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        // this.router.navigateByUrl('master/registerBrand');
                        sweetalert2_1.default({
                            title: 'Elemento eliminado',
                            type: 'success'
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
    MasterWorkDetailsComponent.prototype.deleteComponent = function (item) {
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
                _this.elementDelete = item;
                console.log(item);
                console.log(_this.elementDelete);
                sweetalert2_1.default.showLoading();
                _this.workservice.deleteComponents(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este peso presenta problemas',
                            text: 'Este peso no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        // this.router.navigateByUrl('master/registerBrand');
                        sweetalert2_1.default({
                            title: 'Elemento eliminado',
                            type: 'success'
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
    MasterWorkDetailsComponent.prototype.deletePart = function (item) {
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
                _this.elementDelete = item;
                console.log(item);
                console.log(_this.elementDelete);
                sweetalert2_1.default.showLoading();
                _this.workservice.deleteParts(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este peso presenta problemas',
                            text: 'Este peso no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        // this.router.navigateByUrl('master/registerBrand');
                        sweetalert2_1.default({
                            title: 'Elemento eliminado',
                            type: 'success'
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
    MasterWorkDetailsComponent.prototype.updateComponent = function (components) {
        this.currentComponent = components;
        console.log(this.currentComponent);
        this.updatedetailform.get('updatesystem').setValue(this.currentSystem.description);
        document.getElementById('showUpdateSystem').click();
    };
    MasterWorkDetailsComponent.prototype.sendUpdateComponent = function (system) {
        var _this = this;
        if ((system.updatecomponent != null) && (system.updatecomponent != "")) {
            sweetalert2_1.default({
                title: 'Obteniendo información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.workservice.updateSystem(this.currentSystem.id, system.updatecomponent).then(function (data) {
                var resp = data;
                _this.headerinfo = resp.data;
                console.log("header information");
                console.log(_this.headerinfo);
                _this.generalAlert("Proceso completado", "Proceso completado correctamente!", "success");
                document.getElementById('updateComponentHide').click();
                _this.getComponent(_this.currentSystem.system_routine_id);
            }).catch(function (err) {
                console.log(err);
                _this.generalAlert("ha ocurrido un herror", "ocurrio un error durante la ecucion", "error");
            });
        }
        else {
            this.generalAlert("ha ocurrido un herror", "complete todos los campos obligatorios", "error");
        }
    };
    MasterWorkDetailsComponent.prototype.updatePart = function (row) {
        this.currentPart = row;
        console.log(this.currentPart);
        this.updatepartform.get('partupdatedescription').setValue(this.currentPart.description);
        this.updatepartform.get('partupdatework').setValue(this.currentPart.work);
        this.updatepartform.get('partupdatesupplice').setValue(this.currentPart.supplice);
        this.updatepartform.get('partupdateparameter').setValue(this.currentPart.parameter);
        document.getElementById('showUpdatePart').click();
    };
    MasterWorkDetailsComponent.prototype.sendUpdatePart = function (updatedetailform) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        console.log(updatedetailform);
        console.log(updatedetailform.partdescription);
        console.log(updatedetailform.partwork);
        console.log(updatedetailform.partsupplice);
        console.log(updatedetailform.partparameter);
        var description = updatedetailform.partupdatedescription;
        var work = updatedetailform.partupdatework;
        var supplice = updatedetailform.partupdatesupplice;
        var parameter = updatedetailform.partupdateparameter;
        if (((description != null) && (description != "")) && ((work != null) && (work != "")) && ((supplice != null) && (supplice != "")) && ((parameter != null) && (parameter != ""))) {
            sweetalert2_1.default({
                title: 'Obteniendo información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.workservice.updatePart(this.currentPart.id, description, work, supplice, parameter).then(function (data) {
                var resp = data;
                _this.headerinfo = resp.data;
                console.log("header information");
                console.log(_this.headerinfo);
                _this.generalAlert("Proceso completado", "Proceso completado correctamente!", "success");
                document.getElementById('updatePartHide').click();
            }).catch(function (err) {
                console.log(err);
                _this.generalAlert("ha ocurrido un herror", "ocurrio un error durante la ecucion", "error");
            });
        }
        else {
            this.generalAlert("ha ocurrido un herror", "complete todos los campos obligatorios", "error");
        }
    };
    MasterWorkDetailsComponent.prototype.updateheader = function () {
        var _this = this;
        console.log(this.title2);
        if ((this.title2 != null) || (this.title2 != "") || (this.hours2 == null)) {
            sweetalert2_1.default({
                title: 'Obteniendo información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.workservice.updateWorkHeader(this.headerinfo.id, 1, this.title2, this.hours2, this.observation2).then(function (data) {
                var resp = data;
                _this.headerinfo = resp.data;
                console.log("header information");
                console.log(_this.headerinfo);
                _this.generalAlert("Proceso completado", "Proceso completado correctamente!", "success");
                _this.hours2 = _this.headerinfo.hours;
                _this.title2 = _this.headerinfo.description;
                _this.observation2 = _this.headerinfo.observation;
            }).catch(function (err) {
                console.log(err);
                _this.generalAlert("ha ocurrido un herror", "ocurrio un error durante la ecucion", "error");
            });
        }
        else {
            this.generalAlert("ha ocurrido un herror", "complete todos los campos obligatorios", "error");
        }
    };
    MasterWorkDetailsComponent.prototype.generalAlert = function (title, message, type) {
        sweetalert2_1.default({
            title: title,
            text: message,
            type: type
        });
    };
    Object.defineProperty(MasterWorkDetailsComponent.prototype, "getParts", {
        get: function () {
            return this.detailform.get('parts');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterWorkDetailsComponent.prototype, "checkForm", {
        get: function () { return this.detailform.controls; },
        enumerable: true,
        configurable: true
    });
    MasterWorkDetailsComponent.prototype.addPart = function () {
        console.log(this.indice);
        var control = this.detailform.controls['parts'];
        var lastvalue = control.at(this.indice).value;
        console.log(lastvalue.part);
        if ((((lastvalue.part) == null)) || ((lastvalue.part) == "")) {
            this.generalAlert('No se puede agregar', 'El campo parte debe contener un valor', 'error');
        }
        else {
            control.push(this.formbuilder.group({
                part: []
            }));
            this.indice++;
        }
    };
    Object.defineProperty(MasterWorkDetailsComponent.prototype, "getUpdateParts", {
        get: function () {
            return this.updatedetailform.get('updateparts');
        },
        enumerable: true,
        configurable: true
    });
    MasterWorkDetailsComponent.prototype.addUpdatePart = function () {
        var control = this.updatedetailform.controls['updateparts'];
        console.log("valor en : " + (this.updateindice - 1) + " es: " + control.at(this.updateindice - 1));
        var lastvalue = control.at(this.updateindice - 1).value;
        console.log(lastvalue.updatepart);
        if ((((lastvalue.updatepart) == null)) || ((lastvalue.updatepart) == "")) {
            this.generalAlert('No se puede agregar', 'El campo parte debe contener un valor', 'error');
        }
        else {
            control.push(this.formbuilder.group({
                updatepart: []
            }));
            this.updateindice++;
        }
    };
    MasterWorkDetailsComponent.prototype.deleteUpdatePart = function (index) {
        if (this.updateindice == 0) {
            this.generalAlert('No se puede borrar', 'debe contener almenos un valor', 'error');
        }
        else {
            var control = this.updatedetailform.controls['updateparts'];
            console.log("valor en : " + index + " es: " + control.at(index));
            control.removeAt(index);
            this.updateindice--;
        }
    };
    MasterWorkDetailsComponent.prototype.storageDetail = function (formValue) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        console.log(formValue);
        console.log(formValue.system);
        var system = formValue.system;
        if ((system != null) && (system != "")) {
            this.workservice.storeSystem(this.headerinfo.id, this.detailform.get('system').value).then(function (data) {
                var resp = data;
                console.log(data);
                console.log(resp);
                if (resp.success == 1) {
                    _this.generalAlert('Proceso exitoso', 'Se ha guardado el detalle correctamente', 'success');
                    _this.getWorkDetails();
                    _this.detailform.reset();
                    document.getElementById('storageDetailHide').click();
                    sweetalert2_1.default.close();
                }
                else {
                    _this.generalAlert('No se puede guardar', 'Ha ocurrido un error en la ejecucion', 'error');
                }
            }).catch(function (error) {
                console.log(error);
                _this.generalAlert('No se puede guardar', 'Ha ocurrido un error en la ejecucion', 'error');
            });
        }
        else {
            this.generalAlert('No se puede guardar', 'Debe Completar todos los campos obligatorios', 'error');
        }
    };
    MasterWorkDetailsComponent.prototype.currentComponents = function (idSystem) {
        console.log(idSystem);
        console.log(idSystem.id);
        this.systemForComponent = idSystem.id;
        // document.getElementById('storageDetailHide').click();
    };
    MasterWorkDetailsComponent.prototype.currentParts = function (idComponent) {
        console.log(idComponent);
        console.log(idComponent.id);
        this.componentForPart = idComponent.id;
        // document.getElementById('storageDetailHide').click();
    };
    MasterWorkDetailsComponent.prototype.storageComponent = function (formValue) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        console.log(formValue);
        console.log(formValue.component);
        var system = formValue.component;
        if ((system != null) && (system != "")) {
            this.workservice.storeComponent(this.systemForComponent, this.componentform.get('component').value).then(function (data) {
                var resp = data;
                console.log(data);
                console.log(resp);
                if (resp.success == 1) {
                    _this.generalAlert('Proceso exitoso', 'Se ha guardado el detalle correctamente', 'success');
                    _this.getComponent(_this.systemForComponent);
                    _this.componentform.reset();
                    document.getElementById('storageComponentlHide').click();
                    sweetalert2_1.default.close();
                }
                else {
                    _this.generalAlert('No se puede guardar', 'Ha ocurrido un error en la ejecucion', 'error');
                }
            }).catch(function (error) {
                console.log(error);
                _this.generalAlert('No se puede guardar', 'Ha ocurrido un error en la ejecucion', 'error');
            });
        }
        else {
            this.generalAlert('No se puede guardar', 'Debe Completar todos los campos obligatorios', 'error');
        }
    };
    MasterWorkDetailsComponent.prototype.storagePart = function (formValue) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        console.log(formValue.value);
        console.log(formValue.value.partdescription);
        console.log(formValue.value.partwork);
        console.log(formValue.value.partsupplice);
        console.log(formValue.value.partparameter);
        var description = formValue.value.partdescription;
        var work = formValue.value.partwork;
        var supplice = formValue.value.partsupplice;
        var parameter = formValue.value.partparameter;
        if (((description != null) && (description != "")) && ((work != null) && (work != "")) && ((supplice != null) && (supplice != "")) && ((parameter != null) && (parameter != ""))) {
            this.workservice.storeParts(this.componentForPart, description, work, supplice, parameter).then(function (data) {
                var resp = data;
                console.log(data);
                console.log(resp);
                if (resp.success == 1) {
                    _this.generalAlert('Proceso exitoso', 'Se ha guardado el detalle correctamente', 'success');
                    _this.partform.reset();
                    document.getElementById('storagePartHide').click();
                    _this.getPart(_this.componentForPart);
                    sweetalert2_1.default.close();
                }
                else {
                    _this.generalAlert('No se puede guardar', 'Ha ocurrido un error en la ejecucion', 'error');
                }
            }).catch(function (error) {
                console.log(error);
                _this.generalAlert('No se puede guardar', 'Ha ocurrido un error en la ejecucion', 'error');
            });
        }
        else {
            this.generalAlert('No se puede guardar', 'Debe Completar todos los campos obligatorios', 'error');
        }
    };
    MasterWorkDetailsComponent.prototype.resetCreateForm = function () {
        this.detailform.reset();
        for (var index = this.indice; index > 0; index--) {
            var control = this.detailform.controls['parts'];
            control.removeAt(index);
            this.indice--;
        }
    };
    MasterWorkDetailsComponent.prototype.deleteWorkDetail = function (row) {
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
                _this.workservice.deleteWorkDetail(Number(_this.elementDelete.id))
                    .then(function (data) {
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        _this.generalAlert('Este Detalle presenta problemas', 'Este Detalle no se puede eliminar', 'error');
                    }
                    else {
                        _this.generalAlert('Detalle eliminado', 'Detalle eliminado correctamente', 'success');
                        _this.getWorkDetails();
                    }
                }).catch(function (error) {
                    console.log(error);
                    _this.generalAlert('Este Detalle presenta problemas', 'Este Detalle no se puede eliminar', 'error');
                });
                console.log(_this.elementDelete.id);
            }
            else {
                // swal('Fail');
            }
            console.log(willDelete);
        });
    };
    MasterWorkDetailsComponent.prototype.showModalUpdate = function (row) {
        var _this = this;
        this.updateindice = 0;
        console.log(row);
        this.currentdetail = row;
        this.updatedetailform.get('updatesystem').setValue(this.currentdetail.system);
        this.updatedetailform.get('updatecomment').setValue(this.currentdetail.works);
        var parts = this.currentdetail.part;
        console.log(parts);
        if (parts != null) {
            var partsarray = parts;
            partsarray = partsarray.split('<br><br>');
            var control_1 = this.updatedetailform.controls['updateparts'];
            if (partsarray[0] != null) {
                control_1.removeAt(0);
            }
            partsarray.forEach(function (part) {
                if (part) {
                    control_1.push(_this.formbuilder.group({
                        updatepart: [part]
                    }));
                    _this.updateindice++;
                }
            });
            console.log(partsarray);
        }
        document.getElementById('showmodalbutton').click();
    };
    MasterWorkDetailsComponent.prototype.UpdateWorkDetail = function (formValue) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        var system = formValue.updatesystem;
        var comment = 'ja';
        var array = 'ja';
        if ((system != null) && (system != "")) {
            this.workservice.updateWorkDetail(this.currentdetail.id, comment, array, system).then(function (data) {
                var resp = data;
                console.log(resp);
                if (resp.success == 1) {
                    _this.generalAlert('Proceso exitoso', 'Se ha guardado el detalle correctamente', 'success');
                    document.getElementById('updateDetailHide').click();
                    _this.getWorkDetails();
                }
                else {
                    _this.generalAlert('No se puede guardar', 'Debe Completar todos los campos obligatorios', 'error');
                }
            }).catch(function (error) {
                console.log(error);
                _this.generalAlert('No se puede guardar', 'Ha ocurrido un error en la ejecucion', 'error');
            });
        }
        else {
            this.generalAlert('No se puede guardar', 'Debe Completar todos los campos obligatorios', 'error');
        }
    };
    MasterWorkDetailsComponent.prototype.goAdminRoutines = function () {
        this.router.navigateByUrl('master/work_dashboard');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MasterWorkDetailsComponent.prototype, "title1", void 0);
    MasterWorkDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-master-work-details',
            templateUrl: './master-work-details.component.html',
            styleUrls: ['./master-work-details.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [work_service_1.WorkService, router_1.Router, router_1.ActivatedRoute,
            forms_1.FormBuilder])
    ], MasterWorkDetailsComponent);
    return MasterWorkDetailsComponent;
}());
exports.MasterWorkDetailsComponent = MasterWorkDetailsComponent;
//# sourceMappingURL=master-work-details.component.js.map