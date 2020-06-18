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
var ModalBasicComponent = /** @class */ (function () {
    function ModalBasicComponent() {
        this.hideHeader = false;
        this.hideFooter = false;
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalBasicComponent.prototype.ngOnInit = function () {
    };
    ModalBasicComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalBasicComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalBasicComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            // this.hide(); para evitar que se cierren modales
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ModalBasicComponent.prototype, "dialogClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ModalBasicComponent.prototype, "hideHeader", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ModalBasicComponent.prototype, "hideFooter", void 0);
    ModalBasicComponent = __decorate([
        core_1.Component({
            selector: 'app-modal-basic',
            templateUrl: './modal-basic.component.html',
            styleUrls: ['./modal-basic.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ModalBasicComponent);
    return ModalBasicComponent;
}());
exports.ModalBasicComponent = ModalBasicComponent;
//# sourceMappingURL=modal-basic.component.js.map