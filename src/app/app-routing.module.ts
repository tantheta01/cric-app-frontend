import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from './components/match/match.component';
import { MatchdetailComponent } from './components/matchdetail/matchdetail.component';
//import { ToptoolbarComponent } from './components/toptoolbar/toptoolbar.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerdetailComponent } from './components/playerdetail/playerdetail.component';
import { VenueComponent } from './components/venue/venue.component';
import { VenuedetailComponent } from './venuedetail/venuedetail.component';
import { PointsComponent } from './components/points/points.component';
import { PointslandingComponent } from './components/pointslanding/pointslanding.component';
import { AddvenueComponent } from './addvenue/addvenue.component';

const routes: Routes = [
  {path : '', pathMatch : 'full', redirectTo : 'players'},
  {path : 'matches/:match_id', component : MatchdetailComponent},
  {path : 'players/:player_id', component : PlayerdetailComponent},
  {path : 'matches', component : MatchComponent},
  {path : 'players', component : PlayerComponent},
  {path : 'venues/add', component : AddvenueComponent},
  {path : 'venues/:venue_id', component : VenuedetailComponent},
  {path : 'venues', component : VenueComponent},
  {path : 'pointstable/:season_year', component : PointsComponent},
  {path : 'pointstable', component : PointslandingComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
