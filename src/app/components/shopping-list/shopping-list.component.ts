import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients!: Ingredient[];
  onSubscription! : Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

   ngOnInit(): void {
    this.ingredients = this.shoppingListService.getShoppingList();
    this.onSubscription = this.shoppingListService.ingredientChanged.subscribe((ingredients : Ingredient[]) =>{
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy(): void {
    this.onSubscription.unsubscribe();
  }

}
