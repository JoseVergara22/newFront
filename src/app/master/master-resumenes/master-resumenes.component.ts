import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { I18n } from '../master-forklift/master-forklift.component';
import { RestService } from '../../master-services/Rest/rest.service';
import { ForkliftService } from '../../master-services/Forklift/forklift.service';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ResumenesService } from '../../master-services/resumenes/resumenes.service';

@Component({
  selector: 'app-master-resumenes',
  templateUrl: './master-resumenes.component.html',
  styleUrls: ['./master-resumenes.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterResumenesComponent implements OnInit {

  selectedBusinessId: any = 0;
  selectedRegionalId:any = 0;
  selectedBranchOfficeId: any = 0;
  selectedForkliftId: any = 0;
  branchOffices: any;
  forklifts: any;
  customers: any;
  now:any;

  forkliftText = '';
  rowsClient: any;

  forklift: any = '';
  customerName: any = '';
  branch: any = '';



  constructor(private restService: RestService, private resumenesService: ResumenesService, private router: Router, 
     private forkliftService: ForkliftService,    private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) { 

      this.getCustomers();

     
     }

  ngOnInit() {
  }

  getCustomers() {
    this.restService.getCustomer().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.customers  = resp.data;
    }).catch(error => {
      console.log(error);
    });
   }

  getBranchOffices() {
    if(this.selectedBusinessId!=0){
    
    // Llenar información de cliente  
    this.restService.getOffice(this.selectedBusinessId.id).then(data => {
      const resp: any = data;
      console.log('oficinas: '+data);
      swal.close();
      this.branchOffices  = resp.data;
    }).catch(error => {
      console.log(error);
    });
  
   
    }else{
      this.selectedBranchOfficeId=0;
      this.selectedForkliftId=0;
    }
  }

  

getFilters() {

  if( this.selectedBusinessId == 0 &&   this.selectedBranchOfficeId == 0 && this.forkliftText==''){
      swal({
        title:'Importante',
        text: 'Debes seleccionar por lo menos uno de los filtros o activar casilla para tener en cuenta las fechas',
        type: 'error'
       });
    }else{
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();

      let params='';
      let cont=0;

      if(this.selectedBusinessId!=0){
      console.log('imprimir cont');
        console.log(cont);
        if(cont>0){
          params=params+'&&customer_id='+this.selectedBusinessId.id;
        }else{
          params=params+'customer_id='+this.selectedBusinessId.id;
          cont++;
        }     
      }

      if(this.forkliftText!=''){
        if(cont>0){
          params=params+'&&forkliftText='+this.forkliftText;
        }else{
          params=params+'forkliftText='+this.forkliftText;
          cont++;
        }
      }

      if(this.selectedBranchOfficeId!=0){
      console.log(cont);
        if(cont>0){
        params=params+'&&branch_office_id='+this.selectedBranchOfficeId.id;
        }else{
          params=params+'branch_office_id='+this.selectedBranchOfficeId.id;
          cont++;
        }
      }


      console.log('.---------->'+params);
      this.resumenesService.showFilter(params).then(data => {
        const resp: any = data;
        console.log('info de filter');
        console.log(data);
      // this.customers  = resp.data;
        this.rowsClient = resp.data;
        console.log(resp.error);
        swal.close();
        if(resp.error){
          console.log('entro')
          swal({
            title:'Oops',
            text: 'Hubo un error en la consulta.',
            type: 'error'
            });
        }
        // this.rowStatic =  resp.data;
        // this.rowsTemp = resp.data;
        // console.log( this.rowsClient);
      }).catch(error => {
        console.log(error);
      });  
    }
}

editResumenes(row: any){
  console.log(row);
  this.router.navigateByUrl('maintenance/editResumenes/'+row.id+'/'+row.full_name);
}

}
