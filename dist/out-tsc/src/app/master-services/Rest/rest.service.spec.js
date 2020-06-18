"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var rest_service_1 = require("./rest.service");
describe('RestService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [rest_service_1.RestService]
        });
    });
    it('should be created', testing_1.inject([rest_service_1.RestService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=rest.service.spec.js.map