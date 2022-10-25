import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../services/auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route.data);
    const expectedRoles: string = route.data['expectedRoles'];
    const token = localStorage.getItem('user');
    const jwt: JwtHelperService = new JwtHelperService();

    if (!token) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    const info = jwt.decodeToken(token);
    const roles: string[] = expectedRoles.split('|', 2);
    console.log(roles);
    for (let i = 0; i < info.role.length; i++) {
      console.log(info.role);
      if (roles.indexOf(info.role[i].name) !== -1) {
        return true;
      }
    }
    this.router.navigate(['/home1']);
    return false;
  }
}
