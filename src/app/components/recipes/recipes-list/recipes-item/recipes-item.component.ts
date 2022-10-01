import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe : any;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  recipeDetail(recipe :Recipe) {
    this.router.navigate(['recipies/'+recipe.name]);
  }

}
