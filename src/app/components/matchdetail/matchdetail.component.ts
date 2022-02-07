import { Component, OnInit } from '@angular/core';
// import { ChartDataSets, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';
// import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router'
import { CricketService } from '../../cricket.service';
// import { first } from 'rxjs-compat/operator/first';
import { Chart, ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color, ChartsModule } from 'ng2-charts';



@Component({
  selector: 'app-matchdetail',
  templateUrl: './matchdetail.component.html',
  styleUrls: ['./matchdetail.component.scss']
})

// function customRad(context) {
//     console.log("haan laude");
//     console.log(JSON.stringify(context));
//     return 4;
// }
  
export class MatchdetailComponent implements OnInit {
  match_id : number = 4;
  team_1 : number = 2;
  team_2 : number = 4;

  first_innings_bat = [];
  second_innings_bat = [];
  first_innings_bowl = [];
  second_innings_bowl = [];

  first_innings_top_bat = [];
  second_innings_top_bat = [];
  first_innings_top_bowl = [];
  second_innings_top_bowl = [];
  
  first_innings_runs : any[] = [];
  second_innings_runs: any[] = [];
  comparison_chart_labels : any[] = [];
  answer_dump : any[] = [];
  public wicket1_balls : any[] = [];
  public wicket2_balls : any[] = [];

  public overLabels : Label[] = [];

  public comparison_chart : ChartType = 'line';
  public barchartLegend = true;

  public comparisonChartData : ChartDataSets[] = [];

  displayedColumn = ["batter", "runs", "fours", "sixes"];
  displayedColumn2 = ["bowler", "balls_bowled", "runs_given", "wickets"];

  displayColumn3 = ["batter", "runs"];
  displayColumn4 = ["bowler", "wickets taken"];
  public comparison_options : ChartOptions = {};

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

        this.answer_dump = answer['runs1']['rows'];
        this.second_innings_runs.push(0);
        this.first_innings_runs.push(0);
        for(var i=0;i<this.answer_dump.length;i+=1){
          this.first_innings_runs.push(Number(this.answer_dump[i]["?column?"]));
          // this.first_innings_runs.push(5);
        }
        this.answer_dump = answer['runs2']['rows'];
        for(var i=0;i<this.answer_dump.length;i+=1){
          this.second_innings_runs.push(Number(this.answer_dump[i]["?column?"]));
          // this.first_innings_runs.push(5);
        }
        var n1 = this.first_innings_runs.length;
        var n2 = this.second_innings_runs.length;
        for(var i=0; i<n1-n2;i++){
          this.second_innings_runs.push(this.second_innings_runs[n2-1]);
        }
        for(var i=0;i<n2-n1;i++){
          this.first_innings_runs.push(this.first_innings_runs[n1-1]);  
        }
        for(var i=0;i<this.first_innings_runs.length;i++){
          this.comparison_chart_labels.push(Number(i).toString())
        }
        this.overLabels = this.comparison_chart_labels;
        let l = answer['wickets1']['rows'];
        for(var i=0;i<l.length;i++){
          this.wicket1_balls.push(Number(l[i]['rn']));
        }
        l = answer['wickets2']['rows'];
        for(var i=0;i<l.length;i++){
          this.wicket2_balls.push(Number(l[i]['rn']));
        }
        
        console.log("bhadwa madarchod");
        console.log(this.first_innings_runs);
        console.log(this.second_innings_runs);
        this.comparisonChartData = [{data : this.first_innings_runs, label : "first innings score", pointRadius : 0}, {data : this.second_innings_runs, label : "second innings score", pointRadius : 0}];
        
        this.first_innings_top_bat = answer['batsmen1']['rows'];
        this.first_innings_top_bowl = answer['bowler1']['rows'];
        this.second_innings_top_bat = answer['batsmen2']['rows'];
        this.second_innings_top_bowl = answer['bowler2']['rows'];
        console.log("lodu lalit");
        console.log(this.first_innings_top_bowl);
        console.log(answer['bowler1']['rows']);
      }
    })
    
  }
 
}
