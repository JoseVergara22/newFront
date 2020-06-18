"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var estimate_service_1 = require("./estimate.service");
describe('EstimateService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [estimate_service_1.EstimateService]
        });
    });
    it('should be created', testing_1.inject([estimate_service_1.EstimateService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=estimate.service.spec.js.map