import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Toast", "Toast is good for health", "https://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/Bread_toast_recipe.jpg"),
    new Recipe("Dosa", "South Indian Breakfast", "https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  deleteRecipe(evt: Recipe) {
   console.log("evt", evt);
   var indexOfStevie = this.recipes.findIndex(i => i.name === evt.name);
   this.recipes.splice(indexOfStevie, 1);
  }

}
