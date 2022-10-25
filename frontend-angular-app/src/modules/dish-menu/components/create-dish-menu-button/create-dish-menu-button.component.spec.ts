import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDishMenuButtonComponent } from './create-dish-menu-button.component';

describe('CreateDishMenuButtonComponent', () => {
  let component: CreateDishMenuButtonComponent;
  let fixture: ComponentFixture<CreateDishMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDishMenuButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDishMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
