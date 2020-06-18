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
var rest_service_1 = require("../../master-services/Rest/rest.service");
var router_1 = require("@angular/router");
var MasterCreateTechniciansComponent = /** @class */ (function () {
    function MasterCreateTechniciansComponent(restService, router) {
        this.restService = restService;
        this.router = router;
        this.submitted = false;
        this.check = false;
        this.enable = false;
        this.enabledCreated = true;
        this.currentTechnicianId = 0;
        this.selectedTypeDocumentId = 0;
        //this.getMasters(0);
        var name = new forms_1.FormControl('', forms_1.Validators.required);
        var typeDocumentId = new forms_1.FormControl('', forms_1.Validators.required);
        var document = new forms_1.FormControl('', forms_1.Validators.required);
        var cellphone = new forms_1.FormControl('');
        this.myForm = new forms_1.FormGroup({
            name: name,
            typeDocumentId: typeDocumentId,
            document: document,
            cellphone: cellphone,
        });
    }
    MasterCreateTechniciansComponent.prototype.getMasters = function (indice) {
        var _this = this;
        // console.log(this.opcionSeleccionado);
        this.restService.getMastersTechnicians().then(function (data) {
            var resp = data;
            console.log('Info de getMaster');
            console.log('---------------------');
            console.log(resp);
            _this.dataMasters = data;
            _this.typeDocuments = _this.dataMasters.documents;
            console.log('master');
            console.log(data);
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterCreateTechniciansComponent.prototype.sendTechnicians = function () {
        var _this = this;
        console.log('Ole ole ole');
        console.log(this.selectedTypeDocumentId);
        if (Number(this.selectedTypeDocumentId) !== 0) {
            this.submitted = true;
            if (!this.myForm.invalid) {
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                var statusTemp = 0;
                if (this.enabledCreated === false) {
                    statusTemp = 1;
                }
                this.restService.createTechnicians(this.myForm.get('name').value.toUpperCase(), this.myForm.get('document').value, this.myForm.get('cellphone').value)
                    .then(function (data) {
                    var resp = data;
                    console.log(resp);
                    console.log('id technian' + resp.data.id);
                    _this.currentTechnicianId = resp.data.id;
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este tecnico ya esta registrado',
                            text: 'Este tecnico no se puede registrar',
                            type: 'error'
                        });
                    }
                    else {
                        _this.idtechnicanCreated = resp.data.id;
                        console.log('Cambio');
                        sweetalert2_1.default({
                            title: 'Tecnico agregado',
                            type: 'success'
                        });
                        _this.router.navigateByUrl('master/techniansUpdate/' + _this.idtechnicanCreated);
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
    MasterCreateTechniciansComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MasterCreateTechniciansComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    MasterCreateTechniciansComponent = __decorate([
        core_1.Component({
            selector: 'app-master-create-technicians',
            templateUrl: './master-create-technicians.component.html',
            styleUrls: ['./master-create-technicians.component.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router])
    ], MasterCreateTechniciansComponent);
    return MasterCreateTechniciansComponent;
}());
exports.MasterCreateTechniciansComponent = MasterCreateTechniciansComponent;
//# sourceMappingURL=master-create-technicians.component.js.map