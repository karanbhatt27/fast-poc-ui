import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatasetFormDialogComponent } from '../dataset-form-dialog/dataset-form-dialog.component';

@Component({
  selector: 'app-capacity-parameter',
  templateUrl: './capacity-parameter.component.html',
  styleUrls: ['./capacity-parameter.component.scss']
})
export class CapacityParameterComponent {
  datasets: any[] = [];

  constructor(private dialog: MatDialog) {}

  addDataset() {
    const index = this.datasets.length;      // D0, D1, D2 …
    this.openDatasetForm(index, null);
  }

  openEdit(item: any) {
    this.openDatasetForm(item.index, item);
  }

  openDatasetForm(index: number, existing: any) {
    const dialogRef = this.dialog.open(DatasetFormDialogComponent, {
      width: '600px',
      data: { index, existing }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!existing) this.datasets.push(result);
        else Object.assign(existing, result);
      }
    });
  }

  deleteDataset(id: number) {
    this.datasets = this.datasets.filter(x => x.id !== id);
  }
}

