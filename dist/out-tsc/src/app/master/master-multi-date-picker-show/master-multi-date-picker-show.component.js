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
var work_service_1 = require("../../master-services/Work/work.service");
var sweetalert2_1 = require("sweetalert2");
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
var MasterMultiDatePickerShowComponent = /** @class */ (function () {
    //  currentDateRoutines: Array <currentDateInterface> = [];
    function MasterMultiDatePickerShowComponent(calendar, workService) {
        var _this = this;
        this.workService = workService;
        this.dateInitials = [];
        this._datesSelected = [];
        this.ole = '{year: 2019, month: 10}';
        this.date = { year: 1789, month: 7, day: 14 };
        // [minDate]="{year: 2010, month: 1, day: 1}"
        // [maxDate]="{year: 2048, month: 12, day: 31}"
        this.dateMin = { year: 1789, month: 7, day: 14 };
        this.dateMax = { year: 1789, month: 7, day: 30 };
        this.checkedList = '1';
        this.routineSelecteds = [];
        this._currentDateRoutines = [];
        this.datesSelectedChange = new core_1.EventEmitter();
        this.currentDateRoutinesChange = new core_1.EventEmitter();
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        console.log('Importante data de fechas');
        console.log(this.currentDateRoutines);
        var dateDay = new Date();
        this.datesSelected = [];
        console.log('Ver rutinas');
        this.getWorks();
        var numberMonthCurrent = dateDay.getMonth() + 1;
        var numberAnioCurrent = dateDay.getFullYear();
        for (var _i = 0; _i < 13; _i++) {
            if (_i !== 0) {
                if (numberMonthCurrent === 12) {
                    numberMonthCurrent = 1;
                    numberMonthCurrent = numberMonthCurrent;
                    numberAnioCurrent = numberAnioCurrent + 1;
                }
                else {
                    numberMonthCurrent = numberMonthCurrent + 1;
                }
            }
            if (numberMonthCurrent !== 13) {
                this.dateInitial = {
                    month: numberMonthCurrent,
                    year: numberAnioCurrent
                };
            }
            this.dateInitials.push(this.dateInitial);
            console.log(this.dateInitials);
        }
        console.log(JSON.stringify(this.dateInitials));
    }
    MasterMultiDatePickerShowComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MasterMultiDatePickerShowComponent.prototype, "datesSelected", {
        get: function () {
            return this._datesSelected ? this._datesSelected : [];
        },
        set: function (value) {
            this._datesSelected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterMultiDatePickerShowComponent.prototype, "currentDateRoutines", {
        get: function () {
            return this._currentDateRoutines ? this._currentDateRoutines : [];
        },
        set: function (value) {
            this._currentDateRoutines = value;
        },
        enumerable: true,
        configurable: true
    });
    MasterMultiDatePickerShowComponent.prototype.onDateSelection = function (event, date) {
        console.log(date);
        this.dateShow = 'Fecha seleccionada  ' + date.day + '/' + date.month + '/' + date.year;
        console.log(this.dateShow);
        // document.getElementById( 'routineButton').click();
        event.target.parentElement.blur(); //make that not appear the outline
        if (!this.fromDate && !this.toDate) {
            if (event.ctrlKey == true) {
                this.fromDate = date;
                console.log('kaka1');
            }
            else {
                this.addDate(date);
                console.log('kaka2');
            }
            this.datesSelectedChange.emit(this.datesSelected);
            this.datesSelectedChange.emit(this.datesSelected);
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
            this.addRangeDate(this.fromDate, this.toDate);
            this.fromDate = null;
            this.toDate = null;
            console.log('kaka5');
        }
        else {
            this.toDate = null;
            this.fromDate = date;
            console.log('kaka6');
        }
    };
    MasterMultiDatePickerShowComponent.prototype.getWorks = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Obteniendo información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.workService.getWorks().then(function (data) {
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
                _this.rowsWork = resp.data;
                for (var _a = 0, _b = _this.rowsWork; _a < _b.length; _a++) {
                    var item = _b[_a];
                    console.log(item); // 1, "string", false
                    _this.routineSelected = {
                        id: item.id,
                        item: item.description,
                        select: false
                    };
                    _this.routineSelecteds.push(_this.routineSelected);
                }
                console.log("ole ole");
                console.log(_this.routineSelecteds);
                console.log(_this.rowsWork);
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
    MasterMultiDatePickerShowComponent.prototype.getOle = function () {
        return '{year: 2019, month: 10}';
    };
    MasterMultiDatePickerShowComponent.prototype.addDate = function (date) {
        this.dateCurrentCancel = date;
        console.log('Seguimiento a trinis');
        console.log(this.routineSelecteds);
        var index = this.datesSelected.findIndex(function (f) { return f.day == date.day && f.month == date.month && f.year == date.year; });
        var dateComplete = Number(this.dateCurrentCancel.day + '' + this.dateCurrentCancel.month + '' + this.dateCurrentCancel.year);
        console.log(dateComplete);
        var cont = 0;
        var itemSelect;
        for (var _a = 0, _b = this.currentDateRoutines; _a < _b.length; _a++) {
            var currentRoutine = _b[_a];
            console.log(currentRoutine); // 1, "string", false
            if (currentRoutine.date == dateComplete) {
                itemSelect = currentRoutine.item;
                break;
            }
            cont++;
        }
        if (itemSelect) {
            console.log('información de items');
            var informationItems = itemSelect.split(',');
            for (var _c = 0, informationItems_1 = informationItems; _c < informationItems_1.length; _c++) {
                var elemento = informationItems_1[_c];
                console.log('ingreso a mirar checks');
                this.SelectItemRoutines(elemento);
            }
            console.log(itemSelect);
        }
        if (index >= 0) {
            // this.datesSelected.splice(index,1);
            document.getElementById('routineButton').click();
        } //If exist, remove the date
        else {
            //  this.datesSelected.push(date);
            document.getElementById('routineButton').click();
        } //a simple push
    };
    MasterMultiDatePickerShowComponent.prototype.addCancelDate = function () {
        //If exist, remove the date
        this.cleanSelectRoutines();
        document.getElementById('routineButtonCancel').click();
    };
    MasterMultiDatePickerShowComponent.prototype.cleanSelectRoutines = function () {
        this.routineSelecteds.map(function (dato) {
            //if(dato.Modelo == modelo){
            dato.select = false;
            //}
            return dato;
        });
    };
    MasterMultiDatePickerShowComponent.prototype.SelectItemRoutines = function (idItem) {
        this.routineSelecteds.map(function (dato) {
            console.log(dato.id + 'ole' + idItem);
            if (Number(dato.id) === Number(idItem)) {
                dato.select = true;
                console.log('hacer cambio');
            }
            return dato;
        });
    };
    MasterMultiDatePickerShowComponent.prototype.addDateRoutine = function () {
        var _this = this;
        var index = this.datesSelected.findIndex(function (f) { return f.day == _this.dateCurrentCancel.day && f.month == _this.dateCurrentCancel.month && f.year == _this.dateCurrentCancel.year; });
        // if (index>=0){
        //this.datesSelected.splice(index,1);
        //}      //If exist, remove the datedateCurrentCancel
        // else {
        for (var _a = 0, _b = this.routineSelecteds; _a < _b.length; _a++) {
            var item = _b[_a];
            if (item.select) {
                this.checkedList = this.checkedList + ',' + item.id;
            }
        }
        console.log(this.checkedList.length);
        if (this.checkedList.length > 2) {
            console.log("array de ids");
            this.checkedList = this.checkedList.substring(2);
            console.log(this.checkedList);
            var dateComplete = Number(this.dateCurrentCancel.day + '' + this.dateCurrentCancel.month + '' + this.dateCurrentCancel.year);
            console.log(dateComplete);
            this.currentDateRoutine = {
                date: dateComplete,
                item: this.checkedList
            };
            this.checkedList = '1';
            console.log('importante');
            console.log(this.currentDateRoutines);
            var finDate = 0;
            var cont = 0;
            for (var _c = 0, _d = this.currentDateRoutines; _c < _d.length; _c++) {
                var currentRoutine = _d[_c];
                console.log(currentRoutine.date + ' Validando' + dateComplete); // 1, "string", false
                if (currentRoutine.date == dateComplete) {
                    finDate = 1;
                    break;
                }
                cont++;
            }
            console.log('Esta es la posición en el arreglo: ' + cont);
            console.log(this.currentDateRoutines.length);
            console.log(cont);
            console.log(this.currentDateRoutines.length - 1 + 'Sran iguales' + cont);
            if (finDate == 1) {
                console.log('entro');
                this.currentDateRoutines.splice(cont, 1);
                this.datesSelected.splice(cont, 1);
            }
            this.currentDateRoutines.push(this.currentDateRoutine);
            console.log('vector para insertar');
            console.log(this.currentDateRoutines);
            this.datesSelected.push(this.dateCurrentCancel);
            document.getElementById('routineButtonCancel').click();
            // document.getElementById( 'routineButton').click();
        }
        else {
            var index_1 = this.datesSelected.findIndex(function (f) { return f.day == _this.dateCurrentCancel.day && f.month == _this.dateCurrentCancel.month && f.year == _this.dateCurrentCancel.year; });
            console.log('importante');
            console.log(index_1);
            console.log(index_1);
            if (index_1 >= 0) {
                this.datesSelected.splice(index_1, 1);
            }
            ///
            var dateComplete = Number(this.dateCurrentCancel.day + '' + this.dateCurrentCancel.month + '' + this.dateCurrentCancel.year);
            var cont = 0;
            var finDate = 0;
            for (var _e = 0, _f = this.currentDateRoutines; _e < _f.length; _e++) {
                var currentRoutine = _f[_e];
                console.log(currentRoutine); // 1, "string", false
                if (currentRoutine.date == dateComplete) {
                    finDate = 1;
                    break;
                }
                cont++;
            }
            console.log('Esta es la posición en el arreglo: ' + cont);
            console.log(this.currentDateRoutines.length);
            console.log(cont);
            if (finDate == 1) {
                console.log('entro');
                this.currentDateRoutines.splice(cont, 1);
                console.log('borro');
            }
            ///
            /* swal({
               title: 'Debes escoger por lo menos una rutina',
               text: '',
               type: 'error'
              });
             console.log('Debes escoger por lo menos una rutina');
            */
            document.getElementById('routineButtonCancel').click();
        }
        // }  //a simple push
        this.cleanSelectRoutines();
    };
    MasterMultiDatePickerShowComponent.prototype.addRangeDate = function (fromDate, toDate) {
        //We get the getTime() of the dates from and to
        var from = new Date(fromDate.year + "-" + fromDate.month + "-" + fromDate.day).getTime();
        var to = new Date(toDate.year + "-" + toDate.month + "-" + toDate.day).getTime();
        for (var time = from; time <= to; time += (24 * 60 * 60 * 1000)) {
            var date = new Date(time);
            //javascript getMonth give 0 to January, 1, to February...
            this.addDate({ year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() });
        }
        this.datesSelectedChange.emit(this.datesSelected);
        document.getElementById('routineButtonCancel').click();
    };
    //return true if is selected
    MasterMultiDatePickerShowComponent.prototype.isDateSelected = function (date) {
        return (this.datesSelected.findIndex(function (f) { return f.day == date.day && f.month == date.month && f.year == date.year; }) >= 0);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], MasterMultiDatePickerShowComponent.prototype, "datesSelected", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], MasterMultiDatePickerShowComponent.prototype, "currentDateRoutines", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MasterMultiDatePickerShowComponent.prototype, "datesSelectedChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MasterMultiDatePickerShowComponent.prototype, "currentDateRoutinesChange", void 0);
    MasterMultiDatePickerShowComponent = __decorate([
        core_1.Component({
            selector: 'app-master-multi-date-picker-show',
            templateUrl: './master-multi-date-picker-show.component.html',
            //  styleUrls: ['./master-multi-date-picker-show.component.scss',
            styles: ["\n  .custom-day {\n    text-align: center;\n    padding: 0.185rem 0.25rem;\n    display: inline-block;\n    height: 2rem;\n    width: 2rem;\n  }\n  .custom-day.range, .custom-day:hover {\n    background-color: rgb(2, 117, 216);\n    color: blue;\n  }\n  .custom-day.faded {\n    background-color: rgba(2, 117, 216, 0.5);\n  }\n  .custom-day.selected{  \n    background-color: rgba(255, 255, 0, .5);\n  }\n\n  .input-group {\n    &.datepicker-right {\n        ngb-datepicker {\n            left: inherit !important;\n            right: 0px;\n        }\n    }\n}\n\n"]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbCalendar, work_service_1.WorkService])
    ], MasterMultiDatePickerShowComponent);
    return MasterMultiDatePickerShowComponent;
}());
exports.MasterMultiDatePickerShowComponent = MasterMultiDatePickerShowComponent;
//# sourceMappingURL=master-multi-date-picker-show.component.js.map