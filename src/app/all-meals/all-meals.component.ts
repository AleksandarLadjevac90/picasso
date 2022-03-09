import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.css']
})

export class AllMealsComponent implements OnInit {

  constructor(private http:HttpClient) {
    this.getAllMeals ();
    
   }
   
  url ='https://www.themealdb.com/api/json/v1/1/search.php?';
  allMeals:any;
  numberIndex: number=0;
  sumAllMeals=[]; 
   array=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  ngOnInit(): void {

  }
  
  
  getAllMeals (){
    
    let params = new HttpParams();
  for (let key in this.array){
    params=params.set('f', this.array[this.numberIndex])
    this.numberIndex++;
    this.http.get(this.url, {params:params} ).subscribe(data=>{
    this.allMeals=data;
    this.sumAllMeals.push(this.allMeals)
      });}    
    }     
  }
    
    


 
          
    
  
    

