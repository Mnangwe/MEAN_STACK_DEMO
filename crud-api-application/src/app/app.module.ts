import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesListComponent } from './components/candidates-list/candidates-list.component';
import { CandidateDetailsComponent } from './components/candidate-details/candidate-details.component';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesListComponent,
    CandidateDetailsComponent,
    AddCandidateComponent,
    NavbarComponent
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
