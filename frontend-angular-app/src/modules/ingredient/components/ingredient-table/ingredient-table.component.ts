import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ingredient } from 'src/modules/shared/models/ingredient';
@Component({
  selector: 'app-ingredient-table',
  templateUrl: './ingredient-table.component.html',
  styleUrls: ['./ingredient-table.component.css'],
})
export class IngredientTableComponent {
  // @Input() ingredients!: Ingredient[];
  @Input() dataSource!: MatTableDataSource<Ingredient>;
  displayedColumns: string[] = ['name', 'price', 'isAllergic'];
}
