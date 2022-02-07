import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json"}), 
};



@Injectable({
  providedIn: 'root'
})
export class CricketService {

  constructor(private httpClient : HttpClient, private router: Router) { }
  fetch_matches(skipp:number, limitt:number) : Observable<any> {
    const httpOptions = {};
    return this.httpClient.get(`http://localhost:3000/matches/?skip=${skipp}&limit=${limitt}`);
  }

  fetch_match(id:number) : Observable<any>{
    return this.httpClient.get(`http://localhost:3000/matches/${id}`);
  }
  fetch_summary(id:number) : Observable<any> {
    return this.httpClient.get(`http://localhost:3000/matches/${id}/summary`);

  }
  fetch_players(skipp:number, limitt:number) : Observable<any> {
    return this.httpClient.get(`http://localhost:3000/players/?skip=${skipp}&limit=${limitt}`);
  }
  fetch_player(id:number) : Observable<any> {
    return this.httpClient.get(`http://localhost:3000/players/${id}`);
  }

  fetch_venues(skipp:number, limitt:number) : Observable<any> {
    return this.httpClient.get(`http://localhost:3000/venues/?skip=${skipp}&limit=${limitt}`);
  }

  fetch_venue(id:number) : Observable<any> {
    return this.httpClient.get(`http://localhost:3000/venues/${id}`);
  }

  fetch_pointstable(season_year : number) : Observable<any> {
    return this.httpClient.get(`http://localhost:3000/pointstable/${season_year}`);
  }
  
}
