import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { SupportService } from '../../master-services/support/support.service';

@Component({
  selector: 'app-master-support-view',
  templateUrl: './master-support-view.component.html',
  styleUrls: ['./master-support-view.component.scss']
})
export class MasterSupportViewComponent implements OnInit {
  selectedFilesImages: Array<File> = [];
  selectedFiles: Array<File> = [];
  urlsImages = [];
  showSaveFile = false;

  comment: any;
  status: any;
  name: any;
  subject: any = '';
  description: any = '';
  ticket_id: any;

  constructor(private supportService: SupportService, private router:Router, private activatedRoute: ActivatedRoute) {
    this.ticket_id = this.activatedRoute.snapshot.params.id;
    console.log(this.ticket_id);
    this.getTicketId(this.ticket_id);
  }

  getTicketId(id){
    console.log(this.description);
      swal({
        title: 'Obteniendo información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      const params = 'description='+this.description+'&subject='+this.subject+'&name='+localStorage.getItem('name')+'&email='+localStorage.getItem('email')+'&username='+localStorage.getItem('username');
      this.supportService.getTicket(id).then(data=>{
        const resp:any=data;
       
        if(resp.success){
          this.description = resp.ticket.description;  
          this.subject = resp.ticket.subject;  
          this.name = resp.ticket.name;  
          this.status = resp.ticket.status;  
          this.comment = resp.ticket.comment;  
          this.urlsImages = resp.media; 
          swal.close(); 
        }else{
          this.generalAlert("Error","Ha ocurrido un error","error");
        }
      }).catch(err=>{

        console.log(err);
        this.generalAlert("Ha ocurrido un error","Ocurrio un error durante la ejecución","error");
      });
  }

  generalAlert(title:string,message:string,type:any){
    swal({
      title:title,
      text: message,
      type: type
     });
  }

  goAdminRoutines(){
    this.router.navigateByUrl('support/supportMain');
  }


  ngOnInit() {
  }

}
