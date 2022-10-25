import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMessagesPageComponent } from './view-messages-page.component';

describe('ViewMessagesPageComponent', () => {
  let component: ViewMessagesPageComponent;
  let fixture: ComponentFixture<ViewMessagesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMessagesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMessagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
