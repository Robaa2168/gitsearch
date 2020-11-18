import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe';
import { RepoComponent } from './repo/repo.component';
import { HighlightDirective } from './highlight.directive';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    RepoComponent,
    HighlightDirective,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
