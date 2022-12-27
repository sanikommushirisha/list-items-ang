import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DisplayItems } from '../types/DisplayItem';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  public get(term: string): Observable<DisplayItems> {
    return this.http.get<DisplayItems>(
      `https://raw.githubusercontent.com/BuyProperly/interview/main/photos/${term}.json`
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Write internal error handling logic here
    console.log(error);
    return throwError(() => new Error('Unable to fetch data. Try again'));
  }
}
