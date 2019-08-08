import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class UploadService {

  constructor() { }
  uploadFile(file) {
      return new Promise(resolve =>{
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

          bucket.upload(params).promise().then(resp=>{
              console.log(resp);
            resolve(resp);
          }).catch(error => {
      console.log(error);
    });

      })
    
     
}
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

}
