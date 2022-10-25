import { MenuItem } from './menuItem';

export interface DishOrderItem {
  id: string;
  name: string;
  menuItem: MenuItem | undefined;
  quantity: number;
  dish_status:
    | 'IN_PREPARATION'
    | 'SERVED'
    | 'READY_TO_SERVE'
    | 'ORDER_NOT_TAKEN'
    | 'PENDING';
}
