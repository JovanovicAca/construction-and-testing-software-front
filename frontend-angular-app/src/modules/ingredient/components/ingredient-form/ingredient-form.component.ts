import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/modules/shared/models/ingredient';
import { IngredientService } from '../../services/ingredient.service';
@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css'],
})
export class IngredientFormComponent {
  ingredient!: Ingredient;
  ingredientForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ingredientService: IngredientService,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }
  createForm() {
    this.ingredientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      isAllergic: false,
      price: ['', Validators.required],
    });
  }
  onSubmit() {
    this.ingredient = this.ingredientForm.value;
    this.ingredientService.add(this.ingredient).subscribe((result) => {
      this.router.navigate(['wines']);
    });
  }
}
