import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoriesList: any;
  categories : any;

  constructor(private productsService: ProductsService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }

}
