import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { DishOrderItem } from '../../../shared/models/dishOrderItem';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css'],
})
export class OrderDashboardComponent {
  @Input() dishOrderItems!: DishOrderItem[];
  @Input() drinkOrderItems!: DishOrderItem[];
  @Input() orderPrice!: number;
  addDishItem(item: DishOrderItem) {
    this.dishOrderItems.push(item);
  }
  addDrinkItem(item: DishOrderItem) {
    this.drinkOrderItems.push(item);
  }
  constructor() {}
  saveOrder() {
    this.saveOrderEvent.emit();
  }
  @Output() saveOrderEvent = new EventEmitter();
}
