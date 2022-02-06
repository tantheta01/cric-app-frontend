import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toptoolbar',
  templateUrl: './toptoolbar.component.html',
  styleUrls: ['./toptoolbar.component.scss']
})
export class ToptoolbarComponent implements OnInit {

  constructor(public route : RouterModule) { }

  ngOnInit(): void {
  }

}
