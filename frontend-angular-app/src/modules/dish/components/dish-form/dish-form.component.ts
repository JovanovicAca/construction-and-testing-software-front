import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Dish } from 'src/modules/shared/models/dish';
import { DishService } from '../../services/dish.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IngredientService } from 'src/modules/ingredient/services/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css'],
})
export class DishFormComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
  dishTypes: string[] = [
    'BREAKFAST',
    'APPETIZER',
    'SOUP',
    'MAIN_COURSE',
    'DESERT',
  ];
  dish!: Dish;
  ingredients: string[] = [];

  constructor(
    private dishService: DishService,
    private ingredientService: IngredientService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.dish = {
      name: '',
      dishType: '',
      description: '',
      recipe: '',
      preparationPrice: 0,
      purchasePrice: 0,
      discount: 0,
      preparationTime: 0,
      ingredients: [],
    };
  }

  ngOnInit(): void {
    this.ingredientService.getAllNames().subscribe((res) => {
      this.ingredients = res as string[];
    });
  }

  onSubmit(): void {
    this.dishService.add(this.dish as Dish).subscribe(
      (result) => {
        this._snackBar.open(`Dish ${this.dish.name} added`, 'close');
        this.router.navigate(['/home']);
      },
      (error) => {}
    );
  }
}
