import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Employee } from 'src/modules/shared/models/employee';
import { EmployeeService } from '../../services/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent {
  forms = new FormControl();
  genderList: string[] = ['MALE', 'FEMALE', 'OTHER'];
  roles: string[] = ['Waiter', 'Bartender', 'Chef', 'Cook'];
  employee!: Employee;

  constructor(
    private employeeService: EmployeeService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.employee = {
      name: '',
      surname: '',
      password: '',
      birthOfDate: new Date(),
      paycheck: 0,
      email: '',
      role: '',
      gender: '',
    };
  }

  onSubmit(): void {
    this.employeeService.add(this.employee as Employee).subscribe(
      (result) => {
        this._snackBar.open(`Employee ${this.employee.name} added`, 'close');
        this.router.navigate(['drinks']);
      },
      (error) => {
        // this.incorrect_name = true;
        // this._snackBar.open(
        //   'Ingredient with that name already exists',
        //   'Close',
        //   {
        //     duration: 1000,
        //   }
        // );
      }
    );
  }
}
