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
var router_1 = require("@angular/router");
var sweetalert2_1 = require("sweetalert2");
var MasterCreateWarehousesOutComponent = /** @class */ (function () {
    function MasterCreateWarehousesOutComponent(restService, router) {
        this.restService = restService;
        this.router = router;
        this.submitted = false;
        var customer = new forms_1.FormControl('', forms_1.Validators.required);
        var branchOffice = new forms_1.FormControl('', forms_1.Validators.required);
        var technician = new forms_1.FormControl('', forms_1.Validators.required);
        var quantity = new forms_1.FormControl('', forms_1.Validators.required);
        var reference = new forms_1.FormControl('', forms_1.Validators.required);
        var unitCost = new forms_1.FormControl('', forms_1.Validators.required);
        var totalCost = new forms_1.FormControl('', forms_1.Validators.required);
        var description = new forms_1.FormControl('', forms_1.Validators.required);
        var control = new forms_1.FormControl('', forms_1.Validators.required);
        var estimate = new forms_1.FormControl('', forms_1.Validators.required);
        var liquidation = new forms_1.FormControl('', forms_1.Validators.required);
        var consumption = new forms_1.FormControl('', forms_1.Validators.required);
        var observation = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            customer: customer,
            branchOffice: branchOffice,
            technician: technician,
            quantity: quantity,
            reference: reference,
            unitCost: unitCost,
            totalCost: totalCost,
            description: description,
            control: control,
            estimate: estimate,
            liquidation: liquidation,
            consumption: consumption,
            observation: observation,
        });
    }
    MasterCreateWarehousesOutComponent.prototype.getCustomers = function () {
        var _this = this;
        this.restService.getCustomers().then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.customers = resp.data;
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterCreateWarehousesOutComponent.prototype.getOffices = function (idCustomer) {
        var _this = this;
        console.log(idCustomer);
        this.restService.getCustomerOffice(idCustomer).then(function (data) {
            console.log('que mas ps');
            var resp = data;
            console.log(resp);
            _this.branchOffices = resp.data_branchoffices;
            console.log('master');
            sweetalert2_1.default.close();
            console.log(_this.branchOffices);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterCreateWarehousesOutComponent.prototype.getForkLift = function (idOffice) {
        var _this = this;
        console.log(idOffice);
        this.restService.getForkLift(idOffice).then(function (data) {
            console.log('que mas ps');
            var resp = data;
            console.log(resp);
            _this.forkLift = resp.data;
            console.log('master');
            sweetalert2_1.default.close();
            console.log(_this.forkLift);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterCreateWarehousesOutComponent.prototype.getTechnician = function () {
        var _this = this;
        console.log();
        this.restService.getTechnician().then(function (data) {
            console.log('que mas ps');
            var resp = data;
            console.log(resp);
            _this.technicians = resp.data;
            console.log('master');
            sweetalert2_1.default.close();
            console.log(_this.technicians);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterCreateWarehousesOutComponent.prototype.ChangingValue = function () {
        console.log('Cambio cliente');
        console.log(this.selectedCustomer);
        console.log(this.selectedCustomer.id);
        this.getOffices(this.selectedCustomer.id);
    };
    MasterCreateWarehousesOutComponent.prototype.ChangingValueBranch = function () {
        console.log('Cambio sede');
        console.log(this.selectedBranchOffice);
        console.log(this.selectedBranchOffice.id);
        this.getForkLift(this.selectedBranchOffice.id);
    };
    MasterCreateWarehousesOutComponent.prototype.sendWarehousesOut = function () { };
    MasterCreateWarehousesOutComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MasterCreateWarehousesOutComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    MasterCreateWarehousesOutComponent = __decorate([
        core_1.Component({
            selector: 'app-master-create-warehouses-out',
            templateUrl: './master-create-warehouses-out.component.html',
            styleUrls: ['./master-create-warehouses-out.component.scss']
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, router_1.Router])
    ], MasterCreateWarehousesOutComponent);
    return MasterCreateWarehousesOutComponent;
}());
exports.MasterCreateWarehousesOutComponent = MasterCreateWarehousesOutComponent;
//# sourceMappingURL=master-create-warehouses-out.component.js.map