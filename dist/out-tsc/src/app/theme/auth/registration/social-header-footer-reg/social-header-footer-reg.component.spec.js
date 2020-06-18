"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var social_header_footer_reg_component_1 = require("./social-header-footer-reg.component");
describe('SocialHeaderFooterRegComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [social_header_footer_reg_component_1.SocialHeaderFooterRegComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(social_header_footer_reg_component_1.SocialHeaderFooterRegComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=social-header-footer-reg.component.spec.js.map