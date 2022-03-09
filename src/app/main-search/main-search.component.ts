import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css'],
  providers: [SearchServiceService]
})
export class MainSearchComponent implements OnInit {
    
  constructor(public search: SearchServiceService) {
    
   }
showMe:boolean = true;
mealInfo:boolean=false;

  ngOnInit(): void {
  }
  
  closeTable(){
    if(this.search.searchQuery='')
    return 'none';
  }
  toggleMealInfo (){
    this.mealInfo=!this.mealInfo;
  }

}
