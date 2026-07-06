import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    console.log("Product Service Called");
  }

  getProduct() {
     return [
      {id:1,name:'Mobile',price:10000},
      {id:2,name:'Laptop',price:20000},
      {id:3,name:'PC',price:30000},
      {id:4,name:'AC',price:40000},
     ]
  }
}
