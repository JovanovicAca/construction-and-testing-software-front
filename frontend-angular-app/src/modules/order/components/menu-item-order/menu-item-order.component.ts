import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../../shared/models/menuItem';
import { DishService } from '../../../dish/services/dish.service';
import { PageEvent } from '@angular/material/paginator';
import { DrinkService } from 'src/modules/drink/services/drink.service';
@Component({
  selector: 'app-menu-item-order',
  templateUrl: './menu-item-order.component.html',
  styleUrls: ['./menu-item-order.component.css'],
})
export class MenuItemOrderComponent implements AfterViewInit {
  menuItems!: MenuItem[];
  searchInput: string = '';
  value = '';
  orderPrice: number = 0;
  pageSize: number = 6;
  currentPage: number = 0;
  length!: number;
  @Input() type!: string;
  constructor(
    private dishService: DishService,
    private drinkService: DrinkService
  ) {}

  increaseQuantity(menuItem: MenuItem) {
    menuItem.quantity += 1;
  }
  decreaseQuantity(menuItem: MenuItem) {
    if (menuItem.quantity > 1) {
      menuItem.quantity -= 1;
    }
  }
  addMenuItemEvent(menuItem: MenuItem) {
    this.addItemEvent.emit(menuItem);
  }
  getDataDish() {
    this.dishService
      .getAllDishes(this.currentPage, this.pageSize, this.searchInput)
      .subscribe((res) => {
        this.menuItems = res.body as MenuItem[];
        this.menuItems.forEach((element) => {
          element.quantity = 1;
        });
        this.length = Number(res.headers.get('Total-items'));
      });
  }
  getDataDrink() {
    this.drinkService
      .getAllSearch(this.currentPage, this.pageSize, this.searchInput)
      .subscribe((res: any) => {
        this.menuItems = res.body as MenuItem[];
        this.menuItems.forEach((element) => {
          element.quantity = 1;
        });
        this.length = Number(res.headers.get('Total-items'));
      });
  }
  applyFilter(event: Event) {
    this.currentPage = 0;
    if (this.type === 'dish') {
      this.getDataDish();
    } else {
      this.getDataDrink();
    }
  }
  pageChanged(event: PageEvent) {
    this.dishService
      .getAllDishes(event.pageIndex, event.pageSize, this.searchInput)
      .subscribe((res) => {
        this.menuItems = res.body as MenuItem[];
        this.menuItems.forEach((element) => {
          element.quantity = 1;
        });
        this.length = Number(res.headers.get('Total-items'));
      });
  }
  @Output() addItemEvent = new EventEmitter<MenuItem>();
  ngAfterViewInit(): void {
    if (this.type === 'dish') {
      this.getDataDish();
    } else {
      this.getDataDrink();
    }
  }
}
