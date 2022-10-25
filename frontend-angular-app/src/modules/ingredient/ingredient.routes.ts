import { Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role/role.guard';
import { CreateIngredientPageComponent } from './pages/create-ingredient/create-ingredient-page/create-ingredient-page.component';
import { ViewIngredientPageComponent } from './pages/create-ingredient/view-ingredient-page/view-ingredient-page.component';

export const IngredientRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ViewIngredientPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreateIngredientPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: 'ROLE_CLIENT|ROLE_ADMIN' },
  },
];
