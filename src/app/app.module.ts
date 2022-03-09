import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { NationalDishesComponent } from './national-dishes/national-dishes.component'
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

import { AllMealsComponent } from './all-meals/all-meals.component';
import { MainSearchComponent } from './main-search/main-search.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    NationalDishesComponent,
    SearchComponent,
    
    AllMealsComponent,
         MainSearchComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
