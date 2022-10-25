import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CreateIngredientButtonComponent } from './components/create-ingredient-button/create-ingredient-button/create-ingredient-button.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { IngredientTableComponent } from './components/ingredient-table/ingredient-table.component';
import { IngredientRoutes } from './ingredient.routes';
import { CreateIngredientPageComponent } from './pages/create-ingredient/create-ingredient-page/create-ingredient-page.component';
import { ViewIngredientPageComponent } from './pages/create-ingredient/view-ingredient-page/view-ingredient-page.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    IngredientTableComponent,
    CreateIngredientPageComponent,
    ViewIngredientPageComponent,
    CreateIngredientButtonComponent,
    IngredientFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(IngredientRoutes),
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSlideToggleModule,
    FormsModule,
    MatIconModule,
    SharedModule,
  ],
  providers: [],
})
export class IngredientModule {}
