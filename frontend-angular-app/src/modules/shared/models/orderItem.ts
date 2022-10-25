import { MenuItem } from './menuItem';
export interface OrderItem {
  id: number;
  dish_status:
    | 'IN_PREPARATION'
    | 'SERVED'
    | 'READY_TO_SERVE'
    | 'ORDER_NOT_TAKEN'
    | 'PENDING';
  quantity: number;
  menuItem: MenuItem;
}
