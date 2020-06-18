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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var sweetalert2_1 = require("sweetalert2");
var router_1 = require("@angular/router");
var new_service_1 = require("../../master-services/new/new.service");
var upload_service_1 = require("../../master-services/services/upload.service");
var angular2_uuid_1 = require("angular2-uuid");
var MasterCreateSliderComponent = /** @class */ (function () {
    function MasterCreateSliderComponent(newsevice, router, uploadService) {
        this.newsevice = newsevice;
        this.router = router;
        this.uploadService = uploadService;
        this.submitted = false;
        this.selectedFiles = null;
        this.newSelectedFiles = null;
        this.enabled = true;
        this.loadingData();
        var title = new forms_1.FormControl('', forms_1.Validators.required);
        var subtitle = new forms_1.FormControl('', forms_1.Validators.required);
        var image = new forms_1.FormControl();
        var active = new forms_1.FormControl(true);
        var description = new forms_1.FormControl('', forms_1.Validators.required);
        this.myForm = new forms_1.FormGroup({
            title: title,
            subtitle: subtitle,
            description: description,
            image: image,
            active: active
        });
        var titleUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var subtitleUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        var imageUpdate = new forms_1.FormControl();
        var activeUpdate = new forms_1.FormControl();
        var descriptionUpdate = new forms_1.FormControl('', forms_1.Validators.required);
        this.myFormUpdate = new forms_1.FormGroup({
            titleUpdate: titleUpdate,
            subtitleUpdate: subtitleUpdate,
            descriptionUpdate: descriptionUpdate,
            imageUpdate: imageUpdate,
            activeUpdate: activeUpdate
        });
    }
    MasterCreateSliderComponent.prototype.ngOnInit = function () {
    };
    MasterCreateSliderComponent.prototype.ngAfterContentInit = function () {
    };
    MasterCreateSliderComponent.prototype.onChangeUpdate = function (check) {
        console.log(check);
        this.enabledUpdated = check;
    };
    MasterCreateSliderComponent.prototype.onChangeCreate = function (check) {
        console.log(check);
        this.enabled = check;
    };
    MasterCreateSliderComponent.prototype.loadingData = function () {
        var _this = this;
        sweetalert2_1.default({
            title: 'Validando información ...',
            allowOutsideClick: false
        });
        sweetalert2_1.default.showLoading();
        this.newsevice.getNews().then(function (data) {
            var resp = data;
            console.log(data);
            sweetalert2_1.default.close();
            _this.rowsClientN = resp.data;
            _this.rowStaticN = resp.data;
            _this.rowsTempN = resp.data;
            console.log(_this.rowsClientN);
            _this.newsevice.getNewsImages().then(function (data) {
                var resp = data;
                console.log(data);
                sweetalert2_1.default.close();
                _this.rowsClientI = resp.data;
                _this.rowStaticI = resp.data;
                _this.rowsTempI = resp.data;
                console.log(_this.rowsClientI);
            }).catch(function (error) {
                sweetalert2_1.default.close();
                console.log(error);
                sweetalert2_1.default({
                    type: 'error',
                    title: 'oops a currido un error',
                    text: 'se ha presentado un error al cargar la informacion',
                    allowOutsideClick: false
                });
            });
        }).catch(function (error) {
            sweetalert2_1.default.close();
            console.log(error);
            sweetalert2_1.default({
                type: 'error',
                title: 'oops a currido un error',
                text: 'se ha presentado un error al cargar la informacion',
                allowOutsideClick: false
            });
        });
    };
    MasterCreateSliderComponent.prototype.upload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, uuid, extension;
            return __generator(this, function (_a) {
                file = this.selectedFiles.item(0);
                uuid = angular2_uuid_1.UUID.UUID();
                console.log(uuid);
                console.log(file.name + '' + file.type);
                extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
                console.log(extension);
                this.uploadService.uploadFile(file).then(function (res) {
                    console.log('s3info' + JSON.stringify(res));
                    _this.s3info = res;
                    console.log(_this.s3info);
                    _this.insertNew();
                }).catch(function (error) {
                    console.log(error);
                    sweetalert2_1.default({
                        type: 'error',
                        title: 'oops a currido un error',
                        text: 'se ha presentado un error al subir la imagen',
                        allowOutsideClick: false
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    MasterCreateSliderComponent.prototype.insertNew = function () {
        var _this = this;
        var active = 0;
        if (this.enabled === true) {
            active = 1;
        }
        console.log(localStorage.getItem('token'));
        console.log('title:' + this.myForm.controls.title.value, 'subtitle:' + this.myForm.controls.subtitle.value, 'text:' + this.myForm.controls.description.value, 'status:' + this.myForm.controls.active.value);
        console.log(localStorage.getItem('token'));
        this.newsevice.createNew(this.myForm.controls.title.value, this.myForm.controls.subtitle.value, this.myForm.controls.description.value, active.toString())
            .then(function (resp) {
            _this.newinfo = resp;
            if (_this.newinfo.success !== true) {
                console.log(resp);
                console.log('error al insertar');
                sweetalert2_1.default.close();
                sweetalert2_1.default({
                    type: 'error',
                    title: 'oops a currido un error',
                    text: 'se ha presentado un error al guardar la noticia',
                    allowOutsideClick: false
                });
            }
            else {
                document.getElementById('createNewHide').click();
                console.log(resp);
                /*  this.myForm.get('title').setValue('');
                  this.myForm.get('subtitle').setValue('');
                  this.myForm.get('description').setValue('');
                  document.getElementById('createNewHide').value = '';*/
                _this.imgURL = null;
                _this.numberPhoto = 0;
                _this.myForm.reset();
                console.log('se inserto correctamente');
                _this.insertNewImage();
                _this.loadingData();
            }
        }).catch(function (error) {
            console.log(error);
            sweetalert2_1.default.close();
            sweetalert2_1.default({
                type: 'error',
                title: 'oops a currido un error',
                text: 'se ha presentado un error al guardar la noticia',
                allowOutsideClick: false
            });
        });
    };
    MasterCreateSliderComponent.prototype.insertNewImage = function () {
        var _this = this;
        console.log('id_new:' + this.newinfo.data.id, 'url:' + this.s3info.Location, 'name:' + this.s3info.ETag, 'bucked:' + this.s3info.Bucket, 'description:' + this.s3info.Location);
        console.log(localStorage.getItem('token'));
        this.newsevice.createNewImage(this.newinfo.data.id, this.s3info.Location, this.s3info.ETag, this.s3info.Bucket, this.s3info.Location)
            .then(function (resp) {
            _this.imageinfo = resp;
            if (_this.imageinfo.success == true) {
                // this.loadingData();
                console.log(resp);
                console.log('se inserto correctamente');
                sweetalert2_1.default.close();
                sweetalert2_1.default({
                    type: 'success',
                    title: 'Se ha guardado la noticia',
                    text: 'la noticia ha guardado correctamente',
                    allowOutsideClick: false
                });
            }
            else {
                console.log(resp);
                console.log('ocurrio un error');
                sweetalert2_1.default.close();
                sweetalert2_1.default({
                    type: 'error',
                    title: 'oops a currido un error',
                    text: 'se ha presentado un error al guardar la imagen',
                    allowOutsideClick: false
                });
            }
        }).catch(function (error) {
            console.log(error);
            sweetalert2_1.default.close();
            sweetalert2_1.default({
                type: 'error',
                title: 'oops a currido un error',
                text: 'se ha presentado un error al guardar la imagen',
                allowOutsideClick: false
            });
        });
    };
    MasterCreateSliderComponent.prototype.preview = function (files, event) {
        var _this = this;
        this.numberPhoto = files.length;
        if (files.length === 0) {
            return console.log('jaja');
        }
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = 'Only images are supported.';
            return;
        }
        this.selectedFiles = event.target.files;
        console.log(this.selectedFiles);
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    MasterCreateSliderComponent.prototype.newPreview = function (files, event) {
        var _this = this;
        this.numberUpdatePhoto = files.length;
        if (files.length === 0) {
            return console.log('no image');
        }
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.newMessage = 'Only images are supported.';
            return;
        }
        this.newSelectedFiles = event.target.files;
        console.log(this.newSelectedFiles);
        var reader = new FileReader();
        this.newImagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.newImgURL = reader.result;
        };
    };
    Object.defineProperty(MasterCreateSliderComponent.prototype, "checkForm", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    MasterCreateSliderComponent.prototype.createNew = function () {
        this.submitted = true;
        //  console.log(this.newSelectedFiles);
        //  console.log(this.selectedFiles);
        if (!this.myForm.invalid) {
            if (this.numberPhoto > 0) {
                // console.log(this.newSelectedFiles);
                sweetalert2_1.default({
                    title: 'Validando información ...',
                    allowOutsideClick: false
                });
                sweetalert2_1.default.showLoading();
                this.upload();
                // this.numberPhoto = 0;
            }
            else {
                console.log('epa');
                sweetalert2_1.default({
                    title: 'Debes cargar una imagen',
                    text: 'Es requerido cargar una imagen',
                    type: 'error'
                });
            }
        } /* else {
          document.getElementById( 'createNewHide').click();
          swal.close();
          swal({
            title: 'alerta',
            text:'complete los campos sombreados',
            allowOutsideClick: false
          });
       }}*/
    };
    MasterCreateSliderComponent.prototype.deleteNew = function (row) {
        var _this = this;
        sweetalert2_1.default({
            title: 'Estás seguro de eliminar este elemento?',
            type: 'warning',
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: 'No',
            confirmButtonText: 'Si'
        })
            .then(function (willDelete) {
            sweetalert2_1.default.showLoading();
            if (willDelete.value) {
                _this.elementDelete = row;
                console.log(row);
                console.log(_this.elementDelete);
                _this.newsevice.deleteNew(Number(_this.elementDelete.id))
                    .then(function (data) {
                    sweetalert2_1.default.showLoading();
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        sweetalert2_1.default({
                            title: 'Esta noticia presenta problemas',
                            text: 'Esta noticia no se puede eliminar',
                            type: 'error'
                        });
                    }
                    else {
                        _this.loadingData();
                        sweetalert2_1.default({
                            title: 'noticia eliminada',
                            type: 'success'
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                console.log(_this.elementDelete.id);
            }
            else {
                // swal('Fail');
            }
            console.log(willDelete);
        });
    };
    Object.defineProperty(MasterCreateSliderComponent.prototype, "checkFormUpdate", {
        get: function () { return this.myFormUpdate.controls; },
        enumerable: true,
        configurable: true
    });
    MasterCreateSliderComponent.prototype.showUpdateNew = function (row) {
        console.log(row);
        this.newImgURL = null;
        console.log(row);
        this.currentNew = row;
        this.lastimage = this.currentNew.image_url;
        console.log(this.lastimage);
        console.log(this.currentNew);
        this.myFormUpdate.get('titleUpdate').setValue(row.title);
        this.myFormUpdate.get('subtitleUpdate').setValue(row.subtitle);
        this.myFormUpdate.get('descriptionUpdate').setValue(row.text);
        this.myFormUpdate.get('imageUpdate').setValue(row.image);
        this.myFormUpdate.get('activeUpdate').setValue(row.status);
        if (this.currentNew.status == 0) {
            this.enabledUpdated = true;
        }
        else {
            this.enabledUpdated = false;
        }
        document.getElementById('uploadNew').click();
    };
    MasterCreateSliderComponent.prototype.updateNew = function () {
        var _this = this;
        console.log(this.myFormUpdate.get('descriptionUpdate'));
        console.log(localStorage.getItem('token'));
        this.submitted = true;
        if (!this.myFormUpdate.invalid) {
            sweetalert2_1.default({
                title: 'Validando información ...',
                allowOutsideClick: false
            });
            sweetalert2_1.default.showLoading();
            var statusTemp = 1;
            if (this.enabledUpdated) {
                statusTemp = 0;
            }
            console.log('id' + this.currentNew.id, 'titulo:' + this.myFormUpdate.controls.titleUpdate.value, 'subtitulo:' + this.myFormUpdate.controls.subtitleUpdate.value, 'text:' + this.myFormUpdate.controls.descriptionUpdate.value, 'status:' + this.myFormUpdate.controls.activeUpdate.value);
            this.newsevice.updateNew(Number(this.currentNew.id), this.myFormUpdate.controls.titleUpdate.value, this.myFormUpdate.controls.subtitleUpdate.value, this.myFormUpdate.controls.descriptionUpdate.value, statusTemp)
                .then(function (data) {
                if (_this.newImgURL == null) {
                    console.log('entra a actualizar imagen');
                    var resp = data;
                    console.log(resp);
                    if (resp.success === false) {
                        document.getElementById('updateNewHide').click();
                        sweetalert2_1.default.close();
                        sweetalert2_1.default({
                            title: 'oops ocurrio un error al actualizar',
                            text: 'Esta noticia no se puede actualizar',
                            type: 'error'
                        });
                    }
                    else {
                        document.getElementById('updateNewHide').click();
                        sweetalert2_1.default.close();
                        // this.router.navigateByUrl('master/registerBrand');
                        document.getElementById('updateNewHide').click();
                        sweetalert2_1.default({
                            title: 'Noticia actualizada',
                            type: 'success'
                        });
                        _this.loadingData();
                        // this.router.navigateByUrl('createSlider');
                    }
                }
                else {
                    _this.updateImage();
                }
            }).catch(function (error) {
                document.getElementById('updateNewHide').click();
                sweetalert2_1.default.close();
                console.log(error);
                sweetalert2_1.default({
                    title: 'oops ocurrio un error al actualizar',
                    text: 'Esta noticia no se puede actualizar',
                    type: 'error'
                });
            });
        }
    };
    MasterCreateSliderComponent.prototype.updateImagedb = function () {
        var _this = this;
        console.log('id_new:' + this.currentNew.id, 'url:' + this.s3info.Location, 'name:' + this.s3info.ETag, 'bucked:' + this.s3info.Bucket, 'description:' + this.s3info.Location);
        console.log(localStorage.getItem('token'));
        this.newsevice.updateImage(this.currentNew.image_id, this.currentNew.id, this.s3info.Location, this.s3info.ETag, this.s3info.Bucket, this.s3info.Location)
            .then(function (resp) {
            _this.imageinfo = resp;
            if (_this.imageinfo.success == true) {
                console.log(resp);
                console.log('se inserto correctamente');
                document.getElementById('updateNewHide').click();
                sweetalert2_1.default.close();
                sweetalert2_1.default({
                    type: 'success',
                    title: 'Se ha guardado la noticia',
                    text: 'la noticia ha guardado correctamente',
                    allowOutsideClick: false
                }).then(function (willRefresh) {
                    _this.router.navigateByUrl('createSlider');
                });
            }
            else {
                console.log(resp);
                document.getElementById('updateNewHide').click();
                console.log('ocurrio un error');
                sweetalert2_1.default.close();
                sweetalert2_1.default({
                    type: 'error',
                    title: 'oops a currido un error',
                    text: 'se ha presentado un error al guardar la imagen',
                    allowOutsideClick: false
                });
            }
        }).catch(function (error) {
            console.log(error);
            document.getElementById('updateNewHide').click();
            sweetalert2_1.default.close();
            sweetalert2_1.default({
                type: 'error',
                title: 'oops a currido un error',
                text: 'se ha presentado un error al guardar la imagen',
                allowOutsideClick: false
            });
        });
    };
    MasterCreateSliderComponent.prototype.updateImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, uuid, extension;
            return __generator(this, function (_a) {
                file = this.newSelectedFiles.item(0);
                uuid = angular2_uuid_1.UUID.UUID();
                console.log(uuid);
                console.log(file.name + '' + file.type);
                extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
                console.log(extension);
                this.uploadService.uploadFile(file).then(function (res) {
                    console.log('s3info' + JSON.stringify(res));
                    _this.s3info = res;
                    console.log(_this.s3info);
                    _this.updateImagedb();
                }).catch(function (error) {
                    console.log(error);
                    sweetalert2_1.default({
                        type: 'error',
                        title: 'oops a currido un error',
                        text: 'se ha presentado un error al subir la imagen',
                        allowOutsideClick: false
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    MasterCreateSliderComponent = __decorate([
        core_1.Component({
            selector: 'app-master-create-slider',
            templateUrl: './master-create-slider.component.html',
            styleUrls: ['./master-create-slider.component.scss',
                '../../../assets/icon/icofont/css/icofont.scss']
        }),
        __metadata("design:paramtypes", [new_service_1.NewService,
            router_1.Router,
            upload_service_1.UploadService])
    ], MasterCreateSliderComponent);
    return MasterCreateSliderComponent;
}());
exports.MasterCreateSliderComponent = MasterCreateSliderComponent;
//# sourceMappingURL=master-create-slider.component.js.map