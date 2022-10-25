import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDrinkButtonComponent } from './components/create-drink-button/create-drink-button.component';
import { DrinkFormComponent } from './components/drink-form/drink-form.component';
import { DrinkTableComponent } from './components/drink-table/drink-table.component';
import { CreateDrinkPageComponent } from './pages/create-drink-page/create-drink-page.component';
import { ViewDrinkPageComponent } from './pages/view-drink-page/view-drink-page.component';
import { RouterModule } from '@angular/router';
import { DrinkRoutes } from './drink.routes';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CreateDrinkButtonComponent,
    DrinkFormComponent,
    DrinkTableComponent,
    CreateDrinkPageComponent,
    ViewDrinkPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DrinkRoutes),
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
})
export class DrinkModule {}
