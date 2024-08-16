import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Ga4Service {
  
  private readonly GA_MEASUREMENT_ID = 'G-SR06F0LGJW';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

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
