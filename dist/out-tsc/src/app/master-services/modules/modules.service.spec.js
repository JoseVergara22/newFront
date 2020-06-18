"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var modules_service_1 = require("./modules.service");
describe('ModulesService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [modules_service_1.ModulesService]
        });
    });
    it('should be created', testing_1.inject([modules_service_1.ModulesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=modules.service.spec.js.map