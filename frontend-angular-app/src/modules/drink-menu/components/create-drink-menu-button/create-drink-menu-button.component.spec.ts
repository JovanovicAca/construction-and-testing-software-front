import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDrinkMenuButtonComponent } from './create-drink-menu-button.component';

describe('CreateDrinkMenuButtonComponent', () => {
  let component: CreateDrinkMenuButtonComponent;
  let fixture: ComponentFixture<CreateDrinkMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDrinkMenuButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDrinkMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
