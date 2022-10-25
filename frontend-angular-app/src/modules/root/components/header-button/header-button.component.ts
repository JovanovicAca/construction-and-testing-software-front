import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.css'],
})
export class HeaderButtonComponent {
  constructor() {}

  @Input()
  input!: string;
  @Input() routerLink!: string;
}
