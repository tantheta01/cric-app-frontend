import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CricketService } from '../../cricket.service';


@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {

  season_year = 0;
  points_table : any[] = [];
  columns_displayed = ['Team Name', 'Matches Played', 'Wins', 'Losses', 'Points', 'NRR'];
  constructor(public cricserv : CricketService, public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.season_year = Number(this.route.snapshot.paramMap.get('season_year'));
    this.cricserv.fetch_pointstable(this.season_year).subscribe({
      next : answer => {
        this.points_table = answer['points_table'];
      }
    })
  }

}
