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
var animations_1 = require("@angular/animations");
var sweetalert2_1 = require("sweetalert2");
var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.showDialog = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.openMyModal = function (event) {
        document.querySelector('#' + event).classList.add('md-show');
    };
    ModalComponent.prototype.closeMyModal = function (event) {
        ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    };
    ModalComponent.prototype.openBasicModal = function (event) {
        this.showDialog = !this.showDialog;
        setTimeout(function () {
            document.querySelector('#' + event).classList.add('md-show');
        }, 25);
    };
    ModalComponent.prototype.closeBasicModal = function (event) {
        var _this = this;
        ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
        setTimeout(function () {
            _this.visible = false;
            _this.showDialog = !_this.showDialog;
        }, 300);
    };
    ModalComponent.prototype.openSwal = function () {
        sweetalert2_1.default({
            title: 'Error!',
            text: 'Do you want to continue',
            type: 'error',
            confirmButtonText: 'Cool',
            allowOutsideClick: true
        }).catch(sweetalert2_1.default.noop);
    };
    ModalComponent.prototype.openBasicSwal = function () {
        sweetalert2_1.default({
            title: 'Heres a message!',
            text: 'Its pretty, isnt it?'
        }).catch(sweetalert2_1.default.noop);
    };
    ModalComponent.prototype.openSuccessSwal = function () {
        sweetalert2_1.default({
            title: 'Good job!',
            text: 'You clicked the button!',
            type: 'success'
        }).catch(sweetalert2_1.default.noop);
    };
    ModalComponent.prototype.openConfirmsSwal = function () {
        sweetalert2_1.default({
            title: 'Are you sure?',
            text: 'You wont be able to revert',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {
            sweetalert2_1.default('Deleted!', 'Your file has been deleted.', 'success');
        }).catch(sweetalert2_1.default.noop);
    };
    ModalComponent.prototype.openSuccessCancelSwal = function () {
        sweetalert2_1.default({
            title: 'Are you sure?',
            text: 'You wont be able to revert',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success m-r-10',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(function () {
            sweetalert2_1.default('Deleted!', 'Your file has been deleted.', 'success');
        }, function (dismiss) {
            if (dismiss === 'cancel') {
                sweetalert2_1.default('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        }).catch(sweetalert2_1.default.noop);
    };
    ModalComponent.prototype.openPromptSwal = function () {
        sweetalert2_1.default.setDefaults({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            animation: false,
            progressSteps: ['1', '2', '3']
        });
        var steps = [
            {
                title: 'Question 1',
                text: 'Chaining swal2 modals is easy'
            },
            'Question 2',
            'Question 3'
        ];
        sweetalert2_1.default.queue(steps).then(function (result) {
            sweetalert2_1.default.resetDefaults();
            sweetalert2_1.default({
                title: 'All done!',
                html: 'Your answers: <pre>' +
                    JSON.stringify(result) +
                    '</pre>',
                confirmButtonText: 'Lovely!',
                showCancelButton: false
            });
        }, function () {
            sweetalert2_1.default.resetDefaults();
        }).catch(sweetalert2_1.default.noop);
    };
    ModalComponent.prototype.openAjaxSwal = function () {
        sweetalert2_1.default({
            title: 'Submit email to run ajax request',
            input: 'email',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: function (email) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (email === 'taken@example.com') {
                            reject('This email is already taken.');
                        }
                        else {
                            resolve();
                        }
                    }, 2000);
                });
            },
            allowOutsideClick: false
        }).then(function (email) {
            sweetalert2_1.default({
                type: 'success',
                title: 'Ajax request finished!',
                html: 'Submitted email: ' + email
            });
        }).catch(sweetalert2_1.default.noop);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "visible", void 0);
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: [
                './modal.component.scss',
                '../../../../../../node_modules/sweetalert2/src/sweetalert2.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: [
                animations_1.trigger('fadeInOutTranslate', [
                    animations_1.transition(':enter', [
                        animations_1.style({ opacity: 0 }),
                        animations_1.animate('400ms ease-in-out', animations_1.style({ opacity: 1 }))
                    ]),
                    animations_1.transition(':leave', [
                        animations_1.style({ transform: 'translate(0)' }),
                        animations_1.animate('400ms ease-in-out', animations_1.style({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map