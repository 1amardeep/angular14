import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [new Ingredient("Dosa", 50),
  new Ingredient("Toast", 70)]

  constructor() { }

  getShoppingList(): Ingredient[] {
    return this.ingredients;
  }

  pushShoppingList(ingredient : Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients);
  }

  addToShoppingList(recipe: Recipe){
    this.ingredients.push(...recipe.ingredients);
    this.ingredientChanged.next(this.ingredients);
  }
}
