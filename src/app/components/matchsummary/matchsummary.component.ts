import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CricketService } from '../../cricket.service';
@Component({
  selector: 'app-matchsummary',
  templateUrl: './matchsummary.component.html',
  styleUrls: ['./matchsummary.component.scss']
})
export class MatchsummaryComponent implements OnInit {

  constructor(public route : ActivatedRoute, public cricserv : CricketService) { }
  match_id : number = 4;
  team_1 : Number = 1;
  team_2 : Number = 2;
  first_innings_bat = [];
  second_innings_bat = [];
  first_innings_bowl = [];
  second_innings_bowl = [];
  batting_columns = ["name", "runs", "balls"];
  bowling_columns = ["name", "wickets", "runs"];
  ngOnInit(): void {
    this.match_id = Number(this.route.snapshot.paramMap.get('match_id'));
    this.cricserv.fetch_summary(this.match_id).subscribe({
      next : answer  => {
        this.first_innings_bat = answer["first_bat"]["rows"];
        this.second_innings_bat = answer["second_bat"]["rows"];
        this.first_innings_bowl = answer["first_bowl"]["rows"];
        this.second_innings_bowl = answer["second_bowl"]["rows"];
      }
    })
  }

}
