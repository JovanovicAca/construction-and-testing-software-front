import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDrinkButtonComponent } from './create-drink-button.component';

describe('CreateDrinkButtonComponent', () => {
  let component: CreateDrinkButtonComponent;
  let fixture: ComponentFixture<CreateDrinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDrinkButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDrinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
