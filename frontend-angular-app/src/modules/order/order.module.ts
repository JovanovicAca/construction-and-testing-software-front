import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MenuItemOrderComponent } from './components/menu-item-order/menu-item-order.component';
import { OrderDashboardComponent } from './components/order-dashboard/order-dashboard.component';
import { OrderItemListComponent } from './components/order-item-list/order-item-list.component';
import { OrderRoutes } from './order.routes';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { EditOrderComponent } from './pages/edit-order/edit-order.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { CookPageComponent } from './pages/cook-page/cook-page.component';
import { CookTableComponent } from './components/cook-table/cook-table.component';
@NgModule({
  declarations: [
    CreateOrderComponent,
    MenuItemOrderComponent,
    OrderItemListComponent,
    OrderDashboardComponent,
    EditOrderComponent,
    OrderTableComponent,
    CookPageComponent,
    CookTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(OrderRoutes),
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatPaginatorModule,
    FormsModule,
    MatTableModule,
  ],
})
export class OrderModule {}
