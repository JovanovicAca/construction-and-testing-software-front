import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root-layout',
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.scss'],
})
export class RootLayoutComponent {
  public role: string;

  constructor() {
    this.role = '';
  }

  checkRole() {
    const item = localStorage.getItem('user');

    if (item) {
      const jwt: JwtHelperService = new JwtHelperService();
      this.role = jwt.decodeToken(item).role[0].name;
      console.log(this.role);
    }
  }
}
