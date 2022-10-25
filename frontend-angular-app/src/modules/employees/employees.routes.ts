import { Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { CreateEmployeePageComponent } from './pages/create-employee-page/create-employee-page.component';
import { ViewEmployeePageComponent } from './pages/view-employee-page/view-employee-page.component';

export const EmployeesRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ViewEmployeePageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreateEmployeePageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
];
