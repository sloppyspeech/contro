import { Component, OnInit } from '@angular/core';
import { Router,Route } from '@angular/router';
import { UsersService } from '../services/users.service';
import { PaymentsService } from '../services/payments.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {
  private userId:Number=1;
  output:any;
  subscription:any;

  constructor(public router:Router,public userService:UsersService,public alertController:AlertController) { }

  ngOnInit() {
    this.userService.getAllApartmentExpenses(1)
      .subscribe(
          apartmentExpenses => {this.output=apartmentExpenses;
          console.log(apartmentExpenses[0]);
          console.log(apartmentExpenses[1]);}
      );
  }
  home() {
   
    this.router.navigate(['/home'])
  }

  refreshPassbook(){
    this.userService.getAllApartmentExpenses(1)
    .subscribe(
        apartmentExpenses => {this.output=apartmentExpenses;
        console.log(apartmentExpenses[0]);
        console.log(apartmentExpenses[1]);}
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


  
}
