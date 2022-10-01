import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";

const appRoutes : Routes = [
    { path: "recipies", component: RecipesComponent},
    { path: "recipies/:recipeName", component: RecipesComponent},
    { path: "shoppinglist", component: ShoppingListComponent},
    { path: "", redirectTo: "recipies", pathMatch: "full"},
    { path: "notFound", component: PageNotFoundComponent},
    { path: "**", redirectTo: "notFound"},
  ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes),],
    exports: [RouterModule]
})
export class AppRoutingModule{

}