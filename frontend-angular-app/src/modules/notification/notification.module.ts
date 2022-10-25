import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './components/notification/notification.component';
import { RouterModule } from '@angular/router';
import { NotificationRoutes } from './notification.routes';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WebSocketService } from './services/web-socket.service';
@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(NotificationRoutes),
    FormsModule,
    BrowserModule,
  ],
  providers: [WebSocketService],
})
export class NotificationModule {}
