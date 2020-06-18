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
var new_service_1 = require("../../master-services/new/new.service");
var sweetalert2_1 = require("sweetalert2");
var router_1 = require("@angular/router");
var MasterSliderComponent = /** @class */ (function () {
    function MasterSliderComponent(newService, router) {
        this.newService = newService;
        this.router = router;
        this.slides = [
            { img: 'http://placehold.it/350x150/000000' },
            { img: 'http://placehold.it/350x150/111111' },
            { img: 'http://placehold.it/350x150/333333' },
            { img: 'http://placehold.it/350x150/666666' }
        ];
        this.slideConfig = {
            "slidesToShow": 4,
            "slidesToScroll": 1,
            "nextArrow": "<div class='nav-btn next-slide'></div>",
            "prevArrow": "<div class='nav-btn prev-slide'></div>",
            "dots": true,
            "infinite": false
        };
        this.carouselBannerItems = [];
        this.carouselTileItems = [];
        this.carouselTileOneItems = [];
        this.carouselTileTwoItems = [];
        this.loadingData();
    }
    MasterSliderComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.newService.getNewsImages().then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.newsPhotos = resp.data;
            console.log(_this.newsPhotos[0].id);
            _this.changeSlider(_this.newsPhotos[0].id);
            console.log(_this.newsPhotos);
        }).catch(function (error) {
            console.log(error);
        });
    };
    MasterSliderComponent.prototype.ole = function (a) {
        console.log(a);
    };
    MasterSliderComponent.prototype.changeSlider = function (slider) {
        console.log(slider);
        // this.currentSlider = this.newsPhotos.filter(val => 'id' === 13);
        this.currentSlider = this.newsPhotos.filter(function (current) { return current.id === Number(slider); });
        this.currentSlider = JSON.parse(JSON.stringify(this.currentSlider));
        this.currentSlider = this.currentSlider[0];
        // console.log(this.currentSlider[0].id);
    };
    MasterSliderComponent.prototype.ngOnInit = function () {
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
            // speed: 500,
            // interval: 10000,
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
            interval: 10000,
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
            interval: 10000,
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
            interval: 10000,
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            background: #6b6b6b;\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s;\n          }\n          .ngxcarouselPoint li.active {\n              border: 2px solid rgba(0, 0, 0, 0.55);\n              transform: scale(1.2);\n              background: transparent;\n            }\n          .pcoded[layout-type=\"dark\"] .ngxcarouselPoint li.active, body.dark .ngxcarouselPoint li.active{\n            border-color: #fff;\n            background:transparent;\n          }\n        "
            },
            loop: true,
            touch: true,
            easing: 'ease',
            animation: 'lazy',
        };
        this.carouselBannerLoad();
        this.carouselTileLoad();
        this.carouselTileOneLoad();
        this.carouselTileTwoLoad();
    };
    MasterSliderComponent.prototype.onmoveFn = function (data) {
        console.log(data);
    };
    MasterSliderComponent.prototype.onChange = function (ole) {
        console.log(ole);
    };
    MasterSliderComponent.prototype.addSlide = function () {
        this.slides.push({ img: 'http://placehold.it/350x150/777777' });
    };
    MasterSliderComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    MasterSliderComponent.prototype.slickInit = function (e) {
        console.log('slick initialized');
    };
    MasterSliderComponent.prototype.breakpoint = function (e) {
        console.log('breakpoint');
    };
    MasterSliderComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    MasterSliderComponent.prototype.beforeChange = function (e) {
        console.log('beforeChange');
    };
    MasterSliderComponent.prototype.carouselBannerLoad = function () {
        var len = this.carouselBannerItems.length;
        if (len <= 3) {
            for (var i = len; i < len + 4; i++) {
                this.carouselBannerItems.push(this.imgagsBanner[i]);
            }
        }
    };
    MasterSliderComponent.prototype.carouselTileLoad = function () {
        var len = this.carouselTileItems.length;
        if (len <= 7) {
            for (var i = len; i < len + 8; i++) {
                this.carouselTileItems.push(this.imgags[i]);
            }
        }
    };
    MasterSliderComponent.prototype.carouselTileOneLoad = function () {
        var len = this.carouselTileOneItems.length;
        if (len <= 7) {
            for (var i = len; i < len + 8; i++) {
                this.carouselTileOneItems.push(this.imgags[i]);
            }
        }
    };
    MasterSliderComponent.prototype.carouselTileTwoLoad = function () {
        var len = this.carouselTileTwoItems.length;
        if (len <= 7) {
            for (var i = len; i < len + 8; i++) {
                this.carouselTileTwoItems.push(this.imgags[i]);
            }
        }
    };
    MasterSliderComponent = __decorate([
        core_1.Component({
            selector: 'app-master-slider',
            templateUrl: './master-slider.component.html',
            styleUrls: [
                './master-slider.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [new_service_1.NewService, router_1.Router])
    ], MasterSliderComponent);
    return MasterSliderComponent;
}());
exports.MasterSliderComponent = MasterSliderComponent;
//# sourceMappingURL=master-slider.component.js.map