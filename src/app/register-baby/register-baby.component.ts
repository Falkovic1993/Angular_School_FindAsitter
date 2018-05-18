import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Baby } from '../entities/baby';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { RegisterActions } from './register-baby.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';

@Component({
  selector: 'app-register-baby',
  templateUrl: './register-baby.component.html',
  styleUrls: ['./register-baby.component.scss']
})
export class RegisterBabyComponent implements OnInit {
  errMsg = false;
  private isBaby: boolean;
  public babies: Baby[];
  subscription;

  

  registerBabyForm: FormGroup;
    constructor(private fb: FormBuilder,
    private data: DataService,
    private router: Router,
    private registerActions: RegisterActions, 
    private ngRedux: NgRedux<IAppState>,
    private dataSerice: DataService) {
      this.registerBabyForm = this.fb.group({
        username: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        password: ['', Validators.required],
        password2: ['', Validators.required],
        birthdate: ['', Validators.required],
        gender: ['', Validators.required],
        area: ['', Validators.required]
      });
     }

    onSubmit(registerBabyForm) {
      if (registerBabyForm.valid) {
      const baby: Baby = registerBabyForm.value as Baby;
      this.registerActions.createUser(baby);
      /*this.dataSerice.createBaby(baby).subscribe(result => {
        console.log(result);
      });
      */
      
      this.router.navigate(['/users-list']);

      } else {
         this.errMsg = true;
        console.log('error');
      }

    }

  ngOnInit() {
    this.ngRedux.select(state => state.register).subscribe(res => {
      //this.isBaby = res.isBaby;
      //this.babies = res.babies;
    }); 
    

  }

}
