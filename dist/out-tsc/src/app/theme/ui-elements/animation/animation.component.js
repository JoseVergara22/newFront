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
var css_animator_1 = require("css-animator");
var AnimationComponent = /** @class */ (function () {
    function AnimationComponent(animationService) {
        this.animation = 'bounce';
        this.isVisible = true;
        this.isAnimating = false;
        this.animator = animationService.builder();
        this.animator.useVisibility = true;
    }
    AnimationComponent.prototype.ngOnInit = function () {
    };
    AnimationComponent.prototype.animate = function (element, animation, status) {
        var _this = this;
        if (status) {
            this.animation = animation;
        }
        this.isAnimating = true;
        this.animator
            .setType(this.animation)
            .setDuration(1500)
            .animate(element)
            .then(function () {
            _this.isAnimating = false;
        })
            .catch(function (e) {
            _this.isAnimating = false;
            console.log('css-animator: Animation aborted', e);
        });
    };
    AnimationComponent = __decorate([
        core_1.Component({
            selector: 'app-animation',
            templateUrl: './animation.component.html',
            styleUrls: [
                './animation.component.scss',
                '../../../../scss/animation.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [css_animator_1.AnimationService])
    ], AnimationComponent);
    return AnimationComponent;
}());
exports.AnimationComponent = AnimationComponent;
//# sourceMappingURL=animation.component.js.map