import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-national-dishes',
  templateUrl: './national-dishes.component.html',
  styleUrls: ['./national-dishes.component.css']
})
export class NationalDishesComponent implements OnInit {
dishesByCountry: any;
indexNumber: number;
listOfDishes: any;
buttonIsClicked:boolean = false;
showNationalTable:boolean = true;

  constructor(private http: HttpClient) {
    this.getCountryName();
    console.log(this.dishesByCountry)
   }
getCountryName (){
  this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list').subscribe
    (data=>{
     this.dishesByCountry=data
     console.log(data)
     })
  }
  
  ngOnInit(): void {
    
  }
  getCountryMeals(param){
   this.buttonIsClicked=true;
   this.indexNumber = param;
   this.showNationalTable=!this.showNationalTable;
    this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?a='+ this.dishesByCountry.meals[this.indexNumber].strArea).subscribe(
        data=>{
          this.listOfDishes=data;
          console.log(data)
        }
        
    )
    
  }

}
