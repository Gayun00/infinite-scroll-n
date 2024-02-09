export interface Product {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

export interface CommonResponse {
  total: string;
  error: string;
}

export interface GetProductResponse extends CommonResponse {
  page: string;
  books: Product[];
}
