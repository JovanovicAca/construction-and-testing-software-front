import { Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { CreateDishPageComponent } from './pages/create-dish-page/create-dish-page.component';
import { ViewDishPageComponent } from './pages/view-dish-page/view-dish-page.component';

export const DishRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ViewDishPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreateDishPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
];
