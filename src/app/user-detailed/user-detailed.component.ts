import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UsersListComponent } from '../users-list/users-list.component';
import { Router, ActivatedRoute, Params, Data, Route} from '@angular/router';
import { Baby } from '../entities/baby';
import { Sitter } from '../entities/sitter';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-detailed',
  templateUrl: './user-detailed.component.html',
  styleUrls: ['./user-detailed.component.scss']
})
export class UserDetailedComponent implements OnInit {
  username: String = this.route.snapshot.params.username;
  baby: Baby;
  sitter: Sitter;
  editBaby: FormGroup;
  editSitter: FormGroup;
  role: String;


  constructor(private route: ActivatedRoute,
    private data: DataService,
    private fb: FormBuilder,
  ) {  }

  getRole() {
    if (this.baby) {
      this.role = 'Baby';
    } else if (this.sitter) {
      this.role = 'Sitter';
    }
  }

  onSubmitBaby(editBaby) {
    const oldName = this.baby.username;
    console.log(oldName);
    console.log(this.baby);
    const newBaby: Baby = editBaby.value as Baby;
    this.data.updateBaby(newBaby, oldName);
  }
  onSubmitSitter(editSitter) {
    const oldName = this.sitter.username;
    console.log(oldName);
    console.log(this.sitter);
    const updateSitter: Sitter = editSitter.value as Sitter;
    this.data.updateSitter(updateSitter, oldName);
  }


  ngOnInit() {
    this.baby = this.data.getBaby(this.username);
    console.log(this.baby);

    this.sitter = this.data.getSitter(this.username);
    console.log(this.sitter);

    this.getRole();

    if (this.role === 'Baby') {
      this.editBaby = this.fb.group({
        username: [this.username , Validators.required],
        firstname: [this.baby.firstname, Validators.required],
        lastname: [this.baby.lastname, Validators.required],
        Birthdate: [this.baby.Birthdate, Validators.required],
        gender: [this.baby.gender, Validators.required],
        area: [this.baby.area, Validators.required],
      });
    } else if (this.role === 'Sitter') {
      this.editSitter = this.fb.group({
        username: [this.username , Validators.required],
        firstname: [this.sitter.firstname, Validators.required],
        lastname: [this.sitter.lastname, Validators.required],
        Birthdate: [this.sitter.Birthdate, Validators.required],
        gender: [this.sitter.gender, Validators.required],
        area: [this.sitter.area, Validators.required],
      });
    }
  }
}
