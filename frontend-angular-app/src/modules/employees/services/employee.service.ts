import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Employee } from 'src/modules/shared/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
  ) { }

  add(employee: Employee): Observable<string> {
    return this.http.post('http://localhost:9090/employee/addEmployee', employee, {
      responseType: 'text',
    });
  }
}
