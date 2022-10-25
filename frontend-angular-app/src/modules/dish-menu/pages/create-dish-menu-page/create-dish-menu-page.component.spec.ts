import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDishMenuPageComponent } from './create-dish-menu-page.component';

describe('CreateDishMenuPageComponent', () => {
  let component: CreateDishMenuPageComponent;
  let fixture: ComponentFixture<CreateDishMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDishMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDishMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
