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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var TitleComponent = /** @class */ (function () {
    function TitleComponent(router, route, titleService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function () {
            var currentRoute = _this.route.root;
            var title = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (routes) {
                    if (routes.outlet === 'primary') {
                        title = routes.snapshot.data.title;
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
            if (title !== undefined) {
                _this.titleService.setTitle('Montacargas Master');
                // title + ' | Gradient Able Angular 5+
            }
        });
    }
    TitleComponent = __decorate([
        core_1.Component({
            selector: 'app-title',
            template: '<span></span>'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, platform_browser_1.Title])
    ], TitleComponent);
    return TitleComponent;
}());
exports.TitleComponent = TitleComponent;
//# sourceMappingURL=title.component.js.map