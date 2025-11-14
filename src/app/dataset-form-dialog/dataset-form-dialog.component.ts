import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-dataset-form-dialog',
  templateUrl: './dataset-form-dialog.component.html',
  styleUrls: ['./dataset-form-dialog.component.scss']
})
export class DatasetFormDialogComponent implements OnInit, OnDestroy {

  form: FormGroup;
  autosave$ = new Subject<void>();
  autosaveSub!: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    // private service: DatasetService,
    private dialogRef: MatDialogRef<DatasetFormDialogComponent>
  ) {
     this.form = this.fb.group({
          s0: ['',],
          g: [''],
          y: [''],
          r_day: [''],
          n_snap: [''],
          drr: [''],
        });
  }

  ngOnInit() {
    if (this.data.existing) {
      this.form.patchValue(this.data.existing);
    }

    // AUTOSAVE: triggers every 500ms when user stops typing
    this.autosaveSub = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.triggerAutosave());

    // AUTOSAVE: when leaving field (blur event)
    this.autosave$.subscribe(() => this.triggerAutosave());
  }

  triggerAutosave() {
    // this.service.saveDataset(this.data.index, this.form.value).subscribe();
  }

  onBlur() {
    this.autosave$.next();
  }

  close() {
    this.dialogRef.close({
      id: Date.now(),
      index: this.data.index,
      name: `D${this.data.index}`,
      ...this.form.value
    });
  }

  ngOnDestroy() {
    this.autosaveSub.unsubscribe();
  }
}
