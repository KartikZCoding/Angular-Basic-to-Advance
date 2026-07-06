import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from '../../services/product-api-service';
import { Product } from '../../services/productDataType';

@Component({
  selector: 'app-products-details',
  imports: [],
  templateUrl: './products-details.html',
  styleUrl: './products-details.css',
})
export class ProductsDetails {
  productApiData = signal<Product| undefined>(undefined);
  constructor(private route:ActivatedRoute, private product:ProductApiService){}

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id');
    this.product.getProducts().subscribe((data) => {
      data.products.filter((item) => {
        if(item.id.toString() == productId) {
          this.productApiData.set(item);
        }
      });
    })
  }
}
