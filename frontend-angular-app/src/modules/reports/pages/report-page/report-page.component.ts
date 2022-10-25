import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../order/services/order.service';
import { Order } from '../../../shared/models/order';
@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css'],
})
export class ReportPageComponent implements OnInit {
  orders!: Order[];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.allFinished().subscribe((res: any) => {
      this.orders = res as Order[];
    });
  }
}
