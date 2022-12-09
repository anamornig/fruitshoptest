import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dried',
  templateUrl: './dried.component.html',
  styleUrls: ['./dried.component.css']
})
export class DriedComponent implements OnInit {
  driedList: any;
  constructor(private productsService: ProductsService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.productsService.getCategoryDried().subscribe((data) => {
      this.driedList = data.products
    })
  }
}
