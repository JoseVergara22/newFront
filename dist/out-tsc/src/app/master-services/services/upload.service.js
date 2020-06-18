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
var estimate_service_1 = require("../estimate/estimate.service");
var settlement_service_1 = require("../settlement/settlement.service");
var work_service_1 = require("../../master-services/Work/work.service");
var S3 = require("aws-sdk/clients/s3");
var angular2_uuid_1 = require("angular2-uuid");
var UploadService = /** @class */ (function () {
    function UploadService(workService, estimateService, settlementService) {
        this.workService = workService;
        this.estimateService = estimateService;
        this.settlementService = settlementService;
    }
    UploadService.prototype.uploadFile = function (file) {
        return new Promise(function (resolve) {
            var contentType = file.type;
            var bucket = new S3({
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            });
            var uuid = angular2_uuid_1.UUID.UUID();
            console.log(uuid);
            console.log(file.name + '' + file.type);
            var extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
            console.log(extension);
            var nameFile = uuid + '' + extension;
            console.log(nameFile);
            var params = {
                Bucket: 'masterforklift',
                Key: nameFile,
                Body: file,
                ACL: 'public-read',
                ContentType: contentType
            };
            bucket.upload(params).promise().then(function (resp) {
                console.log(resp);
                resolve(resp);
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    UploadService.prototype.uploadFileForklift = function (file, idForlift) {
        var _this = this;
        return new Promise(function (resolve) {
            var contentType = file.type;
            var bucket = new S3({
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            });
            var uuid = angular2_uuid_1.UUID.UUID();
            console.log(uuid);
            console.log(file.name + '' + file.type);
            var extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
            console.log(extension);
            // let nameFile ='https://masterforklift.s3.amazonaws.com/'+uuid +''+ extension;
            var nameFile = uuid + '' + extension;
            console.log(nameFile);
            var params = {
                Bucket: 'masterforklift',
                Key: nameFile,
                Body: file,
                ACL: 'public-read',
                ContentType: contentType
            };
            bucket.upload(params).promise().then(function (resp) {
                console.log(resp);
                resolve(resp);
                var nameFileFinal = 'https://masterforklift.s3.amazonaws.com/' + nameFile;
                _this.workService.storeImageForklift(idForlift, nameFileFinal).then(function (data) {
                    var resp = data;
                    console.log(data);
                    // swal.close();
                    console.log(resp);
                }).catch(function (error) {
                    console.log(error);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    UploadService.prototype.uploadFileEstimate = function (file) {
        return new Promise(function (resolve) {
            var contentType = file.type;
            var bucket = new S3({
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            });
            var uuid = angular2_uuid_1.UUID.UUID();
            console.log(uuid);
            console.log(file.name + '' + file.type);
            var extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
            console.log(extension);
            // let nameFile ='https://masterforklift.s3.amazonaws.com/'+uuid +''+ extension;
            var nameFile = uuid + '' + extension;
            console.log(nameFile);
            var params = {
                Bucket: 'masterestimate',
                Key: nameFile,
                Body: file,
                ACL: 'public-read',
                ContentType: contentType
            };
            bucket.upload(params).promise().then(function (resp) {
                console.log(resp);
                resolve(resp);
                var nameFileFinal = 'https://masterforklift.s3.amazonaws.com/' + nameFile;
                /* this.workService.storeImageForklift(idForlift, nameFileFinal).then(data => {
                     const resp: any = data;
                     console.log(data);
                    // swal.close();
                     console.log(resp);
                   }).catch(error => {
                     console.log(error);
                   });*/
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    UploadService.prototype.uploadFileForkliftUpdate = function (file, idForlift) {
        var _this = this;
        return new Promise(function (resolve) {
            var contentType = file.type;
            var bucket = new S3({
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            });
            var uuid = angular2_uuid_1.UUID.UUID();
            console.log(uuid);
            console.log(file.name + '' + file.type);
            var extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
            console.log(extension);
            var nameFile = uuid + '' + extension;
            console.log(nameFile);
            var params = {
                Bucket: 'masterforklift',
                Key: nameFile,
                Body: file,
                ACL: 'public-read',
                ContentType: contentType
            };
            bucket.upload(params).promise().then(function (resp) {
                console.log(resp);
                resolve(resp);
                var nameFileFinal = 'https://masterforklift.s3.amazonaws.com/' + nameFile;
                _this.workService.storeImageForklift(idForlift, nameFileFinal).then(function (data) {
                    var resp = data;
                    console.log(data);
                    // swal.close();
                    console.log(resp);
                }).catch(function (error) {
                    console.log(error);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    UploadService.prototype.uploadFileForkliftUpdate3 = function (file) {
        return new Promise(function (resolve) {
            var contentType = file.type;
            var bucket = new S3({
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            });
            var uuid = angular2_uuid_1.UUID.UUID();
            // const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
            var nameFile = uuid + '' + '.pdf';
            console.log(nameFile);
            var params = {
                Bucket: 'masterforklift',
                Key: nameFile,
                Body: file,
                ACL: 'public-read',
                ContentType: contentType
            };
            bucket.upload(params).promise().then(function (resp) {
                console.log(resp);
                resolve(resp);
                var nameFileFinal = 'https://masterforklift.s3.amazonaws.com/' + nameFile;
                console.log(nameFileFinal);
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    UploadService.prototype.uploadFileForkliftUpdate4 = function (file) {
        return new Promise(function (resolve) {
            var contentType = file.type;
            var bucket = new S3({
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            });
            var uuid = angular2_uuid_1.UUID.UUID();
            // const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
            var nameFile = uuid + '' + '.png';
            console.log(nameFile);
            var params = {
                Bucket: 'masterforklift',
                Key: nameFile,
                Body: file,
                ACL: 'public-read',
                ContentType: contentType
            };
            bucket.upload(params).promise().then(function (resp) {
                console.log(resp);
                resolve(resp);
                var nameFileFinal = 'https://masterforklift.s3.amazonaws.com/' + nameFile;
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    UploadService.prototype.uploadFileForkliftUpdate2 = function (file) {
        return new Promise(function (resolve) {
            // const contentType = file.type;
            var bucket = new S3({
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            });
            var uuid = 'oleoleole12333'; //UUID.UUID();
            var extension = '.pdf';
            var nameFile = uuid + '' + extension;
            console.log(nameFile);
            var params = {
                Bucket: 'masterforklift',
                Key: nameFile,
                Body: file,
                ACL: 'public-read',
                ContentType: 'application/pdf'
            };
            bucket.upload(params).promise().then(function (resp) {
                console.log(resp);
                resolve(resp);
                var nameFileFinal = 'https://masterforklift.s3.amazonaws.com/' + nameFile;
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    /* uploadFile(file) {
       const contentType = file.type;
       const bucket = new S3(
             {
                 accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                 secretAccessKey: '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',
                 region: 'us-east-1'
             }
         );
         const params = {
             Bucket: 'masterforklift',
             Key: 'forklift' + file.name,
             Body: file,
             ACL: 'public-read',
             ContentType: contentType
         };
         bucket.upload(params, function (err, data) {
             if (err) {
                 console.log('There was an error uploading your file: ', err);
                 return false;
             }
             console.log('Successfully uploaded file.', data);
             return true;
         });
   // for upload progress
   /*bucket.upload(params).on('httpUploadProgress', function (evt) {
             console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
         }).send(function (err, data) {
             if (err) {
                 console.log('There was an error uploading your file: ', err);
                 return false;
             }
             console.log('Successfully uploaded file.', data);
             return true;
         });*/
    //}
    /*-----------------Para montar archivos en las cotizaciones -----*/
    UploadService.prototype.uploadFilesAll = function (file, estimateId, type, fileName) {
        var _this = this;
        return new Promise(function (resolve) {
            var contentType = file.type;
            console.log('tipo de archivo ' + contentType);
            var ext = fileName.split('.').pop();
            var nameTemp = fileName.split('.');
            var bucket = new S3({
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            });
            var uuid = angular2_uuid_1.UUID.UUID();
            var extension = ext;
            console.log(extension);
            // let nameFile ='https://masterforklift.s3.amazonaws.com/'+uuid +''+ extension;
            var nameFile = nameTemp[0] + '.' + extension;
            console.log(nameFile);
            var params = {
                Bucket: 'masterforklift/estimate_files',
                Key: nameFile,
                Body: file,
                ACL: 'public-read',
                ContentType: contentType
            };
            bucket.upload(params).promise().then(function (resp) {
                console.log(resp);
                resolve(resp);
                // let nameFileFinal='https://masterforklift.s3.amazonaws.com/'+nameFile;
                var bucketF = 'masterforklift/estimate_files';
                var url = 'https://masterforklift.s3.amazonaws.com/estimate_files/' + nameFile;
                var typeF = type;
                _this.estimateService.createEstimateFile(estimateId, bucketF, url, typeF, fileName).then(function (data) {
                    var resp = data;
                    console.log(data);
                    // swal.close();
                    console.log(resp);
                }).catch(function (error) {
                    console.log(error);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    UploadService.prototype.uploadFilesAllSettlement = function (file, settlementId, type, fileName) {
        var _this = this;
        return new Promise(function (resolve) {
            var contentType = file.type;
            console.log('tipo de archivo ' + contentType);
            var ext = fileName.split('.').pop();
            var nameTemp = fileName.split('.');
            var bucket = new S3({
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            });
            var uuid = angular2_uuid_1.UUID.UUID();
            var extension = ext;
            console.log(extension);
            // let nameFile ='https://masterforklift.s3.amazonaws.com/'+uuid +''+ extension;
            var nameFile = nameTemp[0] + '.' + extension;
            console.log(nameFile);
            var params = {
                Bucket: 'masterforklift/settlement_files',
                Key: nameFile,
                Body: file,
                ACL: 'public-read',
                ContentType: contentType
            };
            bucket.upload(params).promise().then(function (resp) {
                console.log(resp);
                resolve(resp);
                // let nameFileFinal='https://masterforklift.s3.amazonaws.com/'+nameFile;
                var bucketF = 'masterforklift/settlement_files';
                var url = 'https://masterforklift.s3.amazonaws.com/settlement_files/' + nameFile;
                var typeF = type;
                _this.settlementService.createSettlementFile(settlementId, bucketF, url, typeF, fileName).then(function (data) {
                    var resp = data;
                    console.log(data);
                    // swal.close();
                    console.log(resp);
                }).catch(function (error) {
                    console.log(error);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    UploadService.prototype.uploadFilesAllEstimate = function (file, estimateId, type, fileName) {
        var _this = this;
        return new Promise(function (resolve) {
            console.log('ingresoa la fuction        guardar en s3');
            var contentType = file.type;
            var bucket = new S3({
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            });
            //YCV CAMBIO PARA MONTAR COTIZACIÓN
            // const uuid = UUID.UUID();
            // const extension ='.pdf';
            // let nameFile ='https://masterforklift.s3.amazonaws.com/'+uuid +''+ extension;
            var nameFile = fileName;
            console.log(nameFile);
            var params = {
                Bucket: 'masterforklift/estimate_files',
                Key: nameFile,
                Body: file,
                ACL: 'public-read',
                ContentType: 'application/pdf'
            };
            console.log('ingreso a la carga');
            bucket.upload(params).promise().then(function (resp) {
                console.log('esta es la respuesta' + resp);
                resolve(resp);
                // let nameFileFinal='https://masterforklift.s3.amazonaws.com/'+nameFile;
                var bucketF = 'masterforklift/estimate_files';
                var url = 'https://masterforklift.s3.amazonaws.com/estimate_files/' + nameFile;
                var typeF = type;
                _this.estimateService.createEstimateFile(estimateId, bucketF, url, typeF, fileName).then(function (data) {
                    var resp = data;
                    console.log(data);
                    // swal.close();
                    console.log(resp);
                }).catch(function (error) {
                    console.log(error);
                });
            }).catch(function (error) {
                console.log('error para subir a s3' + error);
            });
        });
    };
    //Nombre original de este metodo es uploadFilesAllSettlement, se le agrega uns S
    // por duplicidad de nombre al hacer pull
    UploadService.prototype.uploadFilesAllSettlements = function (file, estimateId, type, fileName) {
        var _this = this;
        return new Promise(function (resolve) {
            console.log('ingresoa la fuction        guardar en s3');
            var contentType = file.type;
            var bucket = new S3({
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            });
            //YCV CAMBIO PARA MONTAR COTIZACIÓN
            // const uuid = UUID.UUID();
            // const extension ='.pdf';
            // let nameFile ='https://masterforklift.s3.amazonaws.com/'+uuid +''+ extension;
            var nameFile = fileName;
            console.log(nameFile);
            var params = {
                Bucket: 'masterforklift/estimate_files',
                Key: nameFile,
                Body: file,
                ACL: 'public-read',
                ContentType: 'application/pdf'
            };
            console.log('ingreso a la carga');
            bucket.upload(params).promise().then(function (resp) {
                console.log('esta es la respuesta' + resp);
                resolve(resp);
                // let nameFileFinal='https://masterforklift.s3.amazonaws.com/'+nameFile;
                var bucketF = 'masterforklift/estimate_files';
                var url = 'https://masterforklift.s3.amazonaws.com/estimate_files/' + nameFile;
                var typeF = type;
                _this.settlementService.createSettlementFile(estimateId, bucketF, url, typeF, fileName).then(function (data) {
                    var resp = data;
                    console.log(data);
                    // swal.close();
                    console.log(resp);
                }).catch(function (error) {
                    console.log(error);
                });
            }).catch(function (error) {
                console.log('error para subir a s3' + error);
            });
        });
    };
    UploadService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [work_service_1.WorkService, estimate_service_1.EstimateService, settlement_service_1.SettlementService])
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map