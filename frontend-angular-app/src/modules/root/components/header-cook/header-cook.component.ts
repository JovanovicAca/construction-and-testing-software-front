import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-cook',
  templateUrl: './header-cook.component.html',
  styleUrls: ['./header-cook.component.css'],
})
export class HeaderCookComponent {
  buttons: string[][] = [
    ['All Orders', '/orders'],
    ['Taken Orders', '/orders/taken'],
    ['Messages', '/messages'],
    ['Logout', '/'],
  ];
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
