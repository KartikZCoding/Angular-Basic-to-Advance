import { Component, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ProductApiService } from '../../services/product-api-service';
import { Product } from '../../services/productDataType';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productData: any = signal("");
  productApiData = signal<Product[] | undefined>(undefined);

  constructor(private productService: ProductService, private productApiService: ProductApiService) { }

  ngOnInit() {
    this.productApiService.getProducts().subscribe((data) => {
      console.log(data.products);
      this.productApiData.set(data.products);
    })
  }

  // loadData() {
  //   let data = this.productService.getProduct();
  //   console.log(data);
  //   this.productData.set(data);
  // }

}
