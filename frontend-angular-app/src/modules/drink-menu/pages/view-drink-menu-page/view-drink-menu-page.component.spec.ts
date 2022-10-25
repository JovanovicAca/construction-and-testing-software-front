import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDrinkMenuPageComponent } from './view-drink-menu-page.component';

describe('ViewDrinkMenuPageComponent', () => {
  let component: ViewDrinkMenuPageComponent;
  let fixture: ComponentFixture<ViewDrinkMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDrinkMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDrinkMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
