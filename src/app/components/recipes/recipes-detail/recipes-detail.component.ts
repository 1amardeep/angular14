import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe! : Recipe;

  constructor(private recipeService : RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.recipe = data["data"];
    })
  }

  addToShoppingList(recipe : Recipe) {
    this.recipeService.addToShoppingList(recipe);
    this.router.navigate(['/shoppinglist']);
  }

  deleteRecipe(recipe : Recipe){
    this.recipeService.deleteRecipes(recipe);
    this.router.navigate(["recipies"]);
  }

}
