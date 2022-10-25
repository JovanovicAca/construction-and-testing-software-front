import { Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { CreateDrinkPageComponent } from './pages/create-drink-page/create-drink-page.component';
import { ViewDrinkPageComponent } from './pages/view-drink-page/view-drink-page.component';

export const DrinkRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ViewDrinkPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreateDrinkPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
];
