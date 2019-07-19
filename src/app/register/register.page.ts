import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  v_username:string;
  v_password:string;
  registerFormGroup:FormGroup;
  fctl_username:FormControl;
  fctl_password:FormControl;
  fctl_cnfmpassword:FormControl;

  constructor() { }

  ngOnInit() {
    this.registerFormGroup = new FormGroup({
      fctl_username : new FormControl('',[Validators.required]),
      fctl_password : new FormControl('',[Validators.required]),
      fctl_cnfmpassword : new FormControl('',[Validators.required])
  });
  }
  register() {
    console.log("Login Clicked");
    console.log(this.registerFormGroup.get('fctl_username').value);
    console.log(this.registerFormGroup.get('fctl_password').value);
    console.log(this.registerFormGroup.get('fctl_cnfmpassword').value);
  }
  submit () {
  //
  }

}
