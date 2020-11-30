import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userNameVal: string;
  passwordVal: string;
  loginForm = new FormGroup({
    userName: new FormControl('Rahul', Validators.required),
    password: new FormControl('Rahul', Validators.required),
  });


  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.userNameVal = this.loginForm.value.userName;
    this.passwordVal = this.loginForm.value.password;
    if (this.loginForm.status == 'VALID') {
      if (this.userNameVal == "Rahul" && this.passwordVal == "Rahul") {
        this.route.navigate(['home']);
      }
      else {
        this.route.navigate(['landingpage']);
      }
    }
  }
}
