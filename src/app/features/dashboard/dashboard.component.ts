import { Component } from '@angular/core';

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

  itemOptions: ButtonModel[] = [
    {
      name: 'Open page',
      severity: 'primary'
    },
    {
      name: 'Mark as read',
      severity: 'help'
    },
    {
      name: 'Read till chapter',
      severity: 'secondary'
    },
    {
      name: 'Remove from list',
      severity: 'danger'
    }
  ]

  buttons: ButtonModel[] = [
    {
      name: 'Add manga',
      severity: 'primary'
    },
    {
      name: 'View complete list',
      severity: 'secondary'
    },
    {
      name: 'Manual refresh',
      severity: 'success'
    }
  ]
}

interface ButtonModel {
  name: string,
  severity: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "help" | "contrast" | null | undefined
}