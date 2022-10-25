import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOccupiedDialogComponent } from './table-occupied-dialog.component';

describe('TableOccupiedDialogComponent', () => {
  let component: TableOccupiedDialogComponent;
  let fixture: ComponentFixture<TableOccupiedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOccupiedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOccupiedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
