import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileFormComponent } from './components/file-form/file-form.component';
import { FilePreviewComponent } from './components/file-preview/file-preview.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FileService } from './services/file.service';

@NgModule({
  declarations: [
    AppComponent,
    FileFormComponent,
    FilePreviewComponent,
    FileListComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
