import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  

  constructor(private data: DataService, 
    private router: Router) {
    
   }

   onclick(i){
     this.router.navigate(['view/user-detail/', i])
     var username = i;
     console.log(username);
   }
   onclickbaby(){
     
   }

  ngOnInit() {
    
  
    
  }

}
