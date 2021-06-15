import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { tableForm } from '../model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css'],
})
export class MatDialogComponent implements OnInit {
  tableform = new tableForm();

  constructor(
    public serviceService: ServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MatDialogComponent>
  ) {}

  ngOnInit() {
     if (this.data) {
       this.tableform = JSON.parse(JSON.stringify(this.data));
     }
  }

  saveform() {
  if (this.data) {
    this.serviceService.updateList(this.tableform).subscribe((data) => {
      this.dialogRef.close({ Save: true, data: data });
    })
  } else {
    this.serviceService.addList(this.tableform).subscribe((data) => {
      this.dialogRef.close({ Save: true, data: data });
    });
  }
  }
}
