"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var work_service_1 = require("./work.service");
describe('WorkService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [work_service_1.WorkService]
        });
    });
    it('should be created', testing_1.inject([work_service_1.WorkService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=work.service.spec.js.map