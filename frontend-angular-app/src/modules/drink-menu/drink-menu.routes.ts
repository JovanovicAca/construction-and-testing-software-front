import { Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { CreateDrinkMenuPageComponent } from './pages/create-drink-menu-page/create-drink-menu-page.component';
import { ViewDrinkMenuPageComponent } from './pages/view-drink-menu-page/view-drink-menu-page.component';

export const DrinkMenuRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ViewDrinkMenuPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreateDrinkMenuPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
];
