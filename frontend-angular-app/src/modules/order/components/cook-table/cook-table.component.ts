import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderItem } from 'src/modules/shared/models/orderItem';

@Component({
  selector: 'app-cook-table',
  templateUrl: './cook-table.component.html',
  styleUrls: ['./cook-table.component.css'],
})
export class CookTableComponent {
  constructor() {}
  @Input() orderItems!: OrderItem[];
  displayedColumns: string[] = [
    'name',
    'quantity',
    'status',
    'allergy',
    'action',
  ];

  @Output() serveOrderItemEvent = new EventEmitter<string>();
  dishStatusServe(id: string) {
    this.serveOrderItemEvent.emit(id);
  }
}
