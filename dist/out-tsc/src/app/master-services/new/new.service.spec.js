"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var new_service_1 = require("./new.service");
describe('NewService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [new_service_1.NewService]
        });
    });
    it('should be created', testing_1.inject([new_service_1.NewService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=new.service.spec.js.map