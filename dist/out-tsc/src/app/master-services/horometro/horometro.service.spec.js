"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var horometro_service_1 = require("./horometro.service");
describe('HorometroService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [horometro_service_1.HorometroService]
        });
    });
    it('should be created', testing_1.inject([horometro_service_1.HorometroService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=horometro.service.spec.js.map