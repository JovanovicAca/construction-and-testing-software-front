import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDishPageComponent } from './create-dish-page.component';

describe('CreateDishPageComponent', () => {
  let component: CreateDishPageComponent;
  let fixture: ComponentFixture<CreateDishPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDishPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
