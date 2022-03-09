import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { NationalDishesComponent } from './national-dishes/national-dishes.component';
import { AllMealsComponent } from './all-meals/all-meals.component';
const routes: Routes = [
  {path:'menu', component:MenuComponent}, 
 {path:'menu/nationalDishes', component:NationalDishesComponent},
 //{path:'search/:searchTerm', component:MenuComponent},
  {path:'about', component:AboutComponent},
 {path:'menu/allMeals', component:AllMealsComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
