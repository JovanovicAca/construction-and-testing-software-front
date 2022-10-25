import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCheffComponent } from './header-cheff.component';

describe('HeaderCheffComponent', () => {
  let component: HeaderCheffComponent;
  let fixture: ComponentFixture<HeaderCheffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCheffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCheffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
