import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/modules/shared/models/menuItem';
import { Order } from 'src/modules/shared/models/order';
import { OrderItem } from 'src/modules/shared/models/orderItem';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  allFinished(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:9090/order/finished');
  }
  saveOrder(id: string, status: string): Observable<string> {
    let queryParams = {};

    queryParams = {
      observe: 'response',
      params: new HttpParams().set('id', id).append('order_status', status),
    };
    return this.http.get<string>(
      'http://localhost:9090/order/update/order/status',
      queryParams
    );
  }
  constructor(private http: HttpClient) {}

  updateOrderItemStatus(id: string, status: string): Observable<string> {
    let queryParams = {};

    queryParams = {
      observe: 'response',
      params: new HttpParams().set('id', id).append('dish_status', status),
    };
    return this.http.get<string>(
      'http://localhost:9090/order/update/orderItem',
      queryParams
    );
  }

  getPendingOrderItems(): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(
      'http://localhost:9090/order/dish/pending'
    );
  }

  addOrder(orderDTO: Order): Observable<string> {
    return this.http.post('http://localhost:9090/order/add', orderDTO, {
      responseType: 'text',
    });
  }
  findByTable(id: string): Observable<Order> {
    let queryParams = {};

    queryParams = {
      observe: 'response',
      params: new HttpParams().set('id', id),
    };
    return this.http.get<Order>(
      'http://localhost:9090/order/findByTable',
      queryParams
    );
  }
}
