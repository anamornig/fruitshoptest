import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Productsinterface } from 'src/app/productsinterface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  productsList: any;
  productsIdList: any;
    public baseUrl = "https://api.predic8.de:443/shop/products/";


  constructor(private productsService: ProductsService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.productsService.getData().subscribe((data) => {
      this.productsList = data.products;
    })
  }

  details(): void{
  for (let id = 0; id<100; id++){
    this.productsService.getDetails(id)
    
    }
  }
}




 /*


 FUNCIONA



}


NO FUNCIONA
productDetails(id:number){
  this.productsService.getProductById(id).subscribe((data) => {
    this.productsIdList = data.ids;
  })

  productDetails(id:number){
    this.productsService.getProductById(id).subscribe((data) => {
      this.productsIdList = data.ids;
    })
  }
  getProductByParameter(){
    let params = new HttpParams().set('id',1);
    this.productoslong = this.httpClient.get(this.baseUrl + '/?id', {params})
   }
}*/