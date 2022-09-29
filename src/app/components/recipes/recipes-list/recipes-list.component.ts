import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  deleteRecipe(evt: Recipe) {
   var indexOfStevie = this.recipeService.getRecipes().findIndex(i => i.name === evt.name);
   this.recipeService.getRecipes().splice(indexOfStevie, 1);
  }

}
