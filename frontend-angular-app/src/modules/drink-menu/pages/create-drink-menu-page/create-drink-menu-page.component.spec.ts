import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDrinkMenuPageComponent } from './create-drink-menu-page.component';

describe('CreateDrinkMenuPageComponent', () => {
  let component: CreateDrinkMenuPageComponent;
  let fixture: ComponentFixture<CreateDrinkMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDrinkMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDrinkMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
