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
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.carouselBannerItems = [];
        this.carouselTileItems = [];
        this.carouselTileOneItems = [];
        this.carouselTileTwoItems = [];
    }
    CarouselComponent.prototype.ngOnInit = function () {
        this.imgagsBanner = [
            'assets/images/slider/slide4.jpg',
            'assets/images/slider/slide3.jpg',
            'assets/images/slider/slide2.jpg',
            'assets/images/slider/slide1.jpg'
        ];
        this.imgags = [
            'assets/images/task/task-u1.jpg',
            'assets/images/task/task-u2.jpg',
            'assets/images/task/task-u3.jpg',
            'assets/images/task/task-u4.jpg',
            'assets/images/task/task-u2.jpg',
            'assets/images/task/task-u1.jpg',
            'assets/images/task/task-u3.jpg',
            'assets/images/task/task-u4.jpg'
        ];
        this.carouselBanner = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 4,
            speed: 500,
            interval: 3000,
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            position: absolute;\n            width: 100%;\n            bottom: 20px;\n            left: 0;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 999px;\n            background: rgba(255, 255, 255, 0.55);\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s ease all;\n          }\n          .ngxcarouselPoint li.active {\n              background: white;\n              width: 10px;\n          }\n          .pcoded[layout-type=\"dark\"] .ngxcarouselPoint li.active, body.dark .ngxcarouselPoint li.active{\n            background: #00f;\n            border-color:#00f;\n          }\n        "
            },
            load: 2,
            custom: 'banner',
            touch: true,
            loop: true,
            easing: 'cubic-bezier(0, 0, 0.2, 1)'
        };
        this.carouselTile = {
            grid: { xs: 1, sm: 2, md: 2, lg: 3, all: 0 },
            speed: 600,
            interval: 3000,
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            border: 2px solid rgba(0, 0, 0, 0.55);\n            padding: 4px;\n            margin: 0 3px;\n            transition-timing-function: cubic-bezier(.17, .67, .83, .67);\n            transition: .4s;\n          }\n          .ngxcarouselPoint li.active {\n              background: #6b6b6b;\n              transform: scale(1.2);\n          }\n          .pcoded[layout-type=\"dark\"] .ngxcarouselPoint li.active, body.dark .ngxcarouselPoint li.active{\n            background:#fff;\n          }\n        "
            },
            load: 2,
            loop: true,
            touch: true
        };
        this.carouselTileTwo = {
            grid: { xs: 1, sm: 3, md: 4, lg: 6, all: 230 },
            speed: 600,
            interval: 3000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true
        };
        this.carouselTileOne = {
            grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
            speed: 600,
            interval: 3000,
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            background: #6b6b6b;\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s;\n          }\n          .ngxcarouselPoint li.active {\n              border: 2px solid rgba(0, 0, 0, 0.55);\n              transform: scale(1.2);\n              background: transparent;\n            }\n          .pcoded[layout-type=\"dark\"] .ngxcarouselPoint li.active, body.dark .ngxcarouselPoint li.active{\n            border-color: #fff;\n            background:transparent;\n          }\n        "
            },
            loop: true,
            touch: true,
            easing: 'ease',
            animation: 'lazy'
        };
        this.carouselBannerLoad();
        this.carouselTileLoad();
        this.carouselTileOneLoad();
        this.carouselTileTwoLoad();
    };
    CarouselComponent.prototype.onmoveFn = function (data) {
        // console.log(data);
    };
    CarouselComponent.prototype.carouselBannerLoad = function () {
        var len = this.carouselBannerItems.length;
        if (len <= 3) {
            for (var i = len; i < len + 4; i++) {
                this.carouselBannerItems.push(this.imgagsBanner[i]);
            }
        }
    };
    CarouselComponent.prototype.carouselTileLoad = function () {
        var len = this.carouselTileItems.length;
        if (len <= 7) {
            for (var i = len; i < len + 8; i++) {
                this.carouselTileItems.push(this.imgags[i]);
            }
        }
    };
    CarouselComponent.prototype.carouselTileOneLoad = function () {
        var len = this.carouselTileOneItems.length;
        if (len <= 7) {
            for (var i = len; i < len + 8; i++) {
                this.carouselTileOneItems.push(this.imgags[i]);
            }
        }
    };
    CarouselComponent.prototype.carouselTileTwoLoad = function () {
        var len = this.carouselTileTwoItems.length;
        if (len <= 7) {
            for (var i = len; i < len + 8; i++) {
                this.carouselTileTwoItems.push(this.imgags[i]);
            }
        }
    };
    CarouselComponent = __decorate([
        core_1.Component({
            selector: 'app-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: [
                './carousel.component.scss',
                '../../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map