import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flag=false;
  show(){
    this.flag=!this.flag;
  }
  alert=false;
  display(){
    this.alert=!this.alert;
  }
}
