import { CssSelector } from '@angular/compiler';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {
  GridsterConfig,
  GridsterItem,
  GridType,
  DisplayGrid,
} from 'angular-gridster2';

@Component({
  selector: 'app-table-admin-view',
  templateUrl: './table-admin-view.component.html',
  styleUrls: ['./table-admin-view.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class TableAdminViewComponent implements OnInit {
  options!: GridsterConfig;
  @Input() dashboard: Array<GridsterItem> = [];

  //determinate
  ngOnInit(): void {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.OnDragAndResize,
      pushItems: true,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
    };
  }
  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }
  removeItem($event: MouseEvent | TouchEvent, item: GridsterItem): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }
  @Output() deleteTableEvent = new EventEmitter();

  constructor() {}
}
