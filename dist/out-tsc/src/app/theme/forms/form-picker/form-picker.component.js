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
var ngx_color_picker_1 = require("ngx-color-picker");
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
var FormPickerComponent = /** @class */ (function () {
    function FormPickerComponent(parserFormatter, calendar, cpService) {
        var _this = this;
        this.parserFormatter = parserFormatter;
        this.calendar = calendar;
        this.cpService = cpService;
        this.displayMonths = 3;
        this.navigation = 'select';
        this.disabled = true;
        this.toggle = false;
        this.color = '#2889e9';
        this.color2 = 'hsla(300,82%,52%)';
        this.color3 = '#fff500';
        this.color4 = 'rgb(236,64,64)';
        this.color5 = 'rgba(45,208,45,1)';
        this.color13 = 'rgba(0, 255, 0, 0.5)';
        this.color14 = 'rgb(0, 255, 255)';
        this.color15 = '#a51ad633';
        this.basicColor = '#4099ff';
        this.showColorCode = '#db968d';
        this.showColorCodeHSAL = 'hsl(149,27%,65%)';
        this.showColorCodeRGBA = 'rgb(221,14,190)';
        this.changeMeColor = '#523698';
        this.arrayColors = {};
        this.selectedColor = 'color';
        this.modelDisabled = {
            year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()
        };
        this.cmyk = new Cmyk(0, 0, 0, 0);
        this.isHovered = function (date) { return _this.fromDate && !_this.toDate && _this.hoveredDate && after(date, _this.fromDate) && before(date, _this.hoveredDate); };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        this.arrayColors['color'] = '#2883e9';
        this.arrayColors['color2'] = '#e920e9';
        this.arrayColors['color3'] = 'rgb(255,245,0)';
        this.arrayColors['color4'] = 'rgb(236,64,64)';
        this.arrayColors['color5'] = 'rgba(45,208,45,1)';
        var windowWidth = window.innerWidth;
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.displayMonths = 2;
            this.navigation = 'select';
        }
        else if (windowWidth < 768) {
            this.displayMonths = 1;
            this.navigation = 'select';
        }
        else {
            this.displayMonths = 3;
            this.navigation = 'none';
        }
    }
    FormPickerComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    FormPickerComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    FormPickerComponent.prototype.ngOnInit = function () {
    };
    FormPickerComponent.prototype.selectToday = function () {
        this.modelPopup = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    FormPickerComponent.prototype.onDateChange = function (date) {
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
    FormPickerComponent.prototype.onChangeColor = function (color) {
        return this.rgbaToCmyk(this.cpService.hsvaToRgba(this.cpService.stringToHsva(color)));
    };
    FormPickerComponent.prototype.rgbaToCmyk = function (rgba) {
        var cmyk = new Cmyk(0, 0, 0, 0);
        var k;
        k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
        if (k === 1) {
            return new Cmyk(0, 0, 0, 1);
        }
        cmyk.c = (1 - rgba.r - k) / (1 - k);
        cmyk.m = (1 - rgba.g - k) / (1 - k);
        cmyk.y = (1 - rgba.b - k) / (1 - k);
        cmyk.k = k;
        return cmyk;
    };
    FormPickerComponent.prototype.onChangeColorHex8 = function (color) {
        return this.cpService.outputFormat(this.cpService.stringToHsva(color, true), 'rgba', null);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], FormPickerComponent.prototype, "testRangeDate", void 0);
    FormPickerComponent = __decorate([
        core_1.Component({
            selector: 'app-form-picker',
            templateUrl: './form-picker.component.html',
            styleUrls: [
                './form-picker.component.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbDateParserFormatter, ng_bootstrap_1.NgbCalendar, ngx_color_picker_1.ColorPickerService])
    ], FormPickerComponent);
    return FormPickerComponent;
}());
exports.FormPickerComponent = FormPickerComponent;
//# sourceMappingURL=form-picker.component.js.map