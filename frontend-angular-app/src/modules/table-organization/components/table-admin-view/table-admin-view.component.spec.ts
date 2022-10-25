import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdminViewComponent } from './table-admin-view.component';

describe('TableAdminViewComponent', () => {
  let component: TableAdminViewComponent;
  let fixture: ComponentFixture<TableAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAdminViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
