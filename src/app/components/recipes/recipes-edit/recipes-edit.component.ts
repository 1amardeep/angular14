import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit, AfterViewInit {

  @ViewChild("f") formRef !: NgForm;
  editMode: boolean = false;
  recipeName!: string;
  recipe !: Recipe;

  constructor(private route: ActivatedRoute, private recipeService : RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.editMode = !!param["recipeName"];
      this.recipeName = this.editMode ? param["recipeName"] : "";
    })

    this.route.data.subscribe((data) => {
     this.recipe = data['data'];
    })
  }

  ngAfterViewInit(): void {
    if(this.editMode) {
      this.fillForm();
    }
  }

  fillForm(){
    setTimeout(() => {
      this.formRef.form.setValue({
        name : this.recipe.name,
        description: this.recipe.description,
        imageUrl : this.recipe.imageUrl,
      });
    });
  }

  onSubmit(){
    this.recipe = new Recipe(this.formRef.form.value.name,
      this.formRef.form.value.description,
      this.formRef.form.value.imageUrl,
      []);
    this.recipeService.addRecipes(this.recipe);
    this.formRef.form.reset();
    this.router.navigate(["/recipies", this.recipe.name]);
  }
}
