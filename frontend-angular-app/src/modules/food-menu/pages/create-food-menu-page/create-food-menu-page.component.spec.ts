import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFoodMenuPageComponent } from './create-food-menu-page.component';

describe('CreateFoodMenuPageComponent', () => {
  let component: CreateFoodMenuPageComponent;
  let fixture: ComponentFixture<CreateFoodMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFoodMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFoodMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
