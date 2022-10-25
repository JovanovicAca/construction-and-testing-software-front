import { DishOrderItem } from './dishOrderItem';
import { OrderItem } from './orderItem';

export interface Order {
  orderStatus: 'ACCEPTED' | 'DECLINED' | 'FINISHED' | 'PAYED' | 'PENDING';
  id: string;
  order_price: number;
  allergyDescription: string;
  orderItems: DishOrderItem[];
  table: string;
}
