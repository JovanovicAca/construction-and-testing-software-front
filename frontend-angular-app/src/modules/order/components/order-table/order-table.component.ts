import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Order } from 'src/modules/shared/models/order';
import { OrderItem } from 'src/modules/shared/models/orderItem';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css'],
})
export class OrderTableComponent {
  constructor() {}
  @Input() order!: Order;
  @Output() serveOrderEvent = new EventEmitter<string>();
  @Output() sendToKitchenEvent = new EventEmitter<string>();
  displayedColumns: string[] = [
    'id',
    'name',
    'dish_status',
    'quantity',
    'action',

    // 'description',
    // 'recipe',
    // 'purchasePrice',
    // 'price',
    // 'discount',
    // 'drinkType',
  ];
  @ViewChild(MatTable) table!: MatTable<OrderItem>;
  serveOrderItem(id: string) {
    this.serveOrderEvent.emit(id);
  }
  sendToKitchenOrderItem(id: string) {
    this.sendToKitchenEvent.emit(id);
  }
}
