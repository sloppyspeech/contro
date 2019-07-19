import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';
import {PaymentsService} from '../services/payments.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.page.html',
  styleUrls: ['./contribute.page.scss'],
})
export class ContributePage implements OnInit {


  contributeFormGroup:FormGroup;
  fctl_amount:FormControl;
  fctl_purpose:FormControl;
  fctl_paymentDate:FormControl;
  fctl_isApartmentExpense:FormControl;
  creDate:String;
  today=new Date();
  expenseToggle:boolean=false;


  constructor(public router:Router,public paymentService:PaymentsService) { }

  ngOnInit() {
    this.contributeFormGroup = new FormGroup({
      fctl_amount : new FormControl('',[Validators.required]),
      fctl_purpose : new FormControl('',[Validators.required]),
      fctl_paymentDate : new FormControl('',[Validators.required]),
      fctl_isApartmentExpense : new FormControl('',[Validators.required])
  });
  }
  contribute() {
    this.today=new Date();
    const format = 'dd/MM/yyyy';
    const locale = 'en-IN';
    const paymentDate = formatDate(this.today, format, locale);
    console.log("Contribute Clicked");
    console.log(this.contributeFormGroup.get('fctl_amount').value);
    console.log(this.contributeFormGroup.get('fctl_purpose').value);
    console.log(this.contributeFormGroup.get('fctl_paymentDate').value);
    console.log(this.contributeFormGroup.get('fctl_isApartmentExpense').value);
    console.log("Payment Service Called");
    let data={
      "userId":1,
      "amount":this.contributeFormGroup.get('fctl_amount').value,
      "purpose":this.contributeFormGroup.get('fctl_purpose').value,
      "paymentDate":this.contributeFormGroup.get('fctl_paymentDate').value,
      "isExpense":true
    }
    const retval=this.paymentService.custPayment(data);
    retval.then(
      res => {
        console.log(res);
        console.log("Payments  Done");
        // Reset The Form
        this.contributeFormGroup.reset();
        // Back to passbook
        this.router.navigate(['/passbook'])
      },
      err =>{
        console.log('Error in Payments');
        this.router.navigate(['/register'])
      }
    );
  }
  submit () {
  //
  }
  home() { 
    this.router.navigate(['/home'])
  }
  toggle(){
    this.expenseToggle= !this.expenseToggle;
  }
}

//mongodb+srv://johndoe:<password>@cluster01-yztk6.mongodb.net/test?retryWrites=true&w=majority