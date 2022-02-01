import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchdetail',
  templateUrl: './matchdetail.component.html',
  styleUrls: ['./matchdetail.component.scss']
})
// export interface BattingTable {
  
// }
export class MatchdetailComponent implements OnInit {
  match_id : number = 4;
  team_1 : number = 2;
  team_2 : number = 4;

  first_innings_bat : Array<any> = [
    {
      "batter" : "randombatter",
      "runs" : 4,
      "fours" : 5,
      "sixes" : 1,
      "balls_faced" : 33
    },
    {
      "batter" : "randombatter",
      "runs" : 4,
      "fours" : 5,
      "sixes" : 1,
      "balls_faced" : 33
    },
    {
      "batter" : "randombatter",
      "runs" : 4,
      "fours" : 5,
      "sixes" : 1,
      "balls_faced" : 33
    },
    {
      "batter" : "randombatter",
      "runs" : 4,
      "fours" : 5,
      "sixes" : 1,
      "balls_faced" : 33
    },
    {
      "batter" : "randombatter",
      "runs" : 4,
      "fours" : 5,
      "sixes" : 1,
      "balls_faced" : 33
    },
    {
      "batter" : "randombatter",
      "runs" : 4,
      "fours" : 5,
      "sixes" : 1,
      "balls_faced" : 33
    },
  ];
  first_innings_bowl : Array<any> = [
    {
      "bowler" : "Lmao",
      "balls_bowled" : 44,
      "runs_given" : 2,
      "wickets" : 99
    },
    {
      "bowler" : "Lmao",
      "balls_bowled" : 44,
      "runs_given" : 2,
      "wickets" : 99
    },
    {
      "bowler" : "Lmao",
      "balls_bowled" : 44,
      "runs_given" : 2,
      "wickets" : 99
    },
    {
      "bowler" : "Lmao",
      "balls_bowled" : 44,
      "runs_given" : 2,
      "wickets" : 99
    },
    {
      "bowler" : "Lmao",
      "balls_bowled" : 44,
      "runs_given" : 2,
      "wickets" : 99
    }

  ];
  
  
  displayedColumn = ["batter", "runs", "fours", "sixes"];
  displayedColumn2 = ["bowler", "balls_bowled", "runs_given", "wickets"];
  constructor() { }
  
  ngOnInit(): void {
  }
  second_innings_bat= [
    {
      "batter" : "randombatter",
      "runs" : 4,
      "fours" : 5,
      "sixes" : 1,
      "balls_faced" : 33
    },
    {
      "batter" : "randombatter",
      "runs" : 4,
      "fours" : 5,
      "sixes" : 1,
      "balls_faced" : 33
    },
    {
      "batter" : "randombatter",
      "runs" : 4,
      "fours" : 5,
      "sixes" : 1,
      "balls_faced" : 33
    },
    {
      "batter" : "randombatter",
      "runs" : 4,
      "fours" : 5,
      "sixes" : 1,
      "balls_faced" : 33
    },
    {
      "batter" : "randombatter",
      "runs" : 4,
      "fours" : 5,
      "sixes" : 1,
      "balls_faced" : 33
    },
  ];
  second_innings_bowl : Array<any> = [
    {
      "bowler" : "Lmao",
      "balls_bowled" : 44,
      "runs_given" : 2,
      "wickets" : 99
    },
    {
      "bowler" : "Lmao",
      "balls_bowled" : 44,
      "runs_given" : 2,
      "wickets" : 99
    },
    {
      "bowler" : "Lmao",
      "balls_bowled" : 44,
      "runs_given" : 2,
      "wickets" : 99
    },
    {
      "bowler" : "Lmao",
      "balls_bowled" : 44,
      "runs_given" : 2,
      "wickets" : 99
    }
  ];
}
