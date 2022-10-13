import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   
  allusers:Observable<UserClass[]>;

  //inject the service
  constructor(private router:Router, private service:DataServiceService) { }

  users:UserClass[];

  ngOnInit(): void {
   // this.service.getAllUser().subscribe(result=>this.users=result);
     this.getsofUsers();
     
  }
  getsofUsers(){
    this.service.getAllUser().subscribe(result=>this.users=result);
  }
    
  UserDelete(id:number){
       this.service.deletePost(id);
       console.log("user deleted");  
       this.onReload();
  }

  onReload(){
    this.router.navigate(['/users']);
    this.ngOnInit(); 
  }
  
  
   
}