import { Injectable } from '@angular/core';
import {Http,Response}  from '@angular/http';
import {Observable} from 'rxjs';;
import {map,filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:Http) { }
  
  getAllPaymentsForUser(userId:Number){
    return this.http.get('http://localhost:3301/payments/1').pipe(map(res => res.json()));
  }
  getAllApartmentExpenses(userId:Number){
    return this.http.get('http://localhost:3301/expenses/1').pipe(map(res => res.json()));
  }
}
