import { Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { CookPageComponent } from './pages/cook-page/cook-page.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { EditOrderComponent } from './pages/edit-order/edit-order.component';
export const OrderRoutes: Routes = [
  {
    path: 'create/:id',
    pathMatch: 'full',
    component: CreateOrderComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_ADMIN' },
  },
  {
    path: 'edit/:id',
    pathMatch: 'full',
    component: EditOrderComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_ADMIN' },
  },
  {
    path: 'pending',
    pathMatch: 'full',
    component: CookPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_ADMIN' },
  },
];
