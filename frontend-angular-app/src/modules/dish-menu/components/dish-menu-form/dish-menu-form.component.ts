import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DishMenuService } from '../services/dish-menu.service';
import { IngredientService } from 'src/modules/ingredient/services/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DishMenu } from 'src/modules/shared/models/dishMenu';

@Component({
  selector: 'app-dish-menu-form',
  templateUrl: './dish-menu-form.component.html',
  styleUrls: ['./dish-menu-form.component.css']
})
export class DishMenuFormComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  dishTypes: string[] = ['BREAKFAST', 'APPETIZER' , 'SOUP', 'MAIN_COURSE' , 'DESERT']
  ingredients: string[] = [];
  dishMenu!: DishMenu;

  constructor(
    private dishMenuService: DishMenuService,
    private ingredientService: IngredientService,
    private router: Router,
  ){
     this.dishMenu = {
      menuName: '',
      startDate: new Date(),
      endDate: new Date(),
      dishes: []
     };
   }

  ngOnInit(): void {
    this.ingredientService.getAllNames()
      .subscribe((res) => {
        this.ingredients = res as string[];
      })
  }

  onSubmit(): void {
    this.dishMenuService.add(this.dishMenu as DishMenu).subscribe(
      (result) => {
        this.router.navigate(['employees'])
      },
      (error) => {
      }
    )
  }
}
