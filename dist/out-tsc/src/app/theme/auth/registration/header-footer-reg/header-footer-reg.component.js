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
var HeaderFooterRegComponent = /** @class */ (function () {
    function HeaderFooterRegComponent() {
        this.navType = 'st2';
        this.themeLayout = 'vertical';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.pcodedDeviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.vnavigationView = 'view1';
        this.freamType = 'theme1';
        this.sidebarImg = 'false';
        this.sidebarImgType = 'img1';
        this.layoutType = 'light';
        this.headerTheme = 'themelight5';
        this.pcodedHeaderPosition = 'fixed';
        this.liveNotification = 'an-off';
        this.profileNotification = 'an-off';
        this.searchWidth = 0;
        this.navRight = 'nav-on';
        this.windowWidth = window.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
    }
    HeaderFooterRegComponent.prototype.ngOnInit = function () {
    };
    HeaderFooterRegComponent.prototype.onResize = function (event) {
        this.windowWidth = event.target.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
    };
    HeaderFooterRegComponent.prototype.setHeaderAttributes = function (windowWidth) {
        if (windowWidth < 992) {
            this.navRight = 'nav-off';
        }
        else {
            this.navRight = 'nav-on';
        }
    };
    HeaderFooterRegComponent.prototype.toggleHeaderNavRight = function () {
        this.navRight = this.navRight === 'nav-on' ? 'nav-off' : 'nav-on';
    };
    HeaderFooterRegComponent.prototype.toggleLiveNotification = function () {
        this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'active' : '';
    };
    HeaderFooterRegComponent.prototype.toggleProfileNotification = function () {
        this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'active' : '';
    };
    HeaderFooterRegComponent.prototype.notificationOutsideClick = function (ele) {
        if (ele === 'live' && this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        else if (ele === 'profile' && this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
    };
    HeaderFooterRegComponent.prototype.searchOn = function () {
        var _this = this;
        document.querySelector('#main-search').classList.add('open');
        var searchInterval = setInterval(function () {
            if (_this.searchWidth >= 200) {
                clearInterval(searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth + 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    HeaderFooterRegComponent.prototype.searchOff = function () {
        var _this = this;
        var searchInterval = setInterval(function () {
            if (_this.searchWidth <= 0) {
                document.querySelector('#main-search').classList.remove('open');
                clearInterval(searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth - 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    HeaderFooterRegComponent = __decorate([
        core_1.Component({
            selector: 'app-header-footer-reg',
            templateUrl: './header-footer-reg.component.html',
            styleUrls: ['./header-footer-reg.component.scss'],
            animations: [
                animations_1.trigger('notificationBottom', [
                    animations_1.state('an-off, void', animations_1.style({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    animations_1.state('an-animate', animations_1.style({
                        overflow: 'hidden',
                        height: animations_1.AUTO_STYLE,
                    })),
                    animations_1.transition('an-off <=> an-animate', [
                        animations_1.animate('400ms ease-in-out')
                    ])
                ]),
                animations_1.trigger('mobileHeaderNavRight', [
                    animations_1.state('nav-off, void', animations_1.style({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    animations_1.state('nav-on', animations_1.style({
                        height: animations_1.AUTO_STYLE,
                    })),
                    animations_1.transition('nav-off <=> nav-on', [
                        animations_1.animate('400ms ease-in-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderFooterRegComponent);
    return HeaderFooterRegComponent;
}());
exports.HeaderFooterRegComponent = HeaderFooterRegComponent;
//# sourceMappingURL=header-footer-reg.component.js.map