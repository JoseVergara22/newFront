"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var filexcel_service_1 = require("./filexcel.service");
describe('FilexcelService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [filexcel_service_1.FilexcelService]
        });
    });
    it('should be created', testing_1.inject([filexcel_service_1.FilexcelService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=filexcel.service.spec.js.map