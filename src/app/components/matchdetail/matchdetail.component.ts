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
  
  

  team1_id = 0;
  team2_id = 0;
  team1_name = '';
  team2_name = '';
  season_year = 0;
  toss_winner = '';
  venue_name = '';
  umpire_name1 = '';
  umpire_name2 = '';
  umpire_name3 = '';

  team_1_playing_11 : string[] = [];
  team_2_playing_11 : string[] = [];

  first_innings_runs : any[] = [];
  second_innings_runs: any[] = [];
  comparison_chart_labels : any[] = [];
  answer_dump : any[] = [];
  public wicket1_balls : any[] = [];
  public wicket2_balls : any[] = [];

  public overLabels : Label[] = [];
  public pieChartLabels : Label[] = ['ones', 'twos', 'fours', 'sixes', 'extras'];
  public pieChartType : ChartType = 'pie';

  public comparison_chart : ChartType = 'line';
  public barchartLegend = true;

  public comparisonChartData : ChartDataSets[] = [];
  public pieChartData1 : ChartDataSets[] = [];
  public pieChartData2 : ChartDataSets[] = [];

  displayedColumn = ["batter", "runs", "fours", "sixes"];
  displayedColumn2 = ["bowler", "balls_bowled", "runs_given", "wickets"];

  displayColumn3 = ["batter", "runs"];
  displayColumn4 = ["bowler", "wickets taken"];
  public comparison_options : ChartOptions = {};

  constructor(public route : ActivatedRoute, public cricserv : CricketService) { }
  
  // getPointRad(context : any) : number {
  //   if()
  // }

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

        // team1 vs team2
        this.team1_name = answer['teams']['team1_name'];
        this.team2_name = answer['teams']['team2_name'];
        this.season_year = Number(answer['teams']['season_year']);

        this.answer_dump = answer['runs1']['rows'];
        this.second_innings_runs.push(0);
        this.first_innings_runs.push(0);
        for(var i=0;i<this.answer_dump.length;i+=6){
          this.first_innings_runs.push(Number(this.answer_dump[i]["?column?"]));
          // this.first_innings_runs.push(5);
        }
        this.answer_dump = answer['runs2']['rows'];
        for(var i=0;i<this.answer_dump.length;i+=6){
          this.second_innings_runs.push(Number(this.answer_dump[i]["?column?"]));
          // this.first_innings_runs.push(5);
        }
        var n1 = this.first_innings_runs.length;
        var n2 = this.second_innings_runs.length;
        for(var i=0; i<n1-n2;i+=1){
          this.second_innings_runs.push(this.second_innings_runs[n2-1]);
        }
        for(var i=0;i<n2-n1;i+=1){
          this.first_innings_runs.push(this.first_innings_runs[n1-1]);  
        }
        for(var i=0;i<this.first_innings_runs.length;i++){
          this.comparison_chart_labels.push(Number(i).toString())
        }
        this.overLabels = this.comparison_chart_labels;
        let l = answer['wickets1']['rows'];
        for(var i=0;i<l.length;i++){
          this.wicket1_balls.push(Number(l[i]['over_id']));
        }
        l = answer['wickets2']['rows'];
        for(var i=0;i<l.length;i++){
          this.wicket2_balls.push(Number(l[i]['over_id']));
        }
        
        
        console.log("bhadwa madarchod");
        console.log(this.first_innings_runs);
        console.log(this.second_innings_runs);
        let l1 = [];
        for(var i=0;i<this.first_innings_runs.length; i++){
          for(var j=0;j<this.wicket1_balls.length;j++){
            if(i == this.wicket1_balls[j]){
              l1.push(5);
              break;
            }
          }
          if(l1.length == i)l1.push(0);
        }
        let l2 = [];
        for(var i=0;i<this.second_innings_runs.length; i++){
          for(var j=0;j<this.wicket2_balls.length;j++){
            if(i == this.wicket2_balls[j]){
              l2.push(5);
              break;
            }
          }
          if(l2.length == i)l2.push(0);
        }
        this.comparisonChartData = [{data : this.first_innings_runs, label : "first innings score", pointRadius : l1}, {data : this.second_innings_runs, label : "second innings score", pointRadius : l2}];
        
        this.first_innings_top_bat = answer['batsmen1']['rows'];
        this.first_innings_top_bowl = answer['bowler1']['rows'];
        this.second_innings_top_bat = answer['batsmen2']['rows'];
        this.second_innings_top_bowl = answer['bowler2']['rows'];
        
        //pie chart
        let l1_pie = [0, 0, 0, 0, 0];
        let l2_pie = [0, 0, 0, 0, 0];
        this.answer_dump = answer['runs1_split']['rows'];
        for(var i=0;i<this.answer_dump.length;i++){
          if(this.answer_dump[i]['runs_scored'] == 1){
            l1_pie[0] += Number(this.answer_dump[i]['tot_runs']);
          }
          if(this.answer_dump[i]['runs_scored'] == 2){
            l1_pie[1] += Number(this.answer_dump[i]['tot_runs']);
          }
          if(this.answer_dump[i]['runs_scored'] == 4){
            l1_pie[2] += Number(this.answer_dump[i]['tot_runs']);
          }
          if(this.answer_dump[i]['runs_scored'] == 6){
            l1_pie[3] += Number(this.answer_dump[i]['tot_runs']);
          }
        }
        l1_pie[4] += Number(answer['extra1']['rows']['sum_ex']);

        this.answer_dump = answer['runs2_split']['rows'];
        for(var i=0;i<this.answer_dump.length;i++){
          if(this.answer_dump[i]['runs_scored'] == 1){
            l2_pie[0] += Number(this.answer_dump[i]['tot_runs']);
          }
          if(this.answer_dump[i]['runs_scored'] == 2){
            l2_pie[1] += Number(this.answer_dump[i]['tot_runs']);
          }
          if(this.answer_dump[i]['runs_scored'] == 4){
            l2_pie[2] += Number(this.answer_dump[i]['tot_runs']);
          }
          if(this.answer_dump[i]['runs_scored'] == 6){
            l2_pie[3] += Number(this.answer_dump[i]['tot_runs']);
          }
        }
        l2_pie[4] += Number(answer['extra2']['rows']['sum_ex']);


        this.pieChartData1 = [
          {
            data : l1_pie,
            label : 'Team1'
          },
          
        ];
        this.pieChartData2 = [
          {
            data : l2_pie,
            label : 'Team2'
          }
        ]
        this.venue_name = answer['venue']['rows'][0]['venue_name'];
        this.umpire_name1 = answer['umpire']['rows'][0]['umpire_name'];
        this.umpire_name2 = answer['umpire']['rows'][1]['umpire_name'];
        this.umpire_name3 = answer['umpire']['rows'][2]['umpire_name'];
        this.toss_winner = answer['toss_win']['rows'][0]['team_name'];
        this.answer_dump = answer['playing_eleven_1']['rows'];
        for(var i=0;i<this.answer_dump.length;i++){
          this.team_1_playing_11.push(this.answer_dump[i]['player_name']);
        }
        this.answer_dump = answer['playing_eleven_2']['rows'];
        for(var i=0;i<this.answer_dump.length;i++){
          this.team_2_playing_11.push(this.answer_dump[i]['player_name']);
        }
        console.log(this.team_1_playing_11);
        console.log(this.team_2_playing_11);
      }
    })
    
    
    
  }
 
}
