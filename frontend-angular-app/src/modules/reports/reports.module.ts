import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { OrderReportComponent } from './components/order-report/order-report.component';
import { RouterModule } from '@angular/router';
import { ReportsRoutes } from './reports.routes';
@NgModule({
  declarations: [ReportPageComponent, OrderReportComponent],
  imports: [CommonModule, RouterModule.forChild(ReportsRoutes)],
})
export class ReportsModule {}
