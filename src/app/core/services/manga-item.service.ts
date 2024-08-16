import { Injectable } from '@angular/core';
import { MangaItem } from '@models/manga-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaItemService {

  constructor() { }

  addMangaUrl(url: string): Observable<MangaItem> {
    let result: MangaItem = {
      id: '3',
      name: 'New',
      url: url,
      read: 0,
      total: 10
    };

    return of(result);
  }

  fetchItems(): Observable<MangaItem[]> {
    let result: MangaItem[] = [
      { id: '1', name: 'Naruto', url: 'http://www.naruto.com', read: 100, total: 100 },
      { id: '2', name: 'One Piece', url: 'http://www.onepiece.com', read: 500, total: 500 }
    ];

    return of(result);
  }

}
