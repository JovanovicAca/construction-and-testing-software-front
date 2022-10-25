import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuFormComponent } from './food-menu-form.component';

describe('FoodMenuFormComponent', () => {
  let component: FoodMenuFormComponent;
  let fixture: ComponentFixture<FoodMenuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMenuFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
