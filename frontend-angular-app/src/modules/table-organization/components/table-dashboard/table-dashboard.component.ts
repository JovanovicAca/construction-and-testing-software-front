import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-table-dashboard',
  templateUrl: './table-dashboard.component.html',
  styleUrls: ['./table-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDashboardComponent {
  constructor() {}

  addBar() {
    this.addBarEvent.emit();
  }
  addTable() {
    this.addTableEvent.emit();
  }
  saveTableOrganization() {
    this.saveTableOrganizationEvent.emit();
  }
  @Output() addTableEvent = new EventEmitter();
  @Output() addBarEvent = new EventEmitter();
  @Output() saveTableOrganizationEvent = new EventEmitter();
}
