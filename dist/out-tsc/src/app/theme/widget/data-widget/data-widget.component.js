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
var animations_1 = require("@angular/animations");
var DataWidgetComponent = /** @class */ (function () {
    function DataWidgetComponent() {
    }
    DataWidgetComponent.prototype.ngOnInit = function () {
    };
    DataWidgetComponent = __decorate([
        core_1.Component({
            selector: 'app-data-widget',
            templateUrl: './data-widget.component.html',
            styleUrls: ['./data-widget.component.scss'],
            animations: [
                animations_1.trigger('fadeInOutTranslate', [
                    animations_1.transition(':enter', [
                        animations_1.style({ opacity: 0 }),
                        animations_1.animate('400ms ease-in-out', animations_1.style({ opacity: 1 }))
                    ]),
                    animations_1.transition(':leave', [
                        animations_1.style({ transform: 'translate(0)' }),
                        animations_1.animate('400ms ease-in-out', animations_1.style({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DataWidgetComponent);
    return DataWidgetComponent;
}());
exports.DataWidgetComponent = DataWidgetComponent;
//# sourceMappingURL=data-widget.component.js.map