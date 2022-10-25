import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFoodMenuButtonComponent } from './create-food-menu-button.component';

describe('CreateFoodMenuButtonComponent', () => {
  let component: CreateFoodMenuButtonComponent;
  let fixture: ComponentFixture<CreateFoodMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFoodMenuButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFoodMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
