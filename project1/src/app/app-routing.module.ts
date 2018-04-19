import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ProcessEditorComponent } from './process-editor/process-editor.component';
// import { LoginComponent } from './login/login.component';



const routes: Routes = [     
    { path: 'lab-drafts/settings', component: SettingsComponent },
    // { path: 'startseite', component: ProcessEditorComponent, canActivate: [AuthGuard] },
    { path: 'lab-drafts/startseite', component: ProcessEditorComponent},
    // { path: 'login', component: LoginComponent }, 
    {path: '**', redirectTo: 'lab-drafts/startseite' },   
    
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [ 
    RouterModule 
  ],

})
export class AppRoutingModule { }
