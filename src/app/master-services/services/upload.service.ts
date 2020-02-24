import { Injectable } from '@angular/core';
import { EstimateService } from '../estimate/estimate.service';
import { WorkService } from '../../master-services/Work/work.service';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { UUID } from 'angular2-uuid';


@Injectable()
export class UploadService {

  constructor(private workService:WorkService, private estimateService:EstimateService) { }
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
          const uuid = UUID.UUID();
          console.log(uuid);
          console.log(file.name + '' + file.type);
          const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
          console.log(extension);
          let nameFile =uuid +''+ extension;
          console.log(nameFile);
          const params = {
              Bucket: 'masterforklift',
              Key:  nameFile,
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


uploadFileForklift(file, idForlift:number ) {
    return new Promise(resolve =>{
      const contentType = file.type;
      const bucket = new S3(
            {
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            }
        );
        const uuid = UUID.UUID();
        console.log(uuid);
        console.log(file.name + '' + file.type);
        const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
        console.log(extension);
        // let nameFile ='https://masterforklift.s3.amazonaws.com/'+uuid +''+ extension;
        let nameFile =uuid +''+ extension;
        console.log(nameFile);
        const params = {
            Bucket: 'masterforklift',
            Key: nameFile,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };

        bucket.upload(params).promise().then(resp=>{
            console.log(resp);
          resolve(resp);
          let nameFileFinal='https://masterforklift.s3.amazonaws.com/'+nameFile;
          this.workService.storeImageForklift(idForlift, nameFileFinal).then(data => {
              const resp: any = data;
              console.log(data);
             // swal.close();
              console.log(resp);
            }).catch(error => {
              console.log(error);
            });

        }).catch(error => {
    console.log(error);
  });

    })   
}

uploadFileEstimate(file ) {
    return new Promise(resolve =>{
      const contentType = file.type;
      const bucket = new S3(
            {
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            }
        );
        const uuid = UUID.UUID();
        console.log(uuid);
        console.log(file.name + '' + file.type);
        const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
        console.log(extension);
        // let nameFile ='https://masterforklift.s3.amazonaws.com/'+uuid +''+ extension;
        let nameFile =uuid +''+ extension;
        console.log(nameFile);
        const params = {
            Bucket: 'masterestimate',
            Key: nameFile,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };

        bucket.upload(params).promise().then(resp=>{
            console.log(resp);
          resolve(resp);
          let nameFileFinal='https://masterforklift.s3.amazonaws.com/'+nameFile;
         /* this.workService.storeImageForklift(idForlift, nameFileFinal).then(data => {
              const resp: any = data;
              console.log(data);
             // swal.close();
              console.log(resp);
            }).catch(error => {
              console.log(error);
            });*/

        }).catch(error => {
    console.log(error);
  });

    })   
}


uploadFileForkliftUpdate(file, idForlift:number) {
    return new Promise(resolve =>{
      const contentType = file.type;
      const bucket = new S3(
            {
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            }
        );
        const uuid = UUID.UUID();
        console.log(uuid);
        console.log(file.name + '' + file.type);
        const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
        console.log(extension);
        let nameFile =uuid +''+ extension;
        console.log(nameFile);
        const params = {
            Bucket: 'masterforklift',
            Key: nameFile,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };

        bucket.upload(params).promise().then(resp=>{
            console.log(resp);
          resolve(resp);
          let nameFileFinal='https://masterforklift.s3.amazonaws.com/'+nameFile;
          this.workService.storeImageForklift(idForlift, nameFileFinal).then(data => {
              const resp: any = data;
              console.log(data);
             // swal.close();
              console.log(resp);
            }).catch(error => {
              console.log(error);
            });

        }).catch(error => {
    console.log(error);
  });

    })   
}

uploadFileForkliftUpdate3(file) {
    return new Promise(resolve =>{
      const contentType = file.type;
    
      const bucket = new S3(
            {
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            }
        );
        const uuid = UUID.UUID();
       
        // const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
      
        let nameFile =uuid +''+ '.pdf';
        console.log(nameFile);
        const params = {
            Bucket: 'masterforklift',
            Key: nameFile,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };

        bucket.upload(params).promise().then(resp=>{
            console.log(resp);
          resolve(resp);
          let nameFileFinal='https://masterforklift.s3.amazonaws.com/'+nameFile;
          console.log(nameFileFinal);
        }).catch(error => {
    console.log(error);
  });

    })   
}


uploadFileForkliftUpdate4(file) {
  return new Promise(resolve =>{
    const contentType = file.type;
  
    const bucket = new S3(
          {
              accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
              secretAccessKey: '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',
              region: 'us-east-1'
          }
      );
      const uuid = UUID.UUID();
     
      // const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
    
      let nameFile =uuid +''+ '.png';
      console.log(nameFile);
      const params = {
          Bucket: 'masterforklift',
          Key: nameFile,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };

      bucket.upload(params).promise().then(resp=>{
          console.log(resp);
        resolve(resp);
        let nameFileFinal='https://masterforklift.s3.amazonaws.com/'+nameFile;

      }).catch(error => {
  console.log(error);
});

  })   
}











uploadFileForkliftUpdate2(file) {
    return new Promise(resolve =>{
     // const contentType = file.type;
      const bucket = new S3(
            {
                accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
                secretAccessKey: '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',
                region: 'us-east-1'
            }
        );
        const uuid ='oleoleole12333'; //UUID.UUID();
        const extension = '.pdf';
        let nameFile =uuid +''+ extension;
        console.log(nameFile);
        const params = {
            Bucket: 'masterforklift',
            Key: nameFile,
            Body: file,
            ACL: 'public-read',
            ContentType:  'application/pdf'
        };

       

        bucket.upload(params).promise().then(resp=>{
            console.log(resp);
          resolve(resp);
          let nameFileFinal='https://masterforklift.s3.amazonaws.com/'+nameFile;
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




/*-----------------Para montar archivos en las cotizaciones -----*/


uploadFilesAll(file:any, estimateId:number, type: number, fileName:string) {
  return new Promise(resolve =>{
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIAQTIVBK67FU3N4ZPV',
              secretAccessKey: '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',
              region: 'us-east-1'
          }
      );
      const uuid = UUID.UUID();
    
      const extension ='.pdf';
      console.log(extension);
      // let nameFile ='https://masterforklift.s3.amazonaws.com/'+uuid +''+ extension;
      let nameFile =uuid +''+ extension;
      console.log(nameFile);
      const params = {
          Bucket: 'masterforklift/estimate_files',
          Key: nameFile,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };

      bucket.upload(params).promise().then(resp=>{
          console.log(resp);
        resolve(resp);
        // let nameFileFinal='https://masterforklift.s3.amazonaws.com/'+nameFile;
      
        let bucketF='masterforklift/estimate_files';
        let url='https://masterforklift.s3.amazonaws.com/estimate_files/'+nameFile;
        let typeF=type;
        
        this.estimateService.createEstimateFile(estimateId, bucketF, url, typeF, fileName).then(data => {
            const resp: any = data;
            console.log(data);
           // swal.close();
            console.log(resp);
          }).catch(error => {
            console.log(error);
          });

      }).catch(error => {
  console.log(error);
});

  })   
}

}
