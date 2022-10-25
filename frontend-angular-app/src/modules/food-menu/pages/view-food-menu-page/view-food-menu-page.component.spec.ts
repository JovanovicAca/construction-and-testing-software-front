import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFoodMenuPageComponent } from './view-food-menu-page.component';

describe('ViewFoodMenuPageComponent', () => {
  let component: ViewFoodMenuPageComponent;
  let fixture: ComponentFixture<ViewFoodMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFoodMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFoodMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
