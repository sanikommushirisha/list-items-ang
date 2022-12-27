import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {
  ListItems,
  ListItem,
  ListItemResponse,
  ListItemsResponse,
} from '../types/ListItem';
import { map } from 'rxjs/operators';

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
        )
      );
  }

  private handleError(error: HttpErrorResponse) {
    // Write internal error handling logic here
    console.log(error);
    return throwError(() => new Error('Unable to fetch data. Try again'));
  }
}
