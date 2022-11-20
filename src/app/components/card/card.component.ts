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
  constructor(private productsService: ProductsService, private httpClient: HttpClient) { }

  

  ngOnInit(): void {
    this.productsService.getDataTotal().subscribe((data)=>{
      this.productsList = data.products;
    })
} 
}


/*
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
} */