import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-auth',
  templateUrl: './master-auth.component.html',
  styleUrls: ['./master-auth.component.scss']
})
export class MasterAuthComponent implements OnInit {
  isMobile:boolean;

  constructor() { 
    this.isMobile=false;
  }

  ngOnInit() {
    if (screen.width<780) {
      this.isMobile=true;
    }
  }

}
