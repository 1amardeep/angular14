import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    recipes: Recipe[] = [
        new Recipe("Toast", "Toast is good for health", 
        "https://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/Bread_toast_recipe.jpg", 
        [ new Ingredient("Bread", 5), new Ingredient("Jam",5)]),
        new Recipe("Dosa",
         "South Indian Breakfast", 
         "https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900",
         [new Ingredient("cheese",50), new Ingredient("butter", 50)]),
      ];

    recipeUpdated = new BehaviorSubject<Recipe[]>(this.recipes);
      
    constructor(private shoppingListService: ShoppingListService){

    }

    getRecipes() : Recipe[] {
        return this.recipes;
    }

    addToShoppingList(recipe : Recipe) {
         this.shoppingListService.addToShoppingList(recipe);
    }

    addRecipes(recipe : Recipe) {
        this.recipes = [...this.recipes, recipe ];
        this.recipeUpdated.next(this.recipes);
    }

    deleteRecipes(recipe : Recipe) {
        this.recipes = this.recipes.filter((obj) => obj.name !== recipe.name);
        this.recipeUpdated.next(this.recipes);
    }
}