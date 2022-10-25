import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DrinkMenuRoutes } from './drink-menu.routes';
import { CreateDrinkMenuButtonComponent } from './components/create-drink-menu-button/create-drink-menu-button.component';
import { DrinkMenuFormComponent } from './components/drink-menu-form/drink-menu-form.component';
import { DrinkMenuTableComponent } from './components/drink-menu-table/drink-menu-table.component';
import { CreateDrinkMenuPageComponent } from './pages/create-drink-menu-page/create-drink-menu-page.component';
import { ViewDrinkMenuPageComponent } from './pages/view-drink-menu-page/view-drink-menu-page.component';
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
    CreateDrinkMenuButtonComponent,
    DrinkMenuFormComponent,
    DrinkMenuTableComponent,
    CreateDrinkMenuPageComponent,
    ViewDrinkMenuPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DrinkMenuRoutes),
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
export class DrinkMenuModule { }
