"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var menu_items_master_service_1 = require("./menu-items-master.service");
describe('MenuItemsMasterService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [menu_items_master_service_1.MenuItemsMasterService]
        });
    });
    it('should be created', testing_1.inject([menu_items_master_service_1.MenuItemsMasterService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=menu-items-master.service.spec.js.map