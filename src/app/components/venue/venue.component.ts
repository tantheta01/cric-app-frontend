import { Component, OnInit } from '@angular/core';
import { CricketService } from '../../cricket.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';



@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {

  // public matches_displayed = [];
	// public skip = 0;
	// public limit = 10;
	venues = [];
	// pageEvent : PageEvent = new PageEvent();
	pageSizeOptions: number[] = [5, 10, 12, 15];
	pageIndex: number = 1;
	pageSize: number = 10;
	length: number = 1;
  constructor(public cricserv : CricketService) { 

  }

  ngOnInit(): void {
    this.pageIndex = 0;
    this.pageSize = 10;
    this.length = 100;
    this.cricserv.fetch_venues(this.pageIndex*this.pageSize, (this.pageIndex+1)*this.pageSize).subscribe({
      next : answer => {
        this.venues = answer["rows"];
        console.log("done bois");
      }
    });
  }

  handleEvent(pe : PageEvent) {
    this.cricserv.fetch_venues(this.pageIndex*this.pageSize, (this.pageIndex+1) * this.pageSize).subscribe({
      next : answer =>{
        this.venues = answer["rows"];
      }
    })
  }

}