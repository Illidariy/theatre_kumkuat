export type Product = {
  id?: number;
  title: string;
  body: string;
  photo: string;
  price: number;
  userId: number;
};

export type State = {
  products: Product[];
  error: undefined | string;
};

export type ProductId = Product['id'];
