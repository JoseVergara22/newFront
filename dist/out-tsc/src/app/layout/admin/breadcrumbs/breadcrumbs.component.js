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
var router_1 = require("@angular/router");
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.tempState = [];
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function () {
            _this.breadcrumbs = [];
            _this.tempState = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (routes) {
                    if (routes.outlet === 'primary') {
                        var routeSnapshot = routes.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        if (routes.snapshot.data.title !== undefined) {
                            var status_1 = true;
                            if (routes.snapshot.data.status !== undefined) {
                                status_1 = routes.snapshot.data.status;
                            }
                            var icon = false;
                            if (routes.snapshot.data.icon !== undefined) {
                                icon = routes.snapshot.data.icon;
                            }
                            var caption = false;
                            if (routes.snapshot.data.caption !== undefined) {
                                caption = routes.snapshot.data.caption;
                            }
                            if (!_this.tempState.includes(routes.snapshot.data.title)) {
                                _this.tempState.push(routes.snapshot.data.title);
                                _this.breadcrumbs.push({
                                    label: routes.snapshot.data.title,
                                    icon: icon,
                                    caption: caption,
                                    status: status_1,
                                    url: url
                                });
                            }
                        }
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
        });
    }
    BreadcrumbsComponent = __decorate([
        core_1.Component({
            selector: 'app-breadcrumbs',
            templateUrl: './breadcrumbs.component.html',
            styleUrls: ['./breadcrumbs.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());
exports.BreadcrumbsComponent = BreadcrumbsComponent;
//# sourceMappingURL=breadcrumbs.component.js.map