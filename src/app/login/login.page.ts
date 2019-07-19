import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  v_username:string;
  v_password:string;
  loginFormGroup:FormGroup;
  fctl_username:FormControl;
  fctl_password:FormControl;

  constructor() { }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      fctl_username : new FormControl('',[Validators.required]),
      fctl_password : new FormControl('',[Validators.required])
  });
  }
  login() {
    console.log("Login Clicked");
    console.log(this.loginFormGroup.get('fctl_username').value);
    console.log(this.loginFormGroup.get('fctl_password').value);
  }
  submit () {
  //
  }

}
