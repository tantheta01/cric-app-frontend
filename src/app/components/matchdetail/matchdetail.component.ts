import { Component, OnInit } from '@angular/core';
// import { ChartDataSets, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router'
import { CricketService } from '../../cricket.service';

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

  first_innings_bat = [];
  second_innings_bat = [];
  first_innings_bowl = [];
  second_innings_bowl = [];
  //   {
  //     "batter" : "randombatter",
  //     "runs" : 4,
  //     "fours" : 5,
  //     "sixes" : 1,
  //     "balls_faced" : 33
  //   },
  //   {
  //     "batter" : "randombatter",
  //     "runs" : 4,
  //     "fours" : 5,
  //     "sixes" : 1,
  //     "balls_faced" : 33
  //   },
  //   {
  //     "batter" : "randombatter",
  //     "runs" : 4,
  //     "fours" : 5,
  //     "sixes" : 1,
  //     "balls_faced" : 33
  //   },
  //   {
  //     "batter" : "randombatter",
  //     "runs" : 4,
  //     "fours" : 5,
  //     "sixes" : 1,
  //     "balls_faced" : 33
  //   },
  //   {
  //     "batter" : "randombatter",
  //     "runs" : 4,
  //     "fours" : 5,
  //     "sixes" : 1,
  //     "balls_faced" : 33
  //   },
  //   {
  //     "batter" : "randombatter",
  //     "runs" : 4,
  //     "fours" : 5,
  //     "sixes" : 1,
  //     "balls_faced" : 33
  //   },
  // ];
  // first_innings_bowl : Array<any> = [
  //   {
  //     "bowler" : "Lmao",
  //     "balls_bowled" : 44,
  //     "runs_given" : 2,
  //     "wickets" : 99
  //   },
  //   {
  //     "bowler" : "Lmao",
  //     "balls_bowled" : 44,
  //     "runs_given" : 2,
  //     "wickets" : 99
  //   },
  //   {
  //     "bowler" : "Lmao",
  //     "balls_bowled" : 44,
  //     "runs_given" : 2,
  //     "wickets" : 99
  //   },
  //   {
  //     "bowler" : "Lmao",
  //     "balls_bowled" : 44,
  //     "runs_given" : 2,
  //     "wickets" : 99
  //   },
  //   {
  //     "bowler" : "Lmao",
  //     "balls_bowled" : 44,
  //     "runs_given" : 2,
  //     "wickets" : 99
  //   }

  // ];
  
  
  displayedColumn = ["batter", "runs", "fours", "sixes"];
  displayedColumn2 = ["bowler", "balls_bowled", "runs_given", "wickets"];
  
  constructor(public route : ActivatedRoute, public cricserv : CricketService) { }
  
  ngOnInit(): void {
    this.match_id = Number(this.route.snapshot.paramMap.get('match_id'));
    this.cricserv.fetch_match(this.match_id).subscribe({
      next : answer => {
        console.log("Haan this happened");
        console.log(JSON.stringify(answer));
        console.log("Fnal done");
        this.first_innings_bat = answer['first_bat']['rows'];
        this.second_innings_bat = answer['second_bat']['rows'];
        this.first_innings_bowl = answer['first_bowl']['rows'];
        this.second_innings_bowl = answer['second_bowl']['rows'];;
      }
    })
    
  }
  // second_innings_bat= [
  //   {
  //     "batter" : "randombatter",
  //     "runs" : 4,
  //     "fours" : 5,
  //     "sixes" : 1,
  //     "balls_faced" : 33
  //   },
  //   {
  //     "batter" : "randombatter",
  //     "runs" : 4,
  //     "fours" : 5,
  //     "sixes" : 1,
  //     "balls_faced" : 33
  //   },
  //   {
  //     "batter" : "randombatter",
  //     "runs" : 4,
  //     "fours" : 5,
  //     "sixes" : 1,
  //     "balls_faced" : 33
  //   },
  //   {
  //     "batter" : "randombatter",
  //     "runs" : 4,
  //     "fours" : 5,
  //     "sixes" : 1,
  //     "balls_faced" : 33
  //   },
  //   {
  //     "batter" : "randombatter",
  //     "runs" : 4,
  //     "fours" : 5,
  //     "sixes" : 1,
  //     "balls_faced" : 33
  //   },
  // ];
  // second_innings_bowl : Array<any> = [
  //   {
  //     "bowler" : "Lmao",
  //     "balls_bowled" : 44,
  //     "runs_given" : 2,
  //     "wickets" : 99
  //   },
  //   {
  //     "bowler" : "Lmao",
  //     "balls_bowled" : 44,
  //     "runs_given" : 2,
  //     "wickets" : 99
  //   },
  //   {
  //     "bowler" : "Lmao",
  //     "balls_bowled" : 44,
  //     "runs_given" : 2,
  //     "wickets" : 99
  //   },
  //   {
  //     "bowler" : "Lmao",
  //     "balls_bowled" : 44,
  //     "runs_given" : 2,
  //     "wickets" : 99
  //   }
  // ];
  // LineChartData: ChartDataSets[] = [
  //   {
  //     data : [1,2,3,4,5,6,7,8], label:'crude oil price'
  //   },
  //   {
  //     data : [1,2,4,5,7,6,8,22], label:'crude oittt price'
  //   }
  // ];
  // Labels : Label[] = ['an', 'En', 'mar', 'daa', 'may', 'june', 'july', 'aug'];
  // lineChartOptions = {
  //   responsive: true,
  // };

  // lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,255,0,0.28)',
  //   },
  // ];

  // lineChartLegend = true;
  // lineChartPlugins = [];
  // lineChartType = 'line';
  

}
