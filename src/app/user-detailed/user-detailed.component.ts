import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UsersListComponent } from '../users-list/users-list.component';
import { Router, ActivatedRoute, Params, Data} from '@angular/router'
import { Baby } from '../entities/baby';

@Component({
  selector: 'app-user-detailed',
  templateUrl: './user-detailed.component.html',
  styleUrls: ['./user-detailed.component.scss']
})
export class UserDetailedComponent implements OnInit {

  username: String = this.route.snapshot.params.username;
  
  baby: Baby
  

  constructor(private data: DataService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.baby = this.data.getBaby(this.username)
  

   console.log('Username is ' + this.username)
   
      
    

  }

}
