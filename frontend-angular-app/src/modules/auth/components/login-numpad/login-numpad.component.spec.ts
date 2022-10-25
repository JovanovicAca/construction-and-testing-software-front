import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNumpadComponent } from './login-numpad.component';

describe('LoginNumpadComponent', () => {
  let component: LoginNumpadComponent;
  let fixture: ComponentFixture<LoginNumpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginNumpadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNumpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
