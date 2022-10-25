import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Drink } from 'src/modules/shared/models/drink';
import { DrinkService } from '../../services/drink.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IngredientService } from 'src/modules/ingredient/services/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-drink-form',
  templateUrl: './drink-form.component.html',
  styleUrls: ['./drink-form.component.css']
})
export class DrinkFormComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  drinkTypes: string[] = ['HOT_DRINK', 'COLD_DRINK', 'BEER', 'JUICE'];
  drink!: Drink;
  ingredients: string[] = [];

  constructor(
    private drinkService: DrinkService,
    private ingredientService: IngredientService,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.drink = {
      name: '',
      drinkType: '',
      description: '',
      recipe: '',
      preparationPrice: 0,
      purchasePrice: 0,
      discount: 0,
      ingredients: []
    };
  }

  ngOnInit() {
    console.log("Asdad" + this.ingredients)
    this.ingredientService.getAllNames()
      .subscribe((res) => {
        this.ingredients = res as string[];
      })
  }

  onSubmit(): void {
    //console.log(this.drink)
    this.drinkService.add(this.drink as Drink).subscribe(
      (result) => {
        this._snackBar.open(
          `Drink ${this.drink.name} added`,
          'close'
        );
        this.router.navigate(['drinks'])
      },
      (error) => {
        //this.incorrect_name = true;
        this._snackBar.open(
          'Drink with that name already exists',
          'Close',
          {
            duration: 1000,
          }
        );
      }
    )
  }
}
