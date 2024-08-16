import { Injectable } from '@angular/core';
import { MangaItem } from '@models/manga-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _items: MangaItem[] = [];
  
  public get items(): MangaItem[] {
    return this._items;
  }

  upsertItems(newItems: MangaItem[]): void {
    const itemMap = new Map<string, MangaItem>(this._items.map(item => [item.id, item]));
    newItems.forEach(item => itemMap.set(item.id, item));
    this._items = [...itemMap.values()];
    console.log(this._items);
  }

}
