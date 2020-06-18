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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var rest_service_1 = require("../../master-services/Rest/rest.service");
var forklift_service_1 = require("../../master-services/Forklift/forklift.service");
var upload_service_1 = require("../../master-services/services/upload.service");
var user_service_1 = require("../../master-services/User/user.service");
var estimate_service_1 = require("../../master-services/estimate/estimate.service");
//import * as jsPDF from 'jspdf';
require("jspdf-autotable");
/*interface jsPDFWithPlugin extends jsPDF {
  autoTable: (options: UserOptions) => jsPDF;
}*/
var sweetalert2_1 = require("sweetalert2");
var router_1 = require("@angular/router");
var I18N_VALUES = {
    'fr': {
        weekdays: ['Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb', 'Dom'],
        months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic'],
    }
    // other languages you would support
};
var I18n = /** @class */ (function () {
    function I18n() {
        this.language = 'fr';
    }
    I18n = __decorate([
        core_1.Injectable()
    ], I18n);
    return I18n;
}());
exports.I18n = I18n;
var MasterWarehousesOutComponent = /** @class */ (function () {
    function MasterWarehousesOutComponent(restService, _i18n, router, estimateService, forkliftService, calendar, formatter, userService, uploadService, formbuilder) {
        //  super();
        this.restService = restService;
        this._i18n = _i18n;
        this.router = router;
        this.estimateService = estimateService;
        this.forkliftService = forkliftService;
        this.calendar = calendar;
        this.formatter = formatter;
        this.userService = userService;
        this.uploadService = uploadService;
        this.formbuilder = formbuilder;
        this.rows = [];
        this.expanded = {};
        this.userModel = {
            id: 0,
            name: "",
            roles: []
        };
        this.names = ['', 'Juan', 'Pedro'];
        this.emailsSend = [];
        this.filesImage = [];
        this.a = 5;
        this.indice = 0;
        this.images = [];
        this.switchCreate = true;
        this.switchUpdate = true;
        this.change = true;
        this.active = false;
        this.inactive = false;
        this.enabledUpdated = false;
        this.filterIndicatorText = false;
        this.filterIndicatorCheck = false;
        this.checkHideCode = false; // false por defecto
        this.part = '';
        this.codepart = '';
        this.numberEstimate = '';
        this.subject = '';
        this.checkAllWorkForce = false;
        this.checkAllPart = false;
        this.considerDate = true;
        this.listStatus = [];
        this.selectedBusinessId = 0;
        this.selectedForkliftId = 0;
        this.selectedBranchId = 0;
        this.selectedUserId = 0;
        this.customerOffices = 0;
        this.forkliftText = '';
        this.cityEstimate = '';
        this.guarantyEstimate = '';
        this.validity = '';
        this.payment_method = '';
        this.subtotalHoursEstimate = '';
        this.subtotalPartsEstimate = '';
        this.totalEstimate = '';
        this.observationEstimate = '';
        this.itemsWorkforce = [];
        this.itemsPart = [];
        this.itemsFinalApproval = [];
        this.columns = [
            { name: 'Estado', prop: 'status' }
        ];
        this.columnWidths = [
            { column: "status", width: 200 }
        ];
        this.today = this.calendar.getToday();
        this.emailCustomer = '';
        this.emailShow = '';
        this.selectedCustomer = 0;
        this.selectedBranchOffice = 0;
        this.selectedTechnician = 0;
        this.selectedCustomerUpdate = 0;
        this.selectedBranchOfficeUpdate = 0;
        this.selectedTechnicianUpdate = 0;
        this.selectForkLiftUpdate = 0;
        this.quantitys = 0;
        this.value = 0;
        this.submitted = false;
        this.referenceList = [];
        this.descriptionList = [];
        this.controlList = [];
        this.estimateList = [];
        this.liquidationList = [];
        this.billList = [];
        var subject = new forms_1.FormControl('', forms_1.Validators.required);
        //const work = new FormControl('');
        var comment = new forms_1.FormControl('');
        this.detailform = this.formbuilder.group({
            subject: subject,
            emails: this.formbuilder.array([
                this.formbuilder.group({
                    email: ['']
                }),
                this.formbuilder.group({
                    name: ['']
                })
            ]),
            comment: comment
        });
        var date = new Date();
        var ngbDateStruct = { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear() };
        /*
        this.fetch((data) => {
          this.rows = data;
          console.log('datatatatatatatata');
          console.log(data);
          console.log(this.rows);
        });
         */
        this.fromDate = ngbDateStruct;
        this.untilDate = ngbDateStruct;
        console.log(this.fromDate);
        console.log(this.untilDate);
        this.getUser();
        this.masterSelected = false;
        this.checklist = [
            { id: 1, value: 'APROBADO', isSelected: false },
            { id: 2, value: 'ENVIADO', isSelected: false },
            { id: 3, value: 'GENERADO', isSelected: false },
            { id: 4, value: 'RECHAZADO', isSelected: false }
        ];
        this.loadingData();
        //this.getCustomer();
        this.getWarehousesOut();
        this.getCustomers();
        this.getTechnician();
        this.getDescription();
        this.getReference();
        this.getControl();
        this.getEstimate();
        this.getLiquidation();
        this.getBill();
        var customer = new forms_1.FormControl('', forms_1.Validators.required);
        var branchOffice = new forms_1.FormControl('', forms_1.Validators.required);
        var technician = new forms_1.FormControl('', forms_1.Validators.required);
        var quantity = new forms_1.FormControl('', forms_1.Validators.required);
        var reference = new forms_1.FormControl('', forms_1.Validators.required);
        var unitCost = new forms_1.FormControl('', forms_1.Validators.required);
        var totalCost = new forms_1.FormControl('', forms_1.Validators.required);
        var descriptions = new forms_1.FormControl('', forms_1.Validators.required);
        var control = new forms_1.FormControl('');
        var estimate = new forms_1.FormControl('', forms_1.Validators.required);
        var consumption = new forms_1.FormControl('', forms_1.Validators.required);
        var observation = new forms_1.FormControl('', forms_1.Validators.required);
        var liquidation = new forms_1.FormControl('');
        var bill = new forms_1.FormControl('');
        var forkliftControl = new forms_1.FormControl('');
        var customerUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var branchOfficeUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var technicianUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var quantityUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var referenceUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var unitCostUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var totalCostUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var descriptionsUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var controlUpdate = new forms_1.FormControl('');
        var estimateUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var consumptionUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var observationUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var billUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var liquidationUpdate = new forms_1.FormControl('');
        var forkliftControlUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            customer: customer,
            branchOffice: branchOffice,
            technician: technician,
            quantity: quantity,
            reference: reference,
            unitCost: unitCost,
            totalCost: totalCost,
            descriptions: descriptions,
            control: control,
            estimate: estimate,
            consumption: consumption,
            observation: observation,
            liquidation: liquidation,
            bill: bill,
            forkliftControl: forkliftControl,
        });
        this.myFormUpdate = new forms_1.FormGroup({
            customerUpdate: customerUpdate,
            branchOfficeUpdate: branchOfficeUpdate,
            technicianUpdate: technicianUpdate,
            quantityUpdate: quantityUpdate,
            referenceUpdate: referenceUpdate,
            unitCostUpdate: unitCostUpdate,
            totalCostUpdate: totalCostUpdate,
            descriptionsUpdate: descriptionsUpdate,
            controlUpdate: controlUpdate,
            estimateUpdate: estimateUpdate,
            consumptionUpdate: consumptionUpdate,
            observationUpdate: observationUpdate,
            liquidationUpdate: liquidationUpdate,
            billUpdate: billUpdate,
            forkliftControlUpdate: forkliftControlUpdate
        });
    }
    MasterWarehousesOutComponent_1 = MasterWarehousesOutComponent;
    MasterWarehousesOutComponent.prototype.getWarehousesOut = function () {
        var _this = this;
        this.restService.getWarehousesOut().then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.warehousesout = resp.data_warehousesOut;
            console.log(_this.warehousesout);
            console.log(_this.warehousesout.length);
            _this.rows = _this.warehousesout;
            _this.rowsClient = _this.warehousesout;
            console.log(_this.rows);
            console.log('isefuiowesdl');
            console.log(_this.rowsClient);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterWarehousesOutComponent.prototype.getCustomers = function () {
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
    MasterWarehousesOutComponent.prototype.getCustomersUpdate = function (row) {
        var _this = this;
        this.restService.getCustomers().then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.customers = resp.data;
            _this.selectedCustomerUpdate = row.customer_id;
            _this.selectedTechnicianUpdate = row.technician_id;
            _this.selectedBranchOfficeUpdate = row.branch_offices_id;
            ;
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterWarehousesOutComponent.prototype.getOffices = function (idCustomer) {
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
    MasterWarehousesOutComponent.prototype.getForkLift = function (idOffice) {
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
    MasterWarehousesOutComponent.prototype.getTechnician = function () {
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
    MasterWarehousesOutComponent.prototype.getReference = function () {
        var _this = this;
        console.log('reference');
        this.restService.getReferences().then(function (data) {
            console.log('que mas ps');
            var resp = data;
            console.log(resp);
            _this.referenceChecklist = resp.data_warehousesOut;
            console.log('master');
            sweetalert2_1.default.close();
            console.log(_this.referenceChecklist);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterWarehousesOutComponent.prototype.getDescription = function () {
        var _this = this;
        console.log('description');
        this.restService.getDescriptions().then(function (data) {
            console.log('que mas ps');
            var resp = data;
            console.log(resp);
            _this.descriptionChecklist = resp.data_warehousesOut;
            console.log('master');
            sweetalert2_1.default.close();
            console.log(_this.descriptionChecklist);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterWarehousesOutComponent.prototype.getControl = function () {
        var _this = this;
        console.log('control');
        this.restService.getControls().then(function (data) {
            console.log('que mas ps');
            var resp = data;
            console.log(resp);
            _this.controlChecklist = resp.data_warehousesOut;
            console.log('master');
            sweetalert2_1.default.close();
            console.log(_this.controlChecklist);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterWarehousesOutComponent.prototype.getEstimate = function () {
        var _this = this;
        console.log('estimate');
        this.restService.getEstimates().then(function (data) {
            console.log('que mas ps');
            var resp = data;
            console.log(resp);
            _this.estimateChecklist = resp.data_warehousesOut;
            console.log('master');
            sweetalert2_1.default.close();
            console.log(_this.estimateChecklist);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterWarehousesOutComponent.prototype.getLiquidation = function () {
        var _this = this;
        console.log('liquidation');
        this.restService.getSettlements().then(function (data) {
            console.log('que mas ps');
            var resp = data;
            console.log(resp);
            _this.liquidationChecklist = resp.data_warehousesOut;
            console.log('master');
            sweetalert2_1.default.close();
            console.log(_this.liquidationChecklist);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterWarehousesOutComponent.prototype.getBill = function () {
        var _this = this;
        console.log('bill');
        this.restService.getInvoices().then(function (data) {
            console.log('que mas ps');
            var resp = data;
            console.log(resp);
            _this.billChecklist = resp.data_warehousesOut;
            console.log('master');
            sweetalert2_1.default.close();
            console.log(_this.billChecklist);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterWarehousesOutComponent.prototype.ChangingValue = function () {
        console.log('Cambio cliente');
        console.log(this.selectedCustomer);
        this.getOffices(this.selectedCustomer);
    };
    MasterWarehousesOutComponent.prototype.changingValue = function () {
        console.log('Cambio cliente');
        console.log(this.selectedBusinessId);
        this.getOffices(this.selectedBusinessId);
    };
    MasterWarehousesOutComponent.prototype.ChangingValueUpdate = function () {
        console.log('Cambio cliente');
        console.log(this.selectedCustomerUpdate);
        this.getOffices(this.selectedCustomerUpdate);
    };
    MasterWarehousesOutComponent.prototype.ChangingValueBranch = function () {
        console.log('Cambio sede');
        console.log(this.selectedBranchOffice);
        console.log(this.selectedBranchOffice.id);
        this.getForkLift(this.selectedBranchOffice.id);
    };
    MasterWarehousesOutComponent.prototype.changingValueBranch = function () {
        console.log('Cambio sede');
        console.log(this.selectedBranchId);
        console.log(this.selectedBranchId.id);
        this.getForkLift(this.selectedBranchId);
    };
    MasterWarehousesOutComponent.prototype.ChangingValueBranchUpdate = function () {
        console.log('Cambio sede');
        console.log(this.selectedBranchOfficeUpdate);
        console.log(this.selectedBranchOfficeUpdate.id);
        this.getForkLift(this.selectedBranchOfficeUpdate.id);
    };
    MasterWarehousesOutComponent.prototype.calculateTotal = function () {
        this.quantitys = this.myForm.get('quantity').value;
        console.log(this.quantitys);
        this.value = this.myForm.get('unitCost').value;
        console.log(this.value);
        var total;
        total = Number(this.value * this.quantitys).toFixed(0);
        console.log(total);
        this.myForm.get('totalCost').setValue(total);
    };
    MasterWarehousesOutComponent.prototype.finalFormatPrice = function () {
        var num = this.myForm.get('totalCost').value; //.toString().replace('.','').replace(',','.');
        console.log(num);
        num += '';
        console.log(num);
        var splitStr = num.split('.');
        var splitLeft = splitStr[0];
        var splitRight = splitStr.length > 1 ? ',' + splitStr[1] : '';
        var regx = /(\d+)(\d{3})/;
        while (regx.test(splitLeft)) {
            splitLeft = splitLeft.replace(regx, '$1' + '.' + '$2');
            console.log(splitLeft);
        }
        console.log('Importante oleole');
        console.log(splitLeft + splitRight);
        var total = splitLeft + splitRight;
        console.log(total);
        this.myForm.get('totalCost').setValue(total);
    };
    MasterWarehousesOutComponent.prototype.sendWarehousesOut = function () {
        var _this = this;
        console.log('enviar');
        if (Number(this.selectedCustomer) !== 0 && Number(this.selectedBranchOffice) !== 0 && Number(this.selectedTechnician) !== 0) {
            this.submitted = true;
            if (!this.myForm.invalid) {
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                console.log(this.selectForkLift);
                console.log(this.selectedBranchOffice);
                console.log(this.selectedBranchOffice.id);
                console.log(this.selectedCustomer, this.selectedTechnician, this.selectedBranchOffice.id, this.myForm.get('quantity').value, this.myForm.get('reference').value, this.myForm.get('descriptions').value, this.myForm.get('control').value, this.myForm.get('unitCost').value, this.myForm.get('totalCost').value, this.selectForkLift, this.myForm.get('estimate').value, this.myForm.get('consumption').value, this.myForm.get('observation').value);
                this.restService.createWarehousesOut(this.selectedCustomer, this.selectedTechnician, this.selectedBranchOffice.id, this.selectForkLift, this.myForm.get('quantity').value, this.myForm.get('reference').value, this.myForm.get('descriptions').value, this.myForm.get('control').value, this.myForm.get('unitCost').value, this.myForm.get('totalCost').value, this.myForm.get('estimate').value, this.myForm.get('consumption').value, this.myForm.get('observation').value)
                    .then(function (data) {
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Esta salida ya esta registrada',
                            text: 'Esta salida no se pudo registrar',
                            type: 'error'
                        });
                    }
                    else {
                        console.log('Cambio');
                        console.log(resp.data.id);
                        document.getElementById('clearWarehouses').click();
                        document.getElementById('warehousesOutHide').click();
                        _this.getWarehousesOut();
                        _this.submitted = false;
                        sweetalert2_1.default({
                            title: 'Salida agregada',
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
    MasterWarehousesOutComponent.prototype.updateWare = function (row) {
        console.log(row);
        this.idwarehousesout = row.id;
        this.myFormUpdate.get('quantityUpdate').setValue(row.quantity);
        this.myFormUpdate.get('referenceUpdate').setValue(row.reference);
        this.myFormUpdate.get('descriptionsUpdate').setValue(row.description);
        //this.myFormUpdate.get('controlUpdate').setValue(row.control);
        this.myFormUpdate.get('unitCostUpdate').setValue(row.unit_cost);
        this.myFormUpdate.get('totalCostUpdate').setValue(row.total);
        this.myFormUpdate.get('estimateUpdate').setValue(row.order_number);
        this.myFormUpdate.get('controlUpdate').setValue(row.control);
        this.myFormUpdate.get('consumptionUpdate').setValue(row.consumption);
        this.myFormUpdate.get('observationUpdate').setValue(row.observation);
        this.myFormUpdate.get('liquidationUpdate').setValue(row.settlement_text);
        this.myFormUpdate.get('billUpdate').setValue(row.invoice_text);
        document.getElementById('updateWarehouses').click();
        this.getTechnician();
        this.getOffices(row.customer_id);
        this.getForkLift(row.branch_offices_id);
        this.getCustomersUpdate(row);
        console.log(this.selectedCustomerUpdate + '-- wec-- ' + this.selectedTechnicianUpdate + '----------' + this.selectedBranchOfficeUpdate
            + '------' + this.myFormUpdate.get('quantityUpdate').value + '-------' + this.myFormUpdate.get('referenceUpdate').value
            + '------' + this.myFormUpdate.get('descriptionsUpdate').value + '-------' + this.myFormUpdate.get('unitCostUpdate').value + '---' + this.myFormUpdate.get('totalCostUpdate').value
            + '------' + this.myFormUpdate.get('estimateUpdate').value + '-------' + this.myFormUpdate.get('consumptionUpdate').value
            + '--------' + this.myFormUpdate.get('observationUpdate').value + '-----' + this.myFormUpdate.get('liquidationUpdate').value + '------' + this.myFormUpdate.get('billUpdate').value);
    };
    MasterWarehousesOutComponent.prototype.updateWarehousesOut = function () {
        var _this = this;
        console.log('DAISLJKSL');
        if (Number(this.selectedCustomerUpdate) !== 0 && Number(this.selectedBranchOfficeUpdate) !== 0 && Number(this.selectedTechnicianUpdate) !== 0) {
            console.log('DAISLJKSL');
            this.submitted = true;
            if (!this.myFormUpdate.invalid) {
                console.log('DAISLJKSL');
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                console.log(this.selectedCustomerUpdate + '-- wec-- ' + this.selectedTechnicianUpdate + '----------' + this.selectedBranchOfficeUpdate
                    + '------' + this.myFormUpdate.get('quantityUpdate').value + '-------' + this.myFormUpdate.get('referenceUpdate').value
                    + '------' + this.myFormUpdate.get('descriptionsUpdate').value + '-------' + this.myFormUpdate.get('unitCostUpdate').value + '---' + this.myFormUpdate.get('totalCostUpdate').value
                    + '------' + this.myFormUpdate.get('estimateUpdate').value + '-----' + this.myFormUpdate.get('controlUpdate').value, +'-------' + this.myFormUpdate.get('consumptionUpdate').value
                    + '--------' + this.myFormUpdate.get('observationUpdate').value + '-----' + this.myFormUpdate.get('liquidationUpdate').value + '------' + this.myFormUpdate.get('billUpdate').value);
                this.restService.updateWarehouseOut(this.idwarehousesout, this.selectedCustomerUpdate, this.selectedTechnicianUpdate, this.selectedBranchOfficeUpdate, this.myFormUpdate.get('quantityUpdate').value, this.myFormUpdate.get('referenceUpdate').value, this.myFormUpdate.get('descriptionsUpdate').value, this.myFormUpdate.get('controlUpdate').value, this.myFormUpdate.get('unitCostUpdate').value, this.myFormUpdate.get('totalCostUpdate').value, this.myFormUpdate.get('estimateUpdate').value, this.myFormUpdate.get('consumptionUpdate').value, this.myFormUpdate.get('observationUpdate').value)
                    .then(function (data) {
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Falla en la actualizacion',
                            text: 'Esta salida no se pudo actualizar',
                            type: 'error'
                        });
                    }
                    else {
                        console.log('Cambio');
                        console.log(resp.data.id);
                        document.getElementById('warehousesOutUpdateHide').click();
                        _this.getWarehousesOut();
                        sweetalert2_1.default({
                            title: 'Salida Actualizada',
                            type: 'success'
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
        else {
            console.log('DAISLJKSL');
            sweetalert2_1.default({
                title: 'Debe seleccionar todos los campos obligatorios',
                text: 'Debe seleccionar todos los campos obligatorios',
                type: 'error'
            });
        }
    };
    MasterWarehousesOutComponent.prototype.deleteWarehoueses = function (row) {
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
            if (willDelete.value) {
                _this.elementDelete = row;
                console.log(row);
                console.log(_this.elementDelete);
                sweetalert2_1.default.showLoading();
                _this.restService.deleteWarehousesOut(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Esta salida presenta problemas',
                            text: 'Esta salida no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        _this.getWarehousesOut();
                        sweetalert2_1.default({
                            title: 'salida eliminado',
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
    MasterWarehousesOutComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    MasterWarehousesOutComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    MasterWarehousesOutComponent.prototype.toggleExpandRow = function (row) {
        this.table.rowDetail.toggleExpandRow(row);
    };
    MasterWarehousesOutComponent.prototype.onDetailToggle = function (event) { };
    MasterWarehousesOutComponent.prototype.loadingData = function () {
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.getEstimateFiltersInitial();
    };
    MasterWarehousesOutComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        if (val === '') {
            console.log('vacio');
            this.filterIndicatorText = false;
            this.rowsTemp = this.rowStatic;
        }
        // this.filterIndicatorCheck = true;
        if (this.inactive === true || this.active === true) {
            this.rowsTemp = this.rowsTempCheck;
        }
        var temp = this.rowsTemp.filter(function (d) {
            return d.brand_description.toLowerCase().indexOf(val) !== -1 || !val;
        });
        if (val !== '') {
            this.filterIndicatorText = true;
            this.rowsTempText = temp;
        }
        // update the rows
        this.rowsClient = temp;
    };
    MasterWarehousesOutComponent.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    MasterWarehousesOutComponent.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    MasterWarehousesOutComponent.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    MasterWarehousesOutComponent.prototype.changeConsiderDate = function (event) {
        if (this.considerDate == true) {
            this.considerDate = false;
        }
        else {
            this.considerDate = true;
        }
        console.log('------');
        console.log(this.considerDate);
    };
    MasterWarehousesOutComponent.prototype.updateFilterActiveInactive = function (active) {
        var val = active;
        // filter our data
        if (this.filterIndicatorText === true) {
            this.rowsTemp = this.rowsTempText;
        }
        else {
            console.log('vacio por este lado');
            this.rowsTemp = this.rowStatic;
        }
        var temp = this.rowsTemp.filter(function (d) {
            return d.status.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        if (this.inactive === true || this.active === true) {
            this.rowsTempCheck = temp;
            this.filterIndicatorCheck = true;
        }
        this.rowsClient = temp;
    };
    // Estos consumos es para la vista de aprobación
    MasterWarehousesOutComponent.prototype.selectEvent = function (item) {
        console.log('este es el item: ' + JSON.stringify(item));
        this.masterName = item.email;
        // masterName
        // do something with selected item
    };
    MasterWarehousesOutComponent.prototype.onChangeSearch = function (search) {
        console.log('search:' + JSON.stringify(search));
    };
    MasterWarehousesOutComponent.prototype.onFocused = function (e) {
        console.log('este es el e:' + +JSON.stringify(e));
    };
    MasterWarehousesOutComponent.prototype.upload = function () {
        var _this = this;
        this.uploadService.uploadFileForkliftUpdate3(this.blobGlobal).then(function (res) {
            console.log('que paso');
            console.log(_this.blobGlobal);
            console.log('s3info' + JSON.stringify(res));
            _this.s3info = res;
            console.log(_this.s3info);
            //this.insertNew();
        }).catch(function (error) {
            console.log(error);
            sweetalert2_1.default({
                type: 'error',
                title: 'oops a currido un error',
                text: error,
                allowOutsideClick: false
            });
        });
    };
    MasterWarehousesOutComponent.prototype.showCheckItems = function (row) {
        var rowCurrent = row;
        this.estimateCurrent = row;
        //this.getEstimatePartsApproval(rowCurrent.id);
        this.checkAllPart = false;
        this.checkAllWorkForce = false;
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        // this.getEstimateWorkforceApproval(rowCurrent.id);
        //this.checkItemsApprove(rowCurrent);
        document.getElementById('showCheckItem').click();
        sweetalert2_1.default.close();
    };
    MasterWarehousesOutComponent.prototype.checkItemsApprove = function (row) {
        var rowCurrent = row;
    };
    MasterWarehousesOutComponent.prototype.getHeight = function (row, index) {
        return row.someHeight;
    };
    // ******************************************* 
    MasterWarehousesOutComponent.prototype.pp = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MasterWarehousesOutComponent.prototype.getImgFromUrl = function (logo_url, callback) {
        var img = new Image();
        img.src = logo_url;
        img.onload = function () {
            callback(img);
        };
    };
    MasterWarehousesOutComponent.prototype.getCustomer = function () {
        var _this = this;
        this.restService.getCustomer().then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.customers = resp.data;
            // this.rowsClient = resp.data;
            // this.rowStatic =  resp.data;
            // this.rowsTemp = resp.data;
            // console.log( this.rowsClient);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterWarehousesOutComponent.prototype.getForklifs = function () {
        var _this = this;
        if (this.selectedBusinessId != 0) {
            this.forkliftService.getForkliftsCustomerFull(this.selectedBusinessId).then(function (data) {
                var resp = data;
                console.log(data);
                sweetalert2_1.default.close();
                _this.forklifts = resp.data;
                // this.rowsClient = resp.data;
                // this.rowStatic =  resp.data;
                // this.rowsTemp = resp.data;
                // console.log( this.rowsClient);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    MasterWarehousesOutComponent.prototype.partChange = function (event, item) {
        console.log('valor para editar');
        console.log(event.target.value);
        console.log(item);
        console.log(item.id);
        for (var i = 0; i < this.itemsPart.length; i++) {
            if (this.itemsPart[i].id == item.id) {
                console.log(item);
                console.log('lo encontre' + i);
                if (event.target.value != '' && event.target.value != 0) {
                    this.itemsPart[i].quantity = event.target.value;
                    console.log(this.itemsPart[i]);
                }
                else {
                    sweetalert2_1.default({
                        title: 'Error',
                        text: 'Las cantidades deben ser diferentes a 0',
                        type: 'error'
                    });
                }
            }
        }
    };
    MasterWarehousesOutComponent.prototype.workForceChange = function (event, item) {
        console.log('valor para editar');
        console.log(event.target.value);
        console.log(item);
        console.log(item.id);
        for (var i = 0; i < this.itemsWorkforce.length; i++) {
            if (this.itemsWorkforce[i].id == item.id) {
                console.log(item);
                console.log('lo encontre' + i);
                if (event.target.value != '' && event.target.value != 0) {
                    this.itemsWorkforce[i].quantity = event.target.value;
                    console.log(this.itemsWorkforce[i]);
                }
                else {
                    sweetalert2_1.default({
                        title: 'Error',
                        text: 'Las cantidades deben ser diferentes a 0',
                        type: 'error'
                    });
                }
            }
        }
    };
    MasterWarehousesOutComponent.prototype.workForceChangeActive = function (event, item) {
        console.log('valor para editar');
        console.log(event);
        console.log(item);
        console.log(item.id);
        for (var i = 0; i < this.itemsWorkforce.length; i++) {
            if (this.itemsWorkforce[i].id == item.id) {
                console.log(item);
                console.log('lo encontre' + i);
                this.itemsWorkforce[i].active = event.target.checked;
                console.log(this.itemsWorkforce[i]);
            }
        }
    };
    MasterWarehousesOutComponent.prototype.partChangeActive = function (event, item) {
        console.log('valor para editar');
        console.log(event);
        console.log(item);
        console.log(item.id);
        for (var i = 0; i < this.itemsPart.length; i++) {
            if (this.itemsPart[i].id == item.id) {
                console.log(item);
                console.log('lo encontre' + i);
                this.itemsPart[i].active = event.target.checked;
                console.log(this.itemsPart[i]);
            }
        }
    };
    MasterWarehousesOutComponent.prototype.onChangeCode = function (event) {
        console.log(event);
        this.checkHideCode = event.target.checked;
        console.log('este es el evento para chekear eso');
    };
    MasterWarehousesOutComponent.prototype.checkUncheckAllWorkforce = function (event) {
        this.checkAllWorkForce = event.target.checked;
        for (var i = 0; i < this.itemsWorkforce.length; i++) {
            console.log('lo encontre' + i);
            this.itemsWorkforce[i].active = event.target.checked;
        }
    };
    MasterWarehousesOutComponent.prototype.checkUncheckAllPart = function (event) {
        this.checkAllPart = event.target.checked;
        for (var i = 0; i < this.itemsPart.length; i++) {
            console.log('lo encontre' + i);
            this.itemsPart[i].active = event.target.checked;
        }
    };
    MasterWarehousesOutComponent.prototype.getEstimateFilters = function () {
        var _this = this;
        if (this.considerDate == false && this.selectedBusinessId == 0 && this.selectedBranchId == 0 &&
            this.selectedUserId == 0 && this.selectedForkliftId == 0 && this.referenceChecklist.length == 0
            && this.descriptionChecklist.length == 0 && this.controlChecklist.length == 0 && this.estimateChecklist.length == 0
            && this.liquidationChecklist.length == 0 && this.billChecklist.length == 0) {
            sweetalert2_1.default({
                title: 'Importante',
                text: 'Debes seleccionar por lo menos uno de los filtros o activar casilla para tener en cuenta las fechas',
                type: 'error'
            });
        }
        else {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var params = '';
            var cont = 0;
            if (this.considerDate) {
                // poner los 0
                var day = (this.fromDate.day < 10 ? '0' : '') + this.fromDate.day;
                // 01, 02, 03, ... 10, 11, 12
                var month = ((this.fromDate.month) < 10 ? '0' : '') + (this.fromDate.month);
                // 1970, 1971, ... 2015, 2016, ...
                var year = this.fromDate.year;
                // until poner los ceros
                var dayUntil = (this.untilDate.day < 10 ? '0' : '') + this.untilDate.day;
                // 01, 02, 03, ... 10, 11, 12
                var monthUntil = ((this.untilDate.month) < 10 ? '0' : '') + (this.untilDate.month);
                // 1970, 1971, ... 2015, 2016, ...
                var yearUntil = this.untilDate.year;
                var fromD = year + '-' + month + '-' + day;
                var untilD = yearUntil + '-' + monthUntil + '-' + dayUntil;
                //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
                // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
                params = 'from_date=' + fromD + ' 00:00:00' + '&&' + 'to_date=' + untilD + ' 23:59:59';
                cont++;
            }
            if (this.selectedBusinessId != 0) {
                console.log('imprimir cont');
                console.log(cont);
                if (cont > 0) {
                    params = params + '&&customer_id=' + this.selectedBusinessId;
                }
                else {
                    params = params + 'customer_id=' + this.selectedBusinessId;
                    cont++;
                }
            }
            if (this.selectedBranchId !== 0) {
                if (cont > 0) {
                    params = params + '&&branch_offices_id=' + this.selectedBranchId;
                }
                else {
                    params = params + 'branch_offices_id=' + this.selectedBranchId;
                    cont++;
                }
            }
            if (this.selectedUserId !== 0) {
                if (cont > 0) {
                    params = params + '&&technician_id=' + this.selectedUserId;
                }
                else {
                    params = params + 'technician_id=' + this.selectedUserId;
                    cont++;
                }
            }
            if (this.selectedForkliftId != 0) {
                if (cont > 0) {
                    params = params + '&&forklift_id=' + this.selectedForkliftId;
                }
                else {
                    params = params + 'forklift_id=' + this.selectedForkliftId;
                    cont++;
                }
            }
            if (this.referenceList.length > 0) {
                if (cont > 0) {
                    params = params + '&&reference=' + this.referenceList;
                }
                else {
                    params = params + 'reference=' + this.referenceList;
                    cont++;
                }
            }
            if (this.descriptionList.length > 0) {
                if (cont > 0) {
                    params = params + '&&description=' + this.descriptionList;
                }
                else {
                    params = params + 'description=' + this.descriptionList;
                    cont++;
                }
            }
            if (this.controlList.length > 0) {
                if (cont > 0) {
                    params = params + '&&control=' + this.controlList;
                }
                else {
                    params = params + 'control=' + this.controlList;
                    cont++;
                }
            }
            if (this.estimateList.length > 0) {
                if (cont > 0) {
                    params = params + '&&estimateList=' + this.estimateList;
                }
                else {
                    params = params + 'estimateList=' + this.estimateList;
                    cont++;
                }
            }
            if (this.liquidationList.length > 0) {
                if (cont > 0) {
                    params = params + '&&settlement_text=' + this.liquidationList;
                }
                else {
                    params = params + 'settlement_text=' + this.liquidationList;
                    cont++;
                }
            }
            if (this.billList.length > 0) {
                if (cont > 0) {
                    params = params + '&&invoice_text=' + this.billList;
                }
                else {
                    params = params + 'invoice_text=' + this.billList;
                    cont++;
                }
            }
            console.log('.---------->' + params);
            this.restService.showWarehouseOutFilter(params).then(function (data) {
                var resp = data;
                console.log('info de filter');
                console.log(data);
                // this.customers  = resp.data;
                _this.rowsClient = resp.data;
                _this.rows = resp.data;
                sweetalert2_1.default.close();
                // this.rowStatic =  resp.data;
                // this.rowsTemp = resp.data;
                // console.log( this.rowsClient);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    MasterWarehousesOutComponent.prototype.getEstimateFiltersInitial = function () {
        var _this = this;
        var params = '';
        var cont = 0;
        var day = (this.fromDate.day < 10 ? '0' : '') + this.fromDate.day;
        // 01, 02, 03, ... 10, 11, 12
        var month = ((this.fromDate.month) < 10 ? '0' : '') + (this.fromDate.month);
        // 1970, 1971, ... 2015, 2016, ...
        var year = this.fromDate.year;
        // until poner los ceros
        var dayUntil = (this.untilDate.day < 10 ? '0' : '') + this.untilDate.day;
        // 01, 02, 03, ... 10, 11, 12
        var monthUntil = ((this.untilDate.month) < 10 ? '0' : '') + (this.untilDate.month);
        // 1970, 1971, ... 2015, 2016, ...
        var yearUntil = this.untilDate.year;
        var fromD = year + '-' + month + '-' + day;
        var untilD = yearUntil + '-' + monthUntil + '-' + dayUntil;
        //  var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
        //  var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
        params = 'from_date=' + fromD + ' 00:00:00' + '&&' + 'to_date=' + untilD + ' 23:59:59';
        console.log('.---------->' + params);
        //this.restService.showWarehouseOutFilter
        this.estimateService.showEstimateFilter(params).then(function (data) {
            var resp = data;
            console.log('info de filter');
            console.log(data);
            sweetalert2_1.default.close();
            _this.rowsClient = resp.data;
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterWarehousesOutComponent.prototype.ole = function () {
        console.log(this.modelPorpup);
    };
    MasterWarehousesOutComponent.prototype.getCustomersForklift = function (idCustomer) {
        var _this = this;
        this.forkliftService.getForkliftsCustomer(idCustomer).then(function (data) {
            var resp = data;
            console.log('forklifts');
            console.log(data);
            sweetalert2_1.default.close();
            _this.rowsClient = resp.data;
            _this.rowStatic = resp.data;
            _this.rowsTemp = resp.data;
            console.log(_this.rowsClient);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterWarehousesOutComponent.prototype.getBranchOfficeForklift = function (idBranch) {
        var _this = this;
        this.forkliftService.getForkliftsBranch(idBranch).then(function (data) {
            var resp = data;
            console.log('forklifts branch');
            console.log(data);
            sweetalert2_1.default.close();
            _this.rowsClient = resp.data;
            _this.rowStatic = resp.data;
            _this.rowsTemp = resp.data;
            console.log(_this.rowsClient);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterWarehousesOutComponent.prototype.getCustomerOffice = function () {
        var _this = this;
        console.log(this.selectedBusinessId);
        this.getCustomersForklift(this.selectedBusinessId);
        this.restService.getCustomerOffice(this.selectedBusinessId).then(function (data) {
            var resp = data;
            console.log('ole ole');
            console.log(resp);
            _this.customerOffices = resp.data_branchoffices;
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
    };
    // getOfficeForklift() {
    // this.getBranchOfficeForklift(this.selectedOfficeId);
    //}
    MasterWarehousesOutComponent.prototype.onChangeCreate = function (check) {
        this.change = check;
        console.log(check);
    };
    MasterWarehousesOutComponent.prototype.selectReference = function (item) {
        console.log(item);
        console.log(item.isSelected);
        console.log(this.referenceList.indexOf(item.reference));
        var select = item.isSelected;
        var position = this.referenceList.indexOf(item.reference);
        if (select) {
            this.referenceList.push(item.reference);
        }
        else {
            this.referenceList.splice(position, 1);
        }
        console.log(this.referenceList);
    };
    MasterWarehousesOutComponent.prototype.selectDescription = function (item) {
        console.log(item);
        console.log(item.isSelected);
        console.log(this.descriptionList.indexOf(item.description));
        var select = item.isSelected;
        var position = this.descriptionList.indexOf(item.description);
        if (select) {
            this.descriptionList.push(item.description);
        }
        else {
            this.descriptionList.splice(position, 1);
        }
        console.log(this.descriptionList);
    };
    MasterWarehousesOutComponent.prototype.selectControl = function (item) {
        console.log(item);
        console.log(item.isSelected);
        console.log(this.controlList.indexOf(item.control));
        var select = item.isSelected;
        var position = this.controlList.indexOf(item.control);
        if (select) {
            this.controlList.push(item.control);
        }
        else {
            this.controlList.splice(position, 1);
        }
        console.log(this.controlList);
    };
    MasterWarehousesOutComponent.prototype.selectEstimate = function (item) {
        console.log(item);
        console.log(item.isSelected);
        console.log(this.estimateList.indexOf(item.order_number));
        var select = item.isSelected;
        var position = this.estimateList.indexOf(item.order_number);
        if (select) {
            this.estimateList.push(item.order_number);
        }
        else {
            this.estimateList.splice(position, 1);
        }
        console.log(this.estimateList);
    };
    MasterWarehousesOutComponent.prototype.selectLiquidation = function (item) {
        console.log(item);
        console.log(item.isSelected);
        console.log(this.liquidationList.indexOf(item.settlement_text));
        var select = item.isSelected;
        var position = this.liquidationList.indexOf(item.settlement_text);
        if (select) {
            this.liquidationList.push(item.settlement_text);
        }
        else {
            this.liquidationList.splice(position, 1);
        }
        console.log(this.liquidationList);
    };
    MasterWarehousesOutComponent.prototype.selectBill = function (item) {
        console.log(item);
        console.log(item.isSelected);
        console.log(this.billList.indexOf(item.invoice_text));
        var select = item.isSelected;
        var position = this.billList.indexOf(item.invoice_text);
        if (select) {
            this.billList.push(item.invoice_text);
        }
        else {
            this.billList.splice(position, 1);
        }
        console.log(this.billList);
    };
    MasterWarehousesOutComponent.prototype.onChangeUpdate = function (check) {
        this.switchUpdate = check;
        this.enabledUpdated = check;
        console.log(check);
    };
    MasterWarehousesOutComponent.prototype.getUser = function () {
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
    MasterWarehousesOutComponent.prototype.onChangeActive = function (d) {
        var indice;
        if (this.active === false) {
            this.active = true;
            if (this.inactive === true) {
                indice = '';
            }
            else {
                indice = '0';
            }
            this.updateFilterActiveInactive(indice);
        }
        else {
            this.active = false;
            if (this.inactive === true) {
                indice = '1';
            }
            else {
                indice = '';
            }
            this.updateFilterActiveInactive(indice);
        }
    };
    MasterWarehousesOutComponent.prototype.updateEstimate = function (row) {
        console.log(row);
        this.router.navigateByUrl('maintenance/estimateCustomerUpdate/' + row.id);
    };
    MasterWarehousesOutComponent.prototype.copyEstimateProcess = function (row) {
        var _this = this;
        console.log(row);
        // this.router.navigateByUrl('master/estimateCustomerCopy/'+row.id);
        this.loadingData();
        this.estimateService.copyEstimate(row.id).then(function (data) {
            var resp = data;
            console.log(resp);
            if (resp.success === false) {
                sweetalert2_1.default({
                    text: 'Esta cotizacion presenta problemas para copiar',
                    type: 'error'
                });
            }
            else {
                _this.loadingData();
                sweetalert2_1.default({
                    title: 'Cotización creada',
                    type: 'success'
                });
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterWarehousesOutComponent.prototype.onChangeInactive = function (d) {
        var indice;
        if (this.inactive === false) {
            this.inactive = true;
            if (this.active === true) {
                indice = '';
            }
            else {
                indice = '1';
            }
            this.updateFilterActiveInactive(indice);
        }
        else {
            this.inactive = false;
            if (this.active === true) {
                indice = '0';
            }
            else {
                indice = '';
            }
            this.updateFilterActiveInactive(indice);
        }
    };
    MasterWarehousesOutComponent.prototype.updateForklift = function (forklift) {
        console.log(forklift);
        this.router.navigateByUrl('maintenance/forkliftUpdate/' + forklift.id);
    };
    MasterWarehousesOutComponent.prototype.sendBrand = function () {
        var _this = this;
        console.log(localStorage.getItem('token'));
        this.submitted = true;
        if (!this.myForm.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var statusTemp = 0;
            if (this.enabledUpdated === true) {
                statusTemp = 0;
            }
            else {
                statusTemp = 1;
            }
            this.restService.createBrand(this.myForm.get('description').value.toUpperCase(), statusTemp).then(function (data) {
                var resp = data;
                console.log(resp);
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Este equipo ya esta registrado',
                        text: 'Este equipo no se puede registrar',
                        type: 'error'
                    });
                }
                else {
                    _this.myForm.get('description').setValue('');
                    /*swal({
                     title: 'equipo agregada',
                     type: 'success'
                    });*/
                    //   this.router.navigateByUrl('master/registerBrand');
                    document.getElementById('createBrandHide').click();
                    _this.loadingData();
                    sweetalert2_1.default({
                        title: 'equipo agregado',
                        type: 'success'
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    MasterWarehousesOutComponent.prototype.sendUpdateBrand = function () {
        var _this = this;
        console.log(this.myFormUpdate.get('descriptionUpdate'));
        console.log(localStorage.getItem('token'));
        this.submitted = true;
        if (!this.myFormUpdate.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var statusTemp = 1;
            if (this.enabledUpdated === true) {
                statusTemp = 0;
            }
            else {
                statusTemp = 1;
            }
            console.log(this.myFormUpdate.get('descriptionUpdate').value.toUpperCase() + ' ' + statusTemp);
            this.restService.updateBrand(Number(this.currentBrand.id), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(), statusTemp)
                .then(function (data) {
                var resp = data;
                console.log(resp);
                if (resp.success === false) {
                    sweetalert2_1.default({
                        title: 'Esta equipo ya esta actualizado',
                        text: 'Esta equipo no se puede actualizar',
                        type: 'error'
                    });
                }
                else {
                    // this.router.navigateByUrl('master/registerBrand');
                    document.getElementById('updateBrandHide').click();
                    _this.loadingData();
                    sweetalert2_1.default({
                        title: 'equipo actualizado',
                        type: 'success'
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    Object.defineProperty(MasterWarehousesOutComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterWarehousesOutComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    MasterWarehousesOutComponent.prototype.copyEstimate = function (row) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Estás seguro que deseas copiar la cotización número ' + row.estimate_consecutive + ' ?',
            // text: 'Once deleted, you will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: 'No',
            confirmButtonText: 'Si'
        })
            .then(function (willDelete) {
            if (willDelete.value) {
                _this.copyEstimateProcess(row);
            }
            else {
                // swal('Fail');
            }
            console.log(willDelete);
        });
    };
    MasterWarehousesOutComponent.prototype.showForklift = function (forklift) {
        console.log(forklift);
        this.router.navigateByUrl('maintenance/forkliftShow/' + forklift.id);
    };
    MasterWarehousesOutComponent.prototype.sendForklift = function () {
        this.router.navigateByUrl('/maintenance/registerForklift');
    };
    MasterWarehousesOutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columns.forEach(function (col) {
            var colWidth = _this.columnWidths.find(function (colWidth) { return colWidth.column === col.prop; });
            if (colWidth) {
                col.width = colWidth.width;
            }
        });
    };
    MasterWarehousesOutComponent.prototype.blockAgents = function (vadr) {
        console.log('----------------');
        console.log(vadr);
    };
    MasterWarehousesOutComponent.prototype.showEstimateLink = function (row) {
        console.log('EL NUEVO VALOR');
        console.log(row);
    };
    MasterWarehousesOutComponent.prototype.clearFilter = function () {
        console.log(this.fromDate);
    };
    MasterWarehousesOutComponent.prototype.onDateSelectionFrom = function (date) {
        if (this.untilDate) {
            var fromD = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day); //31 de diciembre de 2015
            var untilD = new Date(this.untilDate.year, this.untilDate.month, this.untilDate.day);
            console.log(this.fromDate.day);
            if (fromD > untilD) {
                console.log('es mayor');
                this.untilDate = this.fromDate;
            }
        }
    };
    MasterWarehousesOutComponent.prototype.rejectEstimateFinal = function () {
        var _this = this;
        this.estimateService.updateEstimateStatus(this.estimateCurrent.id, 5).then(function (data) {
            var resp = data;
            console.log('envio');
            console.log(resp);
            document.getElementById('hideRejection').click();
            _this.getEstimateFiltersInitial();
            sweetalert2_1.default({
                title: 'cotización rechazada',
                type: 'success'
            });
        }).catch(function (error) {
            console.log(error);
            sweetalert2_1.default.close();
        });
    };
    MasterWarehousesOutComponent.prototype.onDateSelectionUntil = function (date) {
        var fromD = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day); //31 de diciembre de 2015
        var untilD = new Date(this.untilDate.year, this.untilDate.month, this.untilDate.day);
        if (untilD < fromD) {
            console.log('es mayor');
            this.fromDate = this.untilDate;
        }
    };
    Object.defineProperty(MasterWarehousesOutComponent.prototype, "getEmails", {
        get: function () {
            return this.detailform.get('emails');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterWarehousesOutComponent.prototype, "getNames", {
        get: function () {
            return this.detailform.get('names');
        },
        enumerable: true,
        configurable: true
    });
    MasterWarehousesOutComponent.prototype.addEmail = function () {
        console.log('este es el valor de email: ' + this.masterEmail);
        if (this.validateEmail(this.masterEmail)) {
            this.emailSend = {
                email: this.masterEmail,
                contact: this.masterName
            };
            this.emailsSend.push(this.emailSend);
            this.masterEmail = '';
            this.masterName = '';
        }
        else {
            sweetalert2_1.default({
                text: 'Debe ingresar un correo electrónico valido',
                type: 'error'
            });
        }
    };
    MasterWarehousesOutComponent.prototype.validateEmail = function (email) {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email) ? true : false;
    };
    MasterWarehousesOutComponent.prototype.storageDetail = function (formValue) {
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        var emails = formValue.emails;
        var names = formValue.name;
        var subject = formValue.subject;
        var comment = formValue.comment;
        console.log('info');
        console.log(subject);
        console.log(comment);
        console.log("parte");
        console.log(emails[0].email);
        if ((emails[0].email != null) && (emails[0].email != "") && (comment != null) && (comment != "") && (subject != null) && (subject != "")) {
            console.log((emails));
            var array_1 = "";
            emails.forEach(function (email) {
                if (email.email != null) {
                    array_1 += email.email + "<br><br>";
                }
            });
            console.log(array_1);
            var arrayNames = "";
            names.forEach(function (name) {
                if (name.name != null) {
                    array_1 += name.name + "<br><br>";
                }
            });
            console.log('este es el array  de los  names');
            console.log(arrayNames);
            /* this.workservice.storeWorkDetail(this.headerinfo.id,comment,array,subject).then(data=>{
               const resp:any=data;
               console.log(data);
               console.log(resp);
               if (resp.success==1) {
                 this.generalAlert('Proceso exitoso','Se ha guardado el detalle correctamente','success');
                //  this.getWorkDetails();
                
                 document.getElementById('storageDetailHide').click();emailDetailHide
               } else {
                 this.generalAlert('No se puede guardar','Ha ocurrido un error en la ejecucion','error');
               }
         
             }).catch(error=>{
               console.log(error);
               this.generalAlert('No se puede guardar','Ha ocurrido un error en la ejecucion','error')
             });*/
            this.resetCreateForm();
        }
        else {
            this.generalAlert('No se puede guardar', 'Debe Completar todos los campos obligatorios', 'error');
        }
    };
    MasterWarehousesOutComponent.prototype.resetCreateForm = function () {
        this.detailform.reset();
        for (var index = this.indice; index > 0; index--) {
            var control = this.detailform.controls['emails'];
            control.removeAt(index);
            this.indice--;
        }
    };
    MasterWarehousesOutComponent.prototype.deleteEmail = function (index) {
        /* const control =<FormArray>this.detailform.controls['emails'];
         control.removeAt(index);
         this.indice--;*/
        this.emailsSend.splice(index);
    };
    MasterWarehousesOutComponent.prototype.generalAlert = function (title, message, type) {
        sweetalert2_1.default({
            title: title,
            text: message,
            type: type
        });
    };
    MasterWarehousesOutComponent.prototype.finalApproval = function () {
        var _this = this;
        this.itemsFinalApproval = [];
        for (var i = 0; i < this.itemsPart.length; i++) {
            console.log('lo encontre' + i);
            if (this.itemsPart[i].active) {
                this.itemsFinalApproval.push(this.itemsPart[i]);
            }
        }
        for (var i = 0; i < this.itemsWorkforce.length; i++) {
            console.log('lo encontre' + i);
            if (this.itemsWorkforce[i].active) {
                this.itemsFinalApproval.push(this.itemsWorkforce[i]);
            }
        }
        var valuesApproval = '';
        for (var i = 0; i < this.itemsFinalApproval.length; i++) {
            valuesApproval = valuesApproval + this.itemsFinalApproval[i].id + '@' + this.itemsFinalApproval[i].quantity + '@';
        }
        console.log('items aprobados de cotizacion ' + this.estimateCurrent);
        console.log(this.itemsFinalApproval);
        console.log(valuesApproval);
        if (valuesApproval != '') {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            this.estimateService.approveEstimateDetails(valuesApproval).then(function (data) {
                var resp = data;
                console.log('envio autorización');
                console.log(resp);
                //---------------------------
                _this.estimateService.updateEstimateStatus(_this.estimateCurrent.id, 2).then(function (data) {
                    var resp = data;
                    console.log('envio');
                    console.log(resp);
                    document.getElementById('hideCheckItem').click();
                    _this.getEstimateFiltersInitial();
                    sweetalert2_1.default({
                        title: 'cotización aprobada',
                        type: 'success'
                    });
                }).catch(function (error) {
                    console.log(error);
                    sweetalert2_1.default.close();
                });
                // ----------------------------
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
    MasterWarehousesOutComponent.prototype.rejectQuote = function () {
    };
    __decorate([
        core_1.ViewChild('myTable'),
        __metadata("design:type", Object)
    ], MasterWarehousesOutComponent.prototype, "table", void 0);
    MasterWarehousesOutComponent = MasterWarehousesOutComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-master-warehouses-out',
            templateUrl: './master-warehouses-out.component.html',
            styleUrls: ['./master-warehouses-out.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss'],
            providers: [I18n, { provide: ng_bootstrap_1.NgbDatepickerI18n, useClass: MasterWarehousesOutComponent_1 }]
        }),
        __metadata("design:paramtypes", [rest_service_1.RestService, I18n, router_1.Router, estimate_service_1.EstimateService, forklift_service_1.ForkliftService,
            ng_bootstrap_1.NgbCalendar, ng_bootstrap_1.NgbDateParserFormatter, user_service_1.UserService, upload_service_1.UploadService, forms_1.FormBuilder])
    ], MasterWarehousesOutComponent);
    return MasterWarehousesOutComponent;
    var MasterWarehousesOutComponent_1;
}());
exports.MasterWarehousesOutComponent = MasterWarehousesOutComponent;
//# sourceMappingURL=master-warehouses-out.component.js.map