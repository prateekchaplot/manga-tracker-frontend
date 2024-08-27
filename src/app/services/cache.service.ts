import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private appKey = 'MT_';

  upsert(key: string, value: string) {
    localStorage.setItem(this.appKey + key, value);
  }

  delete(key: string) {
    localStorage.removeItem(this.appKey + key);
  }

  read(key: string) {
    return localStorage.getItem(this.appKey + key);
  }

}
