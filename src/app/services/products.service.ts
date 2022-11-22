import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public baseUrl = "https://api.predic8.de:443/shop/";
  options: any;
  constructor(private httpClient: HttpClient) { 
  }
  /* get all products without page limit */

  getDataTotal(){
    let end = {limit :200};
    return this.httpClient.get<any>(this.baseUrl+'products/',{params: end})
  }

  opts:any = [];
  getData() {
    let end = {limit :200};
        return this.opts.length ?
          of(this.opts) :
          this.httpClient.get(this.baseUrl+'products/',{params: end}).pipe(tap(data => this.opts = data))
  }
  /* idea of getting products by id, to get the rest of the data 
  getProductData(id: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`)
  }

  getId(url: string) {
    var idarray = url.split("/");
    return parseInt(idarray[idarray.length-1]);
  }
  */
  getCategories(): Observable<any>{
    return this.httpClient.get(this.baseUrl+'categories/')
  }

/* get products by category */
  getCategoryDried() {
    return this.httpClient.get<any>(this.baseUrl+'categories/dried')
  }

  getCategoryExotic() {
    return this.httpClient.get<any>(this.baseUrl+'categories/exotic')
  }

  getCategoryFresh() {
    return this.httpClient.get<any>(this.baseUrl+'categories/fresh')
  }

  getCategoryFruit() {
    return this.httpClient.get<any>(this.baseUrl+'categories/fruits')
  }

  getCategoryNuts() {
    return this.httpClient.get<any>(this.baseUrl+'categories/nuts')
  }


  


}