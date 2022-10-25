import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IngredientService } from 'src/modules/ingredient/services/ingredient.service';
import { Ingredient } from 'src/modules/shared/models/ingredient';

@Component({
  selector: 'app-view-ingredient-page',
  templateUrl: './view-ingredient-page.component.html',
  styleUrls: ['./view-ingredient-page.component.css'],
})
export class ViewIngredientPageComponent implements AfterViewInit {
  ingredientList!: Ingredient[];
  pageSize: number = 5;
  currentPage: number = 0;
  length!: number;
  searchInput: string = '';
  pageSizeOptions: number[] = [5, 10, 25];
  displayedColumns: string[] = ['name', 'price', 'isAllergic'];
  dataSource!: MatTableDataSource<Ingredient>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private ingredientService: IngredientService) {}
  ngAfterViewInit() {
    // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    this.ingredientService
      .getAll(this.currentPage, this.pageSize)
      .subscribe((response: any) => {
        this.ingredientList = response.body as Ingredient[];
        this.length = Number(response.headers.get('Total-items'));
      });
  }
  applyFilter(event: Event) {
    this.currentPage = 0;
    this.ingredientService
      .getAllSearch(this.currentPage, this.pageSize, this.searchInput)
      .subscribe((response: any) => {
        this.ingredientList = response.body as Ingredient[];
        this.length = Number(response.headers.get('Total-items'));
      });
  }
  pageChanged(event: PageEvent) {
    this.ingredientService
      .getAllSearch(event.pageIndex, event.pageSize, this.searchInput)
      .subscribe((response) => {
        this.ingredientList = response.body as Ingredient[];
        this.length = Number(response.headers.get('Total-items'));
      });
  }
}
