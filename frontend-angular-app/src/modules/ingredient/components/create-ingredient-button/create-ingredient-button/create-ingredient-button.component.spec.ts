import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIngredientButtonComponent } from './create-ingredient-button.component';

describe('CreateIngredientButtonComponent', () => {
  let component: CreateIngredientButtonComponent;
  let fixture: ComponentFixture<CreateIngredientButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIngredientButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIngredientButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
