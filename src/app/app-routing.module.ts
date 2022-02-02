import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from './components/match/match.component';
import { MatchsummaryComponent } from './components/matchsummary/matchsummary.component';

const routes: Routes = [
  {path : '', pathMatch : 'full', redirectTo : 'matches/'},
  {path : 'matches/', pathMatch : 'full', component : MatchComponent},
  {path : 'matches/summary/:match_id', component : MatchsummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
