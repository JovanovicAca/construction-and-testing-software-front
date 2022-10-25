import { Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { ViewMessagesPageComponent } from './pages/view-messages-page/view-messages-page.component';

export const MessagesRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ViewMessagesPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
];
