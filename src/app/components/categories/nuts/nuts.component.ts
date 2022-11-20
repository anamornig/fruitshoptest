import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nuts',
  templateUrl: './nuts.component.html',
  styleUrls: ['./nuts.component.css']
})
export class NutsComponent implements OnInit {

  constructor(private productsService: ProductsService, private httpClient: HttpClient) { }
  nutsList:any;
  
  ngOnInit(): void {
    this.productsService.getCategoryNuts().subscribe((data) => {
      this.nutsList = data.products
    })
  }
}
