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

  buttons: ButtonModel[] = [
    {
      name: 'Add manga',
      severity: 'success'
    },
    {
      name: 'View complete list',
      severity: 'primary'
    },
    {
      name: 'Manual refresh',
      severity: 'help'
    }
  ]
}

interface ButtonModel {
  name: string,
  severity: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "help" | "contrast" | null | undefined
}