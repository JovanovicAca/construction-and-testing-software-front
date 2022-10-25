import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  type: 'table' | 'bar';
}

@Component({
  selector: 'app-table-add-dialog',
  templateUrl: './table-add-dialog.component.html',
  styleUrls: ['./table-add-dialog.component.css'],
})
export class TableAddDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
