import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {ProcessService} from '../../services/process.service';
import {FormControl, Validators} from '@angular/forms';
import {Process} from '../../process/processConstruction';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { FileService } from '../../services/file.service';
import { saveAs } from 'file-saver';

const uri = 'http://localhost:4000/file/fileUpload';
@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../dialogs/add/add.dialog.html',
  styleUrls: ['../../dialogs/add/add.dialog.css'],
  providers:[FileService]
})

export class AddDialogComponent {

  uploader: FileUploader = new FileUploader({url:uri});

  attachmentList:any = [];
  test: any;


  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Process,
              public processService: ProcessService, private fileService: FileService) { 

                this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
                  this.attachmentList.push(JSON.parse(response));
                }
              }

  formControl = new FormControl('', [
    Validators.required    
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :      
        '';
  }

  submit() {
  
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

   confirmAdd() {        
    this.uploader.queue.forEach(element => {
      this.data.filename = element.file.name       
     });        
   
     
    console.log(this.data);
    this.processService.addProcess(this.data)
    }

  //to-do: doku probleme
  ngAfterViewInit() {
    this.uploader.onAfterAddingFile = (item => {
       item.withCredentials = false;
    });
 }

 download(index) {  
   var filename = this.attachmentList[index].uploadname;

   this.fileService.downloadFile(filename)
   .subscribe(
     data => saveAs(data, filename),
     error => console.error(error)
   )
 }

}