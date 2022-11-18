import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public baseUrl = "https://api.predic8.de:443/shop/products";
  constructor(private httpClient: HttpClient) { 
  }
  /*
  getData(): Observable<any> {
    return this.httpClient.get(this.baseUrl+ '/products/')
  }*/

  getProductData(id: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`)
  }

  getCategory(): Observable<any> {
    return this.httpClient.get(this.baseUrl+'/categories/')
  }
  
  getId(url: string) {
    var idarray = url.split("/");
    return parseInt(idarray[idarray.length-1]);
  }

  

}