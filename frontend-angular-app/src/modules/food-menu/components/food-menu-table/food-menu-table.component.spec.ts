import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuTableComponent } from './food-menu-table.component';

describe('FoodMenuTableComponent', () => {
  let component: FoodMenuTableComponent;
  let fixture: ComponentFixture<FoodMenuTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMenuTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMenuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
