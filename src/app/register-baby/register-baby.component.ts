import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Baby } from '../entities/baby';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-register-baby',
  templateUrl: './register-baby.component.html',
  styleUrls: ['./register-baby.component.scss']
})
export class RegisterBabyComponent implements OnInit {
  
  errMsg:boolean = false;

  registerBabyForm: FormGroup;
  
    constructor(private fb: FormBuilder,
    private data: DataService,
    private router: Router)
     {
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
      if(registerBabyForm.valid) {
      let baby: Baby = registerBabyForm.value as Baby;
      this.data.addBaby(baby);
      this.router.navigate(['/users-list'])
      } else {
         this.errMsg = true;
        console.log('error');
      }
    }

  ngOnInit() {

  }

}
