import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ui-crud-app';
  displayedColumns: string[] = ['title', 'description', 'action'];
  tableList: any;
  constructor(
    public dialog: MatDialog,
    public serviceService: ServiceService
  ) {}

  ngOnInit() {
    this.getTitlelist();
  }

  addTitle() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.getTitlelist();
    });
  }

  updateRedcord(value: any) {
      const dialogRef = this.dialog.open(MatDialogComponent, {
        data: value,
        disableClose: true,
      });
      dialogRef.afterClosed().subscribe((res) => {
         this.getTitlelist();
        });
      }

  getTitlelist() {
    this.serviceService.getList().subscribe((res) => {
      this.tableList = res;
    });
  }

  deleteContent(data: any) {
    this.serviceService.deleteList(data).subscribe((res) => {
      alert('Deleted sucessfully');
      this.getTitlelist();
    });
  }
}
