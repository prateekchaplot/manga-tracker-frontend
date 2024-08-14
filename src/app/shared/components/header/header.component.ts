import { Component } from '@angular/core';
import { CONSTANTS } from '@models/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu = false;
  showProfile = false;
  brandName = CONSTANTS.BRAND_NAME;
}
