import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ComponentsModule } from './components/components.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  private readonly GA_MEASUREMENT_ID = 'G-SR06F0LGJW';
  title = 'Manga Tracker';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  initializeGoogleAnalytics() {
    if (!isPlatformBrowser(this.platformId)) return;

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      (window as any)['dataLayer'] = (window as any)['dataLayer'] || [];
      function gtag(...args: any[]) {
        (window as any)['dataLayer'].push(arguments);
      }
      gtag('js', new Date());
      gtag('config', this.GA_MEASUREMENT_ID);
    };
  }
}
