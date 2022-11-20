import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
searchText: any;
term: any;

  constructor() { }

  ngOnInit(): void {
  }


}
