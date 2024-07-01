export interface Product {
  color: string;
  description: string;
  genre: string;
  image: string;
  name: string;
  quantity: number;
  review: string;
  size: Array<{ code: string, price: number }>;
  stock: number;
  __v: 0;
  _id: string;
}
