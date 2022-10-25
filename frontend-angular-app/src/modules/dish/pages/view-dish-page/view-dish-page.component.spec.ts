import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDishPageComponent } from './view-dish-page.component';

describe('ViewDishPageComponent', () => {
  let component: ViewDishPageComponent;
  let fixture: ComponentFixture<ViewDishPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDishPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
