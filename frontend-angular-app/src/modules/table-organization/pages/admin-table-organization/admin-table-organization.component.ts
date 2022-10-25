import { Component, OnInit, Output } from '@angular/core';
import { Table } from '../../models/table';
import { TABLE_STATUS } from '../../models/TABLE_STATUS';
import { TableService } from '../../services/table-service/table.service';
import {
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
} from 'angular-gridster2';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  templateUrl: './admin-table-organization.component.html',
  styleUrls: ['./admin-table-organization.component.css'],
})
export class AdminTableOrganizationComponent implements OnInit {
  tables!: Table[];
  counter!: number;
  dashboard!: Table[];
  mode: ProgressBarMode = 'determinate';
  constructor(
    private tableService: TableService,
    private _snackBar: MatSnackBar
  ) {}
  addTable() {
    this.counter += 1;

    this.dashboard.push({
      id: this.counter,
      x: 0,
      y: 0,
      cols: 1,
      rows: 1,
      tableNumber: 'Table',
      tableStatus: 'EMPTY',
      waiter: undefined,
    });
    console.log(this.dashboard);
  }
  addBar() {
    this.counter += 1;
    // this.dashboard.push({
    //   id: 0,
    //   x: 0,
    //   y: 0,
    //   cols: 1,
    //   rows: 1,
    //   label: 'Bar',
    // });
  }
  saveTableOrganization() {
    this.mode = 'indeterminate';
    this.tableService.save(this.dashboard).subscribe((res) => {
      this._snackBar.open(res, 'Close', {
        duration: 1500,
      });
      this.mode = 'determinate';
    });
  }
  ngOnInit() {
    this.tableService.getAll().subscribe((res) => {
      this.dashboard = res;
      this.counter = this.dashboard.length;
    });
  }
}
