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
require("../../../../assets/charts/amchart/amcharts.js");
require("../../../../assets/charts/amchart/gauge.js");
require("../../../../assets/charts/amchart/pie.js");
require("../../../../assets/charts/amchart/serial.js");
require("../../../../assets/charts/amchart/light.js");
require("../../../../assets/charts/amchart/ammap.js");
require("../../../../assets/charts/amchart/worldLow.js");
require("../../../../assets/charts/amchart/continentsLow.js");
var angular2_notifications_1 = require("angular2-notifications");
var DefaultComponent = /** @class */ (function () {
    function DefaultComponent(servicePNotify) {
        this.servicePNotify = servicePNotify;
        this.options = {
            position: ['bottom', 'right'],
        };
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.options = {
                position: ['bottom', 'right'],
                maxStack: 8,
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: true,
                lastOnBottom: true,
                clickToClose: true,
                preventDuplicates: false,
                preventLastDuplicates: false,
                theClass: 'bg-c-pink no-icon',
                rtl: false,
                animate: 'rotate'
            };
            _this.servicePNotify.html('<h4>Live customizer</h4> <p>Click on Right Gear icon <i class="ti-settings"></i> for apply live styles very first time in Angular 5.</p>', 'success');
            AmCharts.makeChart('statistics_chart', {
                'type': 'serial',
                'theme': 'light',
                'dataDateFormat': 'YYYY-MM-DD',
                'precision': 2,
                'valueAxes': [{
                        'id': 'v1',
                        'title': 'Sales',
                        'position': 'left',
                        'autoGridCount': false,
                        'labelFunction': function (value) {
                            return '$' + Math.round(value) + 'M';
                        }
                    }, {
                        'id': 'v2',
                        'gridAlpha': 0.1,
                        'autoGridCount': false
                    }],
                'graphs': [{
                        'id': 'g1',
                        'valueAxis': 'v2',
                        'lineThickness': 0,
                        'fillAlphas': 0.2,
                        'lineColor': '#4099ff',
                        'type': 'line',
                        'title': 'Laptop',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v2',
                        'fillAlphas': 0.6,
                        'lineThickness': 0,
                        'lineColor': '#4099ff',
                        'type': 'line',
                        'title': 'TV',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market2',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }],
                'chartCursor': {
                    'pan': true,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'cursorAlpha': 0,
                    'valueLineAlpha': 0.2
                },
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'gridAlpha': 0,
                    'minorGridEnabled': true
                },
                'legend': {
                    'position': 'top',
                },
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'export': {
                    'enabled': true
                },
                'dataProvider': [{
                        'date': '2013-01-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-02-01',
                        'market1': 130,
                        'market2': 110,
                        'sales1': 0
                    }, {
                        'date': '2013-03-01',
                        'market1': 80,
                        'market2': 60,
                        'sales1': 0
                    }, {
                        'date': '2013-04-01',
                        'market1': 70,
                        'market2': 200,
                        'sales1': 0
                    }, {
                        'date': '2013-05-01',
                        'market1': 180,
                        'market2': 150,
                        'sales1': 0
                    }, {
                        'date': '2013-06-01',
                        'market1': 105,
                        'market2': 90,
                        'sales1': 0
                    }, {
                        'date': '2013-07-01',
                        'market1': 250,
                        'market2': 150,
                        'sales1': 0
                    }]
            });
            /* feedback chart start */
            _this.feedbackData = {
                datasets: [{
                        data: [83, 17],
                        backgroundColor: ['#4099ff', '#81c1fd'],
                        label: 'Dataset 1',
                        borderWidth: 0
                    }], labels: ['Positive', 'Negative']
            };
            _this.feedbackOption = {
                responsive: true,
                legend: { display: false },
                title: { display: false, text: 'Chart.js Doughnut Chart' },
                animation: { animateScale: true, animateRotate: true }
            };
            /* feedback chart end */
            /* seo card start */
            var seo1_tag = ((_this.seoCard1Chart.nativeElement.children));
            _this.seoCard1Tag = ((seo1_tag['seo-card1']).lastChild).getContext('2d');
            var d = (_this.seoCard1Tag).createLinearGradient(300, 0, 0, 300);
            d.addColorStop(0, '#b9fdef');
            d.addColorStop(1, '#2ed8b6');
            var seo2_tag = ((_this.seoCard2Chart.nativeElement.children));
            _this.seoCard2Tag = ((seo2_tag['seo-card2']).lastChild).getContext('2d');
            var x = (_this.seoCard2Tag).createLinearGradient(300, 0, 0, 300);
            x.addColorStop(0, '#b5d8ff');
            x.addColorStop(1, '#4099ff');
            _this.seoCard1Data = e('#2ed8b6', [100, 80, 100, 150, 190, 200, 160], d);
            _this.seoCard1Option = f();
            _this.seoCard2Data = e('#4099ff', [100, 80, 100, 150, 190, 200, 160], x);
            _this.seoCard2Option = f();
            /* seo card end */
        }, 75);
    };
    __decorate([
        core_1.ViewChild('seoCard1Chart'),
        __metadata("design:type", core_1.ElementRef)
    ], DefaultComponent.prototype, "seoCard1Chart", void 0);
    __decorate([
        core_1.ViewChild('seoCard2Chart'),
        __metadata("design:type", core_1.ElementRef)
    ], DefaultComponent.prototype, "seoCard2Chart", void 0);
    DefaultComponent = __decorate([
        core_1.Component({
            selector: 'app-default',
            templateUrl: './default.component.html',
            styleUrls: [
                './default.component.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None,
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
        __metadata("design:paramtypes", [angular2_notifications_1.NotificationsService])
    ], DefaultComponent);
    return DefaultComponent;
}());
exports.DefaultComponent = DefaultComponent;
function e(h, g, i) {
    if (i == null) {
        i = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
                label: '',
                borderColor: h,
                borderWidth: 2,
                hitRadius: 0,
                pointHoverRadius: 0,
                pointRadius: 3,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: '#fff',
                pointBorderColor: h,
                pointHoverBackgroundColor: h,
                pointHoverBorderColor: '#000',
                fill: true,
                backgroundColor: i,
                data: g,
            }]
    };
}
function f() {
    return {
        title: { display: !1 },
        tooltips: { enabled: true, intersect: !1, mode: 'nearest', xPadding: 10, yPadding: 10, caretPadding: 10 },
        legend: { display: !1, labels: { usePointStyle: !1 } },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: { mode: 'index' },
        scales: {
            xAxes: [{ display: !1, gridLines: !1, scaleLabel: { display: !0, labelString: 'Month' } }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: { display: !0, labelString: 'Value' },
                    ticks: { beginAtZero: !0 }
                }]
        },
        elements: { point: { radius: 4, borderWidth: 12 } },
        layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } }
    };
}
//# sourceMappingURL=default.component.js.map