import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hidePassword: boolean = true
  registerForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // TODO implement register
    this.registerForm.reset();
  }

  getEmail(): string {
    return this.registerForm.getRawValue().email!;
  }

  getConfirmEmail(): string {
    return this.registerForm.getRawValue().confirmEmail!;
  }

  getPassword(): string {
    return this.registerForm.getRawValue().password!;
  }

  getConfirmPassword(): string {
    return this.registerForm.getRawValue().confirmPassword!;
  }

  onSubmit() {
    // TODO Implement registration
    this.registerForm.reset();
  }
}
