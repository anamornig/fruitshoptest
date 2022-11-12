import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';

@Component({
  selector: 'app-trial-data',
  templateUrl: './trial-data.component.html',
  styleUrls: ['./trial-data.component.css']
})
export class TrialDataComponent implements OnInit {
  categoriesList: any;
  constructor(private allDataService: AllDataService) {
  }



  ngOnInit(): void {
    this.allDataService.getData().subscribe((data) =>{
      this.categoriesList= data.categories;
    })
  }

}

/*******************************  
 * 
 export class TrialDataComponent implements OnInit {
  allData: any;
  allData$: any;
  constructor(private allDataService: AllDataService) {
  }



  ngOnInit(): void {
    this.allDataService.getData().subscribe((data) =>{
      this.allData = data;
    })
  }

}
 */