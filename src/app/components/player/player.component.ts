import { Component, OnInit } from '@angular/core';
import { CricketService } from '../../cricket.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  // public matches_displayed = [];
	// public skip = 0;
	// public limit = 10;
	players = [];
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
    this.cricserv.fetch_players(this.pageIndex*this.pageSize, (this.pageIndex+1)*this.pageSize).subscribe({
      next : answer => {
        this.players = answer["rows"];
        console.log("done bois");
      }
    });
  }

  handleEvent(pe : PageEvent) {
    this.pageIndex = pe.pageIndex;
    this.pageSize = pe.pageSize
    this.cricserv.fetch_players(pe.pageIndex*pe.pageSize, (pe.pageIndex+1) * pe.pageSize).subscribe({
      next : answer =>{
        this.players = answer["rows"];
      }
    })
  }

}
