import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from './components/match/match.component';
import { MatchdetailComponent } from './components/matchdetail/matchdetail.component';
//import { ToptoolbarComponent } from './components/toptoolbar/toptoolbar.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerdetailComponent } from './components/playerdetail/playerdetail.component';
import { VenueComponent } from './components/venue/venue.component';
import { VenuedetailComponent } from './venuedetail/venuedetail.component';

const routes: Routes = [
  {path : '', pathMatch : 'full', redirectTo : 'players'},
  {path : 'matches', component : MatchComponent},
  {path : 'players', component : PlayerComponent},
  {path : 'matches/:match_id', component : MatchdetailComponent},
  {path : 'players/:player_id', component : PlayerdetailComponent},
  {path : 'venues', component : VenueComponent},
  {path : 'venues/:venue_id', component : VenuedetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
