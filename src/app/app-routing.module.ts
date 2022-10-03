import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { RecipesDetailComponent } from "./components/recipes/recipes-detail/recipes-detail.component";
import { RecipesEditComponent } from "./components/recipes/recipes-edit/recipes-edit.component";
import { RecipesResolver } from "./components/recipes/recipes-resolver.service";
import { RecipesStartComponent } from "./components/recipes/recipes-start/recipes-start.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";

const appRoutes : Routes = [
    { path: "recipies", component: RecipesComponent, children:[
      { path: "", component: RecipesStartComponent},
      { path: "new", component: RecipesEditComponent},
      { path: ":recipeName/edit", component: RecipesEditComponent, resolve: { data : RecipesResolver} },
      { path: ":recipeName", component: RecipesDetailComponent, resolve: { data : RecipesResolver}},
    ]},
    { path: "shoppinglist", component: ShoppingListComponent},
    { path: "", redirectTo: "recipies", pathMatch: "full"},
    { path: "notFound", component: PageNotFoundComponent, data: { message: "Page not found!!"}},
    { path: "**", redirectTo: "notFound"},
  ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes),],
    exports: [RouterModule]
})
export class AppRoutingModule{

}