import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'repo'},
  {path: 'repo' , component: RepoComponent},
  {path: 'body' , component: BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
