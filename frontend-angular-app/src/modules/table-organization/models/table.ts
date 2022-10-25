import { TABLE_STATUS } from './TABLE_STATUS';
import { Order } from '../../shared/models/order';
export interface Table {
  id: number;
  tableStatus: string;
  x: number;
  y: number;
  cols: number;
  rows: number;
  tableNumber: string;
  waiter: string | undefined;
}
// ({ x: 0, y: 0, cols: 1, rows: 1, label: 'Bar' });
