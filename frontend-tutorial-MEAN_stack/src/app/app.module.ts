import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AngularSecComponent } from './components/angular-sec/angular-sec.component';
import { NodeSecComponent } from './components/node-sec/node-sec.component';
import { DeploymentSecComponent } from './components/deployment-sec/deployment-sec.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AngularSecComponent,
    NodeSecComponent,
    DeploymentSecComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
