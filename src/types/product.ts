export interface Product {
  title: string;
  price: string;
  imageUrl: string;
}

export interface GetProductResponse {
  data: Product[];
}
