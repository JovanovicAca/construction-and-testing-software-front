import { Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { CreateFoodMenuPageComponent } from './pages/create-food-menu-page/create-food-menu-page.component';
import { ViewFoodMenuPageComponent } from './pages/view-food-menu-page/view-food-menu-page.component';

export const FoodMenuRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ViewFoodMenuPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreateFoodMenuPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
];
