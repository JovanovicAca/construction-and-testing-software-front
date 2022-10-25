import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Dish } from 'src/modules/shared/models/dish';
import { MenuItem } from '../../shared/models/menuItem';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  add(dish: Dish): Observable<string> {
    return this.http.post('http://localhost:9090/dish/addDish', dish, {
      responseType: 'text',
    });
  }

  getAllDishes(
    page: number,
    size: number,
    searchInput: string
  ): Observable<HttpResponse<MenuItem[]>> {
    let queryParams = {};

    queryParams = {
      headers: this.headers,
      observe: 'response',
      params: new HttpParams()
        .set('page', String(page))
        .append('size', String(size))
        .append('searchInput', searchInput),
    };
    return this.http.get<HttpResponse<MenuItem[]>>(
      'http://localhost:9090/dish/all/search',
      queryParams
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
