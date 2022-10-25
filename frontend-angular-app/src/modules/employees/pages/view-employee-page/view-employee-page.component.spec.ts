import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeePageComponent } from './view-employee-page.component';

describe('ViewEmployeePageComponent', () => {
  let component: ViewEmployeePageComponent;
  let fixture: ComponentFixture<ViewEmployeePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
