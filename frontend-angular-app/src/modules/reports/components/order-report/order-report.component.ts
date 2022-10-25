import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/order';
@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
  styleUrls: ['./order-report.component.css'],
})
export class OrderReportComponent {
  @Input() orders!: Order[];
  constructor() {}
}
