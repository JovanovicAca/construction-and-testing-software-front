import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DishMenuRoutes } from './dish-menu.routes';
import { CreateDishMenuButtonComponent } from './components/create-dish-menu-button/create-dish-menu-button.component';
import { DishMenuFormComponent } from './components/dish-menu-form/dish-menu-form.component';
import { DishMenuTableComponent } from './components/dish-menu-table/dish-menu-table.component';
import { CreateDishMenuPageComponent } from './pages/create-dish-menu-page/create-dish-menu-page.component';
import { ViewDishMenuPageComponent } from './pages/view-dish-menu-page/view-dish-menu-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    CreateDishMenuButtonComponent,
    DishMenuFormComponent,
    DishMenuTableComponent,
    CreateDishMenuPageComponent,
    ViewDishMenuPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DishMenuRoutes),
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class DishMenuModule { }
