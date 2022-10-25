import { Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { AdminTableOrganizationComponent } from './pages/admin-table-organization/admin-table-organization.component';
import { WaiterTableComponent } from './pages/waiter-table/waiter-table.component';
export const TableOrganizationRoutes: Routes = [
  {
    path: 'admin',
    pathMatch: 'full',
    component: AdminTableOrganizationComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_ADMIN' },
  },
  {
    path: '',
    pathMatch: 'full',
    component: WaiterTableComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_ADMIN' },
  },
];
