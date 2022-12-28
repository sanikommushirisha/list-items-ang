import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {
  ListItems,
  ListItem,
  ListItemResponse,
  ListItemsResponse,
} from '../types/ListItem';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  public get(term: string): Observable<ListItems> {
    return this.http
      .get<ListItemsResponse>(
        `https://raw.githubusercontent.com/BuyProperly/interview/main/photos/${term}.json`
      )
      .pipe(
        map(items =>
          items.map((item: ListItemResponse): ListItem => {
            return {
              id: item.Id,
              title: item.Title,
              detail: `Family : ${item.Family}`,
              extraDetail:
                term === 'animals'
                  ? `CollectiveNoun: ${item.CollectiveNoun}`
                  : `Genus: ${item.Genus}`,
              description: item.Description,
              imageUrl: item.ImageURLs.FullSize,
              thumbNailUrl: item.ImageURLs.Thumb,
            };
          })
        ),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    // Write internal error handling logic here -> Sending it to error monitoring or reporting software
    console.log(error);
    const message = 'Unable to fetch data. Try again';
    return throwError(() => new Error(message));
  }
}
