import { Component, OnInit } from '@angular/core';
import { CricketService } from '../../cricket.service';
import { ActivatedRoute } from '@angular/router';
import { Chart, ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color, ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-venuedetail',
  templateUrl: './venuedetail.component.html',
  styleUrls: ['./venuedetail.component.scss']
})
export class VenuedetailComponent implements OnInit {

  public pieChartLabels : Label[] = ['Team batting 1st won','Team batting 2nd won','Draw'];
  public pieChartType : ChartType = 'pie';
  public pieChartData : ChartDataSets[] = [];
  public yearLabels : Label[] = [];
  public lineChartType : ChartType = 'line';
  public averageRuns : ChartDataSets[] = [];

  venue_id = 0;
  venue_name = '';
  city = '';
  country = '';
  capacity = 0;
  total_matches = 0;
  highest_total = 0;
  lowest_total = 0;
  highest_chase = 0;
  team_bat_first = 0;
  team_bat_second = 0;
  tmp = [];

  constructor(public route : ActivatedRoute, public cricserv : CricketService) { }

  ngOnInit(): void {
    this.venue_id = Number(this.route.snapshot.paramMap.get('venue_id'));
    console.log(this.venue_id);
    this.cricserv.fetch_venue(this.venue_id).subscribe({
      next : answer => {
        console.log(answer);
        this.venue_name = answer['details'][0]['venue_name'];
        this.city = answer['details'][0]['city_name'];
        this.country = answer['details'][0]['country_name'];
        this.capacity = Number(answer['details'][0]['capacity']);
        this.total_matches = Number(answer['matches'][0]['count']);
        this.highest_total = Number(answer['minmax'][0]['max']);
        this.lowest_total = Number(answer['minmax'][0]['min']);
        this.highest_chase = Number(answer['highest_chase'][0]['max']);
        this.team_bat_first = Number(answer['first_bat'][0]['count']);
        this.team_bat_second = Number(answer['first_bowl'][0]['count']);
        this.pieChartData = [
          {
            data : [this.team_bat_first,this.team_bat_second,0],
            label : 'Outcome of matches held here'
          }
        ];
        let aveg = [];

        this.tmp = answer['average_score'];
        for(var i = 0; i < this.tmp.length; i++){
          aveg.push(Number(this.tmp[i]['avg']));
          this.yearLabels.push(this.tmp[i]['season_year']);
        }
        this.averageRuns = [{
          data : aveg,
          label : 'average_runs',
          type : 'line',
          lineTension : 0,
        }];

      }
    })
    


  }

}
