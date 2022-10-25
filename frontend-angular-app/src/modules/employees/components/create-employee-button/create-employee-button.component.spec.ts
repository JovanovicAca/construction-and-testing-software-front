import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeButtonComponent } from './create-employee-button.component';

describe('CreateEmployeeButtonComponent', () => {
  let component: CreateEmployeeButtonComponent;
  let fixture: ComponentFixture<CreateEmployeeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
