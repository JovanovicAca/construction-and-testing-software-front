import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from '../../models/table';
import { Order } from 'src/modules/shared/models/order';
@Injectable({
  providedIn: 'root',
})
export class TableService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  save(tables: Table[]): Observable<string> {
    return this.http.post('http://localhost:9090/table/updateTables', tables, {
      headers: this.headers,
      responseType: 'text',
    });
  }
  getAll(): Observable<Table[]> {
    return this.http.get<Table[]>('http://localhost:9090/table/getTables', {
      headers: this.headers,
    });
  }
  updateTable(table: Table, order: number, status: string): Observable<string> {
    table.tableStatus = status;
    return this.http.post('http://localhost:9090/table/updateTable', table, {
      headers: this.headers,
      responseType: 'text',
    });
  }
  updateTableStatus(id: number, status: string): Observable<string> {
    let queryParams = {};

    queryParams = {
      headers: this.headers,
      observe: 'response',
      params: new HttpParams().set('id', id).append('status', status),
    };
    return this.http.get<string>(
      'http://localhost:9090/table/updateTableStatus',
      queryParams
    );
  }
  getById(id: string): Observable<Table> {
    let queryParams = {};

    queryParams = {
      headers: this.headers,
      observe: 'response',
      params: new HttpParams().set('id', id),
    };
    return this.http.get<Table>(
      'http://localhost:9090/table/getById',
      queryParams
    );
  }
}
