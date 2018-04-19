import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProcessService } from './services/process.service';
import { registerLocaleData } from '@angular/common';
import lcoaleDe from '@angular/common/locales/de';
import { ProcessEditorComponent } from './process-editor/process-editor.component';
import { AddDialogComponent } from './dialogs/add/add.dialog.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DeleteDialogComponent } from './dialogs/delete/delete.dialog.component';
import { FileUploadModule } from 'ng2-file-upload';


registerLocaleData(lcoaleDe);

@NgModule({
  declarations: [
    AppComponent,   
    SettingsComponent, NavbarComponent, ProcessEditorComponent, AddDialogComponent, DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,   
    FileUploadModule 
  ],
  entryComponents: [
    AddDialogComponent, DeleteDialogComponent
  ],
  providers: [
    ProcessService,    
  { provide: LOCALE_ID, useValue: "de" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
