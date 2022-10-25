import { Component, OnInit, Input } from '@angular/core';
import { Drink } from 'src/modules/shared/models/drink';

@Component({
  selector: 'app-view-drink-page',
  templateUrl: './view-drink-page.component.html',
  styleUrls: ['./view-drink-page.component.css'],
})
export class ViewDrinkPageComponent {
  displayedColumns: string[] = [
    'name',
    'description',
    'recipe',
    'purchasePrice',
    'price',
    'discount',
    'drinkType',
  ];
  @Input() drinks!: Drink[];
  constructor() {}
}
