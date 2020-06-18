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
var ChartJsComponent = /** @class */ (function () {
    function ChartJsComponent() {
        this.type = 'doughnut';
        this.data = {
            labels: [
                'A', 'B', 'C', 'D '
            ],
            datasets: [{
                    data: [40, 10, 40, 10],
                    backgroundColor: [
                        '#1ABC9C',
                        '#FCC9BA',
                        '#B8EDF0',
                        '#B4C1D7'
                    ],
                    borderWidth: [
                        '0px',
                        '0px',
                        '0px',
                        '0px'
                    ],
                    borderColor: [
                        '#1ABC9C',
                        '#FCC9BA',
                        '#B8EDF0',
                        '#B4C1D7'
                    ]
                }]
        };
        /*Bar chart Start*/
        this.type1 = 'bar';
        this.data1 = {
            labels: [0, 1, 2, 3, 4, 5, 6, 7],
            datasets: [{
                    label: 'My First dataset',
                    backgroundColor: [
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)'
                    ],
                    data: [65, 59, 80, 81, 56, 55, 50],
                }, {
                    label: 'My second dataset',
                    backgroundColor: [
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)'
                    ],
                    data: [60, 69, 85, 91, 58, 50, 45],
                }]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
        };
        /*Bar chart End*/
        /*Radar chart Start*/
        this.type2 = 'radar';
        this.data2 = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgba(100, 221, 187, 0.52)',
                    borderColor: 'rgba(72, 206, 168, 0.88)',
                    pointBackgroundColor: 'rgba(51, 175, 140, 0.88)',
                    pointBorderColor: 'rgba(44, 130, 105, 0.88)',
                    pointHoverBackgroundColor: 'rgba(44, 130, 105, 0.88)',
                    pointHoverBorderColor: 'rgba(107, 226, 193, 0.98)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                }, {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255, 204, 189, 0.95)',
                    borderColor: 'rgba(255, 165, 138, 0.95)',
                    pointBackgroundColor: 'rgba(255, 116, 22, 0.94)',
                    pointBorderColor: 'rgba(251, 142, 109, 0.95)',
                    pointHoverBackgroundColor: 'rgba(251, 142, 109, 0.95)',
                    pointHoverBorderColor: 'rgba(255, 165, 138, 0.95)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }]
        };
        this.options2 = {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
        };
        /*Radar chart End*/
        /*Polar chart*/
        this.type3 = 'polarArea';
        this.data3 = {
            datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        '#7E81CB',
                        '#1ABC9C',
                        '#B8EDF0',
                        '#B4C1D7',
                        '#01C0C8'
                    ],
                    hoverBackgroundColor: [
                        '#a1a4ec',
                        '#2adab7',
                        '#a7e7ea',
                        '#a5b0c3',
                        '#10e6ef'
                    ],
                    label: 'My dataset' // for legend
                }],
            labels: [
                'Blue',
                'Green',
                'Light Blue',
                'grey',
                'Sea Green'
            ]
        };
        this.options3 = {
            elements: {
                arc: {
                    borderColor: ''
                }
            }
        };
        /*Polar chart*/
        /*Pie chart*/
        this.type4 = 'pie';
        this.data4 = {
            labels: [
                'Blue',
                'Orange',
                'Sea Green'
            ],
            datasets: [{
                    data: [30, 30, 40],
                    backgroundColor: [
                        '#25A6F7',
                        '#FB9A7D',
                        '#01C0C8'
                    ],
                    hoverBackgroundColor: [
                        '#6cc4fb',
                        '#ffb59f',
                        '#0dedf7'
                    ]
                }]
        };
        this.type5 = 'bubble';
        this.data5 = {
            datasets: [{
                    label: 'First Dataset',
                    data: [{
                            x: 20,
                            y: 20,
                            r: 15
                        }, {
                            x: 10,
                            y: 15,
                            r: 10
                        }, {
                            x: 25,
                            y: 11,
                            r: 8
                        }, {
                            x: 15,
                            y: 13,
                            r: 8
                        }, {
                            x: 35,
                            y: 18,
                            r: 6
                        }, {
                            x: 40,
                            y: 10,
                            r: 10
                        }],
                    backgroundColor: '#FF6384',
                    hoverBackgroundColor: '#FF6384',
                }]
        };
        this.options5 = {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                points: {
                    borderWidth: 1,
                    borderColor: 'rgb(0, 0, 0)'
                }
            }
        };
        this.type6 = 'line';
        this.options6 = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        type: 'logarithmic',
                        position: 'bottom',
                        ticks: {
                            min: 1,
                            max: 1000
                        }
                    }]
            }
        };
    }
    ChartJsComponent.prototype.ngOnInit = function () {
    };
    ChartJsComponent = __decorate([
        core_1.Component({
            selector: 'app-chart-js',
            templateUrl: './chart-js.component.html',
            styleUrls: ['./chart-js.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ChartJsComponent);
    return ChartJsComponent;
}());
exports.ChartJsComponent = ChartJsComponent;
//# sourceMappingURL=chart-js.component.js.map