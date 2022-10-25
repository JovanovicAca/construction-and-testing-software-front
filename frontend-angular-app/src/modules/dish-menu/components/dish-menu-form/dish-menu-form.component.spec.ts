import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishMenuFormComponent } from './dish-menu-form.component';

describe('DishMenuFormComponent', () => {
  let component: DishMenuFormComponent;
  let fixture: ComponentFixture<DishMenuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishMenuFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishMenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
