import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsApiResponse } from './productDataType';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  apiURL = "https://dummyjson.com/products"

  constructor(private http:HttpClient) {}

  getProducts() {
    return this.http.get<ProductsApiResponse>(this.apiURL)
  }
}
