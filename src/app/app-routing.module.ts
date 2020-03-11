import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileListComponent } from './components/file-list/file-list.component';
import { FileFormComponent } from './components/file-form/file-form.component';
import { FilePreviewComponent } from './components/file-preview/file-preview.component';


const routes: Routes = [
  {path: '', redirectTo: '/files', pathMatch: 'full'},
  {path: 'files', component: FileListComponent},
  {path: 'files/add', component: FileFormComponent},
  {path: 'files/edit/:id', component: FilePreviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
