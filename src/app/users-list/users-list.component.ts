import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { UserDetailedComponent } from '../user-detailed/user-detailed.component';
import { Baby } from '../entities/baby';
import { Sitter } from '../entities/sitter';
import { UserDeleteActions } from './users-list.action';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { RegisterActions } from '../register-baby/register-baby.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public babies: Baby[];
  public sitters: Sitter[];
  private isDeleted: boolean;
  subscription;
  public baby: Baby;




  constructor(private data: DataService,
    private router: Router,
    private registerActions: RegisterActions, 
    private ngRedux: NgRedux<IAppState>,
    private dataSerivce: DataService
    ) {
   }

   onclick(i) {
     this.router.navigate(['view/user-detail/', i]);
     const id = i;
     console.log(id);
   }

  
  deleteUser(id) {
    console.log(id)
    //this.registerActions.deleteBaby(username)
    this.registerActions.deleteUser(id)
  
  }

  ngOnInit() {
    //this.babies = this.data.babies;
    //this.sitters = this.data.sitters;

    this.ngRedux.select(state => state.register).subscribe(res => {
      this.babies = res.babies
      console.log('Subscription on babies',this.babies);
    });
   

    
 
  }

}
