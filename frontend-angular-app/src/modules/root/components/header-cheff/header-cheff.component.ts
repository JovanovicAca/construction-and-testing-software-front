import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/modules/auth/services/auth-service/auth.service';

@Component({
  selector: 'app-header-cheff',
  templateUrl: './header-cheff.component.html',
  styleUrls: ['./header-cheff.component.css'],
})
export class HeaderCheffComponent {
  buttons: string[][] = [
    ['Ingredients', '/ingredients'],
    ['Dishes', '/dishes'],
    ['Food Menues', '/foodMenues'],
    ['Messages', '/messages'],
    ['Logout', '/'],
  ];
  constructor(private authService: AuthService, private router: Router) {}
}
