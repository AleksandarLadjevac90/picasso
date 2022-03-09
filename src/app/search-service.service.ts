import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) {
    
   }
urlSingleMeal='https://www.themealdb.com/api/json/v1/1/search.php?s=';
responseData:any;
searchQuery='';

  getMealByName(param){
       return  this.http.get(this.urlSingleMeal + param).subscribe
      (data=>{
        this.responseData=data;
      })
    }
    
updateQuery(event:Event){
  this.searchQuery=(<HTMLInputElement>event.target).value;
  this.getMealByName(this.searchQuery)
    }
    
}

