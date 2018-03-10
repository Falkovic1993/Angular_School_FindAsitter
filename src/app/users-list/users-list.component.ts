import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { UserDetailedComponent } from '../user-detailed/user-detailed.component';
import { Baby } from '../entities/baby';
import { Sitter } from '../entities/sitter';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public babies: Baby[];
  public sitters: Sitter[];

  constructor(private data: DataService,
    private router: Router,
    ) {
   }

   onclick(i) {
     this.router.navigate(['view/user-detail/', i]);
     const username = i;
     console.log(username);
   }

   deleteSitter(username) {
    this.data.deleteSitter(username);
    this.sitters = this.data.sitters;
    console.log(username);
  }

  deleteBabies(username) {
    this.data.deleteBabies(username);
    this.babies = this.data.babies;
    // console.log(username);
  }

  ngOnInit() {
    this.babies = this.data.babies;
    this.sitters = this.data.sitters;
  }

}
