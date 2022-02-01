import { Component, OnInit } from '@angular/core';
// import { CricketService } from '../../cricket.service';
import { MATCHES } from '../../matches';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

	public matches_displayed = [];
	public skip = 0;
	public limit = 10;
	public should_show = false;
	matches = MATCHES;
	
	// public cricserv : CricketService
	constructor() {
		console.log("haaye");
		// console.log
		// this.skip = 0;
		// this.limit = 10;
		// this.matches_displayed = [];
		// this.should_show = false;
		// this.cricserv.fetch_matches(this.skip, this.limit).subscribe({
		// 	next : answer => {
		// 		console.log("Lmaooo")
		// 		console.log(answer);
		// 		this.matches_displayed = answer.rows;
		// 		console.log("Something fishy is happening haan chituya");
		// 	},
		// 	error : error => {
		// 		console.log("Error aa gya hai lodu");
		// 	}
		// });
		// this.should_show = true;
	}

	ngOnInit(): void {
		// this.cricserv.fetch_matches(this.skip, this.limit).subscribe({
		// 	next : answer => {
		// 		this.matches_displayed = answer.rows;;
		// 	}
		// });
		// this.should_show = true;
	}

}
