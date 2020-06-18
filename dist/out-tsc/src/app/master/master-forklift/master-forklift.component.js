"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_color_picker_1 = require("ngx-color-picker");
var rest_service_1 = require("../../master-services/Rest/rest.service");
var sweetalert2_1 = require("sweetalert2");
var router_1 = require("@angular/router");
var upload_service_1 = require("../../master-services/services/upload.service");
var angular2_uuid_1 = require("angular2-uuid");
var work_service_1 = require("../../master-services/Work/work.service");
// import { View,EventSettingsModel } from "@syncfusion/ej2-angular-schedule";
// import { DatePipe } from "@angular/common";
var I18N_VALUES = {
    'fr': {
        weekdays: ['Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb', 'Dom'],
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
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
var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
var now = new Date();
var Cmyk = /** @class */ (function () {
    function Cmyk(c, m, y, k) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
    return Cmyk;
}());
exports.Cmyk = Cmyk;
var MasterForkliftComponent = /** @class */ (function (_super) {
    __extends(MasterForkliftComponent, _super);
    function MasterForkliftComponent(_i18n, restService, router, uploadService, parserFormatter, calendar, cpService, workService) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        _this.restService = restService;
        _this.router = router;
        _this.uploadService = uploadService;
        _this.parserFormatter = parserFormatter;
        _this.calendar = calendar;
        _this.cpService = cpService;
        _this.workService = workService;
        // @Input() currentDateRoutines: Array <currentDateInterface> = [];
        _this.datesSelected = [];
        _this.currentDateRoutines = [];
        _this.nothingToshowText = 'Nothing to show'; // "By default" => There are no events scheduled that day. 
        _this.colors = {
            red: {
                primary: '#ad2121',
                secondary: '#FAE3E3'
            },
            yellow: {
                primary: '#e3bc08',
                secondary: '#FDF1BA'
            }
        };
        _this.actions = [
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                name: 'delete'
            },
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                name: 'edit'
            }
        ];
        _this.events = [
            {
                start: new Date(),
                end: new Date(),
                title: 'title event 1',
                color: _this.colors.red,
                actions: _this.actions
            },
            {
                start: new Date(),
                end: new Date(),
                title: 'title event 2',
                color: _this.colors.yellow,
                actions: _this.actions
            }
        ];
        _this.viewDate = new Date();
        _this.themecolor = '#0a5ab3';
        _this.selectedOfficeId = 0;
        _this.selectedBrandId = 0;
        _this.selectedBusinessId = 0;
        _this.selectedMachineId = 0;
        _this.selectedFuelId = 0;
        _this.selectedtyreId = 0;
        _this.selectedModelId = 0;
        _this.selectedRoutineId = 0;
        _this.tooglecalendar = false;
        _this.switchAlarm = true;
        _this.switchStatus = true;
        _this.switchCreate = true;
        _this.switchUpdate = true;
        _this.submitted = false;
        _this.selectedFiles = [];
        _this.myDate = new Date();
        // year=parseInt(this.datePipe.transform(this.myDate,'yyyy'))+1;
        // month=parseInt(this.datePipe.transform(this.myDate,'MM'));
        // day=parseInt(this.datePipe.transform(this.myDate,'dd'));
        // public setDate:Date=new Date(this.year,this.day,this.month);
        _this.name = 'Angular 4';
        _this.urls = [];
        _this.displayMonths = 1;
        _this.navigation = 'select';
        _this.disabled = true;
        _this.toggle = false;
        _this.color = '#2889e9';
        _this.color2 = 'hsla(300,82%,52%)';
        _this.color3 = '#fff500';
        _this.color4 = 'rgb(236,64,64)';
        _this.color5 = 'rgba(45,208,45,1)';
        _this.color13 = 'rgba(0, 255, 0, 0.5)';
        _this.color14 = 'rgb(0, 255, 255)';
        _this.color15 = '#a51ad633';
        _this.basicColor = '#4099ff';
        _this.showColorCode = '#db968d';
        _this.showColorCodeHSAL = 'hsl(149,27%,65%)';
        _this.showColorCodeRGBA = 'rgb(221,14,190)';
        _this.changeMeColor = '#523698';
        _this.arrayColors = {};
        _this.selectedColor = 'color';
        _this.modelDisabled = {
            year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()
        };
        _this.cmyk = new Cmyk(0, 0, 0, 0);
        _this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        _this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        _this.isFrom = function (date) { return equals(date, _this.fromDate); };
        _this.isTo = function (date) { return equals(date, _this.toDate); };
        _this.loadingData();
        var customer = new forms_1.FormControl('', forms_1.Validators.required);
        var office = new forms_1.FormControl('', forms_1.Validators.required);
        var series = new forms_1.FormControl('', forms_1.Validators.required);
        var description = new forms_1.FormControl('', forms_1.Validators.required);
        var brand = new forms_1.FormControl('', forms_1.Validators.required);
        var model = new forms_1.FormControl('', forms_1.Validators.required);
        var machine = new forms_1.FormControl('', forms_1.Validators.required);
        var fuel = new forms_1.FormControl('', forms_1.Validators.required);
        var tyre = new forms_1.FormControl('', forms_1.Validators.required);
        var tyreForward = new forms_1.FormControl('');
        var tyreSBack = new forms_1.FormControl('');
        var tonne = new forms_1.FormControl('', forms_1.Validators.required);
        var hoistedMast = new forms_1.FormControl('', forms_1.Validators.required);
        var contractedMast = new forms_1.FormControl('', forms_1.Validators.required);
        var startTime = new forms_1.FormControl('');
        var currentTime = new forms_1.FormControl('');
        var routine = new forms_1.FormControl('', forms_1.Validators.required);
        var observation = new forms_1.FormControl('');
        _this.myForm = new forms_1.FormGroup({
            customer: customer,
            office: office,
            series: series,
            description: description,
            brand: brand,
            model: model,
            machine: machine,
            fuel: fuel,
            tyre: tyre,
            tyreForward: tyreForward,
            tyreSBack: tyreSBack,
            tonne: tonne,
            hoistedMast: hoistedMast,
            contractedMast: contractedMast,
            startTime: startTime,
            currentTime: currentTime,
            routine: routine,
            observation: observation
        });
        return _this;
    }
    MasterForkliftComponent_1 = MasterForkliftComponent;
    MasterForkliftComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    MasterForkliftComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    MasterForkliftComponent.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    MasterForkliftComponent.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    MasterForkliftComponent.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    MasterForkliftComponent.prototype.getDayAriaLabel = function (date) {
        return date.day + "-" + date.month + "-" + date.year;
    };
    MasterForkliftComponent.prototype.eventClicked = function (event) {
        console.log(event);
    };
    MasterForkliftComponent.prototype.actionClicked = function (event) {
        console.log('action', event.action);
        console.log('event', event.event);
    };
    MasterForkliftComponent.prototype.sendBrand = function () {
        this.submitted = true;
    };
    MasterForkliftComponent.prototype.toggleCalendar = function () {
        if (this.selectedRoutineId.valueOf() == 3) {
            this.tooglecalendar = true;
            this.datesSelected = [];
            this.currentDateRoutines = [];
        }
        else {
            this.tooglecalendar = false;
        }
    };
    MasterForkliftComponent.prototype.onChangeGenerateAlarms = function (check) {
        this.generateAlarms = check;
        console.log(check);
    };
    MasterForkliftComponent.prototype.onChangeActive = function (check) {
        this.active = check;
        console.log(check);
    };
    MasterForkliftComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.restService.getCustomer().then(function (data) {
            var resp = data;
            console.log(data);
            _this.customers = resp.data;
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
        this.restService.getBrands().then(function (data) {
            var resp = data;
            console.log(data);
            _this.brands = resp.data;
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
        this.restService.getMachines().then(function (data) {
            var resp = data;
            console.log(data);
            _this.machines = resp.data;
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
        this.restService.getFuels().then(function (data) {
            var resp = data;
            console.log(data);
            _this.fuels = resp.data;
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
        this.restService.getTyres().then(function (data) {
            var resp = data;
            console.log(data);
            _this.tyres = resp.data;
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterForkliftComponent.prototype.getCustomerOffice = function () {
        var _this = this;
        console.log(this.selectedBusinessId);
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
    MasterForkliftComponent.prototype.change = function (value) {
        this.datesSelected = value;
    };
    MasterForkliftComponent.prototype.getCustomerModel = function () {
        var _this = this;
        console.log(this.selectedBusinessId);
        this.restService.getBrandModels(this.selectedBrandId).then(function (data) {
            var resp = data;
            console.log(data);
            _this.models = resp.data_models;
            sweetalert2_1.default.close();
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterForkliftComponent.prototype.preview = function (files) {
        var _this = this;
        console.log(files);
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
    /*upload() {
     const file = this.selectedFiles.item(0);
     const uuid = UUID.UUID();
     console.log(uuid);
     console.log(file.name + '' + file.type);
     const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
     console.log(extension);
     this.uploadService.uploadFile(file);
    }*/
    MasterForkliftComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
        console.log(this.selectedFiles);
    };
    MasterForkliftComponent.prototype.sendForklift = function () {
        var _this = this;
        console.log('Ole ole ole');
        // "Cannot add or update a child row: a foreign key constraint fails 
        // (`witupco_master`.`forklift`, CONSTRAINT `fk_fork_lift_model_id` FOREIGN KEY 
        //  (`model_id`) REFERENCES `fuel` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION)"
        console.log();
        if (Number(this.selectedOfficeId) !== 0 && Number(this.selectedBrandId) !== 0
            && Number(this.selectedBusinessId) !== 0 && Number(this.selectedMachineId) !== 0
            && Number(this.selectedModelId) !== 0 && Number(this.selectedModelId) !== 0
            && Number(this.selectedFuelId) !== 0 && Number(this.selectedtyreId) !== 0) {
            console.log('Ole ole ole');
            this.submitted = true;
            console.log(this.myForm.invalid);
            if (!this.myForm.invalid) {
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                var generateAlarmTemp = 0;
                console.log(this.switchUpdate);
                if (this.switchUpdate === true) {
                    generateAlarmTemp = 0;
                }
                else {
                    generateAlarmTemp = 1;
                }
                var activeTemp = 0;
                console.log(this.switchUpdate);
                if (this.switchUpdate === true) {
                    activeTemp = 0;
                }
                else {
                    activeTemp = 1;
                }
                console.log(this.myForm.get('series').value + ',' +
                    this.selectedBusinessId + ',' + this.selectedOfficeId + ',' + this.myForm.get('description').value.toUpperCase() + ',' +
                    this.selectedBrandId + ',' + 0 + ',' + this.selectedModelId + ',' + this.selectedMachineId + ',' + this.selectedtyreId + ',' +
                    this.selectedFuelId);
                /*serie: string,
                    customer_id: number,
                    branch_offices_id: number,
                    description: string,
                    status: number,
                    brand_id: number,
                    model_id: number,
                    machine_id: number,
                    tyre_id: number,
                    tyreForward: number,
                    tyreSBack: number,
                    fuel_id: number,
                    routine_id: number,
                    tonne: number,
                    mastil_izado: number,
                    mastil_contract: number,
                    h_initial: number,
                    h_current: number,
                    alarm: number,
                    observation: string*/
                var status_1 = 0;
                var alarm = 0;
                if (this.switchAlarm === false) {
                    alarm = 1;
                }
                if (this.switchStatus === false) {
                    status_1 = 1;
                }
                this.restService.createforklift(this.myForm.get('series').value, this.selectedBusinessId, this.selectedOfficeId, this.myForm.get('description').value.toUpperCase(), status_1, this.selectedBrandId, this.selectedModelId, this.selectedMachineId, this.selectedtyreId, this.myForm.get('tyreForward').value, this.myForm.get('tyreSBack').value, this.selectedFuelId, this.selectedRoutineId, this.myForm.get('tonne').value, this.myForm.get('hoistedMast').value, this.myForm.get('contractedMast').value, this.myForm.get('startTime').value, this.myForm.get('currentTime').value, alarm, this.myForm.get('observation').value)
                    .then(function (data) {
                    var resp = data;
                    console.log('Informacion de montacarga');
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Este equipo ya se encuentra registrado',
                            text: 'La serie ya se encuentra registrada en otro equipo',
                            type: 'error'
                        });
                    }
                    else {
                        console.log('id montacarga ' + resp.data.id);
                        // En este caso se manda guardar las imagenes y rutinas
                        if (_this.tooglecalendar) {
                            _this.sendRoutinesForklift(resp.data.id);
                        }
                        if (_this.urls.length > 0) {
                            _this.upload(resp.data.id);
                        }
                        sweetalert2_1.default({
                            title: 'Equipo agregado',
                            type: 'success'
                        });
                        _this.router.navigateByUrl('/master/forkliftShow');
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
        else {
            console.log('Ole ole ole');
            sweetalert2_1.default({
                title: 'Debe seleccionar todos los campos obligatorios',
                text: 'Debe seleccionar todos los campos obligatorios',
                type: 'error'
            });
        }
    };
    MasterForkliftComponent.prototype.sendRoutinesForklift = function (idForlift) {
        for (var i = 0; i < this.currentDateRoutines.length; i++) {
            // 2019-09-19 17:04:12
            var day = this.datesSelected[i].day.toString();
            var month = this.datesSelected[i].month.toString();
            var year = this.datesSelected[i].year.toString();
            var routines = this.currentDateRoutines[i].item;
            if (day.toString().length < 2) {
                day = '0' + day.toString();
            }
            if (month.toString().length < 2) {
                month = '0' + month.toString();
            }
            var dateComplete = year.toString() + '-' + month.toString() + '-' + day.toString() + ' 00:00:00';
            //  console.log('fecha organizada');
            //  console.log(dateComplete);
            this.workService.storeWorkDetailForklift(routines, idForlift, dateComplete).then(function (data) {
                var resp = data;
                console.log(data);
                // swal.close();
                console.log(resp);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    MasterForkliftComponent.prototype.onChangeAlarm = function (check) {
        this.switchAlarm = check;
        console.log(check);
    };
    MasterForkliftComponent.prototype.onChangeStatus = function (check) {
        this.switchStatus = check;
        console.log(check);
    };
    MasterForkliftComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        var filesAmount = event.target.files.length;
        this.selectedFiles.push(event.target.files);
        console.log(this.selectedFiles[0]);
        var filename = event.target.files[event.target.files.length - 1].name;
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        console.log(allowedExtensions.exec(filename));
        var extFilename = filename.split('.').pop();
        if (extFilename === 'jpg' || extFilename === 'jpeg' || extFilename === 'png') {
            console.log(filename);
            console.log(this.urls);
            console.log(filesAmount);
            if (this.urls.length <= 2) {
                if (event.target.files && event.target.files[0]) {
                    for (var i = 0; i < filesAmount; i++) {
                        var reader = new FileReader();
                        reader.onload = function (event) {
                            console.log(event.target.result);
                            _this.urls.push(event.target.result);
                        };
                        reader.readAsDataURL(event.target.files[i]);
                    }
                }
            }
            else {
                sweetalert2_1.default({
                    title: 'El numero maximo de imagenes son 3',
                    text: 'No se pueden cargar mas de 3 imagenes',
                    type: 'error'
                });
            }
        }
        else {
            sweetalert2_1.default({
                title: 'El formato del archivo, no es correcto',
                text: 'Se permiten solo estas extensiones jpg, jpeg, png',
                type: 'error'
            });
        }
    };
    MasterForkliftComponent.prototype.ngOnInit = function () {
    };
    MasterForkliftComponent.prototype.selectToday = function () {
        this.modelPopup = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    MasterForkliftComponent.prototype.onDateChange = function (date) {
        console.log(date);
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    MasterForkliftComponent.prototype.deleteImage = function (i) {
        this.urls.splice(i - 1, 1);
    };
    MasterForkliftComponent.prototype.hasJobs = function (date) {
        for (var i = 0; i < this.customers.length; i++) {
            var taskDate = new Date(this.customers[i].due_date);
            var day = taskDate.getDate();
            var month = taskDate.getMonth() + 1;
            var year = taskDate.getFullYear();
            console.log(this.customers[i].due_date);
            if (day === date.day && month === date.month && year === date.year) {
                return true;
            }
        }
    };
    MasterForkliftComponent.prototype.upload = function (idForklift) {
        var _this = this;
        for (var _i = 0, _a = this.selectedFiles; _i < _a.length; _i++) {
            var file = _a[_i];
            var fileole = file[0];
            console.log(fileole);
            var uuid = angular2_uuid_1.UUID.UUID();
            console.log(uuid);
            console.log(fileole.name + '' + fileole.type);
            var extension = (fileole.name.substring(fileole.name.lastIndexOf('.'))).toLowerCase();
            console.log(extension);
            this.uploadService.uploadFileForklift(fileole, idForklift).then(function (res) {
                console.log('s3info' + JSON.stringify(res));
                _this.s3info = res;
                console.log(_this.s3info);
                //this.insertNew();
            }).catch(function (error) {
                console.log(error);
                sweetalert2_1.default({
                    type: 'error',
                    title: 'oops a currido un error',
                    text: 'se ha presentado un error al subir la imagen',
                    allowOutsideClick: false
                });
            });
        }
    };
    MasterForkliftComponent.prototype.goAdminForklifts = function () {
        this.router.navigateByUrl('master/forkliftShow');
    };
    MasterForkliftComponent.prototype.onChangeColorHex8 = function (color) {
        return this.cpService.outputFormat(this.cpService.stringToHsva(color, true), 'rgba', null);
    };
    Object.defineProperty(MasterForkliftComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    MasterForkliftComponent = MasterForkliftComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-master-forklift',
            templateUrl: './master-forklift.component.html',
            styleUrls: ['./master-forklift.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss'],
            providers: [I18n, { provide: ng_bootstrap_1.NgbDatepickerI18n, useClass: MasterForkliftComponent_1 }]
        }),
        __metadata("design:paramtypes", [I18n, rest_service_1.RestService, router_1.Router, upload_service_1.UploadService,
            ng_bootstrap_1.NgbDateParserFormatter, ng_bootstrap_1.NgbCalendar, ngx_color_picker_1.ColorPickerService, work_service_1.WorkService])
    ], MasterForkliftComponent);
    return MasterForkliftComponent;
    var MasterForkliftComponent_1;
}(ng_bootstrap_1.NgbDatepickerI18n));
exports.MasterForkliftComponent = MasterForkliftComponent;
//# sourceMappingURL=master-forklift.component.js.map