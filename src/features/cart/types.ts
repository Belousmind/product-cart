export type Product = {
  name: string;
  price: number;
  amount: number;
};

export type CartState = {
  items: Product[];
  total: number;
}