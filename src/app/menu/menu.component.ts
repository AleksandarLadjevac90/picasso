import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
buttonClicked = false;
mealsCategory: any;
numberOfIndex: number;
categoryItem: any;
searchMeals: any;
showTable:boolean = true;
searchText: string='';
  constructor(private http: HttpClient) { 
    
  }
  
 ngOnInit(): void {
  this.getData();
  
  }
 getData (){
  this.http.get('https://www.themealdb.com/api/json/v1/1/categories.php').subscribe
    (data=>{
     this.mealsCategory=data
     //getting only names of categories
          })
      }
  buttonIsClicked(param){
  this.buttonClicked = true;
  this.numberOfIndex = param;
  this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.mealsCategory.categories[this.numberOfIndex-1].strCategory).subscribe
    (data=>{
      this.categoryItem = data;
      console.log(data)

    })
    this.hideTable()
    //checking if button of right category is clicked and calling api for displaying
    // meals of that category
 }

  onSearchTextEntered(searchValue: string){
  this.searchText = searchValue;
    }
  hideTable(){
    this.showTable=!this.showTable;
  }
   
}

                    
