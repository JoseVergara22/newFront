webpackJsonp(["notify.module"],{

/***/ "./src/app/theme/ui-elements/advance/notify/notify-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notify_component__ = __webpack_require__("./src/app/theme/ui-elements/advance/notify/notify.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__notify_component__["a" /* NotifyComponent */],
        data: {
            title: 'Notify',
            icon: 'ti-crown',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - notify',
            status: true
        }
    }
];
var NotifyRoutingModule = /** @class */ (function () {
    function NotifyRoutingModule() {
    }
    NotifyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], NotifyRoutingModule);
    return NotifyRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/notify/notify.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Basic notifications card start -->\n    <app-card [title]=\"'Basic notifications'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <tbody>\n          <tr>\n            <td>Primary Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'crate', subType: 'warn'})\">Warning <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use type <code>warn</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Success Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'success'})\">Success <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use type <code>success</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Info Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info'})\">Info <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use type <code>info</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Danger Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'error'})\">Danger <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use type <code>danger</code> to use this style notification</td>\n          </tr>\n          <!-- basic notification end -->\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Basic notifications card end -->\n  </div>\n  <div class=\"col-sm-12\">\n    <!-- Basic notifications card start -->\n    <app-card [title]=\"'Animate notifications'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <tbody>\n          <tr>\n            <td>fromRight Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight'})\">Default/fromRight <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use animate <code>fromRight</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>fromLeft Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromLeft'})\">fromLeft <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use animate <code>fromLeft</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Sacle Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'scale'})\">Scale <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use animate <code>scale</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Rotate Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'rotate'})\">Rotate <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use animate <code>rotate</code> to use this style notification</td>\n          </tr>\n          <!-- basic notification end -->\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Basic notifications card end -->\n  </div>\n  <div class=\"col-sm-12\">\n    <!-- notifications option start -->\n    <app-card [title]=\"'Options notifications'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <tbody>\n          <tr>\n            <td>No Title</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({msg: 'Check me out! - no title', type:'info', animate: 'fromRight', theClass:'small-icon'})\">No Title <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use title <code>null or not use 'title' input</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>No Message</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Only Title', type:'info', animate: 'fromRight', theClass:'small-icon'})\">No Message <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use msg <code>not use 'msg' input</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Small Icon</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Small Icon', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', theClass:'small-icon'})\">Small Icon <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use theClass <code>small-icon</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>No Icon</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'No Icon', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', theClass:'no-icon'})\">No Icon <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use theClass <code>no-icon</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Click To Close</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Click To Close', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', clickToClose: true})\"> Click to close <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use clickToClose <code>true/false</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Show Progress</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Show Progress', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', timeOut:2000, pauseOnHover:false, showProgressBar: true})\"> Show Progress <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use showProgressBar<code>true</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Pus On Hover</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Push On Hover', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', timeOut:2000, pauseOnHover:true, showProgressBar: true})\"> Push On Hover <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use pauseOnHover<code>true</code> to use this style notification</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- notifications option end -->\n  </div>\n  <div class=\"col-sm-12\">\n    <!-- notifications position start -->\n    <app-card [title]=\"'notifications position'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <tbody>\n          <tr>\n            <td>Top Left</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Top Left', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'top', position2: 'left', maxStack: 1})\">Top Left <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use position1 <code>top</code> position2 <code>left</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Top Right</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Top Right', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'top', position2: 'right', maxStack: 1})\">Top Right <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use position1 <code>top</code> position2 <code>right</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Bottom Left</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Bottom Left', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'bottom', position2: 'left', maxStack: 1})\">Bottom Left <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use position1 <code>bottom</code> position2 <code>left</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Bottom Right</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Bottom Right', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'bottom', position2: 'right', maxStack: 1})\">Bottom Right <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use position1 <code>bottom</code> position2 <code>right</code> to use this style notification</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- notifications option end -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/notify/notify.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/ui-elements/advance/notify/notify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notify',
            template: __webpack_require__("./src/app/theme/ui-elements/advance/notify/notify.component.html"),
            styles: [__webpack_require__("./src/app/theme/ui-elements/advance/notify/notify.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_notifications__["a" /* NotificationsService */]])
    ], NotifyComponent);
    return NotifyComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/advance/notify/notify.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyModule", function() { return NotifyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notify_component__ = __webpack_require__("./src/app/theme/ui-elements/advance/notify/notify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notify_routing_module__ = __webpack_require__("./src/app/theme/ui-elements/advance/notify/notify-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NotifyModule = /** @class */ (function () {
    function NotifyModule() {
    }
    NotifyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__notify_routing_module__["a" /* NotifyRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__notify_component__["a" /* NotifyComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__notify_component__["a" /* NotifyComponent */]]
        })
    ], NotifyModule);
    return NotifyModule;
}());



/***/ })

});
//# sourceMappingURL=notify.module.chunk.js.map