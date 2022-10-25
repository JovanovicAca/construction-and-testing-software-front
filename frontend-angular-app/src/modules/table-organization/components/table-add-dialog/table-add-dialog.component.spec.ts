import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAddDialogComponent } from './table-add-dialog.component';

describe('TableAddDialogComponent', () => {
  let component: TableAddDialogComponent;
  let fixture: ComponentFixture<TableAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
