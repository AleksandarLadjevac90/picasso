import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { from } from 'rxjs';
import { SearchServiceService } from './search-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchServiceService] 
})
export class AppComponent {
  constructor(public search: SearchServiceService){
    
  }
  

  ngOnInit(){
    
  }
  
  
  title = 'diningMenu';
}
