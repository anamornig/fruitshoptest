import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruitsList: any;

  constructor(private productsService: ProductsService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.productsService.getCategoryFruit().subscribe((data) => {
      this.fruitsList = data.products
    })
  }
}