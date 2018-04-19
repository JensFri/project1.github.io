import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {ProcessService} from '../../services/process.service';


@Component({
  selector: 'app-delete.dialog',
  templateUrl: '../../dialogs/delete/delete.dialog.html',
  styleUrls: ['../../dialogs/delete/delete.dialog.css']
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public processService: ProcessService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {    
        this.processService.deleteProcess(this.data.id).subscribe(res => {
          console.log('Deleted');
        });
      }
  }

