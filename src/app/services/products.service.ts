import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productsinterface } from 'src/app/productsinterface'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public baseUrl = "https://api.predic8.de:443/shop/products/";
  details:any;
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get(this.baseUrl)
  }
  getDetails(data:any) {
    return this.httpClient.get(this.baseUrl, {params: data})
  }
}



/*******************************  
 * et params = new HttpParams().append('id','');
    return this.details = this.httpClient.get(this.baseUrl, {params})
 
 * 
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public baseUrl = "https://api.predic8.de:443/shop/products/";
  productscoso!: Observable<Productsinterface[]>;

  constructor(private httpClient: HttpClient) { }

  getData() {
    this.productscoso =  this.httpClient.get<Productsinterface[]>(this.baseUrl)
  }


}






 * 
 * @Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public baseUrl = "https://api.predic8.de:443/shop/products/";
  productoslong:any;
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get(this.baseUrl)
  }

NO FUNCIONA
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * getData(): Observable<any> {
    return this.httpClient.get(this.baseUrl)
  }

  getProductById(id:number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`)
  }


    getProductById(id:number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}${id}`)
  }

  getProductByParameter(){
    this.productoslong = this.httpClient.get(this.baseUrl + '/?id')
  }


  
} */