"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var master_create_warehouses_out_component_1 = require("./master-create-warehouses-out.component");
describe('MasterCreateWarehousesOutComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [master_create_warehouses_out_component_1.MasterCreateWarehousesOutComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(master_create_warehouses_out_component_1.MasterCreateWarehousesOutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=master-create-warehouses-out.component.spec.js.map