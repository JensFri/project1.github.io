import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSidenavModule, MatChipsModule, MatIconModule, MatDialogModule, MatTableModule, MatProgressBarModule  } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSidenavModule, MatChipsModule, MatIconModule, MatDialogModule, MatTableModule, MatProgressBarModule ],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSidenavModule, MatChipsModule, MatIconModule, MatDialogModule, MatTableModule, MatProgressBarModule ],
})

export class MaterialModule {   }