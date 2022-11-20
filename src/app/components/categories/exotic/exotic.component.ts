import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exotic',
  templateUrl: './exotic.component.html',
  styleUrls: ['./exotic.component.css']
})
export class ExoticComponent implements OnInit {
  exoticList: any;

  constructor(private productsService: ProductsService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.productsService.getCategoryExotic().subscribe((data) => {
      this.exoticList = data.products
    })
  }
}
