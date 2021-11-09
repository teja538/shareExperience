import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { ViewExperienceComponent } from './components/view-experience/view-experience.component';
import { ExperienceListComponent } from './components/experience-list/experience-list.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddExperienceComponent,
    ViewExperienceComponent,
    ExperienceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
