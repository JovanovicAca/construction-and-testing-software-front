import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css'],
})
export class LoginButtonComponent {
  @Input() input!: string;

  @Output() clickButtonEvent = new EventEmitter<string>();

  clickButton() {
    this.clickButtonEvent.emit(this.input);
  }
}
