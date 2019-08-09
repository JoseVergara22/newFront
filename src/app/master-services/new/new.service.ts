import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHeaderResponse} from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NewService {

  constructor(private http: HttpClient, 
              private router: Router) { }

              createNewImage( news_id: number,
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
      this.http.post('http://34.207.70.171/api/image_news', postParams,httpOptions)
      .map(res => res).subscribe(data => {
      resolve(data);
      }, error => {
        console.log(error);
                resolve(error);
        });
      });
      }
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
    this.http.post('http://34.207.70.171/api/image_news', postParams,httpOptions)
    .map(res => res).subscribe(data => {
    resolve(data);
    }, error => {
      console.log(error);
              resolve(error);
      });
    });
    }*/

    getNews() {
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
        this.http.get('http://34.207.70.171/api/news', httpOptions)
        .map(res => res).subscribe(data => {
        console.log(data);
        resolve(data);
        }, error => {
                  resolve(error);
          });
      });
    }

    getNewsImages() {
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
        this.http.get('http://34.207.70.171/api/image_news', httpOptions)
        .map(res => res).subscribe(data => {
        console.log(data);
        resolve(data);
        }, error => {
                  resolve(error);
          });
      });
    }

    createNew( title: string,
      subtitle: string,
      text: string,
      status:string) {
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
            title: title,
            subtitle: subtitle,
            text:text,
            status: status
          };
          this.http.post('http://34.207.70.171/api/news', postParams,httpOptions)
          .map(res => res).subscribe(data => {
          resolve(data);
          }, error => {
          console.log(error);
                resolve(error);
          });
        });
      }

      deleteNew(id: number) {
        console.log(status);
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
                };
          this.http.delete('http://34.207.70.171/api/news/' + id, httpOptions)
          .map(res => res).subscribe(data => {
          resolve(data);
          }, error => {
                    resolve(error);
            });
          });
              }

          updateNew(id: number ,
                    title: string,
                    subtitle: string,
                    text: string,
                    status:string) {
            console.log(status);
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
                      title: title,
                      subtitle: subtitle,
                      text:text,
                      status: status
                    };
              this.http.patch('http://34.207.70.171/api/news/' + id, postParams, httpOptions)
              .map(res => res).subscribe(data => {
              resolve(data);
              }, error => {
                        resolve(error);
                });
              });
                  }

        updateImage(
          image_id:number,
          news_id: number,
          url: string,
          name: string,
          bucket_name:string,
          description: string){
          console.log(status);
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
            this.http.patch('http://34.207.70.171/api/image_news/' + image_id, postParams, httpOptions)
            .map(res => res).subscribe(data => {
            resolve(data);
            }, error => {
                      resolve(error);
              });
            });
                }
}

