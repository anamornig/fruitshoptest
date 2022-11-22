import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  productsList: any;
  term: any;
  myControl = new FormControl();
  options = [];
  filteredOptions: Observable<any>;


  constructor(private productsService: ProductsService, private httpClient: HttpClient) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
            return this.filter(val || '')
      }) 
    )
  }


  
  filter(val: string): Observable<any> {
    return this.productsService.getData()
      .pipe(
        map(response => response.filter((option: { name: string; }) => { 
          return option.name.toLowerCase().indexOf(val.toLowerCase())
        }))
      )
    }  
  

  ngOnInit(): void {
    this.productsService.getDataTotal().subscribe((data)=>{
      this.productsList = data.products;
    })
  } 




}



/*

    this.productsList = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.productsList.filter((product: string) => product.toLowerCase().includes(filterValue));
  }


    this.productsList = null; 
    this.productsService.getProductData('').subscribe((products) => {
      for (let product in products) {
        let id = product.split('/')[1] 
        this.productsService.getProductData(id).subscribe(productData => {
          let productDetail = { ...productData, id }
          this.productsList.push(productDetail)
        }) 
      }this.productsList = products.products;
    })
}


    this.filteredProducts = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.productsNames.filter((productsNames: string) => productsNames.toLowerCase().includes(filterValue));
  }
*/