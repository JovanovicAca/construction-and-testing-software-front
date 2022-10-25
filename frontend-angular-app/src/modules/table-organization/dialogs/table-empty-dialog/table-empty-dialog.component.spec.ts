import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEmptyDialogComponent } from './table-empty-dialog.component';

describe('TableEmptyDialogComponent', () => {
  let component: TableEmptyDialogComponent;
  let fixture: ComponentFixture<TableEmptyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEmptyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEmptyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
