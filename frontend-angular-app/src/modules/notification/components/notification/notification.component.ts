import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './../../services/web-socket.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  public notifications = 0;

  constructor(private webSocketService: WebSocketService) {}
}
