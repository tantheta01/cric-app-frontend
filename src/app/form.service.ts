import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { venue } from './venue';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}
  private formUrl = 'https://localhost:4200/venues/add'; // URL to web api
  private serverUrl = 'https://localhost:3000/addvenue/';

  getValue(): any {
    return this.http.get<venue>(this.formUrl).pipe(
      tap((_) => console.log('Retrieved')),
      catchError(this.handleError<venue>('Retrieval'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  submit(Form: venue): any {
    return this.http.post<venue>(this.serverUrl, Form, this.httpOptions).pipe(
      tap((_) => console.log('submitted',Form)),
      catchError(this.handleError<venue>('submit'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return throwError(error.message);
    };
  }
}
