import { Bean } from './bean';
export interface ShoppingCartItem extends Bean {
  name: string;
  price: number;
  quantity: number;
  description: string;
  published: Date;
  image: string;
  selected: boolean;
  id: number;


}