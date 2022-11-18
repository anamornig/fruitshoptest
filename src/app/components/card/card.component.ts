import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  productsList: any;
  productsIdList: any;
  public baseUrl = "https://api.predic8.de:443/shop/products/";
  products!: Array<Product>;
  page = '1';

  constructor(private productsService: ProductsService, private httpClient: HttpClient) { }

  

  ngOnInit(): void {
    this.productsList = null; 
    this.productsService.getProductData('').subscribe((products) => {
      for (let product in products) {
        let id = product.split('/')[1] 
        this.productsService.getProductData(id).subscribe(productData => {
          let productDetail = { ...productData, id }
          this.productsList.push(productDetail)
        }) 
      }this.productsList = products.products;
    }) 
}
}
