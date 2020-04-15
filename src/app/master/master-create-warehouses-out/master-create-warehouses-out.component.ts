import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../../master-services/Rest/rest.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-master-create-warehouses-out',
  templateUrl: './master-create-warehouses-out.component.html',
  styleUrls: ['./master-create-warehouses-out.component.scss']
})
export class MasterCreateWarehousesOutComponent implements OnInit {

  selectedTypeDocumentId: any;
  selectedCustomer: any;
  selectedBranchOffice: any;
  selectedTechnician: any;
  selectForkLift: any;

  
  typeDocuments: any;
  customers: any;
  branchOffices: any;
  forkLift: any;
  technicians: any;

  emailCustomer: any;
  masterEmail: any;

  submitted = false;

  myForm: FormGroup;

  constructor(private restService: RestService, private router: Router) {

   const customer = new FormControl('', Validators.required);
   const branchOffice = new FormControl('', Validators.required);
   const technician = new FormControl('', Validators.required);
   const quantity = new FormControl('', Validators.required);
   const reference  = new FormControl('', Validators.required);
   const unitCost = new FormControl('', Validators.required);
   const totalCost = new FormControl('', Validators.required);
   const description = new FormControl('', Validators.required);
   const control = new FormControl('', Validators.required);
   const estimate = new FormControl('', Validators.required);
   const liquidation = new FormControl('', Validators.required);
   const consumption = new FormControl('', Validators.required);
   const observation = new FormControl('', Validators.required);

   this.myForm = new FormGroup({
    customer: customer,
    branchOffice: branchOffice,
    technician: technician,
    quantity: quantity,
    reference: reference,
    unitCost: unitCost,
    totalCost: totalCost,
    description: description,
    control: control,
    estimate: estimate,
    liquidation: liquidation,
    consumption: consumption,
    observation: observation,
   });
   }

   getCustomers() {
    this.restService.getCustomers().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.customers  = resp.data;
    }).catch(error => {
      console.log(error);
    });
   }



   getOffices(idCustomer: number) {
    console.log(idCustomer);
      this.restService.getCustomerOffice( idCustomer).then(data => {
        console.log('que mas ps');
        const resp: any = data;
        console.log(resp);
        this.branchOffices = resp.data_branchoffices;
        console.log('master');
        swal.close();
        console.log( this.branchOffices);
      }).catch(error => {
        console.log(error);
      });
  }

  getForkLift(idOffice: number) {
    console.log(idOffice);
      this.restService.getForkLift( idOffice).then(data => {
        console.log('que mas ps');
        const resp: any = data;
        console.log(resp);
        this.forkLift = resp.data;
        console.log('master');
        swal.close();
        console.log( this.forkLift);
      }).catch(error => {
        console.log(error);
      });
  }

  getTechnician() {
    console.log();
      this.restService.getTechnician().then(data => {
        console.log('que mas ps');
        const resp: any = data;
        console.log(resp);
        this.technicians = resp.data;
        console.log('master');
        swal.close();
        console.log( this.technicians);
      }).catch(error => {
        console.log(error);
      });
  }

  ChangingValue(){
    console.log('Cambio cliente');
    console.log(this.selectedCustomer);
    console.log(this.selectedCustomer.id);
    this.getOffices(this.selectedCustomer.id);
  }

  ChangingValueBranch(){
    console.log('Cambio sucursal');
    console.log(this.selectedBranchOffice);
    console.log(this.selectedBranchOffice.id);
    this.getForkLift(this.selectedBranchOffice.id);
  }

  sendWarehousesOut(){}

  ngOnInit() {
  }

  get checkForm() { return this.myForm.controls; }


}
