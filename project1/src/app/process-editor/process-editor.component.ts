import { Component, OnInit, ViewChild } from '@angular/core';
import { Process } from '../process/processConstruction'
import { ProcessService } from '../services/process.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatTableDataSource, MatDialog, MatSort, MatPaginator} from '@angular/material';
import { DatePipe } from '@angular/common';
import { AddDialogComponent } from '../dialogs/add/add.dialog.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DeleteDialogComponent } from '../dialogs/delete/delete.dialog.component';
import { FileService } from '../services/file.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './process-editor.component.html',
  styleUrls: ['./process-editor.component.css'],
  providers:[FileService]
})
export class ProcessEditorComponent implements OnInit {

  @ViewChild(AddDialogComponent) child;

  displayedColumns = ['titel', 'name', 'lastname', 'created_at', 'updated_at', 'filename', 'actions'];  
  test = ['file', 'actionss'];   
//  processList: Process[];
processList: any;
testList: AddDialogComponent;
 headerText: string;
attachmentList: any

  constructor(private _processService: ProcessService, private _fileService: FileService, private dialog: MatDialog, private httpClient: HttpClient) { }
  

  ngOnInit() {
    //this.loadData();
    //this.getAllProcess();
    this.getProcess();
   // this.getFiles();
   }




  addNew(item: Process) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: { item: item }
    });

     dialogRef.afterClosed().subscribe(result => {      
       if(result == 1) {        
        this.getProcess();
           }

       error => {
           console.error('Error saving Process!');
          return Observable.throw(error);
         }
            
     })
    }   
    
    deleteProcess(id, titel: string, name: string, lastname: string, created_at: string, updated_at: string) {      
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        data: { id: id, titel: titel, name: name, lastname: lastname, created_at: created_at, updated_at: updated_at }
      });
      dialogRef.afterClosed().subscribe(result => {      
        if(result == 1) {        
         this.getProcess();
        // this.getFiles();
            }
 
        error => {
            console.error('Error saving Process!');
           return Observable.throw(error);
          }
             
      })
    }
   
  

getProcess() {
  this._processService.getProcess().subscribe(res => {
    this.processList = res;
  })
}

// getFiles() {   
//   this._fileService.getFiles().subscribe(res => {
//     this.attachmentList = res
//   })
// }

download(index) {
  var filename = this.attachmentList[index].filename;

  this._fileService.downloadFile(filename)
  .subscribe(
    data => saveAs(data, filename),
    error => console.error(error)
  )
}



}



