import { Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { NotificationComponent } from './components/notification/notification.component';

export const NotificationRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NotificationComponent,
    // canActivate: [RoleGuard],
    // data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
];
