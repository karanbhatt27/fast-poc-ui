import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetFormDialogComponent } from './dataset-form-dialog.component';

describe('DatasetFormDialogComponent', () => {
  let component: DatasetFormDialogComponent;
  let fixture: ComponentFixture<DatasetFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatasetFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
