"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var settlement_service_1 = require("./settlement.service");
describe('SettlementService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [settlement_service_1.SettlementService]
        });
    });
    it('should be created', testing_1.inject([settlement_service_1.SettlementService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=settlement.service.spec.js.map