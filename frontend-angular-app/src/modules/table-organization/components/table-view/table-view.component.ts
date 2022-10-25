import { CssSelector } from '@angular/compiler';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
} from 'angular-gridster2';
import { OrderService } from 'src/modules/order/services/order.service';
import { TableEmptyDialogComponent } from '../../dialogs/table-empty-dialog/table-empty-dialog.component';
import { Table } from '../../models/table';
import { TABLE_STATUS } from '../../models/TABLE_STATUS';
import { TableAddDialogComponent } from '../table-add-dialog/table-add-dialog.component';
@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class TableViewComponent implements OnInit {
  options!: GridsterConfig;
  @Input() dashboard: Array<GridsterItem> = [];
  ngOnInit(): void {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.OnDragAndResize,
      draggable: {
        enabled: false,
      },
      resizable: {
        enabled: false,
      },
    };
  }
  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }
  clickTable(table: GridsterItem) {
    if (table['tableStatus'] === 'EMPTY') {
      const dialogRef = this.dialog.open(TableEmptyDialogComponent, {
        data: {
          table: table,
        },
      });
    }
    if (table['tableStatus'] === 'OCCUPIED') {
      this.router.navigate([`/order/edit/${table['id']}`]);
      // this.orderService
      //   .findByTable(table['id'])
      //   .subscribe((res) => alert(JSON.stringify(res)));
    }
    if (table['tableStatus'] === 'RESERVED') {
    }
  }

  @Input()
  tables!: Table[];
  constructor(
    public dialog: MatDialog,
    private orderService: OrderService,
    private router: Router
  ) {}
}
