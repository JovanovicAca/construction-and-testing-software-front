import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/modules/shared/models/order';
import { OrderItem } from 'src/modules/shared/models/orderItem';
import { TableService } from 'src/modules/table-organization/services/table-service/table.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css'],
})
export class EditOrderComponent implements OnInit {
  tableNumber!: string;
  order!: Order;
  finishOrder: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private changeDetectorRefs: ChangeDetectorRef,
    private router: Router,
    private tableService: TableService,
    private _snackBar: MatSnackBar
  ) {}

  @ViewChild(MatTable) table!: MatTable<OrderItem>;
  ngOnInit(): void {
    this.tableNumber = JSON.parse(this.route.snapshot.paramMap.get('id')!);
    this.getData();
  }
  getData() {
    this.orderService.findByTable(this.tableNumber).subscribe((res: any) => {
      this.order = res.body as Order;
      this.canFinishOrder();
      this.changeDetectorRefs.detectChanges();
    });
  }
  canFinishOrder() {
    for (let i = 0; i < this.order.orderItems.length; i++) {
      if (this.order.orderItems[i].dish_status != 'SERVED') {
        this.finishOrder = false;
        return;
      }
    }
    this.finishOrder = true;
  }
  serveOrderItem(id: string) {
    this.updateOrderStatus(id, 'SERVED');
  }
  sendToKitchen(id: string) {
    this.updateOrderStatus(id, 'ORDER_NOT_TAKEN');
  }
  updateOrderStatus(id: string, status: string) {
    this.orderService
      .updateOrderItemStatus(id, status)
      .subscribe((res: any) => {});
    this.getData();
  }
  saveOrder() {
    this.orderService.saveOrder(this.order.id, 'FINISHED').subscribe((res) => {
      this.tableService
        .updateTableStatus(Number(this.tableNumber), 'EMPTY')
        .subscribe((response) => {
          this._snackBar.open('Table updated!', 'close');
        });
      this.router.navigate([`/home`]);
    });
  }
}
