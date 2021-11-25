import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { ViewExperienceComponent } from './components/view-experience/view-experience.component';
import { ExperienceListComponent } from './components/experience-list/experience-list.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { PlacementPrepComponent } from './placement-prep/placement-prep.component';

@NgModule({
  declarations: [
    AppComponent,
    AddExperienceComponent,
    ViewExperienceComponent,
    ExperienceListComponent,
    PlacementPrepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
