import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-food-menu-form',
  templateUrl: './food-menu-form.component.html',
  styleUrls: ['./food-menu-form.component.css'],
})
export class FoodMenuFormComponent {
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

  startDate = new Date(1990, 0, 1);
  constructor() {}
}
