import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MangaItem } from '@models/manga-item';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/core/services/data.service';
import { MangaItemService } from 'src/app/core/services/manga-item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  nameLimit = 10;
  showItembar = false;

  items: MangaItem[] = [];

  addManga = {
    dialog: false,
    urlToAdd: '',
    errorMsg: ''
  }

  itemOptions: ButtonModel[] = [
    {
      code: '',
      name: 'Open page',
      severity: 'primary',
      onClick: this.onOpenPage.bind(this)
    },
    {
      code: '',
      name: 'Mark as read',
      severity: 'help',
      onClick: this.onMarkAsRead.bind(this)
    },
    {
      code: '',
      name: 'Read till chapter',
      severity: 'secondary',
      onClick: this.onReadTill.bind(this)
    },
    {
      code: '',
      name: 'Remove from list',
      severity: 'danger',
      onClick: this.onRemoveItem.bind(this)
    }
  ]

  buttons: ButtonModel[] = [
    {
      code: 'add-manga',
      name: 'Add manga',
      severity: 'primary',
      onClick: this.onAddManga.bind(this),
      icon: 'pi pi-plus'
    },
    {
      code: '',
      name: 'View complete list',
      severity: 'secondary',
      onClick: this.onViewList.bind(this),
      icon: 'pi pi-eye'
    },
    {
      code: '',
      name: 'Refresh',
      severity: 'success',
      onClick: this.onManualRefresh.bind(this),
      icon: 'pi pi-sync'
    }
  ]

  constructor(titleService: Title, private router: Router, private mangaItemService: MangaItemService, private messageService: MessageService, private dataService: DataService) {
    titleService.setTitle('Dashboard');
    this.updateItems();
  }

  onAddManga() {
    this.addManga.dialog = true;
  }

  onViewList() {
    console.log('View complete list');
    this.router.navigateByUrl('/list');
  }

  onManualRefresh() {
    console.log('Manual refresh');
  }

  onOpenPage() {
    console.log('Open page');
  }

  onMarkAsRead() {
    console.log('Mark as read');
  }

  onReadTill() {
    console.log('Read till');
  }

  onRemoveItem() {
    console.log('Remove from list');
  }

  onAddMangaSubmit() {
    const urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9#]+\/?)*$/;
    let isValid = this.addManga.urlToAdd !== '' && urlPattern.test(this.addManga.urlToAdd);
    if (!isValid) {
      this.addManga.errorMsg = 'Invalid url';
      return;
    }

    this.mangaItemService.addMangaUrl(this.addManga.urlToAdd).subscribe(response => {
      if (response) {
        this.addManga.dialog = false;
        
        this.dataService.upsertItems([response]);
        this.updateItems();
        
        this.messageService.clear();
        this.messageService.add({
          key: 'success',
          severity: 'success',
          summary: 'Success',
          detail: 'Url added successfully'
        });
      } else {
        this.messageService.clear();
        this.messageService.add({
          key: 'failure',
          severity: 'error',
          summary: 'Try again',
          detail: 'Unable to add url'
        });
      }
    });
  }

  resetAddManga() {
    this.addManga.errorMsg = '';
    this.addManga.urlToAdd = '';
  }

  updateItems() {
    this.items = this.dataService.items.filter(i => i.total > i.read);
  }
}

interface ButtonModel {
  code: string,
  name: string,
  severity: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "help" | "contrast" | null | undefined,
  onClick: () => void,
  icon?: string
}