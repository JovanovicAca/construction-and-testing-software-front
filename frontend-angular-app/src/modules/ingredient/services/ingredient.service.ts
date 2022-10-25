import { Injectable } from '@angular/core';
import { Ingredient } from 'src/modules/shared/models/ingredient';
import { catchError, Observable, of } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { SortDirection } from '@angular/material/sort';
@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  add(ingredient: Ingredient): Observable<string> {
    return this.http.post('http://localhost:9090/ingredient/add', ingredient, {
      responseType: 'text',
    });
  }

  getAllNames(): Observable<string[]> {
    return this.http.get<string[]>(
      'http://localhost:9090/ingredient/getAllNames'
    );
  }

  getAll(page: number, size: number): Observable<HttpResponse<Ingredient[]>> {
    let queryParams = {};

    queryParams = {
      headers: this.headers,
      observe: 'response',
      params: new HttpParams()
        .set('page', String(page))
        .append('size', String(size)),
    };
    return this.http.get<HttpResponse<Ingredient[]>>(
      'http://localhost:9090/ingredient/all',
      queryParams
    );
    // .pipe(
    //   catchError(
    //     this.handleError<HttpResponse<Ingredient[]>>(
    //       'getIngredients',
    //       new HttpResponse<[]>()
    //     )
    //   )
    // );
  }

  getAllSearch(
    page: number,
    size: number,
    searchInput: string
  ): Observable<HttpResponse<Ingredient[]>> {
    let queryParams = {};

    queryParams = {
      headers: this.headers,
      observe: 'response',
      params: new HttpParams()
        .set('page', String(page))
        .append('size', String(size))
        .append('searchInput', searchInput),
    };
    return this.http.get<HttpResponse<Ingredient[]>>(
      'http://localhost:9090/ingredient/all/search',
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
