"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var master_multi_date_picker_show_component_1 = require("./master-multi-date-picker-show.component");
describe('MasterMultiDatePickerShowComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [master_multi_date_picker_show_component_1.MasterMultiDatePickerShowComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(master_multi_date_picker_show_component_1.MasterMultiDatePickerShowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=master-multi-date-picker-show.component.spec.js.map