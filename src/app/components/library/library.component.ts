import { Component, OnInit } from '@angular/core';
import { KEYS } from 'src/app/models/keys';
import { MangaItem } from 'src/app/models/manga-item';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent implements OnInit {
  items: MangaItem[] = [];

  showAddItemSidebar = false;
  itemName = '';
  itemUrl = '';

  constructor(private cacheService: CacheService) {}

  ngOnInit(): void {
    let items = this.cacheService.read(KEYS.ITEMS) ?? '';
    if (items !== '') this.items = JSON.parse(items);
    // console.log('items:', this.items);
  }

  onAddItem() {
    // Add item
    this.items.push({
      id: (this.items.length + 1).toString(),
      name: this.itemName,
      url: this.itemUrl,
      read: 0,
    });

    this.cacheService.upsert(KEYS.ITEMS, JSON.stringify(this.items));

    // Reset inputs
    this.itemName = this.itemUrl = '';
    this.showAddItemSidebar = false;
  }
}
