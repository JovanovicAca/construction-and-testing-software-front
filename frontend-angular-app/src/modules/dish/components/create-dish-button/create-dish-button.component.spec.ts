import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDishButtonComponent } from './create-dish-button.component';

describe('CreateDishButtonComponent', () => {
  let component: CreateDishButtonComponent;
  let fixture: ComponentFixture<CreateDishButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDishButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDishButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
