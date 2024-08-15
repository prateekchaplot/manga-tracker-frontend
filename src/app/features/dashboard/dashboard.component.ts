import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  nameLimit = 10;
  showItembar = false;

  items = [
    {
      name: 'Naruto',
      lastRead: 10,
      availableTill: 15
    },
    {
      name: 'One Piece',
      lastRead: 9,
      availableTill: 900
    },
    {
      name: 'Dragon Ball Z',
      lastRead: 9,
      availableTill: 900
    }
  ]

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
      onClick: this.onAddManga.bind(this)
    },
    {
      code: '',
      name: 'View complete list',
      severity: 'secondary',
      onClick: this.onViewList.bind(this)
    },
    {
      code: '',
      name: 'Manual refresh',
      severity: 'success',
      onClick: this.onManualRefresh.bind(this)
    }
  ]

  constructor(titleService: Title, private router: Router) {
    titleService.setTitle('Dashboard');
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

    console.log('Add manga submit:', this.addManga.urlToAdd);
    this.addManga.dialog = false;
  }

  resetAddManga() {
    this.addManga.errorMsg = '';
    this.addManga.urlToAdd = '';
  }
}

interface ButtonModel {
  code: string,
  name: string,
  severity: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "help" | "contrast" | null | undefined,
  onClick: () => void
}