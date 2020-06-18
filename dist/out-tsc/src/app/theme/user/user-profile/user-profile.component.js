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
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
        var _this = this;
        this.editProfile = true;
        this.editProfileIcon = 'icofont-edit';
        this.editAbout = true;
        this.editAboutIcon = 'icofont-edit';
        this.rowsOnPage = 10;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
        this.rowsContact = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.fetchContactData(function (data) {
            _this.rowsContact = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.editorContent = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising ';
            _this.editorContent += 'pain was born and I will give you a complete account of the system, and expound the actual ';
            _this.editorContent += 'teachings of the great explorer of the truth, the master-builder of human happiness. No one ';
            _this.editorContent += 'rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who ';
            _this.editorContent += 'do not know how to pursue pleasure rationally encounter consequences that are extremely ';
            _this.editorContent += 'painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, ';
            _this.editorContent += 'because it is pain, but because occasionally circumstances occur in which toil and pain can ';
            _this.editorContent += 'procure him some great pleasure. To take a trivial example, which of us ever undertakes ';
            _this.editorContent += 'laborious physical exercise, except to obtain some advantage from it? But who has any right ';
            _this.editorContent += 'to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, ';
            _this.editorContent += 'or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce ';
            _this.editorContent += 'with righteous indignation and dislike men who are so beguiled and demoralized by the charms ';
            _this.editorContent += 'of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and ';
            _this.editorContent += 'trouble that are bound to ensue; and equal blame belongs to those who fail in their duty ';
            _this.editorContent += 'through weakness of will, which is the same as saying through shrinking from toil and pain. ';
            _this.editorContent += 'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of ';
            _this.editorContent += 'choice is untrammelled and when nothing prevents our being able To Do what we like best, ';
            _this.editorContent += 'every pleasure is to be welcomed and every pain avoided. But in certain circumstances and ';
            _this.editorContent += 'owing to the claims of duty or the obligations of business it will frequently occur that ';
            _this.editorContent += 'pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds';
            _this.editorContent += 'in these matters to this principle of selection: he rejects pleasures to secure other ';
            _this.editorContent += 'greater pleasures, or else he endures pains to avoid worse pain.';
        }, 2800);
        setTimeout(function () {
            _this.profitChartOption = {
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        var date = new Date(params.value[0]);
                        var data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ';
                        data += date.getHours() + ':' + date.getMinutes();
                        return data + '<br/>' + params.value[1] + ', ' + params.value[2];
                    },
                    responsive: true
                },
                dataZoom: {
                    show: true,
                    start: 70
                },
                legend: {
                    data: ['Profit']
                },
                grid: {
                    y2: 80
                },
                xAxis: [{
                        type: 'time',
                        splitNumber: 10
                    }],
                yAxis: [{
                        type: 'value'
                    }],
                series: [{
                        name: 'Profit',
                        type: 'line',
                        showAllSymbol: true,
                        symbolSize: function (value) {
                            return Math.round(value[2] / 10) + 2;
                        },
                        data: (function () {
                            var d = [];
                            var len = 0;
                            var now = new Date();
                            while (len++ < 200) {
                                var random1 = (Math.random() * 30).toFixed(2);
                                var random2 = (Math.random() * 100).toFixed(2);
                                d.push([new Date(2014, 9, 1, 0, len * 10000), random1 - 0, random2 - 0]);
                            }
                            return d;
                        })()
                    }]
            };
        }, 1);
    };
    UserProfileComponent.prototype.fetchContactData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/data.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    UserProfileComponent.prototype.toggleEditProfile = function () {
        this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
        this.editProfile = !this.editProfile;
    };
    UserProfileComponent.prototype.toggleEditAbout = function () {
        this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
        this.editAbout = !this.editAbout;
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: [
                './user-profile.component.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ],
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
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map