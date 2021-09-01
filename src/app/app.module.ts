import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([CheckboxComponent]),
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
