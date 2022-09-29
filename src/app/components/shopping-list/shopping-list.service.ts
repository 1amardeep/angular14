import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [new Ingredient("Dosa", 50),
  new Ingredient("Toast", 70)]

  constructor() { }

  getShoppingList(): Ingredient[] {
    return this.ingredients;
  }

  pushShoppingList(ingredient : Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients);
  }

  addToShoppingList(recipe: Recipe){
    this.ingredients.push(...recipe.ingredients);
    this.ingredientChanged.emit(this.ingredients);
  }
}
