import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categoriesList: any;
  constructor(private allDataService: AllDataService) { }
  

  ngOnInit(): void {
    this.allDataService.getData().subscribe((data) =>{
      this.categoriesList= data.categories;
    })
  }

}
