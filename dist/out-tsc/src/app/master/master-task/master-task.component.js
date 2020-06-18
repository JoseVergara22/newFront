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
var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var MasterTaskComponent = /** @class */ (function () {
    function MasterTaskComponent() {
        this.setView = 'Month';
    }
    MasterTaskComponent.prototype.ngOnInit = function () {
    };
    MasterTaskComponent = __decorate([
        core_1.Component({
            selector: 'app-master-task',
            templateUrl: './master-task.component.html',
            styleUrls: ['./master-task.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], MasterTaskComponent);
    return MasterTaskComponent;
}());
exports.MasterTaskComponent = MasterTaskComponent;
//# sourceMappingURL=master-task.component.js.map