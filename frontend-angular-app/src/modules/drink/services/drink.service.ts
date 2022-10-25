import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Drink } from 'src/modules/shared/models/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  add(drink: Drink): Observable<string> {
    return this.http.post('http://localhost:9090/drink/addDrink', drink, {
      responseType: 'text',
    });
  }

  getAll(page: number, size: number): Observable<HttpResponse<Drink[]>> {
    let queryParams = {};

    queryParams = {
      headers: this.headers,
      observe: 'response',
      params: new HttpParams()
        .set('page', String(page))
        .append('size', String(size)),
    };
    return this.http
      .get<HttpResponse<Drink[]>>(
        'http://localhost:9090/drink/all',
        queryParams
      )
      .pipe(
        catchError(
          this.handleError<HttpResponse<Drink[]>>(
            'getDrinks',
            new HttpResponse<[]>()
          )
        )
      );
  }
  getAllSearch(
    page: number,
    size: number,
    searchInput: string
  ): Observable<HttpResponse<Drink[]>> {
    let queryParams = {};

    queryParams = {
      headers: this.headers,
      observe: 'response',
      params: new HttpParams()
        .set('page', String(page))
        .append('size', String(size))
        .append('searchInput', searchInput),
    };
    return this.http.get<HttpResponse<Drink[]>>(
      'http://localhost:9090/drink/all/search',
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

