import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe : any;
  @Output() deleteEmit = new EventEmitter<Recipe>();

  constructor(private recipeService :RecipeService) { }

  ngOnInit(): void {
  }

  deleteRecipes(recipe: Recipe) {
    this.deleteEmit.emit(recipe);
  }

  recipeDetail(recipe :Recipe) {
    this.recipeService.recipeSelected.emit(recipe);
  }

}
