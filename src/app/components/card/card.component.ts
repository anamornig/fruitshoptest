import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  productsList: any;
term: any;
  constructor(private productsService: ProductsService, private httpClient: HttpClient) { }

  

  ngOnInit(): void {
    this.productsService.getDataTotal().subscribe((data)=>{
      this.productsList = data.products;
    })
  } 

  searchText: string = '';


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
}


  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }
*/