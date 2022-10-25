import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDishMenuPageComponent } from './view-dish-menu-page.component';

describe('ViewDishMenuPageComponent', () => {
  let component: ViewDishMenuPageComponent;
  let fixture: ComponentFixture<ViewDishMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDishMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDishMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
