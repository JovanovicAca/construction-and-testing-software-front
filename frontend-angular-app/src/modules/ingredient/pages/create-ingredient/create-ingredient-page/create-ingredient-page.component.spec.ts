import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIngredientPageComponent } from './create-ingredient-page.component';

describe('CreateIngredientPageComponent', () => {
  let component: CreateIngredientPageComponent;
  let fixture: ComponentFixture<CreateIngredientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIngredientPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIngredientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
