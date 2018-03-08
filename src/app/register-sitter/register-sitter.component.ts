import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-sitter',
  templateUrl: './register-sitter.component.html',
  styleUrls: ['./register-sitter.component.scss']
})
export class RegisterSitterComponent implements OnInit {

  registerSitterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerSitterForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      Birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      area: ['', Validators.required],
      rate: ['', Validators.required]
    });
   }

  onSubmit(registerSitterForm) {
    console.log(registerSitterForm.value);
  }

  ngOnInit() {
  }

}
