import { Component } from '@angular/core';
import { CONSTANTS } from '@models/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  brandName = CONSTANTS.BRAND_NAME;
}
