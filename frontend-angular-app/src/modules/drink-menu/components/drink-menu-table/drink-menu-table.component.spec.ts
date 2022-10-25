import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkMenuTableComponent } from './drink-menu-table.component';

describe('DrinkMenuTableComponent', () => {
  let component: DrinkMenuTableComponent;
  let fixture: ComponentFixture<DrinkMenuTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkMenuTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkMenuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
