import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkMenuFormComponent } from './drink-menu-form.component';

describe('DrinkMenuFormComponent', () => {
  let component: DrinkMenuFormComponent;
  let fixture: ComponentFixture<DrinkMenuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkMenuFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkMenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
