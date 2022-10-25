import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishMenuTableComponent } from './dish-menu-table.component';

describe('DishMenuTableComponent', () => {
  let component: DishMenuTableComponent;
  let fixture: ComponentFixture<DishMenuTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishMenuTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishMenuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
