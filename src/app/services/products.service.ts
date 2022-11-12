import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public baseUrl = "https://api.predic8.de:443/shop/products/";
  
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get(this.baseUrl)
  }

  getProductById(id:number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`)
  }
}