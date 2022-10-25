import { Component, Input, NgModule, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() length!: number;
  @Input() pageSize!: number;
  @Input() pageSizeOptions!: number[];
  constructor() {}
  pageEvent!: PageEvent;
}
