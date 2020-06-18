"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var upload_service_1 = require("./upload.service");
describe('UploadService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [upload_service_1.UploadService]
        });
    });
    it('should be created', testing_1.inject([upload_service_1.UploadService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=upload.service.spec.js.map