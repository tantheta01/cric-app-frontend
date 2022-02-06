import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import {MaterialExampleModule} from './material.module';
// import {ListOverviewExample} from './list-overview-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
// import {Mat}


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchComponent } from './components/match/match.component';
import { PlayerComponent } from './components/player/player.component';
import { VenueComponent } from './components/venue/venue.component';
import { PointsComponent } from './components/points/points.component';
import { MatchdetailComponent } from './components/matchdetail/matchdetail.component';
import { MatchsummaryComponent } from './components/matchsummary/matchsummary.component';
import { ToptoolbarComponent } from './components/toptoolbar/toptoolbar.component';
import { PlayerdetailComponent } from './components/playerdetail/playerdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    PlayerComponent,
    VenueComponent,
    PointsComponent,
    MatchdetailComponent,
    MatchsummaryComponent,
    ToptoolbarComponent,
    PlayerdetailComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    ChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
