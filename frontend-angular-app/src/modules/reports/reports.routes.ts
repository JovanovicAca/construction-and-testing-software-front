import { Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { ReportPageComponent } from '../reports/pages/report-page/report-page.component';
export const ReportsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ReportPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_ADMIN' },
  },
];
