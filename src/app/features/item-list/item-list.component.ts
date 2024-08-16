import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MangaItem } from '@models/manga-item';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {

  items: MangaItem[] = [];

  buttons: ButtonModel[] = [
    // {
    //   label: 'Back to Dashboard',
    //   icon: 'pi pi-arrow-left',
    //   outlined: true,
    //   severity: 'primary',
    //   onClick: this.onBackToDashboard.bind(this)
    // },
    {
      label: 'Add manga',
      icon: 'pi pi-plus',
      outlined: false,
      severity: 'primary',
      onClick: this.onAddManga.bind(this)
    },
    {
      label: 'Refresh',
      icon: 'pi pi-sync',
      outlined: false,
      severity: 'success',
      onClick: this.onRefresh.bind(this)
    }
  ]

  constructor(titleService: Title, private router: Router, private dataService: DataService) {
    titleService.setTitle('List');
    this.updateItems();
  }

  updateItems() {
    this.items = this.dataService.items;
  }

  onBackToDashboard() {
    this.router.navigateByUrl('/');
  }

  onAddManga() { console.log('Add manga') }

  onRefresh() { console.log('Refresh') }

}

interface ButtonModel {
  label: string,
  icon: string,
  outlined: boolean,
  severity: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "help" | "contrast" | null | undefined,
  onClick: () => void
}