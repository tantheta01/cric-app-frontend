import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from './components/match/match.component';
import { MatchsummaryComponent } from './components/matchsummary/matchsummary.component';
// import { ToptoolbarComponent } from './components/toptoolbar/toptoolbar.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerdetailComponent } from './components/playerdetail/playerdetail.component';
const routes: Routes = [
  {path : '', pathMatch : 'full', redirectTo : 'players'},
  {path : 'matches', component : MatchComponent},
  {path : 'players', component : PlayerComponent},
  {path : 'matches/summary/:match_id', component : MatchsummaryComponent},
  {path : 'players/:player_id', component : PlayerdetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
