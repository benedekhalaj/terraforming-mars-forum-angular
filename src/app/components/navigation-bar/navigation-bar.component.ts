import { Component, OnInit } from '@angular/core';
import {UserRegisterDialogComponent} from "../user/register/user-register-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {RegistrationService} from "../../services/registration/registration.service";
import {UserService} from "../../services/user/user.service";
import {LoginDialogComponent} from "../user/login-dialog/login-dialog.component";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  openRegisterModal():void {
    const registerDialog = this.dialog.open(UserRegisterDialogComponent,
      {
        width: "35em",
        data: {
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }
      });
    registerDialog.afterClosed().subscribe(result => {
      if (result) { //TODO: registration requirements check
        this.userService.addUser(result);
      }}
    );
  }

  openLoginModal():void {
    const loginDialog = this.dialog.open(LoginDialogComponent,
      {
       width: "35em",
       data: {
         email: "",
         password: "",
       }
      });
    loginDialog.afterClosed().subscribe(result => {
      if (result) { //TODO: login requirements check
        console.log(result);
      }
    });
  }
}
