import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IngredientService } from 'src/modules/ingredient/services/ingredient.service';
import { Ingredient } from 'src/modules/shared/models/ingredient';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-ingredient-page',
  templateUrl: './create-ingredient-page.component.html',
  styleUrls: ['./create-ingredient-page.component.css'],
})
export class CreateIngredientPageComponent {
  ingredient!: Ingredient;
  incorrect_name: boolean = false;
  constructor(
    private router: Router,
    private ingredientService: IngredientService,
    private _snackBar: MatSnackBar
  ) {
    this.ingredient = {
      name: '',
      price: 0,
      isAllergic: false,
    };
  }
  onSubmit() {
    this.ingredientService.add(this.ingredient as Ingredient).subscribe(
      (result) => {
        this._snackBar.open(
          `Ingredient ${this.ingredient.name} added`,
          'close'
        );
      },
      (error) => {
        this.incorrect_name = true;
        this._snackBar.open(
          'Ingredient with that name already exists',
          'Close',
          {
            duration: 1000,
          }
        );
      }
    );
  }
}
