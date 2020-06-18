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
var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            AmCharts.makeChart('visitor-list-graph', {
                'type': 'serial',
                'theme': 'light',
                'dataDateFormat': 'YYYY-MM-DD',
                'precision': 2,
                'valueAxes': [{
                        'id': 'v1',
                        'title': 'Visitors',
                        'position': 'left',
                        'autoGridCount': false,
                        'labelFunction': function (value) {
                            return '$' + Math.round(value) + 'M';
                        }
                    }, {
                        'id': 'v2',
                        'title': 'New Visitors',
                        'gridAlpha': 0,
                        'position': 'right',
                        'autoGridCount': false
                    }],
                'graphs': [{
                        'id': 'g3',
                        'valueAxis': 'v1',
                        'lineColor': '#a8d1ff',
                        'fillColors': '#a8d1ff',
                        'fillAlphas': 1,
                        'type': 'column',
                        'title': 'old Visitor',
                        'valueField': 'sales2',
                        'clustered': false,
                        'columnWidth': 0.5,
                        'legendValueText': '$[[value]]M',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                    }, {
                        'id': 'g4',
                        'valueAxis': 'v1',
                        'lineColor': '#4099ff',
                        'fillColors': '#4099ff',
                        'fillAlphas': 1,
                        'type': 'column',
                        'title': 'New visitor',
                        'valueField': 'sales1',
                        'clustered': false,
                        'columnWidth': 0.3,
                        'legendValueText': '$[[value]]M',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                    }, {
                        'id': 'g1',
                        'valueAxis': 'v2',
                        'bullet': 'round',
                        'bulletBorderAlpha': 1,
                        'bulletColor': '#FFFFFF',
                        'bulletSize': 5,
                        'hideBulletsCount': 50,
                        'lineThickness': 2,
                        'lineColor': '#2ed8b6',
                        'type': 'smoothedLine',
                        'title': 'Last Month Visitor',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v2',
                        'bullet': 'round',
                        'bulletBorderAlpha': 1,
                        'bulletColor': '#FFFFFF',
                        'bulletSize': 5,
                        'hideBulletsCount': 50,
                        'lineThickness': 2,
                        'lineColor': '#FF5370',
                        // 'type': 'smoothedLine',
                        'dashLength': 5,
                        'title': 'Average Visitor',
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
                    'dashLength': 1,
                    'minorGridEnabled': true
                },
                'legend': {
                    'useGraphSettings': true,
                    'position': 'top'
                },
                'balloon': {
                    'borderThickness': 1,
                    'cornerRadius': 5,
                    'shadowAlpha': 0
                },
                'dataProvider': [{
                        'date': '2013-01-16',
                        'market1': 71,
                        'market2': 75,
                        'sales1': 5,
                        'sales2': 8
                    }, {
                        'date': '2013-01-17',
                        'market1': 74,
                        'market2': 78,
                        'sales1': 4,
                        'sales2': 6
                    }, {
                        'date': '2013-01-18',
                        'market1': 78,
                        'market2': 88,
                        'sales1': 5,
                        'sales2': 2
                    }, {
                        'date': '2013-01-19',
                        'market1': 85,
                        'market2': 89,
                        'sales1': 8,
                        'sales2': 9
                    }, {
                        'date': '2013-01-20',
                        'market1': 82,
                        'market2': 89,
                        'sales1': 9,
                        'sales2': 6
                    }, {
                        'date': '2013-01-21',
                        'market1': 83,
                        'market2': 85,
                        'sales1': 3,
                        'sales2': 5
                    }, {
                        'date': '2013-01-22',
                        'market1': 88,
                        'market2': 92,
                        'sales1': 5,
                        'sales2': 7
                    }, {
                        'date': '2013-01-23',
                        'market1': 85,
                        'market2': 90,
                        'sales1': 7,
                        'sales2': 6
                    }, {
                        'date': '2013-01-24',
                        'market1': 85,
                        'market2': 91,
                        'sales1': 9,
                        'sales2': 5
                    }, {
                        'date': '2013-01-25',
                        'market1': 80,
                        'market2': 84,
                        'sales1': 5,
                        'sales2': 8
                    }, {
                        'date': '2013-01-26',
                        'market1': 87,
                        'market2': 92,
                        'sales1': 4,
                        'sales2': 8
                    }, {
                        'date': '2013-01-27',
                        'market1': 84,
                        'market2': 87,
                        'sales1': 3,
                        'sales2': 4
                    }, {
                        'date': '2013-01-28',
                        'market1': 83,
                        'market2': 88,
                        'sales1': 5,
                        'sales2': 7
                    }, {
                        'date': '2013-01-29',
                        'market1': 84,
                        'market2': 87,
                        'sales1': 5,
                        'sales2': 8
                    }, {
                        'date': '2013-01-30',
                        'market1': 81,
                        'market2': 85,
                        'sales1': 4,
                        'sales2': 7
                    }]
            });
            /* power card chart start */
            _this.powerCardData = gurubuildchartjs('#4099ff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], null);
            _this.powerCardOption = gurubuildchartoption();
            /* power card chart and */
            /* water card chart start */
            _this.waterCardData = gurubuildchartjs('#FFB64D', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], null);
            _this.waterCardOption = gurubuildchartoption();
            /* water card chart and */
            /* energy card chart start */
            _this.energyCardData = gurubuildchartjs('#2ed8b6', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], null);
            _this.energyCardOption = gurubuildchartoption();
            /* energy card chart and */
            /* amount card 1 to 4 start */
            _this.amountCardData = j('#fff', [40, 30, 45, 30, 35], '#fff');
            _this.amountCardOption = g();
            /* amount card 1 to 4 end */
        }, 75);
    };
    AnalyticsComponent = __decorate([
        core_1.Component({
            selector: 'app-analytics',
            templateUrl: './analytics.component.html',
            styleUrls: [
                './analytics.component.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());
exports.AnalyticsComponent = AnalyticsComponent;
function gurubuildchartjs(a, b, f) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 2,
                hitRadius: 30,
                pointHoverRadius: 4,
                pointBorderWidth: 50,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: 'transparent',
                fill: true,
                backgroundColor: f,
                data: b,
            }]
    };
}
function gurubuildchartoption() {
    return {
        title: {
            display: !1
        },
        tooltips: {
            enabled: true,
            intersect: !1,
            mode: 'nearest',
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
        },
        legend: {
            display: !1,
            labels: {
                usePointStyle: !1
            }
        },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: {
                        display: !0,
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                }]
        },
        elements: {
            point: {
                radius: 4,
                borderWidth: 12
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 5,
                bottom: 0
            }
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
//# sourceMappingURL=analytics.component.js.map