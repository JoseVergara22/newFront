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
var angular2_notifications_1 = require("angular2-notifications");
var NotifyComponent = /** @class */ (function () {
    function NotifyComponent(servicePNotify) {
        this.servicePNotify = servicePNotify;
        this.options = {
            position: ['bottom', 'right'],
        };
        this.position1 = 'bottom';
        this.position2 = 'right';
        this.timeOut = 1000;
        this.showProgressBar = true;
        this.pauseOnHover = true;
        this.lastOnBottom = true;
        this.clickToClose = true;
        this.maxLength = 0;
        this.maxStack = 8;
        this.preventDuplicates = false;
        this.preventLastDuplicates = false;
        this.rtl = false;
        this.animate = 'fromRight';
        this.subType = 'success';
    }
    NotifyComponent.prototype.ngOnInit = function () {
    };
    NotifyComponent.prototype.addNotify = function (options) {
        this.servicePNotify.remove();
        this.options = {
            position: [
                ('position1' in options) ? options.position1 : this.position1,
                ('position2' in options) ? options.position2 : this.position2
            ],
            maxStack: ('maxStack' in options) ? options.maxStack : this.maxStack,
            timeOut: options.timeOut ? options.timeOut : this.timeOut,
            showProgressBar: ('showProgressBar' in options) ? options.showProgressBar : this.showProgressBar,
            pauseOnHover: ('pauseOnHover' in options) ? options.pauseOnHover : this.pauseOnHover,
            lastOnBottom: ('lastOnBottom' in options) ? options.lastOnBottom : this.lastOnBottom,
            clickToClose: ('clickToClose' in options) ? options.clickToClose : this.clickToClose,
            maxLength: options.maxLength ? options.maxLength : this.maxLength,
            preventDuplicates: ('preventDuplicates' in options) ? options.preventDuplicates : this.preventDuplicates,
            preventLastDuplicates: ('preventLastDuplicates' in options) ? options.preventLastDuplicates : this.preventLastDuplicates,
            theClass: options.theClass ? options.theClass : this.theClass,
            rtl: ('rtl' in options) ? options.rtl : this.rtl,
            animate: options.animate ? options.animate : this.animate,
            icons: options.icons ? options.icons : this.icons
        };
        switch (options.type) {
            case 'success':
                this.servicePNotify.success(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'error':
                this.servicePNotify.error(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'alert':
                this.servicePNotify.error(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'warn':
                this.servicePNotify.error(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'info':
                this.servicePNotify.info(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'create':
                this.servicePNotify.create(options.title ? options.title : this.title, options.msg ? options.msg : this.msg, options.type ? options.type : this.subType);
                break;
            case 'html':
                this.servicePNotify.html(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            default:
                this.servicePNotify.alert(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
        }
    };
    NotifyComponent = __decorate([
        core_1.Component({
            selector: 'app-notify',
            templateUrl: './notify.component.html',
            styleUrls: ['./notify.component.scss']
        }),
        __metadata("design:paramtypes", [angular2_notifications_1.NotificationsService])
    ], NotifyComponent);
    return NotifyComponent;
}());
exports.NotifyComponent = NotifyComponent;
//# sourceMappingURL=notify.component.js.map