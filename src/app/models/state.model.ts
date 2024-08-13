import { Product } from "./product.model";

export interface AppState{
    products: Product[];
    grandTotal: number;
}