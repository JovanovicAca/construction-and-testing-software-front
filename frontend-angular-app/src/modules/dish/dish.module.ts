import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { DishRoutes } from './dish.routes';
import { CreateDishPageComponent } from './pages/create-dish-page/create-dish-page.component';
import { ViewDishPageComponent } from './pages/view-dish-page/view-dish-page.component';
import { CreateDishButtonComponent } from './components/create-dish-button/create-dish-button.component';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { DishTableComponent } from './components/dish-table/dish-table.component';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [

    CreateDishPageComponent,
    ViewDishPageComponent,
    CreateDishButtonComponent,
    DishFormComponent,
    DishTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DishRoutes),
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule
  ]
})
export class DishModule { }
