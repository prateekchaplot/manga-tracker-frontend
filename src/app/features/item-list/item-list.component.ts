import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {

  constructor(titleService: Title) {
    titleService.setTitle('List');
  }

}
