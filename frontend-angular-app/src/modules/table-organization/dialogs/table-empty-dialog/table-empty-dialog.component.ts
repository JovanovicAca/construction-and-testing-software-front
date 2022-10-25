import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GridsterItem } from 'angular-gridster2';
import { Table } from '../../models/table';

@Component({
  templateUrl: './table-empty-dialog.component.html',
  styleUrls: ['./table-empty-dialog.component.css'],
})
export class TableEmptyDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: GridsterItem,
    private router: Router
  ) {}

  createOrder() {
    const table = this.data['table'] as Table;

    this.router.navigate([`/order/create/${table['id']}`]);
  }
}
