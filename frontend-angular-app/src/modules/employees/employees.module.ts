import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesRoutes } from './employees.routes';
import { CreateEmployeePageComponent } from './pages/create-employee-page/create-employee-page.component';
import { ViewEmployeePageComponent } from './pages/view-employee-page/view-employee-page.component';
import { CreateEmployeeButtonComponent } from './components/create-employee-button/create-employee-button.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    CreateEmployeePageComponent,
    ViewEmployeePageComponent,
    CreateEmployeeButtonComponent,
    EmployeeFormComponent,
    EmployeeTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeesRoutes),
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule,
    DatePipe
  ]
})
export class EmployeesModule { }
