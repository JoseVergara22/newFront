"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var forklift_service_1 = require("./forklift.service");
describe('ForkliftService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [forklift_service_1.ForkliftService]
        });
    });
    it('should be created', testing_1.inject([forklift_service_1.ForkliftService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=forklift.service.spec.js.map