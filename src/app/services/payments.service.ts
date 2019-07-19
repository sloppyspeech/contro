import { Injectable } from '@angular/core';
import {Http,Response,Headers}  from '@angular/http';
import {map,filter} from 'rxjs/operators';
import {Payments} from '../apiservices/models/paymentsDBModel';
import { headersToString } from 'selenium-webdriver/http';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  constructor(private http:Http,private HTTP:HttpClient) { }
  promiseResult:any;

  custPayment(data){
    console.log("In CustPayment Promise");
    let headers= new Headers();
    // let data={"userId": 1,
    //           "amount":3000,
    //           "purpose":"Maintenance June",
    //           "paymentDate":"2019-06-02"
    //           };
    headers.append('Content.Type','application/json');
    return this.HTTP.post("http://localhost:3301/payments/1",data).toPromise();
  }

  deleteCustPayment(data){
    console.log("In Delete Cust Payment");
    console.log(data);
    return this.HTTP.delete("http://localhost:3301/payments/"+data).toPromise();
  }

  handleError(error){
    console.log("EROROROROOP");
    console.log(error);
  }
}
