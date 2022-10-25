import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodMenuTableComponent } from './components/food-menu-table/food-menu-table.component';
import { ViewFoodMenuPageComponent } from './pages/view-food-menu-page/view-food-menu-page.component';
import { CreateFoodMenuPageComponent } from './pages/create-food-menu-page/create-food-menu-page.component';
import { FoodMenuFormComponent } from './components/food-menu-form/food-menu-form.component';
import { CreateFoodMenuButtonComponent } from './components/create-food-menu-button/create-food-menu-button.component';
import { FoodMenuRoutes } from './food-menu.routes';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    FoodMenuTableComponent,
    ViewFoodMenuPageComponent,
    CreateFoodMenuPageComponent,
    FoodMenuFormComponent,
    CreateFoodMenuButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FoodMenuRoutes),
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
export class FoodMenuModule { }
