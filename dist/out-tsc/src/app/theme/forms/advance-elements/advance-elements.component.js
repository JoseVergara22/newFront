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
var AdvanceElementsComponent = /** @class */ (function () {
    function AdvanceElementsComponent() {
        this.switchDisable = true;
        this.items = ['Amsterdam', 'Washington', 'Sydney'];
        this.itemsAsObjects = [{ id: 0, name: 'Amsterdam', readonly: true }, { id: 1, name: 'Washington' }];
        this.errorMessages = {
            'startsWithAt@': 'Your items need to start with \'@\'',
            'endsWith$': 'Your items need to end with \'$\''
        };
        this.validators = [this.startsWithAt, this.endsWith$];
    }
    AdvanceElementsComponent.prototype.ngOnInit = function () {
    };
    AdvanceElementsComponent.prototype.disableSwitch = function () {
        this.switchDisable = true;
    };
    AdvanceElementsComponent.prototype.enableSwitch = function () {
        this.switchDisable = false;
    };
    AdvanceElementsComponent.prototype.startsWithAt = function (control) {
        if (control.value.charAt(0) !== '@') {
            return {
                'startsWithAt@': true
            };
        }
        return null;
    };
    AdvanceElementsComponent.prototype.endsWith$ = function (control) {
        if (control.value.charAt(control.value.length - 1) !== '$') {
            return {
                'endsWith$': true
            };
        }
        return null;
    };
    AdvanceElementsComponent = __decorate([
        core_1.Component({
            selector: 'app-advance-elements',
            templateUrl: './advance-elements.component.html',
            styleUrls: [
                './advance-elements.component.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AdvanceElementsComponent);
    return AdvanceElementsComponent;
}());
exports.AdvanceElementsComponent = AdvanceElementsComponent;
//# sourceMappingURL=advance-elements.component.js.map