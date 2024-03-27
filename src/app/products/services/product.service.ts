import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import {
  AddProductRequestData,
  AddProductResponseData,
  AllProducts,
  SingleProductDetailRequest,
  SingleProductDetailResponse,
} from '../enums/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  updateFlag = false;
  productId = '';
  baseUrl = `${environment.target}/${environment.apiVersion}/product/index.php`;

  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<AllProducts> {
    const req = { list_products: true };
    return this.httpClient.post<AllProducts>(this.baseUrl, req);
  }

  setUpdateFlag(value: boolean, id: string): void {
    this.updateFlag = value;
    this.productId = id;
  }

  getUpdateFlag(): boolean {
    return this.updateFlag;
  }

  getProductId(): string {
    return this.productId;
  }

  addProduct(
    productDetails: AddProductRequestData
  ): Observable<AddProductResponseData> {
    return this.httpClient.post<AddProductResponseData>(
      this.baseUrl,
      productDetails
    );
  }

  updateProduct(
    productDetails: AddProductRequestData
  ): Observable<AddProductResponseData> {
    return this.httpClient.put<AddProductResponseData>(
      this.baseUrl,
      productDetails
    );
  }

  getProductDetails(
    request: SingleProductDetailRequest
  ): Observable<SingleProductDetailResponse> {
    return this.httpClient.post<SingleProductDetailResponse>(
      this.baseUrl,
      request
    );
  }
}
