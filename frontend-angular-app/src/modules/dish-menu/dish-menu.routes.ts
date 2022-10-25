import { Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { CreateDishMenuPageComponent } from './pages/create-dish-menu-page/create-dish-menu-page.component';
import { ViewDishMenuPageComponent } from './pages/view-dish-menu-page/view-dish-menu-page.component';

export const DishMenuRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ViewDishMenuPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreateDishMenuPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
];
