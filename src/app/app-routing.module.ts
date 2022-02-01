import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from './components/match/match.component';
import { MatchdetailComponent } from './components/matchdetail/matchdetail.component';

const routes: Routes = [
  {path : '', pathMatch : 'full', component : MatchdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
