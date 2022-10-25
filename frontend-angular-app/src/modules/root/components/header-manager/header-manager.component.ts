import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/modules/auth/services/auth-service/auth.service';

@Component({
  selector: 'app-header-manager',
  templateUrl: './header-manager.component.html',
  styleUrls: ['./header-manager.component.css'],
})
export class HeaderManagerComponent {
  buttons: string[][] = [
    ['Drinks', '/drinks'],
    ['Drink Menues', '/drinkMenues'],
    ['Employees', '/employees'],
    ['Messages', '/messages'],
    ['Incomes', '/incomes'],
    ['Expenses', '/expenses'],
    ['Logout', '/'],
  ];
  constructor(private authService: AuthService, private router: Router) {}
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
    // this.authService.logout().subscribe(
    //   (result) => {
    //     localStorage.removeItem('user');
    //     this.router.navigate(['/auth/login']);
    //   }
    // (error) => {
    //   this.toastr.error(error.error);
    // }
    // );
  }
}
