import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Dish } from 'src/modules/shared/models/dish';
import { DishMenu } from 'src/modules/shared/models/dishMenu';

@Injectable({
  providedIn: 'root'
})
export class DishMenuService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  add(dishMenu: DishMenu): Observable<string> {
    return this.http.post('http://localhost:9090/dish/addDish', dishMenu, {
      responseType: 'text',
    });
  }

  getAllDishes(
    page: number,
    size: number,
    searchInput: string
  ): Observable<HttpResponse<DishMenu[]>> {
    let queryParams = {};

    queryParams = {
      headers: this.headers,
      observe: 'response',
      params: new HttpParams()
        .set('page', String(page))
        .append('size', String(size))
        .append('searchInput', searchInput),
    };
    return this.http.get<HttpResponse<DishMenu[]>>(
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
