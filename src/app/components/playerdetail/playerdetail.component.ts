import { Component, OnInit } from '@angular/core';
import { Chart, ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { ActivatedRoute } from '@angular/router'
import { CricketService } from '../../cricket.service';
import { Label, Color, ChartsModule } from 'ng2-charts';
// import { stringify } from 'querystring';

@Component({
  selector: 'app-playerdetail',
  templateUrl: './playerdetail.component.html',
  styleUrls: ['./playerdetail.component.scss']
})
export class PlayerdetailComponent implements OnInit {

  // chart details

  public chartColors = {
    red: 'rgb(255, 99, 132)',
    blue: 'rgb(54, 162, 235)',
    green : 'rgb(4, 55, 255)',
    orange : 'rgb(100, 100, 4)',
    or33 : 'rgb(4, 100, 100)'
  };

  // basic details
  player_id = 0;
  player_name = '';
  country = '';
  batting_style = '';
  bowling_skill = '';
  // batting details
  nmatches = 0;
  runs = 0;
  fours = 0;
  sixes = 0;
  fifty = 0;
  hs = 0;
  strike_rate = 0;
  average = 0;
  matches_bowled = 0;
  runs_conceded = 0;
  balls = 0;
  overs = 0;
  wickets = 0;
  economy = 0;
  five_wickets = 0;

  score_graph = [];
  conceted_runs_graph = [];
  wickets_graph = [];

  // batting chart
  public yearLabels : Label[] = [];
  public runs_per_match = [];
  public chartType : ChartType = 'bar';
  public barchartLegend = true;

  public barchartData : ChartDataSets[] = [];
  
  public bowlingYearLabels : Label[] = [];
  public runs_conceded_per_match = [];
  public bowling_data : ChartDataSets[] = [];
  


  constructor(public route : ActivatedRoute, public cricserv : CricketService) { }

  ngOnInit(): void {
    this.player_id = Number(this.route.snapshot.paramMap.get('player_id'));
    console.log("the value of player_id is");
    console.log(this.player_id);
    this.cricserv.fetch_player(this.player_id).subscribe({
      next : answer => {
        this.player_name = answer['details'][0]['player_name'];
        this.country = answer['details'][0]['country_name'];
        this.batting_style = answer['details'][0]['batting_hand'];
        this.bowling_skill = answer['details'][0]['bowling_skill'];
        this.nmatches = Number(answer['total_matches'][0]['count']);
        this.runs = Number(answer["runs_scored"][0]['coalesce']);
        this.fours = Number(answer['four_runs'][0]['runs_fours']);
        this.sixes = Number(answer['six_runs'][0]['runs_fours']);
        this.fifty = Number(answer['fifties'][0]['count']);
        this.hs = Number(answer['highest_score'][0]['coalesce'])
        this.strike_rate = Number(answer['strike_rate'][0]['strike_rate']);
        this.average = Number(answer['average'][0]['average']);
        let l = [];
        let r : any[] = [];
        let s : any[] = [];
        this.score_graph = answer['score_graph'];

        for(var i=0; i<this.score_graph.length; i++){
          l.push(Number(this.score_graph[i]['sum']));
          if(i == 0 || this.score_graph[i]['season_year'] != this.score_graph[i-1]['season_year']){
            let num = new Number(this.score_graph[i]['season_year']);
            r.push(num.toString());
          }
          else{
            r.push('');
          }
          let x = l[l.length-1];
          if(x < 20){
            s.push(this.chartColors.red);
            continue;
          }
          if(x < 30){
            s.push(this.chartColors.blue);
            continue;
          }
          if(x <= 50){
            s.push(this.chartColors.green);
            continue;
          }
          if(x > 50){
            s.push(this.chartColors.orange);
            continue;
          }
        }
        this.yearLabels = r;
        this.barchartData = [{data : l, label : 'runs per match', backgroundColor : s}];

        let lb = [];
        let rb : any[] = [];
        let sb = [];
        this.conceted_runs_graph = answer['conceded_graph'];
        this.wickets_graph = answer['wickets_graph'];

        for(var i=0;i < this.conceted_runs_graph.length; i++){
          lb.push(Number(this.conceted_runs_graph[i]['runs_conceded']));
          if(i == 0 || this.conceted_runs_graph[i]['season_year'] != this.conceted_runs_graph[i-1]['season_year']){
            let num = new Number(this.conceted_runs_graph[i]['season_year']);
            rb.push(num.toString());

          }
          else{
            rb.push('');
          }

        }

        for(var i=0;i<this.wickets_graph.length; i++){
          sb.push(Number(this.wickets_graph[i]['numwkts']));
          
        }
        this.bowlingYearLabels = rb;
        this.bowling_data = [{data : lb, label : 'conceted_runs'}];
        console.log("ye toh hogya");
        console.log(this.bowlingYearLabels);
        console.log(lb);

      }
    })
  }

}
