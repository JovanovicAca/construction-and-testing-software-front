import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { DishService } from 'src/modules/dish/services/dish.service';
import { DrinkService } from 'src/modules/drink/services/drink.service';
import { DishOrderItem } from 'src/modules/shared/models/dishOrderItem';
import { MenuItem } from 'src/modules/shared/models/menuItem';
import { Order } from 'src/modules/shared/models/order';
import { Table } from 'src/modules/table-organization/models/table';
import { TableService } from 'src/modules/table-organization/services/table-service/table.service';
import { OrderService } from '../../services/order.service';

@Component({
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  tableNumber!: string;
  table!: Table;
  orderPrice: number = 0;
  dishOrderItems: DishOrderItem[] = [];
  drinkOrderItems: DishOrderItem[] = [];
  order!: Order;
  length!: number;
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private _snackBar: MatSnackBar,
    private tableService: TableService,
    private router: Router
  ) {}
  ngOnInit() {
    this.order = {
      allergyDescription: '',
      orderItems: this.dishOrderItems.concat(this.drinkOrderItems),
      orderStatus: 'PENDING',
      order_price: this.orderPrice,
      table: JSON.parse(this.route.snapshot.paramMap.get('id')!),
      id: '',
    };
  }
  saveOrder() {
    this.order.orderItems = this.dishOrderItems.concat(this.drinkOrderItems);
    this.order.order_price = this.orderPrice;
    this.orderService.addOrder(this.order).subscribe((res: any) => {
      this._snackBar.open('Order created!', 'close');
      this.tableService
        .updateTableStatus(Number(this.order.table), 'OCCUPIED')
        .subscribe((response) => {
          this._snackBar.open('Table updated!', 'close');
        });
      this.router.navigate([`/home`]);
    });
  }
  loadData() {}
  addDrinkItem(orderItem: MenuItem) {
    this.orderPrice += orderItem.price * orderItem.quantity;
    this.drinkOrderItems.push({
      name: orderItem.name,
      quantity: orderItem.quantity,
      dish_status: 'PENDING',
      id: '',
      menuItem: undefined,
    });
  }
  addDishItem(orderItem: MenuItem) {
    this.orderPrice += orderItem.price * orderItem.quantity;
    this.dishOrderItems.push({
      name: orderItem.name,
      quantity: orderItem.quantity,
      dish_status: 'PENDING',
      id: '',
      menuItem: undefined,
    });
  }
}
