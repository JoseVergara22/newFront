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
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var environment_1 = require("./../../../environments/environment");
require("rxjs/add/operator/map");
var NewService = /** @class */ (function () {
    function NewService(http, router) {
        this.http = http;
        this.router = router;
        this.apiEndPoint = environment_1.environment.apiBaseUrl;
    }
    NewService.prototype.createNewImage = function (news_id, url, name, bucket_name, description) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                news_id: news_id,
                url: url,
                bucket_name: bucket_name,
                name: name,
                description: description
            };
            _this.http.post(_this.apiEndPoint + 'api/image_news', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                resolve(error);
            });
        });
    };
    /* createNewImage( news_id: number,
                 url: string,
                 name: string,
                 bucket_name:string,
                 description: string) {
       return new Promise(resolve => {
   
         const headers = new HttpHeaders();
         headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
         headers.append('Content-Type', 'application/json');
         const httpOptions = {
           headers: new HttpHeaders({
             'Content-Type':  'application/json',
             'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
             'Accept': 'application/json'
           })
         };
   
             const postParams = {
               news_id: news_id,
               url: url,
               bucket_name:bucket_name,
               name: name,
               description: description
             };
       this.http.post(this.apiEndPoint+'api/image_news', postParams,httpOptions)
       .map(res => res).subscribe(data => {
       resolve(data);
       }, error => {
         console.log(error);
                 resolve(error);
         });
       });
       }*/
    NewService.prototype.getNews = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            console.log('Authorization : Bearer ' + localStorage.getItem('token_user'));
            _this.http.get(_this.apiEndPoint + 'api/news', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    NewService.prototype.getNewsImages = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            _this.http.get(_this.apiEndPoint + 'api/image_news', httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    NewService.prototype.createNew = function (title, subtitle, text, status) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                title: title,
                subtitle: subtitle,
                text: text,
                status: status
            };
            _this.http.post(_this.apiEndPoint + 'api/news', postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                resolve(error);
            });
        });
    };
    NewService.prototype.deleteNew = function (id) {
        var _this = this;
        console.log(status);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {};
            _this.http.delete(_this.apiEndPoint + 'api/news/' + id, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    NewService.prototype.updateNew = function (id, title, subtitle, text, status) {
        var _this = this;
        console.log(status);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                title: title,
                subtitle: subtitle,
                text: text,
                status: status
            };
            _this.http.patch(_this.apiEndPoint + 'api/news/' + id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    NewService.prototype.updateImage = function (image_id, news_id, url, name, bucket_name, description) {
        var _this = this;
        console.log(status);
        return new Promise(function (resolve) {
            var headers = new http_1.HttpHeaders();
            headers.append('Authorization', 'Bearer ' + (localStorage.getItem('token_user'))); // 'Bearer ' +
            headers.append('Content-Type', 'application/json');
            var httpOptions = {
                headers: new http_1.HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token_user'),
                    'Accept': 'application/json'
                })
            };
            var postParams = {
                news_id: news_id,
                url: url,
                bucket_name: bucket_name,
                name: name,
                description: description
            };
            _this.http.patch(_this.apiEndPoint + 'api/image_news/' + image_id, postParams, httpOptions)
                .map(function (res) { return res; }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    NewService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router])
    ], NewService);
    return NewService;
}());
exports.NewService = NewService;
//# sourceMappingURL=new.service.js.map