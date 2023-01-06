import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularSecComponent } from './components/angular-sec/angular-sec.component';
import { DeploymentSecComponent } from './components/deployment-sec/deployment-sec.component';
import { HomeComponent } from './components/home/home.component';
import { NodeSecComponent } from './components/node-sec/node-sec.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'angular', component: AngularSecComponent
  },
  {
    path: 'node', component: NodeSecComponent
  },
  {
    path: 'deploy', component: DeploymentSecComponent
  },
  {
    path: 'error-not-found', component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
