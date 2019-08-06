import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-forget-password',
  templateUrl: './master-forget-password.component.html',
  styleUrls: ['./master-forget-password.component.scss']
})
export class MasterForgetPasswordComponent implements OnInit {
  isMobile: boolean;


  constructor() {
    this.isMobile = false;
   }

  ngOnInit() {
    if (screen.width < 780) {
      this.isMobile = true;
    }
  }

}
