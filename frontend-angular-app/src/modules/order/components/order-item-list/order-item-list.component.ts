import { Component, Input, OnInit } from '@angular/core';
import { DishOrderItem } from '../../../shared/models/dishOrderItem';
@Component({
  selector: 'app-order-item-list',
  templateUrl: './order-item-list.component.html',
  styleUrls: ['./order-item-list.component.css'],
})
export class OrderItemListComponent {
  @Input() orderItems!: DishOrderItem[];
  @Input() drinkItems!: DishOrderItem[];
  @Input() name!: string;
  addDishItem(item: DishOrderItem) {
    this.orderItems.push(item);
  }
  constructor() {}
}
