import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoryListComponent } from './story-list/story-list.component';
import { HomeComponent } from './home/home.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryListComponent,
    HomeComponent,
    StoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
