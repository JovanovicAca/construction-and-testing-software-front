import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DrinkService } from '../../services/drink.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Drink } from 'src/modules/shared/models/drink';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-drink-table',
  templateUrl: './drink-table.component.html',
  styleUrls: ['./drink-table.component.css'],
})
export class DrinkTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'description',
    'recipe',
    'purchasePrice',
    'price',
    'discount',
    'drinkType',
  ];
  drinkList!: Drink[];
  currentPage!: number;
  pageSize!: number;
  totalSize!: number;
  isLoading = true;
  length!: number;
  searchInput: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private drinkService: DrinkService,
    private _snackBar: MatSnackBar
  ) {
    this.currentPage = 1;
    this.pageSize = 5;
  }

  ngAfterViewInit() {
    this.drinkService
      .getAllSearch(this.currentPage - 1, this.pageSize, this.searchInput)
      .subscribe((response: any) => {
        this.isLoading = false;
        this.drinkList = response.body as Drink[];
        this.length = Number(response.headers.get('Total-items'));
      });
  }

  applyFilter(event: Event) {
    this.currentPage = 0;
    this.drinkService
      .getAllSearch(this.currentPage, this.pageSize, this.searchInput)
      .subscribe((response: any) => {
        this.drinkList = response.body as Drink[];
        this.length = Number(response.headers.get('Total-items'));
      });
  }

  pageChanged(event: PageEvent) {
    this.drinkService
      .getAllSearch(event.pageIndex, event.pageSize, this.searchInput)
      .subscribe((response) => {
        this.drinkList = response.body as Drink[];
        this.length = Number(response.headers.get('Total-items'));
      });
  }
}
