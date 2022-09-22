import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  })

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO implement login with JWT
    this.loginForm.reset();
  }
}
