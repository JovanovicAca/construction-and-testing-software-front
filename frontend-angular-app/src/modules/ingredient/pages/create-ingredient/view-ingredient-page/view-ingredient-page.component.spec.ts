import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIngredientPageComponent } from './view-ingredient-page.component';

describe('ViewIngredientPageComponent', () => {
  let component: ViewIngredientPageComponent;
  let fixture: ComponentFixture<ViewIngredientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIngredientPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIngredientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
