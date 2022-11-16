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
  ids = [1,2,3,11,18];
  
  

  getId(url: string) {
    var idarray = url.split("/");
    return parseInt(idarray[idarray.length-1]);
  }

  ngOnInit(): void {
    this.productsService.getData().subscribe((data) => {
      this.productsList = data.products;
    })
  }


}

/* el kodigo 
 for (let product in products){
        let detalle
        this.productsService.getProductData(data.product_url) 
        return data.product_url = detalle;
        var listadetallada = detalle.push()
      }
      listadetallada.price = data.price; */



/*


  ngOnInit(): void {
    this.productsService.getData().subscribe((data) => {
      for (let id = 0; id<100; id++)
      this.productsService.getProductData(id)
      this.productsList = data.products;
    })
  }
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