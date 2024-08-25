import { Component } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {

  items = [
    { id: '1', name: 'Naruto', total: 100, read: 4 },
    { id: '2', name: 'DBZ', total: 999, read: 40 }
  ]

}
