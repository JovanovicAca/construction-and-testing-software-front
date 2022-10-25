import { Component, Input, OnInit } from '@angular/core';
import { OrderItem } from 'src/modules/shared/models/orderItem';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cook-page',
  templateUrl: './cook-page.component.html',
  styleUrls: ['./cook-page.component.css'],
})
export class CookPageComponent implements OnInit {
  constructor(private orderService: OrderService) {}
  orderItems!: OrderItem[];
  ngOnInit(): void {
    this.orderService.getPendingOrderItems().subscribe((res: any) => {
      this.orderItems = res as OrderItem[];
    });
  }
  dishStatusServe(id: string) {
    this.orderService
      .updateOrderItemStatus(id, 'READY_TO_SERVE')
      .subscribe((res: any) => {
        this.orderService.getPendingOrderItems().subscribe((res: any) => {
          this.orderItems = res as OrderItem[];
        });
      });
  }
}
