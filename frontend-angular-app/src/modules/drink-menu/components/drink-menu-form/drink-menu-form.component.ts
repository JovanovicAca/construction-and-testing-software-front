import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-drink-menu-form',
  templateUrl: './drink-menu-form.component.html',
  styleUrls: ['./drink-menu-form.component.css'],
})
export class DrinkMenuFormComponent {
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

  constructor() {}
}
