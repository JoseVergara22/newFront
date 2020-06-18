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
var forms_1 = require("@angular/forms");
var ng2_validation_1 = require("ng2-validation");
var FormValidationComponent = /** @class */ (function () {
    function FormValidationComponent() {
        var name = new forms_1.FormControl('', forms_1.Validators.required);
        var password = new forms_1.FormControl('', forms_1.Validators.required);
        var gender = new forms_1.FormControl('', forms_1.Validators.required);
        var email = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        var rpassword = new forms_1.FormControl('', [forms_1.Validators.required, ng2_validation_1.CustomValidators.equalTo(password)]);
        this.myForm = new forms_1.FormGroup({
            name: name,
            email: email,
            password: password,
            rpassword: rpassword,
            gender: gender
        });
        /*Basic validation end*/
        /*number Validation start*/
        var integer = new forms_1.FormControl('', [forms_1.Validators.required, ng2_validation_1.CustomValidators.digits]);
        var numeric = new forms_1.FormControl('', [forms_1.Validators.required, ng2_validation_1.CustomValidators.number]);
        var greater = new forms_1.FormControl('', [forms_1.Validators.required, ng2_validation_1.CustomValidators.gt(50)]);
        var less = new forms_1.FormControl('', [forms_1.Validators.required, ng2_validation_1.CustomValidators.lt(50)]);
        this.mynumberForm = new forms_1.FormGroup({
            integer: integer,
            numeric: numeric,
            greater: greater,
            less: less
        });
        /*number validation end*/
        /*Tooltip Validation Start*/
        var usernameP = new forms_1.FormControl('', [forms_1.Validators.required]);
        var EmailP = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        this.mytooltipForm = new forms_1.FormGroup({
            usernameP: usernameP,
            EmailP: EmailP,
        });
        /*Tooltip Validation End*/
        /* component form */
        var area = new forms_1.FormControl('', [forms_1.Validators.required]);
        var job = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.checkdropForm = new forms_1.FormGroup({
            area: area,
            job: job,
        });
        /* end component form */
    }
    FormValidationComponent.prototype.ngOnInit = function () {
    };
    FormValidationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.myForm);
    };
    FormValidationComponent = __decorate([
        core_1.Component({
            selector: 'app-form-validation',
            templateUrl: './form-validation.component.html',
            styleUrls: [
                './form-validation.component.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], FormValidationComponent);
    return FormValidationComponent;
}());
exports.FormValidationComponent = FormValidationComponent;
//# sourceMappingURL=form-validation.component.js.map