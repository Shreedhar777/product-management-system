export interface Product {
  product_id: string;
  product_name: string;
  description: string;
  image: string;
  price: number;
  del_status: string;
}

export interface AllProducts {
  status: string;
  products: Product[];
}

export interface AddProductRequestData {
  add_product: boolean;
  product_name: string;
  description: string;
  image: string;
  price: number;
}

export interface AddProductResponseData {
  status: string;
  message: string;
}

export interface SingleProductDetailRequest {
  single_product: boolean;
  product_id: string;
}

export interface SingleProductDetailResponse {
  status: string;
  products: Product;
}
