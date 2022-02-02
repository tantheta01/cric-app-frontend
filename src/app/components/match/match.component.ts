import { Component, OnInit } from '@angular/core';
import { CricketService } from '../../cricket.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

	public matches_displayed = [];
	public skip = 0;
	public limit = 10;
	matches = [];
	// pageEvent : PageEvent = new PageEvent();
	pageSizeOptions: number[] = [5, 10, 12, 15];
	pageIndex: number = 1;
	pageSize: number = 10;
	length: number = 1;

	
	// pagination

	
	constructor(public cricserv : CricketService) {
		console.log("haaye");
		
	}

	ngOnInit(): void {
		this.pageIndex = 1;
		this.pageSize = 10;
		this.length=100;
		this.cricserv.fetch_matches((this.pageIndex-1)*this.pageSize, this.pageIndex*this.pageSize).subscribe({
			next : answer => {
				this.matches = answer["rows"];
				console.log("hey");
				console.log(this.matches);
			}
		});

		

	}
	handlePageEvent(pe : PageEvent){
		this.cricserv.fetch_matches((pe.pageIndex-1)*pe.pageSize, pe.pageIndex*pe.pageSize).subscribe({
			next : answer => {
				this.matches = answer["rows"];
				console.log("hey");
				console.log(this.matches);
			}
		});

	}

}
