import { Component, OnInit } from '@angular/core';
import { Table } from '../../models/table';
import { TableService } from '../../services/table-service/table.service';

@Component({
  templateUrl: './waiter-table.component.html',
  styleUrls: ['./waiter-table.component.css'],
})
export class WaiterTableComponent implements OnInit {
  dashboard!: Table[];
  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.tableService.getAll().subscribe((res) => {
      this.dashboard = res as Table[];
    });
  }
}
