import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipes.service";

@Injectable({
    providedIn: "root"
})
export class RecipesResolver implements Resolve<Recipe>{
    constructor(private recipeService: RecipeService) { };
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Recipe | Observable<Recipe> | Promise<Recipe> {
        let recipe = this.recipeService.getRecipes().filter((obj) => {
            return obj.name === route.params['recipeName']
        })[0];
        return recipe;
    }
}