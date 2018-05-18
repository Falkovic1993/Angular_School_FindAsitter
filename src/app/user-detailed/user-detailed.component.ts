import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UsersListComponent } from '../users-list/users-list.component';
import { Router, ActivatedRoute, Params, Data, Route} from '@angular/router';
import { Baby } from '../entities/baby';
import { Sitter } from '../entities/sitter';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RegisterActions } from '../register-baby/register-baby.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';

@Component({
  selector: 'app-user-detailed',
  templateUrl: './user-detailed.component.html',
  styleUrls: ['./user-detailed.component.scss']
})
export class UserDetailedComponent implements OnInit {
  id: number = this.route.snapshot.params.username;
  //public babies: Baby[];
  public babyInfo: Baby[];
  currentUser: {};
  sitter: Sitter;
  editBaby: FormGroup;
  editSitter: FormGroup;
  role: String;
  subscription;


  constructor(private route: ActivatedRoute,
    private data: DataService,
    private fb: FormBuilder,
    private registerActions: RegisterActions, 
    private ngRedux: NgRedux<IAppState>
  ) {  }


  updateUser(baby){
    this.registerActions.updateUser(baby)
  }

  /*
  getRole() {
    if (this.babies) {
      console.log(this.baby);
      this.role = 'Baby';
    } else if (this.sitter) {
      this.role = 'Sitter';
    }
  }

  onSubmitBaby(editBaby) {
    this.registerActions.deleteBaby(editBaby)
    
    const oldName = this.baby.username;
    console.log(oldName);
    console.log(this.baby);
    const newBaby: Baby = editBaby.value as Baby;
    this.data.updateBaby(newBaby, oldName);
  }
   */
  

  ngOnInit() {

    this.subscription = this.ngRedux.select(state => state.register).subscribe(res => {
      this.babyInfo = res.babies
    });

    const currentUser = this.babyInfo.find(baby => baby._id == this.id)
    this.currentUser = currentUser;
    
      this.editBaby = this.fb.group({
        username: [currentUser.username , Validators.required],
        firstname: [currentUser.firstname, Validators.required],
        lastname: [currentUser.lastname, Validators.required],
        birthdate: [currentUser.birthdate, Validators.required],
        gender: [currentUser.gender, Validators.required],
        area: [currentUser.area, Validators.required],
      });
     /* 
    }else if (this.role === 'Sitter') {
      this.editSitter = this.fb.group({
        username: [this.username , Validators.required],
        firstname: [this.sitter.firstname, Validators.required],
        lastname: [this.sitter.lastname, Validators.required],
        Birthdate: [this.sitter.Birthdate, Validators.required],
        gender: [this.sitter.gender, Validators.required],
        area: [this.sitter.area, Validators.required],
      });
    }*/
  }
}
