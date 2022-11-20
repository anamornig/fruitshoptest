import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-fresh',
  templateUrl: './fresh.component.html',
  styleUrls: ['./fresh.component.css']
})
export class FreshComponent implements OnInit {
  freshList: any;
  constructor(private productsService: ProductsService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.productsService.getCategoryFresh().subscribe((data) => {
      this.freshList = data.products
    })
  }

}
