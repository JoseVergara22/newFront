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
var modules_service_1 = require("../../master-services/modules/modules.service");
var MasterRegisterModuleComponent = /** @class */ (function () {
    function MasterRegisterModuleComponent(moduleService, router) {
        this.moduleService = moduleService;
        this.router = router;
        this.submitted = false;
        this.enabledCreated = true;
        this.showButtonUpdated = 0;
        var description = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            description: description,
        });
    }
    MasterRegisterModuleComponent.prototype.onChangeCreated = function (check) {
        console.log(check);
        this.enabledCreated = check;
    };
    MasterRegisterModuleComponent.prototype.sendModule = function () {
        var _this = this;
        console.log('Ole ole ole');
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
            this.moduleService.createModule(this.myForm.get('description').value.toUpperCase(), statusTemp)
                .then(function (data) {
                var resp = data;
                console.log(resp);
                console.log('id customer' + resp.data.id);
                _this.currentModuleId = resp.data.id;
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Este Modulo ya esta registrado',
                        text: 'Este Modulo no se puede registrar',
                        type: 'error'
                    });
                }
                else {
                    sweetalert2_1.default({
                        title: 'Modulo agregado',
                        type: 'success'
                    });
                    _this.myForm.reset();
                    _this.router.navigateByUrl('maintenance/moduleUpdate/' + _this.currentModuleId);
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            sweetalert2_1.default({
                title: 'Debe llenar el campo obligatorio',
                text: 'Debe llenar el campo obligatorio',
                type: 'error'
            });
        }
    };
    Object.defineProperty(MasterRegisterModuleComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    MasterRegisterModuleComponent.prototype.ngOnInit = function () {
    };
    MasterRegisterModuleComponent = __decorate([
        core_1.Component({
            selector: 'app-master-register-module',
            templateUrl: './master-register-module.component.html',
            styleUrls: ['./master-register-module.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [modules_service_1.ModulesService, router_1.Router])
    ], MasterRegisterModuleComponent);
    return MasterRegisterModuleComponent;
}());
exports.MasterRegisterModuleComponent = MasterRegisterModuleComponent;
//# sourceMappingURL=master-register-module.component.js.map