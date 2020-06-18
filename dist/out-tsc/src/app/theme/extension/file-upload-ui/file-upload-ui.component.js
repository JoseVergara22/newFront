"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_file_upload_1 = require("ng2-file-upload");
var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var FileUploadUiComponent = /** @class */ (function () {
    function FileUploadUiComponent() {
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: URL,
            isHTML5: true
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    FileUploadUiComponent.prototype.ngOnInit = function () {
    };
    FileUploadUiComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploadUiComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    FileUploadUiComponent = __decorate([
        core_1.Component({
            selector: 'app-file-upload-ui',
            templateUrl: './file-upload-ui.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styleUrls: ['./file-upload-ui.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FileUploadUiComponent);
    return FileUploadUiComponent;
}());
exports.FileUploadUiComponent = FileUploadUiComponent;
//# sourceMappingURL=file-upload-ui.component.js.map