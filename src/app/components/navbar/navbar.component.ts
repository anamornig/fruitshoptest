import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service'
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categoriesList: any;
  constructor(private productsService:ProductsService, private httpClient: HttpClient) { }
  

  ngOnInit(): void {
    this.productsService.getCategories().subscribe((data) =>{
      this.categoriesList= data.categories;
    })
  }

}
