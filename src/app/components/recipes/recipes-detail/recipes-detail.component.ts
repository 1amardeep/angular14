import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe! : Recipe;

  constructor(private recipeService : RecipeService, private router: Router) { }

  ngOnInit(): void {
  }

  addToShoppingList(recipe : Recipe) {
    this.recipeService.addToShoppingList(recipe);
    this.router.navigate(['/shoppinglist']);
  }

}
