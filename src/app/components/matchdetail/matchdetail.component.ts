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
  
export class MatchdetailComponent implements OnInit {
  match_id : number = 4;
  team_1 : number = 2;
  team_2 : number = 4;

  first_innings_bat = [];
  second_innings_bat = [];
  first_innings_bowl = [];
  second_innings_bowl = [];
  
  displayedColumn = ["batter", "runs", "fours", "sixes"];
  displayedColumn2 = ["bowler", "balls_bowled", "runs_given", "wickets"];
  chart : any = null ;

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
        this.second_innings_bowl = answer['second_bowl']['rows'];
        // this.chart = new Chart('canvas', {
        //   type: 'line',
        //   data: {
        //     labels: ['AA', 'BB', 'C', 'DD', 'EE'],
        //     datasets: [
        //       {
        //         data: [1, 3, 5, 7, 9],
        //         borderColor: '#3cba9f',
        //         fill: false
        //       }
        //     ]
        //   },
        //   options: {
        //     legend: {
        //       display: false
        //     },
        //     scales: {
        //       xAxes: [{
        //         display: true
        //       }],
        //       yAxes: [{
        //         display: true 
        //       }],
        //     }
        //   }
        // });
      }
    })
    
  }
 
}
