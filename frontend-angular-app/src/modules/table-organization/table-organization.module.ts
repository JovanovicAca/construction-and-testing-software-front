import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { GridsterModule } from 'angular-gridster2';
import { TableAdminViewComponent } from './components/table-admin-view/table-admin-view.component';
import { TableDashboardComponent } from './components/table-dashboard/table-dashboard.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { AdminTableOrganizationComponent } from './pages/admin-table-organization/admin-table-organization.component';
import { TableOrganizationRoutes } from './table-organization.routes';
import { MatDialogModule } from '@angular/material/dialog';
import { TableAddDialogComponent } from './components/table-add-dialog/table-add-dialog.component';
import { WaiterTableComponent } from './pages/waiter-table/waiter-table.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TableEmptyDialogComponent } from './dialogs/table-empty-dialog/table-empty-dialog.component';
import { TableOccupiedDialogComponent } from './dialogs/table-occupied-dialog/table-occupied-dialog.component';

@NgModule({
  declarations: [
    TableViewComponent,
    AdminTableOrganizationComponent,
    TableDashboardComponent,
    TableAdminViewComponent,
    TableAddDialogComponent,
    WaiterTableComponent,
    TableEmptyDialogComponent,
    TableOccupiedDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TableOrganizationRoutes),
    DragDropModule,
    MatIconModule,
    GridsterModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ],
  exports: [TableViewComponent],
})
export class TableOrganizationModule {}
