import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getData(typeOfInfo: string): Observable<any> {
    return this.http.get(`assets/fixtures/${typeOfInfo}.json`).pipe(
      map(response => response),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
