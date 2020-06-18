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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var rest_service_1 = require("../../master-services/Rest/rest.service");
var sweetalert2_1 = require("sweetalert2");
var I18N_VALUES = {
    'fr': {
        weekdays: ['Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb', 'Dom'],
        months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic'],
    }
};
var MasterLogTrmComponent = /** @class */ (function () {
    function MasterLogTrmComponent(calendar, restService, formatter) {
        this.calendar = calendar;
        this.restService = restService;
        this.formatter = formatter;
        this.today = this.calendar.getToday();
        this.considerDate = true;
        var date = new Date();
        var ngbDateStruct = { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() };
        var ngDateStruct = { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear() };
        this.fromDate = ngbDateStruct;
        this.untilDate = ngDateStruct;
        this.loadingData();
        this.getEstimateFiltersInitial();
    }
    MasterLogTrmComponent.prototype.loadingData = function () {
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
    };
    MasterLogTrmComponent.prototype.onDateSelectionFrom = function (date) {
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
    MasterLogTrmComponent.prototype.onDateSelectionUntil = function (date) {
        var fromD = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day); //31 de diciembre de 2015
        var untilD = new Date(this.untilDate.year, this.untilDate.month, this.untilDate.day);
        if (untilD < fromD) {
            console.log('es mayor');
            this.fromDate = this.untilDate;
        }
    };
    MasterLogTrmComponent.prototype.changeConsiderDate = function (event) {
        if (this.considerDate == true) {
            this.considerDate = false;
        }
        else {
            this.considerDate = true;
        }
        console.log('------');
        console.log(this.considerDate);
    };
    MasterLogTrmComponent.prototype.getEstimateFiltersInitial = function () {
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
        this.restService.showLogFilter(params).then(function (data) {
            var resp = data;
            console.log('info de filter');
            console.log(data);
            sweetalert2_1.default.close();
            for (var _i = 0, _a = resp.data; _i < _a.length; _i++) {
                var item = _a[_i];
                console.log(item.value);
                item.value = _this.finalFormatStandard(Number(item.value).toFixed(2));
                console.log(resp.data.value);
            }
            console.log(resp.data);
            // this.customers  = resp.data;
            _this.rowsClient = resp.data;
            // this.rowStatic =  resp.data;
            // this.rowsTemp = resp.data;
            // console.log( this.rowsClient);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterLogTrmComponent.prototype.finalFormatStandard = function (priceUpdate) {
        var num = priceUpdate; // this.changeFormatDecimal(this.workforceHourValue);
        console.log('num');
        console.log(num);
        num += '';
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
        num = splitLeft + splitRight;
        console.log('Boom');
        console.log(num);
        return num;
    };
    MasterLogTrmComponent.prototype.ngOnInit = function () {
    };
    MasterLogTrmComponent = __decorate([
        core_1.Component({
            selector: 'app-master-log-trm',
            templateUrl: './master-log-trm.component.html',
            styleUrls: ['./master-log-trm.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbCalendar, rest_service_1.RestService,
            ng_bootstrap_1.NgbDateParserFormatter])
    ], MasterLogTrmComponent);
    return MasterLogTrmComponent;
}());
exports.MasterLogTrmComponent = MasterLogTrmComponent;
//# sourceMappingURL=master-log-trm.component.js.map