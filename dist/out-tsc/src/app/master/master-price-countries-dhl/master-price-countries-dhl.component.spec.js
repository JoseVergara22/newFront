"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var master_price_countries_dhl_component_1 = require("./master-price-countries-dhl.component");
describe('MasterPriceCountriesDhlComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [master_price_countries_dhl_component_1.MasterPriceCountriesDhlComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(master_price_countries_dhl_component_1.MasterPriceCountriesDhlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=master-price-countries-dhl.component.spec.js.map