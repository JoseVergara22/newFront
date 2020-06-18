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
require("../../../../assets/charts/amchart/amcharts.js");
require("../../../../assets/charts/amchart/gauge.js");
require("../../../../assets/charts/amchart/pie.js");
require("../../../../assets/charts/amchart/serial.js");
require("../../../../assets/charts/amchart/light.js");
require("../../../../assets/charts/amchart/ammap.js");
require("../../../../assets/charts/amchart/worldLow.js");
require("../../../../assets/charts/amchart/continentsLow.js");
var ChartWidgetComponent = /** @class */ (function () {
    function ChartWidgetComponent() {
    }
    ChartWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            /* student chart start */
            var student_tag = ((_this.studentChart.nativeElement.children));
            _this.studentChartTag = ((student_tag['student_chart']).lastChild).getContext('2d');
            var efg = (_this.studentChartTag).createLinearGradient(500, 0, 100, 0);
            efg.addColorStop(0, '#fd93a8');
            efg.addColorStop(1, '#FC6180');
            var def = (_this.studentChartTag).createLinearGradient(500, 0, 100, 0);
            def.addColorStop(0, '#2ed8b6');
            def.addColorStop(1, '#7cffe5');
            var abc = (_this.studentChartTag).createLinearGradient(500, 0, 100, 0);
            abc.addColorStop(1, '#56CCF2');
            abc.addColorStop(0, '#2F80ED');
            _this.studentChartData = {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
                datasets: [{
                        label: 'Arts',
                        borderColor: efg,
                        pointBorderColor: '#fff',
                        pointBackgroundColor: efg,
                        pointHoverBackgroundColor: efg,
                        pointHoverBorderColor: efg,
                        pointBorderWidth: 2,
                        pointHoverRadius: 10,
                        pointHoverBorderWidth: 1,
                        pointRadius: 8,
                        fill: false,
                        borderWidth: 2,
                        data: [20, 50, 30, 60, 30, 50, 40]
                    }, {
                        label: 'Commerce',
                        borderColor: def,
                        pointBorderColor: '#fff',
                        pointBackgroundColor: def,
                        pointHoverBackgroundColor: def,
                        pointHoverBorderColor: def,
                        pointBorderWidth: 2,
                        pointHoverRadius: 10,
                        pointHoverBorderWidth: 1,
                        pointRadius: 8,
                        fill: false,
                        borderWidth: 2,
                        data: [60, 30, 65, 45, 67, 35, 68]
                    }, {
                        label: 'Science',
                        borderColor: abc,
                        pointBorderColor: '#fff',
                        pointBackgroundColor: abc,
                        pointHoverBackgroundColor: abc,
                        pointHoverBorderColor: abc,
                        pointBorderWidth: 2,
                        pointHoverRadius: 10,
                        pointHoverBorderWidth: 1,
                        pointRadius: 8,
                        fill: false,
                        borderWidth: 2,
                        data: [40, 20, 50, 15, 40, 65, 20]
                    }]
            };
            /* student chart end */
            /* email chart start */
            _this.emailChartData = {
                datasets: [{
                        data: [300, 170, 60],
                        backgroundColor: ['#4099ff', '#2ed8b6', '#FF5370'],
                        label: 'Dataset 1',
                        borderWidth: 0
                    }], labels: ['Send', 'Opened', 'Bounced']
            };
            _this.emailChartOption = {
                responsive: true,
                cutoutPercentage: 80,
                legend: { position: 'top' },
                title: { display: false },
                animation: { animateScale: true, animateRotate: true }
            };
            /* email chart end */
            /* seo card start */
            var seo1_tag = ((_this.seoCard1Chart.nativeElement.children));
            _this.seoCard1Tag = ((seo1_tag['seo-card1']).lastChild).getContext('2d');
            var cde = (_this.seoCard1Tag).createLinearGradient(300, 0, 0, 300);
            cde.addColorStop(0, '#b9fdef');
            cde.addColorStop(1, '#2ed8b6');
            var seo2_tag = ((_this.seoCard2Chart.nativeElement.children));
            _this.seoCard2Tag = ((seo2_tag['seo-card2']).lastChild).getContext('2d');
            var x = (_this.seoCard2Tag).createLinearGradient(300, 0, 0, 300);
            x.addColorStop(0, '#b5d8ff');
            x.addColorStop(1, '#4099ff');
            _this.seoCard1Data = e('#2ed8b6', [100, 80, 100, 150, 190, 200, 160], cde);
            _this.seoCard1Option = f();
            _this.seoCard2Data = e('#4099ff', [100, 80, 100, 150, 190, 200, 160], x);
            _this.seoCard2Option = f();
            /* seo card end */
            AmCharts.makeChart('unique-visitor-chart', {
                type: 'map',
                theme: 'light',
                dragMap: false,
                projection: 'eckert3',
                areasSettings: {
                    autoZoom: false,
                    rollOverOutlineColor: '#fff',
                    selectedColor: '#fff',
                    outlineAlpha: 1,
                    outlineColor: 'transparent',
                    outlineThickness: 1,
                    color: '#000000'
                },
                dataProvider: {
                    map: 'continentsLow',
                    areas: [{
                            id: 'africa',
                            title: 'Africa',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'asia',
                            title: 'Asia',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'australia',
                            title: 'Australia',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'europe',
                            title: 'Europe',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'north_america',
                            title: 'North America',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }, {
                            id: 'south_america',
                            title: 'South America',
                            pattern: { url: '../assets/images/widget/map-bg.png', width: 4, height: 4 }
                        }]
                },
                zoomControl: { panControlEnabled: false, zoomControlEnabled: false, homeButtonEnabled: false },
            });
            /* statistics chart start */
            var statistic_tag = ((_this.statisticsChart.nativeElement.children));
            _this.statisticsTag = ((statistic_tag['statistics_chart']).lastChild).getContext('2d');
            var efgh = (_this.statisticsTag).createLinearGradient(500, 0, 100, 0);
            efgh.addColorStop(0, '#fd93a8');
            efgh.addColorStop(1, '#FC6180');
            var fgh = (_this.statisticsTag).createLinearGradient(500, 0, 100, 0);
            fgh.addColorStop(1, '#56CCF2');
            fgh.addColorStop(0, '#2F80ED');
            _this.statisticsData = {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
                datasets: [{
                        label: 'Data',
                        borderColor: efgh,
                        pointBorderColor: efgh,
                        pointBackgroundColor: efgh,
                        pointHoverBackgroundColor: efgh,
                        pointHoverBorderColor: efgh,
                        pointBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointHoverBorderWidth: 1,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 4,
                        data: [20, 50, 30, 50, 20, 70, 30]
                    }, {
                        label: 'Data',
                        borderColor: fgh,
                        pointBorderColor: fgh,
                        pointBackgroundColor: fgh,
                        pointHoverBackgroundColor: fgh,
                        pointHoverBorderColor: fgh,
                        pointBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointHoverBorderWidth: 1,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 4,
                        data: [40, 30, 50, 15, 50, 50, 80]
                    }]
            };
            _this.statisticsOption = {
                legend: { position: 'top' },
                tooltips: { enabled: true, intersect: !1, mode: 'nearest', xPadding: 10, yPadding: 10, caretPadding: 10 },
                scales: {
                    yAxes: [{
                            ticks: {
                                fontColor: 'rgba(0,0,0,0.5)',
                                fontStyle: 'bold',
                                beginAtZero: true,
                                maxTicksLimit: 5,
                                padding: 20,
                            }, gridLines: { drawTicks: false, display: false }
                        }],
                    xAxes: [{
                            gridLines: { drawTicks: false, display: false },
                            ticks: { padding: 20, fontColor: 'rgba(0,0,0,0.5)', fontStyle: 'bold' }
                        }]
                },
            };
            /* statistics chart end */
            /* process compliance start */
            var process_compliance = ((_this.processComplianceChart.nativeElement.children));
            _this.processComplianceTag = ((process_compliance['process_compliance_chart']).lastChild).getContext('2d');
            var a = (_this.processComplianceTag).createLinearGradient(0, 0, 0, 600);
            a.addColorStop(1, '#56CCF2');
            a.addColorStop(0, '#4099ff');
            _this.processComplianceData = {
                labels: ['', '2012', '2013', '2014', '2015', '2016', '2017', '2018', ''],
                datasets: [{
                        label: '# of Votes',
                        data: [0, 12, 28, 23, 18, 45, 19, 36],
                        backgroundColor: a,
                        hoverBackgroundColor: a,
                        hoverBorderWidth: 0,
                    }]
            };
            _this.processComplianceOption = {
                legend: { display: false },
                scales: {
                    yAxes: [{
                            gridLines: { display: false, drawBorder: false },
                            ticks: { display: false },
                        }], xAxes: [{ gridLines: { display: false, drawBorder: false } }]
                }
            };
            /* process compliance end */
            /* user chart 1 start */
            var user_chart1 = ((_this.userChart1.nativeElement.children));
            _this.userChart1Tag = ((user_chart1['user_chart1']).lastChild).getContext('2d');
            var b = (_this.userChart1Tag).createLinearGradient(0, 0, 0, 150);
            b.addColorStop(0, 'rgba(70, 128, 255, 1');
            b.addColorStop(1, 'rgba(70, 128, 255, 0.8');
            _this.userChart1Data = l('rgb(70, 128, 255)', [0, 30, 10, 45, 30, 55, 30, 30, 70, 90], b);
            _this.userChart1Option = h('rgba(70, 128, 255,0.8)');
            /* user chart 1 end */
            /* user chart 2 start */
            var user_chart2 = ((_this.userChart2.nativeElement.children));
            _this.userChart2Tag = ((user_chart2['user_chart2']).lastChild).getContext('2d');
            var c = (_this.userChart1Tag).createLinearGradient(0, 0, 0, 150);
            c.addColorStop(0, 'rgba(147, 190, 82, 1');
            c.addColorStop(1, 'rgba(147, 190, 82, 0.8');
            _this.userChart2Data = l('rgb(147, 190, 82)', [0, 30, 10, 45, 30, 55, 30, 30, 70, 90], c);
            _this.userChart2Option = h('rgba(147, 190, 82,0.8)');
            /* user chart 2 end */
            /* user chart 3 start */
            var user_chart3 = ((_this.userChart3.nativeElement.children));
            _this.userChart3Tag = ((user_chart3['user_chart3']).lastChild).getContext('2d');
            var d = (_this.userChart3Tag).createLinearGradient(0, 0, 0, 150);
            d.addColorStop(0, 'rgba(255, 182, 77, 1');
            d.addColorStop(1, 'rgba(255, 182, 77, 0.8');
            _this.userChart3Data = l('rgb(255, 182, 77)', [0, 30, 10, 45, 30, 55, 30, 30, 70, 90], d);
            _this.userChart3Option = h('rgba(255, 182, 77,0.8)');
            /* user chart 3 end */
            /* amount card 1 to 4 start */
            _this.amountCardData = j('#fff', [40, 30, 45, 30, 35], '#fff');
            _this.amountCardOption = g();
            /* amount card 1 to 4 end */
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
        }, 75);
    };
    __decorate([
        core_1.ViewChild('studentChart'),
        __metadata("design:type", core_1.ElementRef)
    ], ChartWidgetComponent.prototype, "studentChart", void 0);
    __decorate([
        core_1.ViewChild('seoCard1Chart'),
        __metadata("design:type", core_1.ElementRef)
    ], ChartWidgetComponent.prototype, "seoCard1Chart", void 0);
    __decorate([
        core_1.ViewChild('seoCard2Chart'),
        __metadata("design:type", core_1.ElementRef)
    ], ChartWidgetComponent.prototype, "seoCard2Chart", void 0);
    __decorate([
        core_1.ViewChild('statisticsChart'),
        __metadata("design:type", core_1.ElementRef)
    ], ChartWidgetComponent.prototype, "statisticsChart", void 0);
    __decorate([
        core_1.ViewChild('processComplianceChart'),
        __metadata("design:type", core_1.ElementRef)
    ], ChartWidgetComponent.prototype, "processComplianceChart", void 0);
    __decorate([
        core_1.ViewChild('userChart1'),
        __metadata("design:type", core_1.ElementRef)
    ], ChartWidgetComponent.prototype, "userChart1", void 0);
    __decorate([
        core_1.ViewChild('userChart2'),
        __metadata("design:type", core_1.ElementRef)
    ], ChartWidgetComponent.prototype, "userChart2", void 0);
    __decorate([
        core_1.ViewChild('userChart3'),
        __metadata("design:type", core_1.ElementRef)
    ], ChartWidgetComponent.prototype, "userChart3", void 0);
    ChartWidgetComponent = __decorate([
        core_1.Component({
            selector: 'app-chart-widget',
            templateUrl: './chart-widget.component.html',
            styleUrls: [
                './chart-widget.component.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ChartWidgetComponent);
    return ChartWidgetComponent;
}());
exports.ChartWidgetComponent = ChartWidgetComponent;
function e(hg, gh, i) {
    if (i == null) {
        i = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
                label: '',
                borderColor: hg,
                borderWidth: 2,
                hitRadius: 0,
                pointHoverRadius: 0,
                pointRadius: 3,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: '#fff',
                pointBorderColor: hg,
                pointHoverBackgroundColor: hg,
                pointHoverBorderColor: '#000',
                fill: true,
                backgroundColor: i,
                data: gh,
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
function l(r, q, s) {
    if (s == null) {
        s = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
                label: 'Data',
                borderColor: r,
                pointBorderColor: r,
                pointBackgroundColor: r,
                pointHoverBackgroundColor: r,
                pointHoverBorderColor: r,
                pointBorderWidth: 0,
                lineTension: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                fill: true,
                backgroundColor: s,
                borderWidth: 2,
                data: q
            }]
    };
}
function h(q) {
    return {
        legend: { display: false },
        tooltips: {
            enabled: true,
            intersect: !1,
            mode: 'nearest',
            backgroundColor: q,
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
        },
        scales: {
            yAxes: [{
                    ticks: {
                        fontColor: 'rgba(0,0,0,0.5)',
                        fontStyle: 'bold',
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        padding: 20
                    }
                }],
            xAxes: [{
                    gridLines: { zeroLineColor: 'transparent', drawTicks: false, display: false },
                    ticks: { padding: 20, fontColor: 'rgba(0,0,0,0.5)', fontStyle: 'bold' }
                }]
        }
    };
}
function j(r, q, s) {
    if (s == null) {
        s = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
                label: '',
                borderColor: r,
                borderWidth: 2,
                hitRadius: 30,
                pointHoverRadius: 4,
                pointBorderWidth: 50,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: r,
                pointHoverBorderColor: 'transparent',
                fill: true,
                backgroundColor: s,
                data: q,
            }]
    };
}
function g() {
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
//# sourceMappingURL=chart-widget.component.js.map