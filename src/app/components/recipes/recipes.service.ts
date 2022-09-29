import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe("Toast", "Toast is good for health", 
        "https://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/Bread_toast_recipe.jpg", 
        [ new Ingredient("Bread", 5), new Ingredient("Jam",5)]),
        new Recipe("Dosa",
         "South Indian Breakfast", 
         "https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900",
         [new Ingredient("cheese",50), new Ingredient("butter", 50)]),
      ];
      
    constructor(private shoppingListService: ShoppingListService){

    }

    getRecipes() : Recipe[] {
        return this.recipes;
    }

    addToShoppingList(recipe : Recipe) {
         this.shoppingListService.addToShoppingList(recipe);
    }
}