import { Component, OnInit } from '@angular/core';
import { Router,Route } from '@angular/router';
import { UsersService } from '../services/users.service';
import { PaymentsService } from '../services/payments.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.page.html',
  styleUrls: ['./passbook.page.scss'],
})
export class PassbookPage implements OnInit {
  private userId:Number=1;
  output:any;
  subscription:any;

  constructor(public router:Router,public userService:UsersService,public alertController:AlertController,public paymentService:PaymentsService) { }

  ngOnInit() {
    this.userService.getAllPaymentsForUser(1)
      .subscribe(
          payments => {this.output=payments;
          console.log(payments[0]);
          console.log(payments[1]);}
      );
  }
  home() {
   
    this.router.navigate(['/home'])
  }

  refreshPassbook(){
    this.userService.getAllPaymentsForUser(1)
    .subscribe(
        payments => {this.output=payments;
        console.log(payments[0]);
        console.log(payments[1]);}
    );
  }

  async presentAlert(header,subHeader,message) {
    const alert = await this.alertController.create({
      header: header,
      subHeader:subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


  editPayment(paymentId){
    console.log("Edit Payment id: "+paymentId);
    this.presentAlert('Error','','Payment Cannot Be Edited');
  }

  deletePayment(paymentId){
    console.log("deletePayment Delete Payment id:"+paymentId);
    const retval=this.paymentService.deleteCustPayment(paymentId);
    retval.then(
      res => {
        console.log(res);
        console.log("Payment Deletion Done:");
        this.refreshPassbook();
        this.router.navigate(['/passbook'])
      },
      err =>{
        console.log('Error in Payments');
        this.router.navigate(['/register'])
      }
    );
  }
}
