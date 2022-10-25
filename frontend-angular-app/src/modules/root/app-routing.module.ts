import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RootLayoutComponent } from './pages/root-layout/root-layout.component';
export const routes: Routes = [
  {
    path: 'home',
    component: RootLayoutComponent,
    loadChildren: () =>
      import('./../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'ingredients',
    component: RootLayoutComponent,
    loadChildren: () =>
      import('./../ingredient/ingredient.module').then(
        (m) => m.IngredientModule
      ),
  },
  {
    path: 'messages',
    component: RootLayoutComponent,
    loadChildren: () =>
      import('./../messages/messages.module').then((m) => m.MessagesModule),
  },
  {
    path: 'foodMenus',
    component: RootLayoutComponent,
    loadChildren: () =>
      import('./../food-menu/food-menu.module').then((m) => m.FoodMenuModule),
  },
  {
    path: 'drinkMenus',
    component: RootLayoutComponent,
    loadChildren: () =>
      import('./../drink-menu/drink-menu.module').then(
        (m) => m.DrinkMenuModule
      ),
  },
  {
    path: 'dishMenus',
    component: RootLayoutComponent,
    loadChildren: () =>
      import('./../dish-menu/dish-menu.module').then((m) => m.DishMenuModule),
  },
  {
    path: 'drinks',
    component: RootLayoutComponent,
    loadChildren: () =>
      import('./../drink/drink.module').then((m) => m.DrinkModule),
  },
  {
    path: 'employees',
    component: RootLayoutComponent,
    loadChildren: () =>
      import('./../employees/employees.module').then((m) => m.EmployeesModule),
  },
  {
    path: 'dishes',
    component: RootLayoutComponent,
    loadChildren: () =>
      import('./../dish/dish.module').then((m) => m.DishModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./../auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'table',
    component: RootLayoutComponent,
    loadChildren: () =>
      import('./../table-organization/table-organization.module').then(
        (m) => m.TableOrganizationModule
      ),
  },
  {
    path: 'order',
    component: RootLayoutComponent,
    loadChildren: () =>
      import('./../order/order.module').then((m) => m.OrderModule),
  },
  {
    path: 'reports',
    component: RootLayoutComponent,
    loadChildren: () =>
      import('./../reports/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
