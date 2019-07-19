import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  passbook() {
    this.router.navigate(['/passbook'])
  }
  contribute() {
    this.router.navigate(['/contribute'])
  }
  expenses() {
    this.router.navigate(['/expenses'])
  }
}

// 0c1218fb-15a4-4f71-80c4-8d7a4ec8eb32