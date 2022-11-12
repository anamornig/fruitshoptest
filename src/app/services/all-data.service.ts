import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllDataService {

  public baseUrl = "https://api.predic8.de:443/shop/categories/";
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.baseUrl)
  }
}


/*
  public getData(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/categories`)
  }
}
 */