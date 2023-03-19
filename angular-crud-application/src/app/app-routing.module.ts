import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { CandidateDetailsComponent } from './components/candidate-details/candidate-details.component';
import { CandidatesListComponent } from './components/candidates-list/candidates-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CandidatesListComponent },
  { path: 'candidate/:id', component: CandidateDetailsComponent },
  { path: 'new-candidate', component: AddCandidateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
