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
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent = __decorate([
        core_1.Component({
            selector: 'app-alert',
            templateUrl: './alert.component.html',
            styleUrls: [
                './alert.component.scss',
                '../../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
var RemoveAlertDirective = /** @class */ (function () {
    function RemoveAlertDirective(elements) {
        this.elements = elements;
    }
    RemoveAlertDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.alert_parent = (this.elements).nativeElement.parentElement;
        this.alert_parent.remove();
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RemoveAlertDirective.prototype, "onToggle", null);
    RemoveAlertDirective = __decorate([
        core_1.Directive({
            selector: '[appRemoveAlert]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], RemoveAlertDirective);
    return RemoveAlertDirective;
}());
exports.RemoveAlertDirective = RemoveAlertDirective;
//# sourceMappingURL=alert.component.js.map