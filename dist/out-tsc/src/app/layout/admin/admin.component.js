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
var menu_items_1 = require("../../shared/menu-items/menu-items");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(menuItems) {
        this.menuItems = menuItems;
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
        this.type = 'component';
        this.headerTheme = 'themelight5';
        this.pcodedHeaderPosition = 'fixed';
        this.liveNotification = 'an-off';
        this.profileNotification = 'an-off';
        this.chatSlideInOut = 'out';
        this.innerChatSlideInOut = 'out';
        this.searchWidth = 0;
        this.navRight = 'nav-on';
        this.windowWidth = window.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
        this.toggleOn = true;
        this.navBarTheme = 'themelight1';
        this.activeItemTheme = 'theme10';
        this.pcodedSidebarPosition = 'fixed';
        this.menuTitleTheme = 'theme6';
        this.dropDownIcon = 'style3';
        this.subItemIcon = 'style7';
        this.displayBoxLayout = 'd-none';
        this.isVerticalLayoutChecked = false;
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
        this.headerFixedMargin = '56px';
        this.sidebarFixedHeight = 'calc(100vh - 56px)';
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.itemBorder = true;
        this.setMenuAttributes(this.windowWidth);
        this.setHeaderAttributes(this.windowWidth);
        // side-bar image
        /*this.setLayoutType('img');*/
        // dark
        /*this.setLayoutType('dark');*/
        // dark-light
        /*this.setNavBarTheme('theme1');*/
        // light-dark
        /*this.setLayoutType('dark');
        this.setNavBarTheme('themelight1');*/
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.setBackgroundPattern('pattern1');
        /*document.querySelector('body').classList.remove('dark');*/
    };
    AdminComponent.prototype.onResize = function (event) {
        this.windowWidth = event.target.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
        var reSizeFlag = true;
        if (this.pcodedDeviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.pcodedDeviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        /* for check device */
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    };
    AdminComponent.prototype.setHeaderAttributes = function (windowWidth) {
        if (windowWidth < 992) {
            this.navRight = 'nav-off';
        }
        else {
            this.navRight = 'nav-on';
        }
    };
    AdminComponent.prototype.setMenuAttributes = function (windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.pcodedDeviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else if (windowWidth < 768) {
            this.pcodedDeviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.pcodedDeviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
        }
    };
    AdminComponent.prototype.toggleHeaderNavRight = function () {
        this.navRight = this.navRight === 'nav-on' ? 'nav-off' : 'nav-on';
        this.chatTopPosition = this.chatTopPosition === 'nav-on' ? '112px' : '';
        if (this.navRight === 'nav-off' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.navRight === 'nav-off' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    };
    AdminComponent.prototype.toggleLiveNotification = function () {
        this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'active' : '';
        if (this.liveNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.liveNotification === 'an-animate' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    };
    AdminComponent.prototype.toggleProfileNotification = function () {
        this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'active' : '';
        if (this.profileNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.profileNotification === 'an-animate' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    };
    AdminComponent.prototype.notificationOutsideClick = function (ele) {
        if (ele === 'live' && this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        else if (ele === 'profile' && this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
    };
    AdminComponent.prototype.toggleChat = function () {
        this.chatSlideInOut = this.chatSlideInOut === 'out' ? 'in' : 'out';
        if (this.innerChatSlideInOut === 'in') {
            this.innerChatSlideInOut = 'out';
        }
    };
    AdminComponent.prototype.toggleInnerChat = function () {
        this.innerChatSlideInOut = this.innerChatSlideInOut === 'out' ? 'in' : 'out';
    };
    AdminComponent.prototype.searchOn = function () {
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
    AdminComponent.prototype.searchOff = function () {
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
    AdminComponent.prototype.toggleOpened = function () {
        if (this.windowWidth < 992) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
            if (this.navRight === 'nav-on') {
                this.toggleHeaderNavRight();
            }
        }
        this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    };
    AdminComponent.prototype.onClickedOutsideSidebar = function (e) {
        if ((this.windowWidth < 992 && this.toggleOn && this.verticalNavType !== 'offcanvas') || this.verticalEffect === 'overlay') {
            this.toggleOn = true;
            this.verticalNavType = 'offcanvas';
        }
    };
    AdminComponent.prototype.toggleRightbar = function () {
        this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
    };
    AdminComponent.prototype.setNavBarTheme = function (theme) {
        if (theme === 'themelight1') {
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            this.sidebarImg = 'false';
        }
        else {
            this.menuTitleTheme = 'theme6';
            this.navBarTheme = 'theme1';
            this.sidebarImg = 'false';
        }
    };
    AdminComponent.prototype.setLayoutType = function (type) {
        this.layoutType = type;
        if (type === 'dark') {
            this.headerTheme = 'theme1';
            this.sidebarImg = 'false';
            this.navBarTheme = 'theme1';
            this.menuTitleTheme = 'theme6';
            document.querySelector('body').classList.add('dark');
        }
        else if (type === 'light') {
            this.sidebarImg = 'false';
            this.headerTheme = 'themelight5';
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            document.querySelector('body').classList.remove('dark');
        }
        else if (type === 'img') {
            this.sidebarImg = 'true';
            this.headerTheme = 'theme1';
            this.navBarTheme = 'theme1';
            this.menuTitleTheme = 'theme6';
            document.querySelector('body').classList.remove('dark');
        }
    };
    AdminComponent.prototype.setVerticalLayout = function () {
        this.isVerticalLayoutChecked = !this.isVerticalLayoutChecked;
        if (this.isVerticalLayoutChecked) {
            this.verticalLayout = 'box';
            this.displayBoxLayout = '';
        }
        else {
            this.verticalLayout = 'wide';
            this.displayBoxLayout = 'd-none';
        }
    };
    AdminComponent.prototype.setBackgroundPattern = function (pattern) {
        document.querySelector('body').setAttribute('themebg-pattern', pattern);
    };
    AdminComponent.prototype.setSidebarPosition = function () {
        this.isSidebarChecked = !this.isSidebarChecked;
        this.pcodedSidebarPosition = this.isSidebarChecked === true ? 'fixed' : 'absolute';
        this.sidebarFixedHeight = this.isHeaderChecked === true ? 'calc(100vh + 56px)' : 'calc(100vh - 56px)';
    };
    AdminComponent.prototype.setHeaderPosition = function () {
        this.isHeaderChecked = !this.isHeaderChecked;
        this.pcodedHeaderPosition = this.isHeaderChecked === true ? 'fixed' : 'relative';
        this.headerFixedMargin = this.isHeaderChecked === true ? '56px' : '';
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss'],
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
                animations_1.trigger('slideInOut', [
                    animations_1.state('in', animations_1.style({
                        width: '300px',
                    })),
                    animations_1.state('out', animations_1.style({
                        width: '0',
                    })),
                    animations_1.transition('in => out', animations_1.animate('400ms ease-in-out')),
                    animations_1.transition('out => in', animations_1.animate('400ms ease-in-out'))
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
                ]),
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
        __metadata("design:paramtypes", [menu_items_1.MenuItems])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map