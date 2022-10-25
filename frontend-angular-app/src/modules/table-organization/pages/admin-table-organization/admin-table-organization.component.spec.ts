import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTableOrganizationComponent } from './admin-table-organization.component';

describe('AdminTableOrganizationComponent', () => {
  let component: AdminTableOrganizationComponent;
  let fixture: ComponentFixture<AdminTableOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTableOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTableOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
