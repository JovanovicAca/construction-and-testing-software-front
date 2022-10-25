import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MenuItem } from 'src/modules/shared/models/menuItem';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-dish-table',
  templateUrl: './dish-table.component.html',
  styleUrls: ['./dish-table.component.css'],
})
export class DishTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'description',
    'recipe',
    'purchasePrice',
    'price',
    'discount',
    'drinkType',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchInput: string = '';
  currentPage!: number;
  pageSize!: number;
  dishList!: MenuItem[];
  length!: number;

  constructor(private dishService: DishService) {
    this.currentPage = 1;
    this.pageSize = 5;
  }

  ngAfterViewInit() {
    this.dishService
      .getAllDishes(this.currentPage - 1, this.pageSize, this.searchInput)
      .subscribe((response: any) => {
        this.dishList = response.body as MenuItem[];
        this.length = Number(response.headers.get('Total-items'));
      });
  }

  applyFilter(event: Event) {
    this.currentPage = 0;
    this.dishService
      .getAllDishes(this.currentPage, this.pageSize, this.searchInput)
      .subscribe((response: any) => {
        this.dishList = response.body as MenuItem[];
        this.length = Number(response.headers.get('Total-items'));
      });
  }

  pageChanged(event: PageEvent) {
    this.dishService
      .getAllDishes(event.pageIndex, event.pageSize, this.searchInput)
      .subscribe((response: any) => {
        this.dishList = response.body as MenuItem[];
        this.length = Number(response.headers.get('Total-items'));
      });
  }
}
