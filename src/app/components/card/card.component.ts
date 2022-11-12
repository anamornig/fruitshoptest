import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  productsList: any;
  productsIdList: any;

  constructor(private productsService: ProductsService,private router: Router,) { }

  ngOnInit(): void {
    this.productsService.getData().subscribe((data) => {
      this.productsList = data.products;
    })
  }

  productDetails(id:number){
    this.productsService.getProductById(id).subscribe((data) => {
      this.productsIdList = data.ids;
    })
  }

}
