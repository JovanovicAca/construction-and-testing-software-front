import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDrinkPageComponent } from './create-drink-page.component';

describe('CreateDrinkPageComponent', () => {
  let component: CreateDrinkPageComponent;
  let fixture: ComponentFixture<CreateDrinkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDrinkPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDrinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
