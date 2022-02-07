import { Component, OnInit } from '@angular/core';
import { CricketService } from '../../cricket.service';


@Component({
  selector: 'app-pointslanding',
  templateUrl: './pointslanding.component.html',
  styleUrls: ['./pointslanding.component.scss']
})
export class PointslandingComponent implements OnInit {
  
  all_years : string[] = [];
  columns_display = ['season_year'];
  constructor(public cricserv : CricketService) { }

  ngOnInit(): void {
    this.cricserv.fetch_years().subscribe ({
      next : answer => {
        this.all_years = answer['years'];
      }
    })
  }

}
