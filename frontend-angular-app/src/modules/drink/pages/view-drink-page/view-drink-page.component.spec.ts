import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDrinkPageComponent } from './view-drink-page.component';

describe('ViewDrinkPageComponent', () => {
  let component: ViewDrinkPageComponent;
  let fixture: ComponentFixture<ViewDrinkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDrinkPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDrinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
