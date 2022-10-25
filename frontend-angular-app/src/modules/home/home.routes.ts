import { Routes } from '@angular/router';
import { LoginGuard } from '../auth/guards/login/login.guard';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TestComponent } from './pages/test/test.component';
export const HomeRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
  {
    path: 'home1',
    pathMatch: 'full',
    component: TestComponent,
    // canActivate: [LoginGuard],
    // canActivate: [RoleGuard],
    // data: { expectedRoles: 'ADMIN|CHEF' },
  },
];
