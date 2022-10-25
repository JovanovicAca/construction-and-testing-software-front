import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login-numpad',
  templateUrl: './login-numpad.component.html',
  styleUrls: ['./login-numpad.component.css'],
})
export class LoginNumpadComponent {
  values = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['', '0', ''],
  ];
  constructor() {}

  @Output() clickButtonEvent = new EventEmitter<string>();
  clickButton(input: string) {
    this.clickButtonEvent.emit(input);
  }
}
